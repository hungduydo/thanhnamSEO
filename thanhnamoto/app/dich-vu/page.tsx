import Link from "next/link";

export default function DichVuPage() {
  return (
    <main className="pb-16">
      {/* Section 1 – Hero hub dịch vụ */}
      <section className="home-section pt-16">
        <div className="max-w-3xl space-y-4">
          <p className="home-section-kicker">Danh mục dịch vụ</p>
          <h1 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl">
            Dịch vụ sửa chữa &amp; chăm sóc ô tô tại Xuân Lộc
          </h1>
          <p className="max-w-xl text-sm text-slate-200/85 sm:text-base">
            Sửa chữa, sơn xe và bảo dưỡng định kỳ cho xe ô tô cá nhân. Tất cả
            dịch vụ được thiết kế minh bạch: báo giá rõ ràng, không phát sinh,
            có bảo hành sau khi bàn giao xe.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="#cta-cuoi"
              className="garage-primary-cta inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(0,0,0,0.9)] hover:bg-amber-300"
            >
              🔴 Đặt lịch dịch vụ
            </Link>
            <a
              href="tel:0988000000"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-50 backdrop-blur hover:border-amber-400/70 hover:bg-white/10"
            >
              📞 Gọi tư vấn ngay
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 – Grid dịch vụ chính */}
      <section className="home-section">
        <div className="space-y-2">
          <p className="home-section-kicker">Danh sách dịch vụ chính</p>
          <h2 className="home-section-title">
            Chọn dịch vụ phù hợp cho xe của bạn
          </h2>
        </div>

        <div className="home-grid-3 mt-6">
          <article className="home-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              /dich-vu/son-xe-o-to
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-50">
              Sơn xe ô tô
            </h3>
            <p className="mt-2 text-sm text-slate-200/80">
              Sơn dặm, sơn lại toàn bộ hoặc đổi màu cho xe cá nhân, đi kèm quy
              trình phòng sơn kín và hình ảnh before / after rõ ràng.
            </p>
            <Link
              href="/dich-vu/son-xe-o-to"
              className="mt-4 inline-flex text-sm font-semibold text-amber-300"
            >
              Xem chi tiết
            </Link>
          </article>

          <article className="home-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              /dich-vu/bao-duong-dinh-ky
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-50">
              Bảo dưỡng định kỳ
            </h3>
            <p className="mt-2 text-sm text-slate-200/80">
              Các gói bảo dưỡng theo mốc km cho xe gia đình, giúp xe vận hành
              ổn định và phát hiện sớm các vấn đề tiềm ẩn.
            </p>
            <Link
              href="/dich-vu/bao-duong-dinh-ky"
              className="mt-4 inline-flex text-sm font-semibold text-emerald-300"
            >
              Xem chi tiết
            </Link>
          </article>

          <article className="home-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
              /dich-vu/sua-chua-may-gam
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-50">
              Sửa chữa máy &amp; gầm
            </h3>
            <p className="mt-2 text-sm text-slate-200/80">
              Xử lý các lỗi về máy, gầm, điện bằng máy chẩn đoán hiện đại, ưu
              tiên an toàn và độ bền cho xe của bạn.
            </p>
            <Link
              href="/dich-vu/sua-chua-may-gam"
              className="mt-4 inline-flex text-sm font-semibold text-sky-300"
            >
              Xem chi tiết
            </Link>
          </article>
        </div>
      </section>

      {/* Section 3 – Cam kết dịch vụ */}
      <section className="home-section">
        <div className="space-y-2">
          <p className="home-section-kicker">Cam kết dịch vụ</p>
          <h2 className="home-section-title">
            Minh bạch cho chủ xe cá nhân
          </h2>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-semibold text-emerald-300">
              Báo giá trước khi làm
            </p>
            <p className="mt-1 text-sm text-slate-200/80">
              Luôn thống nhất chi phí từng hạng mục trước khi tiến hành, không
              phát sinh ngoài thỏa thuận.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-semibold text-amber-300">
              Không thay phụ tùng khi chưa báo
            </p>
            <p className="mt-1 text-sm text-slate-200/80">
              Mọi đề xuất thay thế đều được giải thích rõ ràng và chỉ thực hiện
              khi bạn đồng ý.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-semibold text-sky-300">
              Có bảo hành rõ ràng
            </p>
            <p className="mt-1 text-sm text-slate-200/80">
              Mỗi dịch vụ đều có phiếu bảo hành bằng văn bản, ghi nhận hạng mục
              đã thực hiện.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-semibold text-lime-300">
              Tập trung xe ô tô cá nhân
            </p>
            <p className="mt-1 text-sm text-slate-200/80">
              Quy trình được tối ưu cho nhu cầu đi lại hàng ngày của gia đình,
              không nhồi nhét quá nhiều xe cùng lúc.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 – CTA cuối trang */}
      <section
        id="cta-cuoi"
        className="home-section pt-10"
      >
        <div className="rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-400/20 via-black/60 to-emerald-400/10 px-6 py-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.95)] md:px-10 md:py-8">
          <p className="home-section-kicker mb-1">
            Cần tư vấn chọn dịch vụ?
          </p>
          <h2 className="text-balance text-2xl font-semibold text-slate-50 sm:text-3xl">
            Bạn cần tư vấn dịch vụ phù hợp cho xe?
          </h2>
          <p className="mt-2 text-sm text-slate-200/85">
            Gửi yêu cầu hoặc gọi trực tiếp, chúng tôi sẽ giúp bạn chọn đúng
            dịch vụ, đúng nhu cầu và ngân sách.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:0988000000"
              className="garage-primary-cta inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(0,0,0,0.9)] hover:bg-amber-300"
            >
              📞 Gọi ngay
            </a>
            <Link
              href="/#dat-lich"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-50 backdrop-blur hover:border-emerald-400/70 hover:bg-white/10"
            >
              🔴 Đặt lịch kiểm tra
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

