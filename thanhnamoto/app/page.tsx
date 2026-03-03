import Image from "next/image";
import { HeroV1 } from "./components/HeroV1";
import { HeroV2 } from "./components/HeroV2";
import { HeroV3 } from "./components/HeroV3";

export default function Home() {
  return (
    <>
      {/* <HeroV1 /> */}
      <HeroV2 />
      {/* ═══════════════════════════════════════════════════
          SERVICES — 3 cards with numbered watermarks
      ═══════════════════════════════════════════════════ */}
      <section id="dich-vu" className="home-section">
        <div className="space-y-1.5">
          <p className="home-section-kicker">Dịch vụ chính</p>
          <h2 className="home-section-title">
            Sửa chữa – Sơn xe – Bảo dưỡng cho xe cá nhân
          </h2>
        </div>

        <div className="home-grid-3 mt-6">
          {/* Card 1 — Sửa chữa */}
          <article className="home-card">
            <span className="home-card-bg-num" aria-hidden="true">01</span>
            <p className="relative z-10 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Sửa chữa ô tô
            </p>
            <h3 className="relative z-10 mt-1 text-lg font-semibold leading-snug text-slate-50">
              Kiểm tra, chẩn đoán &amp; sửa chữa chính xác
            </h3>
            <p className="relative z-10 mt-2 text-sm text-slate-200/70">
              Khu vực hiển thị ảnh thật: thợ + máy chẩn đoán, xe đang trên cầu
              nâng.
            </p>
            <ul className="relative z-10 mt-3 space-y-1.5 text-sm text-slate-100/85">
              <li>· Kiểm tra – chẩn đoán rõ lỗi trước khi sửa</li>
              <li>· Báo giá chi tiết, khách đồng ý mới tiến hành</li>
              <li>· Không tự ý thay đồ khi chưa thông báo</li>
            </ul>
            <a
              href="/dich-vu/sua-chua-may-gam"
              className="relative z-10 mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              Xem chi tiết →
            </a>
          </article>

          {/* Card 2 — Sơn xe */}
          <article className="home-card">
            <span className="home-card-bg-num" aria-hidden="true">02</span>
            <p className="relative z-10 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-amber-300">
              Sơn xe &amp; chăm sóc
            </p>
            <h3 className="relative z-10 mt-1 text-lg font-semibold leading-snug text-slate-50">
              Phòng sơn kín, phục hồi xe trầy xước
            </h3>
            <p className="relative z-10 mt-2 text-sm text-slate-200/70">
              Khu vực hiển thị ảnh phòng sơn, đánh bóng, phủ ceramic — before /
              after.
            </p>
            <ul className="relative z-10 mt-3 space-y-1.5 text-sm text-slate-100/85">
              <li>· Phòng sơn khép kín, hạn chế bụi</li>
              <li>· Màu chuẩn theo code, bền màu theo thời gian</li>
              <li>· Phục hồi xe trầy xước, móp, cấn</li>
            </ul>
            <a
              href="/dich-vu/son-xe-o-to"
              className="relative z-10 mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-300 hover:text-amber-200"
            >
              Xem chi tiết →
            </a>
          </article>

          {/* Card 3 — Bảo dưỡng */}
          <article className="home-card">
            <span className="home-card-bg-num" aria-hidden="true">03</span>
            <p className="relative z-10 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sky-300">
              Bảo dưỡng định kỳ
            </p>
            <h3 className="relative z-10 mt-1 text-lg font-semibold leading-snug text-slate-50">
              Gói bảo dưỡng cho xe cá nhân &amp; gia đình
            </h3>
            <p className="relative z-10 mt-2 text-sm text-slate-200/70">
              Khu vực hiển thị ảnh thay dầu, kiểm tra gầm — phù hợp xe đi lại
              hàng ngày.
            </p>
            <ul className="relative z-10 mt-3 space-y-1.5 text-sm text-slate-100/85">
              <li>· Thay dầu, lọc, kiểm tra tổng thể</li>
              <li>· Nhắc lịch bảo dưỡng theo km</li>
              <li>· Tư vấn gói phù hợp xe gia đình</li>
            </ul>
            <a
              href="/dich-vu/bao-duong-dinh-ky"
              className="relative z-10 mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-300 hover:text-sky-200"
            >
              Xem chi tiết →
            </a>
          </article>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST — Vì sao khách chọn chúng tôi
      ═══════════════════════════════════════════════════ */}
      <section className="home-section">
        <div className="space-y-1.5">
          <p className="home-section-kicker">Lý do lựa chọn</p>
          <h2 className="home-section-title">
            Vì sao chủ xe cá nhân chọn Thành Nam Oto?
          </h2>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="trust-card">
            <p className="text-sm font-semibold text-emerald-300">
              Báo giá rõ ràng
            </p>
            <p className="mt-1 text-sm text-slate-300/75">
              Báo giá trước, chi tiết từng hạng mục — không mập mờ, không phát
              sinh ngoài thỏa thuận.
            </p>
          </div>
          <div className="trust-card">
            <p className="text-sm font-semibold text-amber-300">
              Làm tới đâu báo tới đó
            </p>
            <p className="mt-1 text-sm text-slate-300/75">
              Mỗi bước đều thông báo, chụp hình nếu cần — giúp bạn nắm rõ tình
              trạng xe.
            </p>
          </div>
          <div className="trust-card">
            <p className="text-sm font-semibold text-sky-300">
              Đúng hẹn &amp; có bảo hành
            </p>
            <p className="mt-1 text-sm text-slate-300/75">
              Không giữ xe quá hẹn, có phiếu bảo hành bằng văn bản sau khi bàn
              giao.
            </p>
          </div>
          <div className="trust-card md:col-span-2">
            <p className="text-sm font-semibold text-rose-300">
              Không luộc đồ — không thay khi chưa báo
            </p>
            <p className="mt-1 text-sm text-slate-300/75">
              Tuyệt đối không thay phụ tùng khi chưa được sự đồng ý. Ưu tiên
              phương án tối ưu chi phí nhưng vẫn an toàn cho xe.
            </p>
          </div>
          <div className="trust-card">
            <p className="text-sm font-semibold text-lime-300">
              Tập trung xe cá nhân
            </p>
            <p className="mt-1 text-sm text-slate-300/75">
              Tối ưu cho nhu cầu đi làm, đưa đón gia đình — không nhồi nhét quá
              nhiều xe cùng lúc.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROCESS — 4-step timeline
      ═══════════════════════════════════════════════════ */}
      <section id="quy-trinh" className="home-section">
        <div className="space-y-1.5">
          <p className="home-section-kicker">Quy trình làm xe</p>
          <h2 className="home-section-title">
            4 bước minh bạch từ nhận xe đến bàn giao
          </h2>
        </div>

        <div className="home-timeline">
          <div className="home-timeline-step">
            <span className="home-timeline-step-number">1</span>
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Nhận xe – kiểm tra tình trạng
            </h3>
            <p className="mt-1 text-sm text-slate-300/75">
              Kiểm tra tổng thể, ghi nhận vết trầy, móp, tình trạng hiện tại để
              tránh nhầm lẫn sau khi làm.
            </p>
          </div>
          <div className="home-timeline-step">
            <span className="home-timeline-step-number">2</span>
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Báo giá – xác nhận sửa chữa
            </h3>
            <p className="mt-1 text-sm text-slate-300/75">
              Giải thích hạng mục cần làm, đưa ra mức chi phí rõ ràng, chỉ tiến
              hành khi bạn đồng ý.
            </p>
          </div>
          <div className="home-timeline-step">
            <span className="home-timeline-step-number">3</span>
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Tiến hành sửa / sơn / bảo dưỡng
            </h3>
            <p className="mt-1 text-sm text-slate-300/75">
              Thực hiện đúng quy trình kỹ thuật, cập nhật tiến độ khi có hạng
              mục phát sinh cần cân nhắc thêm.
            </p>
          </div>
          <div className="home-timeline-step">
            <span className="home-timeline-step-number">4</span>
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Bàn giao – hướng dẫn – bảo hành
            </h3>
            <p className="mt-1 text-sm text-slate-300/75">
              Kiểm tra lần cuối, hướng dẫn cách giữ gìn, bàn giao phiếu bảo
              hành và hẹn lịch kiểm tra lại nếu cần.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          GALLERY — Real work photos
      ═══════════════════════════════════════════════════ */}
      <section id="thu-vien" className="home-section">
        <div className="space-y-1.5">
          <p className="home-section-kicker">Hình ảnh thực tế</p>
          <h2 className="home-section-title">
            Một số ca phục hồi xe thực tế
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-slate-300/70">
          Ảnh thực tế tại gara: sơn xe, chăm sóc nội thất, sửa chữa thân vỏ.
          Mỗi ca đều có báo giá rõ trước và bàn giao kèm bảo hành.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {(
            [
              {
                src: "/images/son-xe.png",
                label: "Sơn xe – phòng sơn kín",
                accent: "text-amber-300",
                border: "hover:border-amber-400/40",
              },
              {
                src: "/images/sua-chua.png",
                label: "Sửa chữa thân vỏ",
                accent: "text-emerald-300",
                border: "hover:border-emerald-400/40",
              },
              {
                src: "/images/noi-that.png",
                label: "Chăm sóc nội thất",
                accent: "text-sky-300",
                border: "hover:border-sky-400/40",
              },
            ] as {
              src: string;
              label: string;
              accent: string;
              border: string;
            }[]
          ).map(({ src, label, accent, border }) => (
            <div
              key={src}
              className={`group relative h-56 overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 ${border}`}
            >
              <Image
                src={src}
                alt={label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Label overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-8">
                <p
                  className={`text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${accent}`}
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BOOKING — Quick form
      ═══════════════════════════════════════════════════ */}
      <section id="dat-lich" className="home-section pb-16">
        <div className="space-y-1.5">
          <p className="home-section-kicker">Đặt lịch nhanh</p>
          <h2 className="home-section-title">
            Gửi yêu cầu sửa chữa &amp; chăm sóc xe
          </h2>
        </div>
        <p className="mt-3 max-w-xl text-sm text-slate-300/70">
          Điền thông tin ngắn gọn, chúng tôi sẽ gọi lại tư vấn và xác nhận
          lịch trong giờ làm việc. Bạn cũng có thể đính kèm ảnh tình trạng xe
          để được ước lượng nhanh hơn.
        </p>

        <form className="mt-6 grid gap-4 rounded-2xl border border-white/8 bg-black/50 p-5 backdrop-blur md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-400">Họ tên</label>
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full rounded-lg border border-slate-700/50 bg-black/50 px-3 py-2.5 text-sm text-slate-50 outline-none placeholder:text-slate-600 focus:border-amber-400/70 focus:ring-1 focus:ring-amber-400/20 transition"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-400">
              Số điện thoại
            </label>
            <input
              type="tel"
              placeholder="09xx xxx xxx"
              className="w-full rounded-lg border border-slate-700/50 bg-black/50 px-3 py-2.5 text-sm text-slate-50 outline-none placeholder:text-slate-600 focus:border-amber-400/70 focus:ring-1 focus:ring-amber-400/20 transition"
            />
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-medium text-slate-400">
              Dịch vụ quan tâm
            </label>
            <select className="w-full rounded-lg border border-slate-700/50 bg-black/50 px-3 py-2.5 text-sm text-slate-50 outline-none focus:border-amber-400/70 focus:ring-1 focus:ring-amber-400/20 transition">
              <option value="">Chọn dịch vụ</option>
              <option value="sua-chua">Sửa chữa / cứu hộ</option>
              <option value="son-xe">Sơn xe &amp; làm đẹp</option>
              <option value="bao-duong">Bảo dưỡng định kỳ</option>
            </select>
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-medium text-slate-400">
              Ghi chú thêm (tuỳ chọn)
            </label>
            <textarea
              rows={3}
              placeholder="Mô tả nhanh tình trạng xe hoặc mong muốn của bạn…"
              className="w-full resize-none rounded-lg border border-slate-700/50 bg-black/50 px-3 py-2.5 text-sm text-slate-50 outline-none placeholder:text-slate-600 focus:border-amber-400/70 focus:ring-1 focus:ring-amber-400/20 transition"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 md:col-span-2">
            <button
              type="submit"
              className="garage-primary-cta inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(0,0,0,0.9)] hover:bg-amber-300 transition-colors"
            >
              🔴 Gửi yêu cầu
            </button>
            <a
              href="tel:0388476247"
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-50 backdrop-blur transition hover:border-emerald-400/60 hover:bg-white/10"
            >
              📞 Gọi ngay
            </a>
          </div>
        </form>
      </section>
    </>
  );
}
