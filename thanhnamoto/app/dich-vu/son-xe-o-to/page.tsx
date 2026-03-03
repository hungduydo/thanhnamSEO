import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/app/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Sơn xe ô tô tại Xuân Lộc | Thành Nam Oto",
  description:
    "Dịch vụ sơn xe ô tô tại Xuân Lộc, Đồng Nai. Sơn dặm, sơn toàn bộ, đổi màu, phủ ceramic. Phòng sơn kín, màu chuẩn theo code, bảo hành sau bàn giao.",
}

const VARIANTS = [
  {
    title: "Sơn dặm",
    desc: "Xử lý vết trầy xước, va chạm nhỏ, bong tróc cục bộ. Màu pha chuẩn code xe, hòa với màu gốc tự nhiên.",
    accent: "text-amber-400",
    border: "border-amber-400/20",
  },
  {
    title: "Sơn lại toàn bộ",
    desc: "Sơn lại toàn xe khi màu xuống cấp, nhiều vết hỏng, hoặc cần phục hồi như mới. Đảm bảo đồng màu toàn thân.",
    accent: "text-amber-400",
    border: "border-amber-400/20",
  },
  {
    title: "Đổi màu xe",
    desc: "Thay đổi màu sắc theo sở thích. Tư vấn màu phù hợp dòng xe, pha màu chính xác, hoàn thiện sắc nét.",
    accent: "text-amber-400",
    border: "border-amber-400/20",
  },
  {
    title: "Phủ ceramic / bảo vệ",
    desc: "Lớp phủ nano ceramic bảo vệ bề mặt sơn, tăng độ bóng, chống trầy xước nhỏ và tia UV.",
    accent: "text-amber-400",
    border: "border-amber-400/20",
  },
]

const STEPS = [
  { num: "1", title: "Kiểm tra bề mặt & báo giá", desc: "Kiểm tra chi tiết từng vết hỏng, tình trạng lớp sơn gốc. Báo giá từng hạng mục, bạn đồng ý mới tiến hành." },
  { num: "2", title: "Chuẩn bị bề mặt", desc: "Che chắn các bộ phận không sơn, đánh nhám bề mặt, xử lý lớp gỉ hoặc sơn cũ bong tróc đúng quy trình." },
  { num: "3", title: "Pha màu & sơn trong phòng kín", desc: "Pha màu chuẩn code xe, sơn trong phòng khép kín kiểm soát bụi, đảm bảo lớp sơn đều và không có bọt khí." },
  { num: "4", title: "Đánh bóng & kiểm tra", desc: "Đánh bóng bề mặt sau khi sơn khô, kiểm tra màu dưới ánh sáng tự nhiên, bàn giao kèm bảo hành." },
]

export default function SonXeOToPage() {
  return (
    <>
      <style>{`
        @keyframes sx-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sx-k0 { animation: sx-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .sx-k1 { animation: sx-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s  both; }
        .sx-k2 { animation: sx-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s  both; }
        .sx-k3 { animation: sx-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s  both; }
        .sx-grid-bg {
          background-image:
            linear-gradient(rgba(245,158,11,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.035) 1px, transparent 1px);
          background-size: 72px 72px;
        }
      `}</style>

      <div className="overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative flex min-h-[65vh] flex-col justify-center overflow-hidden px-4 pb-16 pt-12 md:px-12 lg:px-20">
          <div className="sx-grid-bg pointer-events-none absolute inset-0" aria-hidden />

          {/* Diagonal amber slash */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div style={{ position:"absolute", width:"140%", height:"2px", top:"50%", left:"-20%", transform:"rotate(-8deg)", background:"linear-gradient(90deg, transparent, rgba(245,158,11,0.5) 40%, rgba(245,158,11,0.9) 50%, rgba(245,158,11,0.5) 60%, transparent)", boxShadow:"0 0 70px 25px rgba(245,158,11,0.07)" }} />
            <div style={{ position:"absolute", width:"140%", height:"1px", top:"51.4%", left:"-20%", transform:"rotate(-8deg)", background:"linear-gradient(90deg, transparent, rgba(245,158,11,0.2) 40%, rgba(245,158,11,0.4) 50%, rgba(245,158,11,0.2) 60%, transparent)" }} />
          </div>

          {/* Watermark */}
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] font-black leading-none text-white/[0.022]" style={{ fontSize:"clamp(150px,22vw,320px)" }} aria-hidden>02</span>

          {/* Radial amber glow */}
          <div className="pointer-events-none absolute inset-0" style={{ background:"radial-gradient(ellipse 55% 40% at 20% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)" }} aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* Breadcrumb */}
            <div className="sx-k0 mb-5 flex items-center gap-2 text-[0.65rem] text-slate-500">
              <Link href="/dich-vu" className="hover:text-amber-400 transition-colors">Dịch vụ</Link>
              <span>/</span>
              <span className="text-amber-400">Sơn xe ô tô</span>
            </div>

            <div className="sx-k0 mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-amber-400" />
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">02 — Sơn xe & chăm sóc</span>
            </div>

            <h1
              className="sx-k1 font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50"
              style={{ fontSize: "clamp(52px, 10vw, 120px)" }}
            >
              Sơn xe
              <br />
              <span className="text-amber-400">ô tô</span>
            </h1>

            <p className="sx-k2 mt-5 max-w-lg text-sm leading-relaxed text-slate-300/80 md:text-base">
              Phòng sơn khép kín, màu pha chuẩn theo code xe, bền màu lâu dài.{" "}
              <strong className="font-semibold text-slate-50">Báo giá trước — không phát sinh — bảo hành bằng văn bản.</strong>
            </p>

            <div className="sx-k3 mt-7 flex flex-wrap gap-3">
              <a href="#dat-lich" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(245,158,11,0.28)] transition-all hover:-translate-y-0.5 hover:bg-amber-300">
                Đặt lịch xem xe miễn phí
              </a>
              <a href="tel:0388476247" className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-amber-400/50">
                📞 Tư vấn ngay
              </a>
            </div>
          </div>
        </section>

        {/* ── GALLERY IMAGE ── */}
        <section className="relative overflow-hidden px-4 pb-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/8 md:h-96">
                <Image
                  src="/images/son-xe.png"
                  alt="Phòng sơn xe ô tô tại Thành Nam Oto"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-amber-400">
                    Phòng sơn khép kín tại Thành Nam Oto
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Kiểm soát bụi, ánh sáng chuẩn để đánh giá màu chính xác</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SERVICE VARIANTS ── */}
        <section className="relative overflow-hidden py-12 px-4 md:py-20 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background:"linear-gradient(90deg, transparent, rgba(245,158,11,0.35) 50%, transparent)" }} aria-hidden />

          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">Các hình thức sơn</span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-10"
                style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
              >
                Chúng tôi thực hiện
                <br />
                <span className="text-amber-400">những loại sơn nào?</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-2">
              {VARIANTS.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 90}>
                  <div className={`rounded-2xl border ${v.border} bg-black/40 p-5 backdrop-blur`}>
                    <p className={`mb-1.5 text-sm font-semibold ${v.accent}`}>{v.title}</p>
                    <p className="text-sm leading-relaxed text-slate-400">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="relative overflow-hidden py-12 px-4 md:py-20 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background:"linear-gradient(90deg, transparent, rgba(245,158,11,0.25) 50%, transparent)" }} aria-hidden />
          <div className="pointer-events-none absolute inset-0" style={{ background:"radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,0.02) 0%, transparent 70%)" }} aria-hidden />

          <div className="relative z-10 mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">Quy trình sơn xe</span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-10"
                style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
              >
                4 bước
                <br />
                <span className="text-amber-400">từ kiểm tra đến bàn giao</span>
              </h2>
            </ScrollReveal>

            <div className="relative">
              <div className="absolute left-8 right-8 top-[2rem] hidden h-px md:block" style={{ background:"linear-gradient(90deg, rgba(245,158,11,0.35), rgba(245,158,11,0.08) 50%, rgba(245,158,11,0.35))" }} aria-hidden />
              <div className="grid gap-6 md:grid-cols-4">
                {STEPS.map((s, i) => (
                  <ScrollReveal key={s.num} delay={i * 120}>
                    <div className="relative">
                      <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/50 bg-black shadow-[0_0_0_5px_rgba(2,6,23,1)]">
                        <span className="font-[family-name:var(--font-display)] font-black text-xl leading-none text-amber-400">{s.num}</span>
                      </div>
                      <h3 className="mb-1.5 text-sm font-semibold leading-snug text-slate-50">{s.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-400">{s.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section className="relative overflow-hidden py-10 px-4 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 md:p-6">
                <div className="flex flex-wrap gap-6 md:gap-12 justify-center md:justify-start">
                  {[
                    { val: "100%", label: "Báo giá trước khi sơn" },
                    { val: "Phòng kín", label: "Hạn chế bụi tối đa" },
                    { val: "Chuẩn code", label: "Màu pha theo code xe" },
                    { val: "Có BH", label: "Bảo hành sau bàn giao" },
                  ].map((s) => (
                    <div key={s.val} className="flex flex-col">
                      <span className="font-[family-name:var(--font-display)] font-black text-2xl leading-none text-amber-400 md:text-3xl">{s.val}</span>
                      <span className="mt-1 text-[0.68rem] text-slate-400">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="dat-lich" className="relative overflow-hidden py-16 px-4 md:py-24 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute inset-0" style={{ background:"radial-gradient(ellipse 60% 40% at 50% 80%, rgba(245,158,11,0.06) 0%, transparent 70%)" }} aria-hidden />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background:"linear-gradient(90deg, transparent, rgba(245,158,11,0.4) 50%, transparent)" }} aria-hidden />

          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <div className="mb-5 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">Đặt lịch xem xe</span>
                <div className="h-px w-10 bg-amber-400" />
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-4"
                style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
              >
                Tư vấn
                <br />
                <span className="text-amber-400">miễn phí</span>
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-slate-400">
                Mang xe đến hoặc gửi ảnh qua Zalo — chúng tôi sẽ kiểm tra và báo giá ngay, không ràng buộc.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:0388476247" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(245,158,11,0.28)] transition-all hover:-translate-y-0.5 hover:bg-amber-300">
                  📞 Gọi ngay: 0388 476 247
                </a>
                <Link href="/dich-vu" className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-amber-400/50">
                  ← Xem thêm dịch vụ
                </Link>
              </div>
              <p className="mt-5 text-xs text-slate-500">08:00–17:30 · Thứ 2 đến Chủ nhật</p>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  )
}
