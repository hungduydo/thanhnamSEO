import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/app/components/ScrollReveal"
import { ARTICLES } from "./_data/articles"
import { BASE_URL } from "@/app/lib/constants"
import { CONTACT } from "@/app/lib/contact"

export const metadata: Metadata = {
  title: "Tin tức & Kinh nghiệm chăm sóc xe | Thành Nam Auto Xuân Lộc",
  description:
    "Chia sẻ kiến thức, mẹo vặt về bảo dưỡng, sửa chữa và chăm sóc xe ô tô từ thợ có kinh nghiệm tại Xuân Lộc, Đồng Nai.",
  alternates: { canonical: `${BASE_URL}/tin-tuc` },
}

const CATEGORY_STYLES: Record<string, { badge: string; dot: string; line: string }> = {
  sky: {
    badge: "border-sky-400/30 text-sky-400 bg-sky-400/[0.08]",
    dot: "bg-sky-400",
    line: "from-sky-400/60 via-sky-400 to-sky-400/60",
  },
  amber: {
    badge: "border-amber-400/30 text-amber-400 bg-amber-400/[0.08]",
    dot: "bg-amber-400",
    line: "from-amber-400/60 via-amber-400 to-amber-400/60",
  },
  emerald: {
    badge: "border-emerald-400/30 text-emerald-400 bg-emerald-400/[0.08]",
    dot: "bg-emerald-400",
    line: "from-emerald-400/60 via-emerald-400 to-emerald-400/60",
  },
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })
}

export default function TinTucPage() {
  return (
    <>
      <style>{`
        @keyframes tt-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tt-k0 { animation: tt-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .tt-k1 { animation: tt-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.20s both; }
        .tt-k2 { animation: tt-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.38s both; }
        .tt-k3 { animation: tt-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.55s both; }
        .tt-slash { animation: tt-rise 1.2s cubic-bezier(0.22,1,0.36,1) 0.08s both; }
        .tt-grid-bg {
          background-image:
            linear-gradient(rgba(245,158,11,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.035) 1px, transparent 1px);
          background-size: 72px 72px;
        }
      `}</style>

      <div className="overflow-x-hidden">

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section className="relative flex min-h-[56vh] flex-col justify-center overflow-hidden px-4 pb-16 pt-8 md:px-12 lg:px-20">

          {/* Grid texture */}
          <div className="tt-grid-bg pointer-events-none absolute inset-0" aria-hidden />

          {/* Diagonal amber slash */}
          <div className="tt-slash pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div style={{
              position: "absolute", width: "140%", height: "2px",
              top: "55%", left: "-20%", transform: "rotate(-9deg)",
              background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5) 30%, rgba(245,158,11,0.9) 50%, rgba(245,158,11,0.5) 70%, transparent)",
              boxShadow: "0 0 80px 30px rgba(245,158,11,0.07)",
            }} />
            <div style={{
              position: "absolute", width: "140%", height: "1px",
              top: "56.5%", left: "-20%", transform: "rotate(-9deg)",
              background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.18) 40%, rgba(245,158,11,0.35) 50%, rgba(245,158,11,0.18) 60%, transparent)",
            }} />
          </div>

          {/* Watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] leading-none text-white md:right-10 lg:right-16"
            style={{ fontSize: "clamp(120px,22vw,300px)", opacity: 0.022, letterSpacing: "-0.04em" }}
          >
            TT
          </div>

          <div className="relative z-10 max-w-2xl">
            <p className="tt-k0 mb-4 font-mono text-xs tracking-[0.22em] text-amber-400/80 uppercase">
              / Chia sẻ từ thợ lành nghề
            </p>
            <h1
              className="tt-k1 font-[family-name:var(--font-display)] leading-[0.92] tracking-tight text-slate-50"
              style={{ fontSize: "clamp(48px,8vw,96px)", fontWeight: 900 }}
            >
              Tin tức &amp;{" "}
              <span className="text-amber-400">Kinh nghiệm</span>
            </h1>
            <p className="tt-k2 mt-5 max-w-lg text-sm leading-relaxed text-slate-400">
              Kiến thức thực tế từ gara — giúp bạn hiểu xe, chăm sóc đúng cách,
              và tránh những chi phí không đáng có.
            </p>
            <div className="tt-k3 mt-6 flex items-center gap-3">
              <span className="text-xs text-slate-500">{ARTICLES.length} bài viết</span>
              <span className="h-px w-8 bg-slate-700" />
              <span className="text-xs text-slate-500">Bảo dưỡng · Sửa chữa · Sơn xe</span>
            </div>
          </div>
        </section>

        {/* Section separator */}
        <div className="pointer-events-none h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.35) 50%, transparent)" }} aria-hidden />

        {/* ══════════════════════════════════════════════
            ARTICLES GRID
        ══════════════════════════════════════════════ */}
        <section className="px-4 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article, i) => {
              const cat = CATEGORY_STYLES[article.categoryColor]
              return (
                <ScrollReveal key={article.slug} delay={i * 80}>
                  <Link
                    href={`/tin-tuc/${article.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]"
                  >
                    {/* Category + read time */}
                    <div className="mb-4 flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${cat.badge}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${cat.dot}`} />
                        {article.category}
                      </span>
                      <span className="text-[11px] text-slate-500">{article.readTime} đọc</span>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-base font-semibold leading-snug text-slate-100 transition-colors group-hover:text-amber-300">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="flex-1 text-sm leading-relaxed text-slate-400">
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <span className="text-[11px] text-slate-500">{formatDate(article.date)}</span>
                      <span className="text-xs font-medium text-amber-400 transition-transform group-hover:translate-x-1">
                        Đọc thêm →
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </section>

        {/* Section separator */}
        <div className="pointer-events-none h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.35) 50%, transparent)" }} aria-hidden />

        {/* ══════════════════════════════════════════════
            CTA STRIP
        ══════════════════════════════════════════════ */}
        <section className="px-4 py-16 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-amber-400/70 uppercase">
                  / Cần hỗ trợ kỹ thuật
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-100">
                  Đặt câu hỏi hoặc đặt lịch kiểm tra xe miễn phí
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  08:00–17:30 · Thứ 2 đến Chủ nhật · Xuân Lộc, Đồng Nai
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap justify-center gap-3 md:justify-end">
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_12px_32px_rgba(245,158,11,0.25)] transition-all hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  📞 0388 476 247
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
        </section>

      </div>
    </>
  )
}
