import { put, list } from "@vercel/blob"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"
import type { Article } from "@/app/tin-tuc/_data/articles"
import { BLOB_PREFIX } from "@/app/tin-tuc/_data/articles"

function authorize(req: NextRequest): boolean {
  const token =
    req.headers.get("authorization")?.replace("Bearer ", "") ??
    req.nextUrl.searchParams.get("token") ??
    ""
  return !!process.env.REVALIDATE_SECRET && token === process.env.REVALIDATE_SECRET
}

function validateArticle(body: unknown): { valid: true; article: Article } | { valid: false; errors: string[] } {
  const errors: string[] = []
  if (!body || typeof body !== "object") return { valid: false, errors: ["Body must be a JSON object"] }

  const a = body as Record<string, unknown>
  if (!a.slug || typeof a.slug !== "string") errors.push("slug: required string")
  if (!a.title || typeof a.title !== "string") errors.push("title: required string")
  if (!a.description || typeof a.description !== "string") errors.push("description: required string")
  if (!a.category || typeof a.category !== "string") errors.push("category: required string")
  if (!["sky", "amber", "emerald"].includes(a.categoryColor as string))
    errors.push("categoryColor: must be 'sky', 'amber', or 'emerald'")
  if (!a.readTime || typeof a.readTime !== "string") errors.push("readTime: required string (e.g. '5 phút')")
  if (!a.date || typeof a.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(a.date as string))
    errors.push("date: required string in YYYY-MM-DD format")
  if (!a.excerpt || typeof a.excerpt !== "string") errors.push("excerpt: required string")
  if (!Array.isArray(a.content) || a.content.length === 0) errors.push("content: required non-empty array")

  if (errors.length > 0) return { valid: false, errors }
  return { valid: true, article: a as unknown as Article }
}

// GET /api/articles — list all articles (summary only)
export async function GET(req: NextRequest) {
  if (!authorize(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { blobs } = await list({ prefix: BLOB_PREFIX })
  const articles = blobs.map((b) => ({
    slug: b.pathname.replace(BLOB_PREFIX, "").replace(".json", ""),
    url: b.url,
    uploadedAt: b.uploadedAt,
  }))

  return NextResponse.json({ articles, total: articles.length })
}

// POST /api/articles — create a new article (stored in Vercel Blob)
export async function POST(req: NextRequest) {
  if (!authorize(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "BLOB_READ_WRITE_TOKEN is not configured. See setup instructions." },
      { status: 503 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const result = validateArticle(body)
  if (!result.valid) {
    return NextResponse.json({ error: "Validation failed", errors: result.errors }, { status: 422 })
  }

  const { article } = result
  const slug = article.slug.trim().toLowerCase().replace(/\s+/g, "-")
  const pathname = `${BLOB_PREFIX}${slug}.json`

  // Check if slug already exists in Blob
  const { blobs: existing } = await list({ prefix: pathname })
  if (existing.length > 0) {
    return NextResponse.json(
      { error: `Article "${slug}" already exists. Use PUT /api/articles/${slug} to update.` },
      { status: 409 }
    )
  }

  // Upload article JSON to Vercel Blob
  const blob = await put(pathname, JSON.stringify({ ...article, slug }, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  })

  // Revalidate cache so new article appears immediately
  revalidatePath("/tin-tuc", "page")
  revalidatePath("/tin-tuc/[slug]", "page")

  return NextResponse.json(
    {
      success: true,
      slug,
      url: `/tin-tuc/${slug}`,
      blobUrl: blob.url,
      message: `Article "${article.title}" created successfully`,
    },
    { status: 201 }
  )
}
