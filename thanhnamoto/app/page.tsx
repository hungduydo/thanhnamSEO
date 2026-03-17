import type { Metadata } from "next"
import Image from "next/image"
import { ScrollReveal } from "./components/ScrollReveal"
import { LocalBusinessJsonLd } from "./components/LocalBusinessJsonLd"
import { BASE_URL } from "@/app/lib/constants"

export const metadata: Metadata = {
  title: "Gara Thành Nam Auto | Sửa chữa & Sơn xe uy tín Xuân Lộc",
  description:
    "Đặt lịch tư vấn miễn phí. Sửa chữa, sơn xe, bảo dưỡng định kỳ cho xe cá nhân tại Xuân Lộc, Đồng Nai. Báo giá rõ ràng, không phát sinh, bảo hành bằng văn bản.",
  alternates: { canonical: `${BASE_URL}/` },
}

/* ─── data ─────────────────────────────────────────────────── */

const PAIN_POINTS = [
  {
    num: "01",
    title: "Báo giá mập mờ, phát sinh thêm sau",
    desc: "Bạn đồng ý một mức giá, nhưng khi nhận xe lại bị tính thêm hàng triệu đồng \"phí phát sinh\" không được thông báo trước.",
    accent: "text-rose-400",
    glow: "rgba(244,63,94,0.06)",
  },
  {
    num: "02",
    title: "Giao xe trễ, không có thông báo",
    desc: "Hẹn thứ Ba, mãi đến thứ Sáu mới gọi lại — và xe vẫn chưa xong. Lịch công việc bị đảo lộn, mà không ai xin lỗi.",
    accent: "text-amber-400",
    glow: "rgba(245,158,11,0.06)",
  },
  {
    num: "03",
    title: "Không biết thợ có thực sự sửa không",
    desc: "Xe vào gara nhưng bạn không được cập nhật gì. Linh kiện thay thế có thật không? Thợ có tay nghề không?",
    accent: "text-sky-400",
    glow: "rgba(56,189,248,0.06)",
  },
]

const BENEFITS = [
  {
    symbol: "◎",
    title: "Báo giá minh bạch",
    desc: "Chi tiết từng hạng mục, ký xác nhận trước khi làm. Không một đồng phát sinh ngoài thỏa thuận ban đầu.",
    accent: "text-amber-400",
    border: "border-amber-400/20",
    bg: "hover:bg-amber-400/5",
  },
  {
    symbol: "◈",
    title: "Cập nhật liên tục",
    desc: "Thông báo tình trạng xe qua điện thoại/Zalo. Mỗi hạng mục phát sinh đều cần ý kiến của bạn trước khi thực hiện.",
    accent: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "hover:bg-emerald-400/5",
  },
  {
    symbol: "◉",
    title: "Đúng hẹn & có bảo hành",
    desc: "Cam kết thời gian hoàn thành. Bàn giao kèm phiếu bảo hành bằng văn bản cho từng hạng mục sửa chữa.",
    accent: "text-sky-400",
    border: "border-sky-400/20",
    bg: "hover:bg-sky-400/5",
  },
]

const STEPS = [
  {
    num: "1",
    title: "Đặt lịch & tư vấn",
    desc: "Liên hệ qua điện thoại hoặc Zalo. Mô tả tình trạng xe để chúng tôi tư vấn sơ bộ và xác nhận lịch hẹn phù hợp.",
  },
  {
    num: "2",
    title: "Nhận xe & kiểm tra",
    desc: "Kiểm tra tổng thể, ghi nhận tình trạng thực tế. Báo giá chi tiết ngay tại gara — bạn đồng ý mới bắt đầu.",
  },
  {
    num: "3",
    title: "Thi công & cập nhật",
    desc: "Thực hiện đúng quy trình kỹ thuật. Thông báo tiến độ và hỏi ý kiến bạn khi có hạng mục phát sinh thêm.",
  },
  {
    num: "4",
    title: "Bàn giao & bảo hành",
    desc: "Kiểm tra lần cuối cùng bạn. Bàn giao phiếu bảo hành và hướng dẫn chăm sóc sau sửa chữa.",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Lần đầu tôi gặp gara làm đúng như cam kết từ đầu. Báo giá bao nhiêu, trả bấy nhiêu. Không thêm một đồng.",
    name: "Anh Minh Tuấn",
    car: "Toyota Innova 2019",
  },
  {
    quote:
      "Xe bị trầy sâu bên hông, làm lại không thể nhận ra. Màu khớp hoàn toàn. Thợ tay nghề cao, thái độ chuyên nghiệp.",
    name: "Chị Lan Anh",
    car: "Honda CR-V 2021",
  },
  {
    quote:
      "Đặt lịch bảo dưỡng sáng sớm, chiều đã nhận xe. Thợ giải thích rõ từng hạng mục thay thế, không cảm giác bị 'luộc'.",
    name: "Anh Văn Đức",
    car: "Mazda CX-5 2020",
  },
]

const STATS = [
  { val: "10+", label: "Năm kinh nghiệm", accent: "text-amber-400", border: "border-amber-400/20" },
  { val: "500+", label: "Xe đã phục hồi", accent: "text-emerald-400", border: "border-emerald-400/20" },
  { val: "3", label: "Dịch vụ chuyên sâu", accent: "text-sky-400", border: "border-sky-400/20" },
  { val: "100%", label: "Báo giá trước khi làm", accent: "text-rose-400", border: "border-rose-400/20" },
]

/* ─── component ─────────────────────────────────────────────── */

export default function Home2Page() {
  return (
    <>
      <LocalBusinessJsonLd />
      {/* Scoped keyframe animations for the hero entrance */}
      <style>{`
        @keyframes h2-rise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .h2-k0 { animation: h2-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .h2-k1 { animation: h2-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s  both; }
        .h2-k2 { animation: h2-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s  both; }
        .h2-k3 { animation: h2-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s  both; }
        .h2-k4 { animation: h2-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.8s  both; }
        .h2-slash {
          animation: h2-rise 1.2s cubic-bezier(0.22,1,0.36,1) 0.1s both;
        }
        .h2-grid-bg {
          background-image:
            linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px);
          background-size: 72px 72px;
        }
      `}</style>

      <div className="overflow-x-hidden">

        {/* ══════════════════════════════════════════════
            § 1  HERO
        ══════════════════════════════════════════════ */}
        <section
          id="hero"
          className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-20 pt-8 md:px-12 lg:px-20"
        >
          {/* Subtle grid texture */}
          <div className="h2-grid-bg pointer-events-none absolute inset-0" aria-hidden />

          {/* Giant amber diagonal slash */}
          <div
            className="h2-slash pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <div
              style={{
                position: "absolute",
                width: "140%",
                height: "2px",
                top: "42%",
                left: "-20%",
                transform: "rotate(-9deg)",
                background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5) 30%, rgba(245,158,11,0.9) 50%, rgba(245,158,11,0.5) 70%, transparent)",
                boxShadow: "0 0 80px 30px rgba(245,158,11,0.07)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "140%",
                height: "1px",
                top: "43.5%",
                left: "-20%",
                transform: "rotate(-9deg)",
                background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.2) 40%, rgba(245,158,11,0.4) 50%, rgba(245,158,11,0.2) 60%, transparent)",
              }}
            />
          </div>

          {/* Watermark "TN" */}
          <span
            className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] font-black leading-none text-white/[0.025]"
            style={{ fontSize: "clamp(180px, 28vw, 380px)" }}
            aria-hidden
          >
            TN
          </span>

          {/* Radial amber glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(245,158,11,0.05) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-6xl">

            {/* Kicker */}
            <div className="h2-k0 flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-amber-400" />
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">
                Gara uy tín tại Xuân Lộc, Đồng Nai
              </span>
            </div>

            {/* Headline */}
            <h1
              className="h2-k1 font-[family-name:var(--font-display)] font-black uppercase leading-[0.86] text-slate-50"
              style={{ fontSize: "clamp(68px, 14vw, 168px)" }}
            >
              <span className="block">Thành</span>
              <span className="block text-amber-400">Nam</span>
              <span className="block">Oto</span>
            </h1>

            {/* Sub-headline */}
            <p className="h2-k2 mt-6 max-w-lg text-base leading-relaxed text-slate-300/80 md:text-lg">
              Sửa chữa — Sơn xe — Bảo dưỡng định kỳ cho xe cá nhân.{" "}
              <strong className="font-semibold text-slate-50">
                Báo giá rõ ràng. Đúng hẹn. Bảo hành bằng văn bản.
              </strong>
            </p>

            {/* CTAs */}
            <div className="h2-k3 mt-8 flex flex-wrap gap-3">
              <a
                href="#dat-lich"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(245,158,11,0.28)] transition-all hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_20px_50px_rgba(245,158,11,0.45)]"
              >
                Đặt lịch tư vấn miễn phí
              </a>
              <a
                href="tel:0388476247"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-amber-400/50 hover:bg-white/8"
              >
                📞 0388 476 247
              </a>
            </div>

            {/* Stats strip */}
            <div className="h2-k4 mt-12 flex flex-wrap gap-8 md:gap-14">
              {[
                { val: "10+", label: "Năm kinh nghiệm" },
                { val: "500+", label: "Xe đã phục hồi" },
                { val: "100%", label: "Báo giá trước khi làm" },
                { val: "3", label: "Dịch vụ chuyên sâu" },
              ].map((s) => (
                <div key={s.val} className="flex flex-col">
                  <span className="font-[family-name:var(--font-display)] font-black text-3xl leading-none text-amber-400 md:text-4xl">
                    {s.val}
                  </span>
                  <span className="mt-1.5 text-[0.68rem] tracking-wide text-slate-500">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom diagonal cut fade */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(2,6,23,0.6))",
            }}
            aria-hidden
          />
        </section>

        {/* ══════════════════════════════════════════════
            § 2  PAIN / AGITATION
        ══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 px-4 md:py-28 md:px-12 lg:px-20">
          {/* Diagonal top accent line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(244,63,94,0.4) 50%, transparent)",
            }}
            aria-hidden
          />

          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-rose-500" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-rose-400">
                  Vấn đề bạn đang gặp
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-12"
                style={{ fontSize: "clamp(38px, 7vw, 80px)" }}
              >
                Gara không uy tín
                <br />
                <span className="text-rose-400">gây ra những vấn đề này</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {PAIN_POINTS.map((p, i) => (
                <ScrollReveal key={p.num} delay={i * 110}>
                  <div
                    className="relative h-full overflow-hidden rounded-2xl border border-white/8 bg-black/50 p-6 backdrop-blur"
                    style={{ boxShadow: `inset 0 0 60px ${p.glow}` }}
                  >
                    {/* Watermark number */}
                    <span
                      className="pointer-events-none absolute -right-3 -top-3 select-none font-[family-name:var(--font-display)] font-black leading-none opacity-[0.07]"
                      style={{ fontSize: "8rem" }}
                      aria-hidden
                    >
                      {p.num}
                    </span>
                    <p className={`mb-3 text-[0.63rem] font-semibold uppercase tracking-[0.25em] ${p.accent}`}>
                      {p.num}
                    </p>
                    <h3 className="mb-2 text-base font-semibold leading-snug text-slate-50">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {p.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            § 3  SOLUTION / BENEFITS
        ══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 px-4 md:py-28 md:px-12 lg:px-20">
          {/* Diagonal amber top */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(245,158,11,0.5) 50%, transparent)",
            }}
            aria-hidden
          />

          {/* Subtle radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,0.03) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">
                  Giải pháp của chúng tôi
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-3"
                style={{ fontSize: "clamp(38px, 7vw, 80px)" }}
              >
                Tại Thành Nam Auto
                <br />
                <span className="text-amber-400">mọi thứ khác biệt</span>
              </h2>
              <p className="mb-12 max-w-xl text-sm leading-relaxed text-slate-400">
                Chúng tôi xây dựng quy trình làm việc xoay quanh sự minh bạch và
                tôn trọng thời gian của khách hàng — không phải đơn thuần là "sửa cho xong".
              </p>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {BENEFITS.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 110}>
                  <div
                    className={`group h-full rounded-2xl border ${b.border} bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 ${b.bg} hover:-translate-y-1`}
                  >
                    <div
                      className={`mb-4 inline-block text-4xl leading-none ${b.accent} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {b.symbol}
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-slate-50">
                      {b.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {b.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Service tags */}
            <ScrollReveal delay={380}>
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Sửa chữa thân vỏ",
                  "Sơn xe & phục hồi màu",
                  "Bảo dưỡng định kỳ",
                  "Chăm sóc nội thất",
                  "Kiểm tra tổng thể",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            § 4  PROCESS / HOW IT WORKS
        ══════════════════════════════════════════════ */}
        <section
          id="quy-trinh"
          className="relative overflow-hidden py-20 px-4 md:py-28 md:px-12 lg:px-20"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,185,129,0.03) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-emerald-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-emerald-400">
                  Quy trình làm việc
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-12"
                style={{ fontSize: "clamp(38px, 7vw, 80px)" }}
              >
                4 bước
                <br />
                <span className="text-emerald-400">minh bạch</span>
              </h2>
            </ScrollReveal>

            <div className="relative">
              {/* Connector line — desktop only */}
              <div
                className="absolute left-8 right-8 top-[2.1rem] hidden h-px md:block"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(245,158,11,0.4), rgba(245,158,11,0.1) 50%, rgba(245,158,11,0.4))",
                }}
                aria-hidden
              />

              <div className="grid gap-8 md:grid-cols-4">
                {STEPS.map((s, i) => (
                  <ScrollReveal key={s.num} delay={i * 130}>
                    <div className="relative">
                      {/* Circle */}
                      <div className="relative z-10 mb-4 flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border border-amber-400/50 bg-black shadow-[0_0_0_6px_rgba(2,6,23,1)]">
                        <span className="font-[family-name:var(--font-display)] font-black text-2xl leading-none text-amber-400">
                          {s.num}
                        </span>
                      </div>
                      <h3 className="mb-1.5 text-sm font-semibold leading-snug text-slate-50">
                        {s.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-slate-400">
                        {s.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            § 5  DỊCH VỤ CHÍNH
        ══════════════════════════════════════════════ */}
        <section id="dich-vu" className="relative overflow-hidden py-20 px-4 md:py-28 md:px-12 lg:px-20">
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(245,158,11,0.4) 50%, transparent)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(245,158,11,0.02) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">
                  Dịch vụ chính
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-12"
                style={{ fontSize: "clamp(38px, 7vw, 80px)" }}
              >
                Sửa chữa — Sơn xe
                <br />
                <span className="text-amber-400">Bảo dưỡng cho xe cá nhân</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Card 1 — Sửa chữa */}
              <ScrollReveal delay={0}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-black/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/5">
                  <span
                    className="pointer-events-none absolute -right-3 -top-3 select-none font-[family-name:var(--font-display)] font-black leading-none text-emerald-400/[0.07]"
                    style={{ fontSize: "8rem" }}
                    aria-hidden
                  >
                    01
                  </span>
                  <p className="mb-3 text-[0.63rem] font-semibold uppercase tracking-[0.25em] text-emerald-400">
                    01 — Sửa chữa ô tô
                  </p>
                  <h3 className="mb-2 text-base font-semibold leading-snug text-slate-50">
                    Kiểm tra, chẩn đoán &amp; sửa chữa chính xác
                  </h3>
                  <ul className="mb-4 space-y-1.5 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-emerald-400">·</span>
                      Kiểm tra – chẩn đoán rõ lỗi trước khi sửa
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-emerald-400">·</span>
                      Báo giá chi tiết, khách đồng ý mới tiến hành
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-emerald-400">·</span>
                      Không tự ý thay đồ khi chưa thông báo
                    </li>
                  </ul>
                  <a
                    href="/dich-vu/sua-chua-may-gam"
                    className="text-xs font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Xem chi tiết →
                  </a>
                </article>
              </ScrollReveal>

              {/* Card 2 — Sơn xe */}
              <ScrollReveal delay={110}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-black/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-amber-400/5">
                  <span
                    className="pointer-events-none absolute -right-3 -top-3 select-none font-[family-name:var(--font-display)] font-black leading-none text-amber-400/[0.07]"
                    style={{ fontSize: "8rem" }}
                    aria-hidden
                  >
                    02
                  </span>
                  <p className="mb-3 text-[0.63rem] font-semibold uppercase tracking-[0.25em] text-amber-400">
                    02 — Sơn xe &amp; chăm sóc
                  </p>
                  <h3 className="mb-2 text-base font-semibold leading-snug text-slate-50">
                    Phòng sơn kín, phục hồi xe trầy xước
                  </h3>
                  <ul className="mb-4 space-y-1.5 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-amber-400">·</span>
                      Phòng sơn khép kín, hạn chế bụi
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-amber-400">·</span>
                      Màu chuẩn theo code, bền màu theo thời gian
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-amber-400">·</span>
                      Phục hồi xe trầy xước, móp, cấn
                    </li>
                  </ul>
                  <a
                    href="/dich-vu/son-xe-o-to"
                    className="text-xs font-semibold text-amber-400 transition-colors hover:text-amber-300"
                  >
                    Xem chi tiết →
                  </a>
                </article>
              </ScrollReveal>

              {/* Card 3 — Bảo dưỡng */}
              <ScrollReveal delay={220}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-black/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-400/5">
                  <span
                    className="pointer-events-none absolute -right-3 -top-3 select-none font-[family-name:var(--font-display)] font-black leading-none text-sky-400/[0.07]"
                    style={{ fontSize: "8rem" }}
                    aria-hidden
                  >
                    03
                  </span>
                  <p className="mb-3 text-[0.63rem] font-semibold uppercase tracking-[0.25em] text-sky-400">
                    03 — Bảo dưỡng định kỳ
                  </p>
                  <h3 className="mb-2 text-base font-semibold leading-snug text-slate-50">
                    Gói bảo dưỡng cho xe cá nhân &amp; gia đình
                  </h3>
                  <ul className="mb-4 space-y-1.5 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-sky-400">·</span>
                      Thay dầu, lọc, kiểm tra tổng thể
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-sky-400">·</span>
                      Nhắc lịch bảo dưỡng theo km
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-sky-400">·</span>
                      Tư vấn gói phù hợp xe gia đình
                    </li>
                  </ul>
                  <a
                    href="/dich-vu/bao-duong-dinh-ky"
                    className="text-xs font-semibold text-sky-400 transition-colors hover:text-sky-300"
                  >
                    Xem chi tiết →
                  </a>
                </article>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            § 6  SOCIAL PROOF — GALLERY
        ══════════════════════════════════════════════ */}
        <section id="thu-vien" className="relative overflow-hidden py-20 px-4 md:py-28 md:px-12 lg:px-20">
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(56,189,248,0.3) 50%, transparent)",
            }}
            aria-hidden
          />

          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-sky-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-sky-400">
                  Hình ảnh thực tế
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-3"
                style={{ fontSize: "clamp(38px, 7vw, 80px)" }}
              >
                Kết quả
                <br />
                <span className="text-sky-400">thực tế tại gara</span>
              </h2>
              <p className="mb-10 max-w-lg text-sm leading-relaxed text-slate-400">
                Mỗi ca đều có báo giá rõ trước và bàn giao kèm bảo hành. Ảnh
                thực tế — không chỉnh sửa.
              </p>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  src: "/images/son-xe.png",
                  label: "Sơn xe — phòng sơn kín",
                  sub: "Màu chuẩn theo code, bền màu theo thời gian",
                  accent: "text-amber-300",
                  glow: "border-amber-400/30",
                },
                {
                  src: "/images/sua-chua.png",
                  label: "Sửa chữa thân vỏ",
                  sub: "Kiểm tra chẩn đoán rõ lỗi trước khi sửa",
                  accent: "text-emerald-300",
                  glow: "border-emerald-400/30",
                },
                {
                  src: "/images/noi-that.png",
                  label: "Chăm sóc nội thất",
                  sub: "Phục hồi nội thất, làm mới như xe mới",
                  accent: "text-sky-300",
                  glow: "border-sky-400/30",
                },
              ].map((img) => (
                <ScrollReveal key={img.src}>
                  <div
                    className={`group relative h-60 overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:${img.glow}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-10">
                      <p
                        className={`text-[0.6rem] font-semibold uppercase tracking-[0.22em] ${img.accent}`}
                      >
                        {img.label}
                      </p>
                      <p className="mt-0.5 text-[0.7rem] text-slate-400">
                        {img.sub}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={200}>
              <div className="mt-8 text-center">
                <a
                  href="/hinh-anh-thuc-te#thu-vien"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-6 py-2.5 text-sm font-semibold text-sky-400 transition-all hover:border-sky-400 hover:bg-sky-400/10"
                >
                  Xem toàn bộ thư viện ảnh →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            § 6  TESTIMONIALS
        ══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 px-4 md:py-28 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-violet-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-violet-400">
                  Khách hàng nói gì
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-12"
                style={{ fontSize: "clamp(38px, 7vw, 80px)" }}
              >
                Thực tế
                <br />
                <span className="text-violet-400">từ khách hàng</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <ScrollReveal key={i} delay={i * 110}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-black/40 p-6 backdrop-blur">
                    {/* Large quotation mark */}
                    <div className="mb-3 font-[family-name:var(--font-display)] text-5xl font-black leading-none text-violet-400/30">
                      &ldquo;
                    </div>
                    <p className="flex-1 text-sm italic leading-relaxed text-slate-300">
                      {t.quote}
                    </p>
                    <div className="mt-4 border-t border-white/8 pt-4">
                      <p className="text-sm font-semibold text-slate-50">
                        {t.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">{t.car}</p>
                      <div className="mt-2 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <span key={j} className="text-xs text-amber-400">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            § 7  ABOUT / CREDIBILITY
        ══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 px-4 md:py-28 md:px-12 lg:px-20">
          {/* Diagonal bg wash */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,158,11,0.03) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(245,158,11,0.3) 50%, transparent)",
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-6xl md:grid md:grid-cols-2 md:gap-16 md:items-center">
            {/* Left — text */}
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">
                  Về chúng tôi
                </span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-4"
                style={{ fontSize: "clamp(34px, 5.5vw, 68px)" }}
              >
                Gara gia đình,
                <br />
                <span className="text-amber-400">
                  tay nghề chuyên nghiệp
                </span>
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-slate-400">
                Thành Nam Auto được xây dựng bởi những người thợ có hơn một thập
                kỷ kinh nghiệm trong lĩnh vực sửa chữa, sơn xe và chăm sóc ô tô
                tại Xuân Lộc.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-slate-400">
                Chúng tôi hiểu rằng xe của bạn không chỉ là phương tiện — đó là
                tài sản quan trọng và công cụ gắn liền với cuộc sống hàng ngày.
                Vì vậy, chúng tôi làm việc với tiêu chuẩn cao nhất: đúng hẹn,
                minh bạch, và có trách nhiệm từ đầu đến cuối.
              </p>
              <a
                href="#dat-lich"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(245,158,11,0.3)]"
              >
                Đặt lịch tư vấn miễn phí →
              </a>
            </ScrollReveal>

            {/* Right — stat grid */}
            <ScrollReveal delay={200} className="mt-10 md:mt-0">
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.val}
                    className={`flex flex-col rounded-2xl border ${s.border} bg-black/40 p-5 backdrop-blur`}
                  >
                    <span
                      className={`font-[family-name:var(--font-display)] font-black text-4xl leading-none ${s.accent}`}
                    >
                      {s.val}
                    </span>
                    <span className="mt-auto pt-2 text-[0.68rem] leading-snug text-slate-400">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            § 9  FINAL CTA — BOOKING
        ══════════════════════════════════════════════ */}
        <section
          id="dat-lich"
          className="relative overflow-hidden py-20 px-4 md:py-28 md:px-12 lg:px-20"
        >
          {/* Diagonal amber band */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(245,158,11,0.07) 0%, transparent 50%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(245,158,11,0.06) 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(245,158,11,0.5) 50%, transparent)",
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">
                  Sẵn sàng bắt đầu
                </span>
                <div className="h-px w-10 bg-amber-400" />
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.86] text-slate-50 mb-6"
                style={{ fontSize: "clamp(52px, 11vw, 130px)" }}
              >
                Đặt lịch
                <br />
                <span className="text-amber-400">miễn phí</span>
                <br />
                ngay hôm nay
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-slate-400">
                Tư vấn miễn phí. Không ràng buộc. Chúng tôi sẽ liên hệ lại
                trong vòng 30 phút trong giờ làm việc.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <form className="grid gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Họ tên của bạn"
                    className="rounded-xl border border-slate-700/60 bg-black/50 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-600 transition focus:border-amber-400/70 focus:ring-1 focus:ring-amber-400/20"
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    className="rounded-xl border border-slate-700/60 bg-black/50 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-600 transition focus:border-amber-400/70 focus:ring-1 focus:ring-amber-400/20"
                  />
                </div>
                <select className="w-full rounded-xl border border-slate-700/60 bg-black/50 px-4 py-3 text-sm text-slate-50 outline-none transition focus:border-amber-400/70 focus:ring-1 focus:ring-amber-400/20">
                  <option value="">Dịch vụ quan tâm</option>
                  <option value="sua-chua">Sửa chữa / cứu hộ</option>
                  <option value="son-xe">Sơn xe &amp; làm đẹp</option>
                  <option value="bao-duong">Bảo dưỡng định kỳ</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Mô tả nhanh tình trạng xe hoặc mong muốn của bạn…"
                  className="w-full resize-none rounded-xl border border-slate-700/60 bg-black/50 px-4 py-3 text-sm text-slate-50 outline-none placeholder:text-slate-600 transition focus:border-amber-400/70 focus:ring-1 focus:ring-amber-400/20"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-amber-400 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(245,158,11,0.28)] transition-all hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_20px_50px_rgba(245,158,11,0.45)]"
                >
                  Gửi yêu cầu đặt lịch →
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-6 text-xs text-slate-500">
                Hoặc gọi trực tiếp:{" "}
                <a
                  href="tel:0388476247"
                  className="font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  0388 476 247
                </a>{" "}
                — Thứ 2–Chủ nhật, 08:00–17:30
              </p>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  )
}
