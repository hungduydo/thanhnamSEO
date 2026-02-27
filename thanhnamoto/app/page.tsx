export default function Home() {
  return (
    <>
      {/* 2. Hero – niềm tin & CTA nhanh */}
      <section id="hero" className="garage-hero">
        <div className="garage-hero-noise" />

        <div className="home-section !pt-16 md:!pt-20 garage-hero-stagger relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-5">
            <p className="home-section-kicker">Gara sửa chữa &amp; chăm sóc ô tô cá nhân</p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-[2.9rem]">
              GARA SỬA CHỮA &amp; CHĂM SÓC Ô TÔ
              <span className="mt-2 block text-xl font-normal text-slate-300 sm:text-2xl">
                CHO XE CÁ NHÂN – LÀM ĐÚNG, BÁO GIÁ RÕ
              </span>
            </h1>
            <p className="max-w-xl text-pretty text-base text-slate-200/85 sm:text-lg">
              Sửa chữa – Sơn xe – Bảo dưỡng định kỳ cho xe cá nhân. Báo giá
              trước, không phát sinh chi phí, có bảo hành bằng văn bản để bạn
              yên tâm giao xe.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#dat-lich"
                className="garage-primary-cta inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-300"
              >
                🔴 Đặt lịch sửa xe
              </a>
              <a
                href="tel:0988000000"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium text-slate-50 backdrop-blur hover:border-amber-400/70 hover:bg-white/10"
              >
                📞 Gọi tư vấn ngay
              </a>
            </div>
          </div>

          <div className="relative mt-8 flex flex-1 justify-center md:mt-0">
            <div className="garage-orbit" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="pointer-events-auto grid w-full max-w-md gap-4 px-4">
                <article className="garage-chip rounded-2xl border border-white/15 bg-black/70 p-4 text-left shadow-[0_22px_48px_rgba(0,0,0,0.95)] backdrop-blur">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                    Hình ảnh / video thật gara
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    Khu vực hiển thị ảnh hoặc video ngắn: xe đang vào cầu nâng,
                    thợ đang kiểm tra, sơn xe – không dùng stock.
                  </p>
                </article>
                <article className="garage-chip rounded-2xl border border-amber-400/30 bg-black/70 p-4 text-left shadow-[0_22px_48px_rgba(0,0,0,0.95)] backdrop-blur">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber-300">
                    Cam kết cho chủ xe cá nhân
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    Làm tới đâu báo tới đó – không luộc đồ – không phát sinh chi
                    phí ngoài báo giá đã thống nhất.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dịch vụ chính – 3 cột */}
      <section id="dich-vu" className="home-section">
        <div className="space-y-2">
          <p className="home-section-kicker">Dịch vụ chính</p>
          <h2 className="home-section-title">
            Sửa chữa – Sơn xe – Bảo dưỡng cho xe cá nhân
          </h2>
        </div>

        <div className="home-grid-3 mt-6">
          <article className="home-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Sửa chữa ô tô
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-50">
              Kiểm tra, chẩn đoán &amp; sửa chữa chính xác
            </h3>
            <p className="mt-2 text-sm text-slate-200/80">
              Khu vực hiển thị ảnh thật: thợ + máy chẩn đoán, xe đang trên cầu
              nâng.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-100">
              <li>• Kiểm tra – chẩn đoán rõ lỗi trước khi sửa</li>
              <li>• Báo giá chi tiết, khách đồng ý mới tiến hành</li>
              <li>• Không tự ý thay đồ khi chưa thông báo</li>
            </ul>
            <a
              href="/dich-vu/sua-chua-may-gam"
              className="mt-4 inline-flex text-sm font-semibold text-emerald-300"
            >
              Xem chi tiết
            </a>
          </article>

          <article className="home-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Sơn xe &amp; chăm sóc
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-50">
              Phòng sơn kín, phục hồi xe trầy xước
            </h3>
            <p className="mt-2 text-sm text-slate-200/80">
              Khu vực hiển thị ảnh phòng sơn, đánh bóng, phủ ceramic – before /
              after.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-100">
              <li>• Phòng sơn khép kín, hạn chế bụi</li>
              <li>• Màu chuẩn theo code, bền màu theo thời gian</li>
              <li>• Phục hồi xe trầy xước, móp, cấn</li>
            </ul>
            <a
              href="/dich-vu/son-xe-o-to"
              className="mt-4 inline-flex text-sm font-semibold text-amber-300"
            >
              Xem chi tiết
            </a>
          </article>

          <article className="home-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
              Bảo dưỡng định kỳ
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-50">
              Gói bảo dưỡng cho xe cá nhân &amp; gia đình
            </h3>
            <p className="mt-2 text-sm text-slate-200/80">
              Khu vực hiển thị ảnh thay dầu, kiểm tra gầm – phù hợp nhu cầu đi
              lại hàng ngày.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-100">
              <li>• Thay dầu, lọc, kiểm tra tổng thể</li>
              <li>• Nhắc lịch bảo dưỡng theo km</li>
              <li>• Tư vấn gói phù hợp xe cá nhân &amp; gia đình</li>
            </ul>
            <a
              href="/dich-vu/bao-duong-dinh-ky"
              className="mt-4 inline-flex text-sm font-semibold text-sky-300"
            >
              Xem chi tiết
            </a>
          </article>
        </div>
      </section>

      {/* 4. Vì sao khách chọn chúng tôi */}
      <section className="home-section">
        <div className="space-y-2">
          <p className="home-section-kicker">Lý do lựa chọn</p>
          <h2 className="home-section-title">
            Vì sao chủ xe cá nhân chọn Thành Nam Oto?
          </h2>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-semibold text-emerald-300">
              Báo giá rõ ràng
            </p>
            <p className="mt-1 text-sm text-slate-200/80">
              Báo giá trước, chi tiết từng hạng mục – không mập mờ, không phát
              sinh ngoài thỏa thuận.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-semibold text-amber-300">
              Làm tới đâu báo tới đó
            </p>
            <p className="mt-1 text-sm text-slate-200/80">
              Mỗi bước đều thông báo, chụp hình nếu cần – giúp bạn nắm rõ tình
              trạng xe.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-semibold text-sky-300">
              Đúng hẹn &amp; có bảo hành
            </p>
            <p className="mt-1 text-sm text-slate-200/80">
              Không giữ xe quá hẹn, có phiếu bảo hành bằng văn bản sau khi bàn
              giao.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 md:col-span-2">
            <p className="text-sm font-semibold text-rose-300">
              Không luộc đồ – không thay khi chưa báo
            </p>
            <p className="mt-1 text-sm text-slate-200/80">
              Tuyệt đối không thay phụ tùng khi chưa được sự đồng ý; ưu tiên
              phương án tối ưu chi phí nhưng vẫn an toàn cho xe.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm font-semibold text-lime-300">
              Tập trung xe cá nhân
            </p>
            <p className="mt-1 text-sm text-slate-200/80">
              Tối ưu cho nhu cầu đi làm, đưa đón gia đình – không nhồi nhét quá
              nhiều xe.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Quy trình làm xe – timeline */}
      <section id="quy-trinh" className="home-section">
        <div className="space-y-2">
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
            <p className="mt-1 text-sm text-slate-200/80">
              Kiểm tra tổng thể, ghi nhận vết trầy, móp, tình trạng hiện tại để
              tránh nhầm lẫn sau khi làm.
            </p>
          </div>
          <div className="home-timeline-step">
            <span className="home-timeline-step-number">2</span>
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Báo giá – xác nhận sửa chữa
            </h3>
            <p className="mt-1 text-sm text-slate-200/80">
              Giải thích hạng mục cần làm, đưa ra mức chi phí rõ ràng, chỉ tiến
              hành khi bạn đồng ý.
            </p>
          </div>
          <div className="home-timeline-step">
            <span className="home-timeline-step-number">3</span>
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Tiến hành sửa / sơn / bảo dưỡng
            </h3>
            <p className="mt-1 text-sm text-slate-200/80">
              Thực hiện đúng quy trình kỹ thuật, cập nhật tiến độ khi có hạng
              mục phát sinh cần cân nhắc thêm.
            </p>
          </div>
          <div className="home-timeline-step">
            <span className="home-timeline-step-number">4</span>
            <h3 className="mt-3 text-sm font-semibold text-slate-50">
              Bàn giao – hướng dẫn – bảo hành
            </h3>
            <p className="mt-1 text-sm text-slate-200/80">
              Kiểm tra lần cuối, hướng dẫn cách giữ gìn, bàn giao phiếu bảo
              hành và hẹn lịch kiểm tra lại nếu cần.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Before / After – thư viện hình ảnh */}
      <section id="thu-vien" className="home-section">
        <div className="space-y-2">
          <p className="home-section-kicker">Before / After</p>
          <h2 className="home-section-title">
            Một số ca phục hồi xe thực tế
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm text-slate-200/80">
          Khu vực slider so sánh trước / sau cho 3–6 ca thực tế: xe trầy xước
          được sơn lại, xe móp được nắn phục hồi, nội thất cũ được vệ sinh lại.
          Tạm thời dùng ảnh placeholder, sau này thay bằng ảnh chụp thật tại
          gara.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative h-40 overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(135deg,_#020617,_#0f172a_40%,_#1e293b)]"
            >
              <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Case {i} – Placeholder
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Đặt lịch nhanh – form ngắn */}
      <section id="dat-lich" className="home-section pb-16">
        <div className="space-y-2">
          <p className="home-section-kicker">Đặt lịch nhanh</p>
          <h2 className="home-section-title">
            Gửi yêu cầu sửa chữa &amp; chăm sóc xe
          </h2>
        </div>
        <p className="mt-3 max-w-xl text-sm text-slate-200/80">
          Điền thông tin ngắn gọn, chúng tôi sẽ gọi lại tư vấn và xác nhận lịch
          trong giờ làm việc. Bạn cũng có thể đính kèm ảnh tình trạng xe để
          được ước lượng nhanh hơn.
        </p>
        <form className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Họ tên
            </label>
            <input
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full rounded-lg border border-slate-600/60 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-amber-400/80"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Số điện thoại
            </label>
            <input
              type="tel"
              placeholder="09xx xxx xxx"
              className="w-full rounded-lg border border-slate-600/60 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-amber-400/80"
            />
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-medium text-slate-200">
              Dịch vụ quan tâm
            </label>
            <select className="w-full rounded-lg border border-slate-600/60 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none focus:border-amber-400/80">
              <option value="">Chọn dịch vụ</option>
              <option value="sua-chua">Sửa chữa / cứu hộ</option>
              <option value="son-xe">Sơn xe &amp; làm đẹp</option>
              <option value="bao-duong">Bảo dưỡng định kỳ</option>
            </select>
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-medium text-slate-200">
              Ghi chú thêm (tuỳ chọn)
            </label>
            <textarea
              rows={3}
              placeholder="Mô tả nhanh tình trạng xe hoặc mong muốn của bạn…"
              className="w-full resize-none rounded-lg border border-slate-600/60 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-amber-400/80"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 md:col-span-2">
            <button
              type="submit"
              className="garage-primary-cta inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(0,0,0,0.9)] hover:bg-amber-300"
            >
              🔴 Gửi yêu cầu
            </button>
            <a
              href="tel:0988000000"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-50 backdrop-blur hover:border-emerald-400/70 hover:bg-white/10"
            >
              📞 Gọi ngay
            </a>
          </div>
        </form>
      </section>
    </>
  );
}
