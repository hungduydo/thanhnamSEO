import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/app/components/ScrollReveal"
import { BASE_URL } from "@/app/lib/constants"

export const metadata: Metadata = {
  title: "Bảo dưỡng định kỳ ô tô tại Xuân Lộc | Thành Nam Oto",
  description:
    "Dịch vụ bảo dưỡng định kỳ ô tô tại Xuân Lộc, Đồng Nai. Gói theo mốc km, thay dầu, kiểm tra tổng thể, nhắc lịch định kỳ. Báo giá rõ ràng, có bảo hành.",
  alternates: { canonical: `${BASE_URL}/dich-vu/bao-duong-dinh-ky` },
}

const PACKAGES = [
  {
    km: "5.000 km",
    title: "Bảo dưỡng cơ bản",
    items: ["Thay dầu động cơ", "Thay lọc dầu", "Kiểm tra áp suất lốp", "Kiểm tra đèn & gạt mưa"],
    note: "Phù hợp xe mới, dùng thường xuyên",
    accent: "text-sky-400",
    border: "border-sky-400/25",
    bg: "bg-sky-400/[0.04]",
  },
  {
    km: "10.000 km",
    title: "Bảo dưỡng tiêu chuẩn",
    items: ["Thay dầu & lọc dầu", "Kiểm tra phanh", "Kiểm tra hệ thống lái", "Kiểm tra nước làm mát & dầu thắng", "Kiểm tra ắc quy"],
    note: "Gói phổ biến nhất cho xe gia đình",
    accent: "text-sky-300",
    border: "border-sky-300/30",
    bg: "bg-sky-400/[0.06]",
  },
  {
    km: "20.000 km",
    title: "Bảo dưỡng toàn diện",
    items: ["Toàn bộ gói 10.000 km", "Thay lọc gió động cơ", "Thay bugi (nếu cần)", "Kiểm tra dây curoa", "Kiểm tra toàn bộ gầm", "Vệ sinh kim phun"],
    note: "Tổng kiểm tra sức khỏe xe định kỳ",
    accent: "text-cyan-400",
    border: "border-cyan-400/25",
    bg: "bg-cyan-400/[0.04]",
  },
]

const STEPS = [
  { num: "1", title: "Đặt lịch & xác nhận", desc: "Liên hệ qua điện thoại hoặc Zalo. Cung cấp km hiện tại và dòng xe để chúng tôi chuẩn bị đúng phụ tùng." },
  { num: "2", title: "Kiểm tra tổng thể", desc: "Kiểm tra toàn bộ các hạng mục theo gói, ghi nhận tình trạng thực tế. Tư vấn các hạng mục cần xử lý thêm nếu có." },
  { num: "3", title: "Thực hiện & báo tiến độ", desc: "Thay thế phụ tùng theo đúng gói đã chọn. Thông báo nếu phát hiện vấn đề cần xử lý ngoài gói — hỏi ý kiến trước khi làm." },
  { num: "4", title: "Bàn giao & nhắc lịch", desc: "Kiểm tra lần cuối, hướng dẫn chăm sóc sau bảo dưỡng. Lưu lịch sử và nhắc lịch bảo dưỡng lần tiếp theo." },
]

export default function BaoDuongDinhKyPage() {
  return (
    <>
      <style>{`
        @keyframes bd-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bd-k0 { animation: bd-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .bd-k1 { animation: bd-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s  both; }
        .bd-k2 { animation: bd-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s  both; }
        .bd-k3 { animation: bd-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s  both; }
        .bd-grid-bg {
          background-image:
            linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px);
          background-size: 72px 72px;
        }
      `}</style>

      <div className="overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative flex min-h-[65vh] flex-col justify-center overflow-hidden px-4 pb-16 pt-12 md:px-12 lg:px-20">
          <div className="bd-grid-bg pointer-events-none absolute inset-0" aria-hidden />

          {/* Diagonal sky slash */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div style={{ position: "absolute", width: "140%", height: "2px", top: "50%", left: "-20%", transform: "rotate(-8deg)", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.42) 40%, rgba(56,189,248,0.8) 50%, rgba(56,189,248,0.42) 60%, transparent)", boxShadow: "0 0 70px 25px rgba(56,189,248,0.05)" }} />
            <div style={{ position: "absolute", width: "140%", height: "1px", top: "51.4%", left: "-20%", transform: "rotate(-8deg)", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.16) 40%, rgba(56,189,248,0.3) 50%, rgba(56,189,248,0.16) 60%, transparent)" }} />
          </div>

          {/* Watermark */}
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] font-black leading-none text-white/[0.022]" style={{ fontSize: "clamp(150px,22vw,320px)" }} aria-hidden>03</span>

          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 40% at 20% 50%, rgba(56,189,248,0.05) 0%, transparent 70%)" }} aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* Breadcrumb */}
            <div className="bd-k0 mb-5 flex items-center gap-2 text-[0.65rem] text-slate-500">
              <Link href="/dich-vu" className="hover:text-sky-400 transition-colors">Dịch vụ</Link>
              <span>/</span>
              <span className="text-sky-400">Bảo dưỡng định kỳ</span>
            </div>

            <div className="bd-k0 mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-sky-400" />
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-sky-400">03 — Bảo dưỡng định kỳ</span>
            </div>

            <h1
              className="bd-k1 font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50"
              style={{ fontSize: "clamp(52px, 10vw, 120px)" }}
            >
              Bảo dưỡng
              <br />
              <span className="text-sky-400">định kỳ</span>
            </h1>

            <p className="bd-k2 mt-5 max-w-lg text-sm leading-relaxed text-slate-300/80 md:text-base">
              Gói bảo dưỡng theo mốc km, tối ưu cho xe đi lại hàng ngày.{" "}
              <strong className="font-semibold text-slate-50">Kiểm tra toàn thể — nhắc lịch tự động — bảo hành sau bàn giao.</strong>
            </p>

            <div className="bd-k3 mt-7 flex flex-wrap gap-3">
              <a href="#dat-lich" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(56,189,248,0.25)] transition-all hover:-translate-y-0.5 hover:bg-sky-300">
                Đặt lịch bảo dưỡng
              </a>
              <a href="tel:0388476247" className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-sky-400/50">
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
                  src="/images/noi-that.png"
                  alt="Bảo dưỡng xe ô tô tại Thành Nam Oto"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-400">
                    Chăm sóc & bảo dưỡng toàn diện
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Kiểm tra chi tiết từng hạng mục theo đúng mốc km</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="relative overflow-hidden py-12 px-4 md:py-20 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3) 50%, transparent)" }} aria-hidden />

          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-sky-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-sky-400">Gói bảo dưỡng</span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-10"
                style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
              >
                Chọn gói
                <br />
                <span className="text-sky-400">phù hợp cho xe bạn</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {PACKAGES.map((pkg, i) => (
                <ScrollReveal key={pkg.km} delay={i * 100}>
                  <div className={`h-full rounded-2xl border ${pkg.border} ${pkg.bg} p-6 backdrop-blur flex flex-col`}>
                    <div className="mb-3">
                      <span className={`text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${pkg.accent}`}>{pkg.km}</span>
                      <h3 className="mt-1 text-base font-semibold text-slate-50">{pkg.title}</h3>
                    </div>
                    <ul className="flex-1 space-y-1.5 mb-4">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className={`mt-0.5 ${pkg.accent}`}>·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className={`text-[0.68rem] ${pkg.accent} border-t border-white/8 pt-3`}>{pkg.note}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={350}>
              <p className="mt-5 text-xs text-slate-500 text-center">
                * Tất cả gói đều đi kèm tư vấn miễn phí và nhắc lịch bảo dưỡng lần tiếp theo.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="relative overflow-hidden py-12 px-4 md:py-20 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2) 50%, transparent)" }} aria-hidden />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(56,189,248,0.02) 0%, transparent 70%)" }} aria-hidden />

          <div className="relative z-10 mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-sky-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-sky-400">Quy trình bảo dưỡng</span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-10"
                style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
              >
                4 bước
                <br />
                <span className="text-sky-400">từ đặt lịch đến bàn giao</span>
              </h2>
            </ScrollReveal>

            <div className="relative">
              <div className="absolute left-8 right-8 top-[2rem] hidden h-px md:block" style={{ background: "linear-gradient(90deg, rgba(56,189,248,0.35), rgba(56,189,248,0.08) 50%, rgba(56,189,248,0.35))" }} aria-hidden />
              <div className="grid gap-6 md:grid-cols-4">
                {STEPS.map((s, i) => (
                  <ScrollReveal key={s.num} delay={i * 120}>
                    <div className="relative">
                      <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/50 bg-black shadow-[0_0_0_5px_rgba(2,6,23,1)]">
                        <span className="font-[family-name:var(--font-display)] font-black text-xl leading-none text-sky-400">{s.num}</span>
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
              <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] p-5 md:p-6">
                <div className="flex flex-wrap gap-6 md:gap-12 justify-center md:justify-start">
                  {[
                    { val: "5k–20k", label: "Gói theo mốc km" },
                    { val: "Nhắc lịch", label: "Tự động theo km" },
                    { val: "100%", label: "Báo giá trước khi làm" },
                    { val: "Có BH", label: "Bảo hành sau bàn giao" },
                  ].map((s) => (
                    <div key={s.val} className="flex flex-col">
                      <span className="font-[family-name:var(--font-display)] font-black text-2xl leading-none text-sky-400 md:text-3xl">{s.val}</span>
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
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(56,189,248,0.05) 0%, transparent 70%)" }} aria-hidden />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.35) 50%, transparent)" }} aria-hidden />

          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <div className="mb-5 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-sky-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-sky-400">Đặt lịch bảo dưỡng</span>
                <div className="h-px w-10 bg-sky-400" />
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-4"
                style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
              >
                Đặt lịch
                <br />
                <span className="text-sky-400">ngay hôm nay</span>
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-slate-400">
                Cho biết km hiện tại và dòng xe — chúng tôi tư vấn gói phù hợp và xác nhận lịch hẹn trong giờ làm việc.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:0388476247" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(56,189,248,0.25)] transition-all hover:-translate-y-0.5 hover:bg-sky-300">
                  📞 Gọi ngay: 0388 476 247
                </a>
                <Link href="/dich-vu" className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-sky-400/50">
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
