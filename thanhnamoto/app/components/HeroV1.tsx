import Image from "next/image";

/**
 * Hero V1 — CINEMATIC DARK
 *
 * Real garage photo as full-bleed background with:
 * - Ken Burns slow zoom (28s ease-out alternate)
 * - CRT scanline texture overlay (automotive dashboard vibe)
 * - Radial vignette pulling focus to center
 * - Warm amber glow at the bottom (workshop light feel)
 * - Centered Barlow Condensed 900 title with glow text-shadow
 * - Horizontal rule divider with ambient amber lines
 * - Stats strip pinned to viewport bottom
 */
export function HeroV1() {
  return (
    <section className="hv1">
      {/* ── Background photo — Ken Burns zoom ── */}
      <div className="hv1-photo-wrap">
        <Image
          src="/images/son-xe.png"
          alt="Thợ sơn xe ô tô tại gara Thành Nam Oto Xuân Lộc"
          fill
          priority
          className="object-cover object-center hv1-zoom"
        />
      </div>

      {/* ── Visual treatment layers ── */}
      <div className="hv1-overlay" />
      <div className="hv1-scanlines" />
      <div className="hv1-vignette" />
      <div className="hv1-amber-glow" />

      {/* ── Main editorial content ── */}
      <div className="hv1-content garage-hero-stagger">
        <p className="hv1-kicker">GARA Ô TÔ · XUÂN LỘC · ĐỒNG NAI</p>

        <h1 className="hv1-h1">
          <span className="block">GARA SỬA CHỮA</span>
          <span className="hv1-h1-amber">&amp; CHĂM SÓC Ô TÔ</span>
        </h1>

        {/* Horizontal divider with label */}
        <div className="hv1-divider">
          <div className="hv1-divider-line" />
          <span className="hv1-divider-label">CHO XE CÁ NHÂN</span>
          <div className="hv1-divider-line" />
        </div>

        <p className="hv1-desc">
          Sửa chữa – Sơn xe – Bảo dưỡng định kỳ · Báo giá rõ ràng, không
          phát sinh, có bảo hành bằng văn bản để bạn yên tâm giao xe.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-1">
          <a
            href="#dat-lich"
            className="garage-primary-cta inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-300"
          >
            🔴 Đặt lịch sửa xe
          </a>
          <a
            href="tel:0388476247"
            className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-black/52 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:border-amber-400/60 hover:bg-black/60"
          >
            📞 Gọi tư vấn ngay
          </a>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="hero-stats-strip" style={{ position: "relative", zIndex: 4 }}>
        <div className="hero-stats-inner">
          <div className="hero-stat">
            <p className="hero-stat-number">5+</p>
            <p className="hero-stat-label">Năm kinh nghiệm</p>
          </div>
          <div className="hero-stat">
            <p className="hero-stat-number">500+</p>
            <p className="hero-stat-label">Xe đã phục vụ</p>
          </div>
          <div className="hero-stat">
            <p className="hero-stat-number">100%</p>
            <p className="hero-stat-label">Báo giá minh bạch</p>
          </div>
          <div className="hero-stat">
            <p className="hero-stat-number">0đ</p>
            <p className="hero-stat-label">Phát sinh ngoài thỏa thuận</p>
          </div>
        </div>
      </div>
    </section>
  );
}
