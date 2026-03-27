import fs from "fs"
import path from "path"
import { list } from "@vercel/blob"

export type ArticleSection =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }

export type Article = {
  slug: string
  title: string
  description: string
  category: string
  categoryColor: "sky" | "amber" | "emerald"
  readTime: string
  date: string
  excerpt: string
  content: ArticleSection[]
  faq?: { question: string; answer: string }[]
}

const ARTICLES_DIR = path.join(process.cwd(), "app/tin-tuc/_data/articles")
export const BLOB_PREFIX = "tin-tuc/"

// ─── File-system helpers (static articles deployed with the app) ─────────────

function readArticleFile(filePath: string): Article {
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as Article
}

function getStaticArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readArticleFile(path.join(ARTICLES_DIR, f)))
}

function getStaticSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""))
}

// ─── Blob helpers (API-created articles, persisted on Vercel Blob) ───────────

async function getBlobArticles(): Promise<Article[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return []
  try {
    const { blobs } = await list({ prefix: BLOB_PREFIX })
    const results = await Promise.all(
      blobs.map(async (blob) => {
        const res = await fetch(blob.url)
        if (!res.ok) return null
        return res.json() as Promise<Article>
      })
    )
    return results.filter(Boolean) as Article[]
  } catch {
    return []
  }
}

async function getBlobArticle(slug: string): Promise<Article | undefined> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return undefined
  try {
    const { blobs } = await list({ prefix: `${BLOB_PREFIX}${slug}.json` })
    if (!blobs.length) return undefined
    const res = await fetch(blobs[0].url)
    if (!res.ok) return undefined
    return res.json() as Promise<Article>
  } catch {
    return undefined
  }
}

// ─── Public API ──────────────────────────────────────────────────────────────

/** All articles merged from file system + Blob, sorted newest first */
export async function getArticles(): Promise<Article[]> {
  const [staticArticles, blobArticles] = await Promise.all([
    Promise.resolve(getStaticArticles()),
    getBlobArticles(),
  ])
  const staticSlugs = new Set(staticArticles.map((a) => a.slug))
  const merged = [...staticArticles, ...blobArticles.filter((a) => !staticSlugs.has(a.slug))]
  return merged.sort((a, b) => b.date.localeCompare(a.date))
}

/** Find one article — checks file system first, then Blob */
export async function getArticle(slug: string): Promise<Article | undefined> {
  const filePath = path.join(ARTICLES_DIR, `${slug}.json`)
  if (fs.existsSync(filePath)) return readArticleFile(filePath)
  return getBlobArticle(slug)
}

/** Slugs used for build-time pre-rendering (static articles only) */
export function getArticleSlugs(): string[] {
  return getStaticSlugs()
}

/** Synchronous export kept for any legacy usages */
export const ARTICLES: Article[] = getStaticArticles()
