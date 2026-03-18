import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/app/components/ScrollReveal"
import { BASE_URL } from "@/app/lib/constants"
import { CONTACT } from "@/app/lib/contact"

export const metadata: Metadata = {
  title: "Dịch vụ sửa chữa & chăm sóc ô tô | Thành Nam Auto Xuân Lộc",
  description:
    "Sửa chữa, sơn xe và bảo dưỡng định kỳ cho xe ô tô cá nhân tại Xuân Lộc, Đồng Nai. Báo giá rõ ràng, không phát sinh, có bảo hành bằng văn bản.",
  alternates: { canonical: `${BASE_URL}/dich-vu` },
}

const SERVICES = [
  {
    num: "01",
    slug: "/dich-vu/sua-chua-may-gam",
    kicker: "Sửa chữa ô tô",
    title: "Kiểm tra, chẩn đoán & sửa chữa chính xác",
    desc: "Xử lý các lỗi máy, gầm, điện bằng máy chẩn đoán hiện đại. Báo giá chi tiết trước khi sửa, không tự ý thay phụ tùng.",
    bullets: ["Chẩn đoán rõ lỗi trước khi sửa", "Báo giá chi tiết, khách đồng ý mới làm", "Không thay đồ khi chưa thông báo"],
    accent: "text-emerald-400",
    border: "border-emerald-400/25",
    hoverBorder: "hover:border-emerald-400/50",
    hoverBg: "hover:bg-emerald-400/5",
    glow: "rgba(16,185,129,0.06)",
  },
  {
    num: "02",
    slug: "/dich-vu/son-xe-o-to",
    kicker: "Sơn xe & chăm sóc",
    title: "Phòng sơn kín, phục hồi xe trầy xước",
    desc: "Sơn dặm, sơn lại toàn bộ hoặc đổi màu cho xe cá nhân. Phòng sơn khép kín, màu chuẩn theo code, bền theo thời gian.",
    bullets: ["Phòng sơn kín, hạn chế bụi", "Màu chuẩn code, bền màu lâu dài", "Phục hồi trầy xước, móp, cấn"],
    accent: "text-amber-400",
    border: "border-amber-400/25",
    hoverBorder: "hover:border-amber-400/50",
    hoverBg: "hover:bg-amber-400/5",
    glow: "rgba(245,158,11,0.06)",
  },
  {
    num: "03",
    slug: "/dich-vu/bao-duong-dinh-ky",
    kicker: "Bảo dưỡng định kỳ",
    title: "Gói bảo dưỡng cho xe cá nhân & gia đình",
    desc: "Các gói bảo dưỡng theo mốc km, tối ưu cho xe đi lại hàng ngày. Nhắc lịch theo km, tư vấn gói phù hợp từng xe.",
    bullets: ["Thay dầu, lọc, kiểm tra tổng thể", "Nhắc lịch bảo dưỡng theo km", "Tư vấn gói phù hợp xe gia đình"],
    accent: "text-sky-400",
    border: "border-sky-400/25",
    hoverBorder: "hover:border-sky-400/50",
    hoverBg: "hover:bg-sky-400/5",
    glow: "rgba(56,189,248,0.06)",
  },
]

const COMMITMENTS = [
  { title: "Báo giá trước khi làm", desc: "Luôn thống nhất chi phí từng hạng mục trước khi tiến hành. Không phát sinh ngoài thỏa thuận.", accent: "text-amber-400", border: "border-amber-400/20" },
  { title: "Không thay khi chưa báo", desc: "Mọi đề xuất thay thế đều được giải thích rõ ràng và chỉ thực hiện khi bạn đồng ý.", accent: "text-emerald-400", border: "border-emerald-400/20" },
  { title: "Có bảo hành rõ ràng", desc: "Mỗi dịch vụ đều có phiếu bảo hành bằng văn bản, ghi nhận hạng mục đã thực hiện.", accent: "text-sky-400", border: "border-sky-400/20" },
  { title: "Tập trung xe cá nhân", desc: "Quy trình tối ưu cho nhu cầu đi lại hàng ngày — không nhồi nhét quá nhiều xe cùng lúc.", accent: "text-rose-400", border: "border-rose-400/20" },
]

export default function DichVuPage() {
  return (
    <>
      <style>{`
        @keyframes dv-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dv-k0 { animation: dv-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .dv-k1 { animation: dv-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s  both; }
        .dv-k2 { animation: dv-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s  both; }
        .dv-k3 { animation: dv-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s  both; }
        .dv-grid-bg {
          background-image:
            linear-gradient(rgba(245,158,11,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.035) 1px, transparent 1px);
          background-size: 72px 72px;
        }
      `}</style>

      <div className="overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden px-4 pb-16 pt-12 md:px-12 lg:px-20">
          <div className="dv-grid-bg pointer-events-none absolute inset-0" aria-hidden />

          {/* Diagonal amber slash */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div style={{ position: "absolute", width: "140%", height: "2px", top: "55%", left: "-20%", transform: "rotate(-7deg)", background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5) 40%, rgba(245,158,11,0.85) 50%, rgba(245,158,11,0.5) 60%, transparent)", boxShadow: "0 0 60px 20px rgba(245,158,11,0.06)" }} />
          </div>

          {/* Watermark */}
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] font-black leading-none text-white/[0.022]" style={{ fontSize: "clamp(150px,22vw,320px)" }} aria-hidden>DV</span>

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="dv-k0 mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-amber-400" />
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">Danh mục dịch vụ</span>
            </div>

            <h1
              className="dv-k1 font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50"
              style={{ fontSize: "clamp(52px, 10vw, 120px)" }}
            >
              Dịch vụ
              <br />
              <span className="text-amber-400">chuyên nghiệp</span>
            </h1>

            <p className="dv-k2 mt-5 max-w-lg text-sm leading-relaxed text-slate-300/80 md:text-base">
              Sửa chữa, sơn xe và bảo dưỡng định kỳ cho xe ô tô cá nhân.{" "}
              <strong className="font-semibold text-slate-50">Báo giá rõ ràng — không phát sinh — bảo hành bằng văn bản.</strong>
            </p>

            <div className="dv-k3 mt-7 flex flex-wrap gap-3">
              <a href="#dat-lich" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(245,158,11,0.28)] transition-all hover:-translate-y-0.5 hover:bg-amber-300">
                Đặt lịch tư vấn miễn phí
              </a>
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-amber-400/50">
                📞 0388 476 247
              </a>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="relative overflow-hidden py-16 px-4 md:py-24 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.4) 50%, transparent)" }} aria-hidden />

          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">Danh sách dịch vụ</span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-10"
                style={{ fontSize: "clamp(34px, 6vw, 72px)" }}
              >
                Chọn dịch vụ
                <br />
                <span className="text-amber-400">phù hợp cho xe bạn</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3">
              {SERVICES.map((s, i) => (
                <ScrollReveal key={s.num} delay={i * 110}>
                  <Link href={s.slug} className="group block h-full">
                    <article
                      className={`relative h-full overflow-hidden rounded-2xl border ${s.border} bg-black/50 p-6 backdrop-blur transition-all duration-300 ${s.hoverBorder} ${s.hoverBg} hover:-translate-y-1`}
                      style={{ boxShadow: `inset 0 0 50px ${s.glow}` }}
                    >
                      <span
                        className={`pointer-events-none absolute -right-3 -top-3 select-none font-[family-name:var(--font-display)] font-black leading-none opacity-[0.07] ${s.accent}`}
                        style={{ fontSize: "8rem" }}
                        aria-hidden
                      >
                        {s.num}
                      </span>
                      <p className={`mb-2 text-[0.63rem] font-semibold uppercase tracking-[0.25em] ${s.accent}`}>
                        {s.num} — {s.kicker}
                      </p>
                      <h3 className="mb-2 text-base font-semibold leading-snug text-slate-50">
                        {s.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-slate-400">
                        {s.desc}
                      </p>
                      <ul className="mb-5 space-y-1.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className={`mt-0.5 ${s.accent}`}>·</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <span className={`text-xs font-semibold ${s.accent} transition-colors group-hover:underline`}>
                        Xem chi tiết →
                      </span>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMITMENTS ── */}
        <section className="relative overflow-hidden py-16 px-4 md:py-24 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.3) 50%, transparent)" }} aria-hidden />

          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">Cam kết dịch vụ</span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-10"
                style={{ fontSize: "clamp(34px, 6vw, 72px)" }}
              >
                Minh bạch
                <br />
                <span className="text-amber-400">cho chủ xe cá nhân</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-2">
              {COMMITMENTS.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 90}>
                  <div className={`rounded-2xl border ${c.border} bg-black/40 p-5 backdrop-blur`}>
                    <p className={`mb-1.5 text-sm font-semibold ${c.accent}`}>{c.title}</p>
                    <p className="text-sm leading-relaxed text-slate-400">{c.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section id="dat-lich" className="relative overflow-hidden py-16 px-4 md:py-24 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(245,158,11,0.06) 0%, transparent 50%)" }} aria-hidden />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.45) 50%, transparent)" }} aria-hidden />

          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <div className="mb-5 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-amber-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber-400">Sẵn sàng bắt đầu</span>
                <div className="h-px w-10 bg-amber-400" />
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-4"
                style={{ fontSize: "clamp(44px, 9vw, 108px)" }}
              >
                Đặt lịch
                <br />
                <span className="text-amber-400">ngay hôm nay</span>
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-slate-400">
                Tư vấn miễn phí. Không ràng buộc. Chúng tôi sẽ liên hệ lại trong vòng 30 phút trong giờ làm việc.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(245,158,11,0.28)] transition-all hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  📞 Gọi ngay: 0388 476 247
                </a>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-amber-400/50"
                >
                  Đặt lịch online →
                </Link>
              </div>
              <p className="mt-5 text-xs text-slate-500">
                Giờ làm việc: 08:00–17:30 · Thứ 2 đến Chủ nhật
              </p>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  )
}
