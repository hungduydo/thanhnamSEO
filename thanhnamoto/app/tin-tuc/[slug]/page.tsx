import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ScrollReveal } from "@/app/components/ScrollReveal"
import { getArticle, getArticleSlugs, type ArticleSection } from "../_data/articles"
import { BASE_URL as SITE_URL } from "@/app/lib/constants"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  const url = `${SITE_URL}/tin-tuc/${slug}`
  return {
    title: `${article.title} | Thành Nam Oto`,
    description: article.description,
    alternates: { canonical: `${SITE_URL}/tin-tuc/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      siteName: "Thành Nam Oto",
      locale: "vi_VN",
      publishedTime: article.date,
      authors: ["Thành Nam Oto"],
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/og-default.jpg"],
    },
  }
}

const CATEGORY_STYLES: Record<string, { badge: string; dot: string; accent: string; noteBorder: string; noteBg: string }> = {
  sky: {
    badge: "border-sky-400/30 text-sky-400 bg-sky-400/[0.08]",
    dot: "bg-sky-400",
    accent: "text-sky-400",
    noteBorder: "border-sky-400/40",
    noteBg: "bg-sky-400/[0.06]",
  },
  amber: {
    badge: "border-amber-400/30 text-amber-400 bg-amber-400/[0.08]",
    dot: "bg-amber-400",
    accent: "text-amber-400",
    noteBorder: "border-amber-400/40",
    noteBg: "bg-amber-400/[0.06]",
  },
  emerald: {
    badge: "border-emerald-400/30 text-emerald-400 bg-emerald-400/[0.08]",
    dot: "bg-emerald-400",
    accent: "text-emerald-400",
    noteBorder: "border-emerald-400/40",
    noteBg: "bg-emerald-400/[0.06]",
  },
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })
}

function parseTextWithLinks(text: string) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g)
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/)
    if (match) {
      return (
        <Link key={i} href={match[2]} className="text-amber-400 underline decoration-amber-400/30 underline-offset-4 transition-colors hover:text-amber-300">
          {match[1]}
        </Link>
      )
    }
    return part
  })
}

function RenderSection({ section, catColor }: { section: ArticleSection; catColor: string }) {
  const cat = CATEGORY_STYLES[catColor]
  switch (section.type) {
    case "h2":
      return (
        <h2 className="mb-3 mt-10 font-[family-name:var(--font-display)] text-2xl font-black leading-tight tracking-tight text-slate-100 first:mt-0">
          {section.text}
        </h2>
      )
    case "p":
      return <p className="mb-4 text-[15px] leading-relaxed text-slate-300">{parseTextWithLinks(section.text)}</p>
    case "ul":
      return (
        <ul className="mb-4 space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${cat.dot}`} />
              {parseTextWithLinks(item)}
            </li>
          ))}
        </ul>
      )
    case "note":
      return (
        <div className={`my-8 rounded-xl border-l-4 ${cat.noteBorder} ${cat.noteBg} p-5`}>
          <p className="text-sm leading-relaxed text-slate-200">{parseTextWithLinks(section.text)}</p>
        </div>
      )
    case "image":
      return (
        <div className="my-8">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            <img
              src={section.src}
              alt={section.alt}
              className="h-full w-full object-cover"
            />
          </div>
          {section.caption && (
            <p className="mt-3 text-center text-xs italic text-slate-500">
              {section.caption}
            </p>
          )}
        </div>
      )
    default:
      return null
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const cat = CATEGORY_STYLES[article.categoryColor]

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "vi",
    url: `${SITE_URL}/tin-tuc/${article.slug}`,
    image: `${SITE_URL}/logo.png`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/tin-tuc/${article.slug}` },
    author: { "@type": "Organization", name: "Thành Nam Oto", url: SITE_URL, logo: `${SITE_URL}/logo.png` },
    publisher: {
      "@type": "Organization",
      name: "Thành Nam Oto",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  }

  const faqJsonLd = article.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <style>{`
        @keyframes ar-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ar-k0 { animation: ar-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .ar-k1 { animation: ar-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s  both; }
        .ar-k2 { animation: ar-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.38s both; }
        .ar-grid-bg {
          background-image:
            linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px);
          background-size: 72px 72px;
        }
      `}</style>

      <div className="overflow-x-hidden">

        {/* ══════════════════════════════════════════════
            ARTICLE HEADER
        ══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden px-4 pb-12 pt-8 md:px-12 lg:px-20">

          {/* Grid texture */}
          <div className="ar-grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav className="ar-k0 mb-6 flex items-center gap-2 text-xs text-slate-500" aria-label="breadcrumb">
              <Link href="/" className="transition-colors hover:text-slate-300">Trang chủ</Link>
              <span>/</span>
              <Link href="/tin-tuc" className="transition-colors hover:text-slate-300">Tin tức</Link>
              <span>/</span>
              <span className="text-slate-400 line-clamp-1">{article.category}</span>
            </nav>

            {/* Category badge */}
            <div className="ar-k0 mb-4">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${cat.badge}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${cat.dot}`} />
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="ar-k1 font-[family-name:var(--font-display)] leading-[0.95] tracking-tight text-slate-50"
              style={{ fontSize: "clamp(32px,5.5vw,62px)", fontWeight: 900 }}
            >
              {article.title}
            </h1>

            {/* Meta */}
            <div className="ar-k2 mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span>{formatDate(article.date)}</span>
              <span className="h-px w-4 bg-slate-700" />
              <span>{article.readTime} đọc</span>
              <span className="h-px w-4 bg-slate-700" />
              <span>Thành Nam Oto · Xuân Lộc, Đồng Nai</span>
            </div>
          </div>
        </section>

        {/* Section separator */}
        <div className="pointer-events-none h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.3) 50%, transparent)" }} aria-hidden />

        {/* ══════════════════════════════════════════════
            ARTICLE CONTENT
        ══════════════════════════════════════════════ */}
        <section className="px-4 py-12 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div>
                {article.content.map((section, i) => (
                  <RenderSection key={i} section={section} catColor={article.categoryColor} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section separator */}
        <div className="pointer-events-none h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.3) 50%, transparent)" }} aria-hidden />

        {/* ══════════════════════════════════════════════
            BOTTOM NAV
        ══════════════════════════════════════════════ */}
        <section className="px-4 py-12 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/tin-tuc"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-200"
                >
                  ← Tất cả bài viết
                </Link>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:0388476247"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_12px_32px_rgba(245,158,11,0.25)] transition-all hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    📞 Gọi ngay: 0388 476 247
                  </a>
                  <Link
                    href="/dich-vu"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-amber-400/50"
                  >
                    Xem dịch vụ →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  )
}
