import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/app/components/ScrollReveal"
import { ServiceJsonLd } from "@/app/components/ServiceJsonLd"
import { BreadcrumbJsonLd } from "@/app/components/BreadcrumbJsonLd"
import { BASE_URL } from "@/app/lib/constants"
import { CONTACT } from "@/app/lib/contact"

const SERVICE_NAME = "Sửa chữa máy gầm ô tô Gia Ray, Xuân Lộc - Chẩn đoán bằng máy"
const SERVICE_DESC =
  "Sửa chữa máy, gầm, hệ thống điện ô tô tại Gia Ray, Xuân Lộc, Đồng Nai. Máy chẩn đoán OBD2 hiện đại, báo giá rõ ràng từng hạng mục, không tự ý thay phụ tùng, có bảo hành."

export const metadata: Metadata = {
  title: SERVICE_NAME,
  description: SERVICE_DESC,
  alternates: { canonical: `${BASE_URL}/dich-vu/sua-chua-may-gam` },
  openGraph: {
    title: SERVICE_NAME,
    description: SERVICE_DESC,
    url: `${BASE_URL}/dich-vu/sua-chua-may-gam`,
    type: "website",
  },
}

const ISSUES = [
  { title: "Lỗi động cơ & hộp số", desc: "Máy giật, mất lực, tiêu hao nhiên liệu bất thường, đèn check engine sáng.", accent: "text-emerald-400", border: "border-emerald-400/20" },
  { title: "Lỗi gầm & hệ thống phanh", desc: "Tiếng kêu gầm, rung vô lăng, phanh kém ăn, xe lạng khi phanh gấp.", accent: "text-emerald-400", border: "border-emerald-400/20" },
  { title: "Lỗi điện & cảm biến", desc: "Điều hòa yếu, màn hình hỏng, đèn báo lỗi OBD2, camera lùi mất tín hiệu.", accent: "text-emerald-400", border: "border-emerald-400/20" },
  { title: "Sửa thân vỏ & móp méo", desc: "Nắn chỉnh thân vỏ sau va chạm, phục hồi kết cấu khung vỏ đúng tiêu chuẩn kỹ thuật.", accent: "text-emerald-400", border: "border-emerald-400/20" },
]

const STEPS = [
  { num: "1", title: "Nhận xe & mô tả triệu chứng", desc: "Ghi nhận tình trạng xe, lắng nghe mô tả từ chủ xe về triệu chứng và lịch sử hỏng hóc." },
  { num: "2", title: "Chẩn đoán bằng máy", desc: "Kết nối máy đọc lỗi OBD2, kiểm tra toàn bộ ECU và cảm biến. Kết hợp kiểm tra trực quan gầm và động cơ." },
  { num: "3", title: "Báo giá & xác nhận sửa", desc: "Trình bày lỗi tìm được, giải thích nguyên nhân và đề xuất phương án. Báo giá từng hạng mục, bạn đồng ý mới làm." },
  { num: "4", title: "Sửa chữa & kiểm tra lại", desc: "Thực hiện sửa chữa đúng quy trình, kiểm tra lại sau khi hoàn tất. Bàn giao kèm phiếu bảo hành." },
]

export default function SuaChuaMayGamPage() {
  return (
    <>
      <ServiceJsonLd
        name={SERVICE_NAME}
        description={SERVICE_DESC}
        slug="/dich-vu/sua-chua-may-gam"
        serviceType="Sửa chữa máy gầm ô tô"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", path: "/" },
          { name: "Dịch vụ", path: "/dich-vu" },
          { name: "Sửa chữa máy gầm", path: "/dich-vu/sua-chua-may-gam" },
        ]}
      />
      <style>{`
        @keyframes sc-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sc-k0 { animation: sc-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .sc-k1 { animation: sc-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s  both; }
        .sc-k2 { animation: sc-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s  both; }
        .sc-k3 { animation: sc-rise 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s  both; }
        .sc-grid-bg {
          background-image:
            linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px);
          background-size: 72px 72px;
        }
      `}</style>

      <div className="overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative flex min-h-[65vh] flex-col justify-center overflow-hidden px-4 pb-16 pt-12 md:px-12 lg:px-20">
          <div className="sc-grid-bg pointer-events-none absolute inset-0" aria-hidden />

          {/* Diagonal emerald slash */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div style={{ position: "absolute", width: "140%", height: "2px", top: "50%", left: "-20%", transform: "rotate(-8deg)", background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.45) 40%, rgba(16,185,129,0.85) 50%, rgba(16,185,129,0.45) 60%, transparent)", boxShadow: "0 0 70px 25px rgba(16,185,129,0.06)" }} />
            <div style={{ position: "absolute", width: "140%", height: "1px", top: "51.4%", left: "-20%", transform: "rotate(-8deg)", background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.18) 40%, rgba(16,185,129,0.35) 50%, rgba(16,185,129,0.18) 60%, transparent)" }} />
          </div>

          {/* Watermark */}
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] font-black leading-none text-white/[0.022]" style={{ fontSize: "clamp(150px,22vw,320px)" }} aria-hidden>01</span>

          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 40% at 20% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)" }} aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            {/* Breadcrumb */}
            <div className="sc-k0 mb-5 flex items-center gap-2 text-[0.65rem] text-slate-500">
              <Link href="/dich-vu" className="hover:text-emerald-400 transition-colors">Dịch vụ</Link>
              <span>/</span>
              <span className="text-emerald-400">Sửa chữa máy & gầm</span>
            </div>

            <div className="sc-k0 mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-emerald-400" />
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-emerald-400">01 — Sửa chữa ô tô</span>
            </div>

            <h1
              className="sc-k1 font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50"
              style={{ fontSize: "clamp(52px, 10vw, 120px)" }}
            >
              Sửa chữa
              <br />
              <span className="text-emerald-400">máy & gầm</span>
            </h1>

            <p className="sc-k2 mt-5 max-w-lg text-sm leading-relaxed text-slate-300/80 md:text-base">
              Chẩn đoán chính xác bằng máy đọc lỗi hiện đại.{" "}
              <strong className="font-semibold text-slate-50">Báo giá chi tiết trước khi sửa — không tự ý thay phụ tùng.</strong>
            </p>

            <div className="sc-k3 mt-7 flex flex-wrap gap-3">
              <a href="#dat-lich" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(16,185,129,0.28)] transition-all hover:-translate-y-0.5 hover:bg-emerald-300">
                Đặt lịch chẩn đoán miễn phí
              </a>
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-emerald-400/50">
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
                  src="/images/sua-chua.png"
                  alt="Sửa chữa máy gầm ô tô tại Thành Nam Auto"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-400">
                    Kiểm tra gầm & máy tại Thành Nam Auto
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">Cầu nâng hiện đại, kiểm tra toàn diện bên dưới gầm xe</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── COMMON ISSUES ── */}
        <section className="relative overflow-hidden py-12 px-4 md:py-20 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.3) 50%, transparent)" }} aria-hidden />

          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-emerald-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-emerald-400">Các lỗi thường gặp</span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-10"
                style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
              >
                Chúng tôi xử lý
                <br />
                <span className="text-emerald-400">những lỗi nào?</span>
              </h2>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-2">
              {ISSUES.map((v, i) => (
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
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.2) 50%, transparent)" }} aria-hidden />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(16,185,129,0.02) 0%, transparent 70%)" }} aria-hidden />

          <div className="relative z-10 mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-emerald-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-emerald-400">Quy trình sửa chữa</span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-10"
                style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
              >
                4 bước
                <br />
                <span className="text-emerald-400">từ chẩn đoán đến bàn giao</span>
              </h2>
            </ScrollReveal>

            <div className="relative">
              <div className="absolute left-8 right-8 top-[2rem] hidden h-px md:block" style={{ background: "linear-gradient(90deg, rgba(16,185,129,0.35), rgba(16,185,129,0.08) 50%, rgba(16,185,129,0.35))" }} aria-hidden />
              <div className="grid gap-6 md:grid-cols-4">
                {STEPS.map((s, i) => (
                  <ScrollReveal key={s.num} delay={i * 120}>
                    <div className="relative">
                      <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/50 bg-black shadow-[0_0_0_5px_rgba(2,6,23,1)]">
                        <span className="font-[family-name:var(--font-display)] font-black text-xl leading-none text-emerald-400">{s.num}</span>
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
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5 md:p-6">
                <div className="flex flex-wrap gap-6 md:gap-12 justify-center md:justify-start">
                  {[
                    { val: "OBD2", label: "Máy đọc lỗi hiện đại" },
                    { val: "100%", label: "Báo giá trước khi sửa" },
                    { val: "Không tự ý", label: "Thay phụ tùng khi chưa báo" },
                    { val: "Có BH", label: "Bảo hành sau bàn giao" },
                  ].map((s) => (
                    <div key={s.val} className="flex flex-col">
                      <span className="font-[family-name:var(--font-display)] font-black text-2xl leading-none text-emerald-400 md:text-3xl">{s.val}</span>
                      <span className="mt-1 text-[0.68rem] text-slate-400">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative overflow-hidden py-12 px-4 md:py-20 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.2) 50%, transparent)" }} aria-hidden />
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-emerald-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-emerald-400">Câu hỏi thường gặp</span>
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-10"
                style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
              >
                Khách hàng
                <br />
                <span className="text-emerald-400">hay hỏi gì?</span>
              </h2>
            </ScrollReveal>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  q: "Đèn check engine sáng có nguy hiểm không?",
                  a: "Đèn check engine sáng là tín hiệu cảnh báo từ hệ thống OBD2 của xe, báo hiệu có lỗi ở một hoặc nhiều cảm biến hay bộ phận. Không phải lúc nào cũng nguy hiểm ngay lập tức, nhưng không nên bỏ qua. Mang xe đến để kết nối máy đọc lỗi — chúng tôi xác định nguyên nhân chính xác và tư vấn phương án xử lý.",
                },
                {
                  q: "Xe bị rung vô lăng khi phanh là lỗi gì?",
                  a: "Rung vô lăng khi phanh thường do đĩa phanh bị vênh hoặc má phanh mòn không đều. Đây là lỗi ảnh hưởng trực tiếp đến an toàn lái xe, nên kiểm tra và xử lý sớm. Kỹ thuật viên sẽ kiểm tra toàn bộ hệ thống phanh và tư vấn thay thế đúng phụ tùng theo dòng xe.",
                },
                {
                  q: "Sửa máy ô tô có cần đặt lịch trước không?",
                  a: "Nên gọi trước để chúng tôi chuẩn bị cầu nâng và máy chẩn đoán. Tuy nhiên, nếu xe hỏng đột xuất giữa đường, hãy gọi ngay — chúng tôi hỗ trợ cứu hộ và sắp xếp tiếp nhận xe ưu tiên. Số điện thoại: 0388 476 247.",
                },
                {
                  q: "Thời gian sửa chữa máy ô tô mất bao lâu?",
                  a: "Tùy mức độ hỏng hóc. Các lỗi điện đơn giản hoặc thay phụ tùng có sẵn thường hoàn thành trong ngày. Sửa động cơ phức tạp hoặc cần đặt phụ tùng theo xe có thể mất 2–5 ngày. Chúng tôi thông báo tiến độ rõ ràng và liên hệ ngay khi có phát sinh để bạn chủ động sắp xếp.",
                },
                {
                  q: "Có thể tự thay phụ tùng mang đến nhờ lắp không?",
                  a: "Được. Nếu bạn đã mua phụ tùng, chúng tôi nhận lắp đặt và kiểm tra sau khi lắp. Tuy nhiên, chúng tôi khuyến cáo dùng phụ tùng đúng chủng loại theo khuyến cáo nhà sản xuất. Nếu không chắc, hãy để chúng tôi tư vấn và cung cấp phụ tùng — đảm bảo tương thích và có bảo hành.",
                },
                {
                  q: "Sau khi sửa có bảo hành không?",
                  a: "Có. Mỗi hạng mục sửa chữa đều đi kèm phiếu bảo hành ghi rõ thời hạn. Nếu trong thời gian bảo hành xe tái phát lỗi cũ liên quan đến hạng mục đã sửa, chúng tôi kiểm tra và xử lý miễn phí. Phiếu bảo hành được bàn giao cùng với xe sau khi hoàn tất sửa chữa.",
                },
              ].map((faq, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="rounded-2xl border border-emerald-400/15 bg-black/40 p-5 backdrop-blur">
                    <h3 className="mb-2 text-sm font-semibold leading-snug text-slate-50">{faq.q}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="dat-lich" className="relative overflow-hidden py-16 px-4 md:py-24 md:px-12 lg:px-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(16,185,129,0.05) 0%, transparent 70%)" }} aria-hidden />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.35) 50%, transparent)" }} aria-hidden />

          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal>
              <div className="mb-5 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-emerald-400" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-emerald-400">Đặt lịch chẩn đoán</span>
                <div className="h-px w-10 bg-emerald-400" />
              </div>
              <h2
                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-slate-50 mb-4"
                style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
              >
                Chẩn đoán
                <br />
                <span className="text-emerald-400">miễn phí</span>
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-slate-400">
                Mang xe đến — chúng tôi kết nối máy đọc lỗi và kiểm tra trực tiếp. Báo giá rõ ràng trước khi sửa bất kỳ hạng mục nào.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex flex-wrap justify-center gap-3">
                <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(16,185,129,0.28)] transition-all hover:-translate-y-0.5 hover:bg-emerald-300">
                  📞 Gọi ngay: 0388 476 247
                </a>
                <Link href="/dich-vu" className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-50 backdrop-blur transition-all hover:border-emerald-400/50">
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
