import Image from "next/image";

/**
 * Hero V2 — DIAGONAL CUT
 *
 * Racing livery / high-performance aesthetic:
 * - Pure dark left side with editorial left-aligned text
 * - Real garage photo panel on the right, clipped with a
 *   sharp diagonal (clip-path polygon) — aggressive angular cut
 * - Signature amber glow slash at the diagonal boundary,
 *   skewed to match the clip, with radial glow bloom
 * - Subtle diagonal speed lines in the left background
 * - Stats strip at the bottom
 */
export function HeroV2() {
  return (
    <section className="hv2">
      {/* ── Left background atmosphere ── */}
      <div className="hv2-speed-bg" />

      {/* ── Right diagonal photo panel ── */}
      <div className="hv2-photo-panel">
        <Image
          src="/images/sua-chua.png"
          alt="Sửa chữa thân vỏ ô tô tại gara Thành Nam Oto"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ── The amber glow slash at the diagonal cut ── */}
      <div className="hv2-slash" />

      {/* ── Editorial text — left side ── */}
      <div className="hv2-content garage-hero-stagger">
        {/* Amber accent bar */}
        <div className="hv2-accent-bar" />

        <p className="hv2-kicker">Gara ô tô cá nhân · Xuân Lộc, Đồng Nai</p>

        <h1 className="hv2-h1">
          <span className="block">GARA SỬA CHỮA</span>
          <span className="hv2-h1-amber">&amp; CHĂM SÓC</span>
          <span className="block">Ô TÔ CÁ NHÂN</span>
        </h1>

        <div className="hv2-tagline">
          <span>LÀM ĐÚNG</span>
          <span style={{ color: "rgba(100,116,139,0.38)" }}>·</span>
          <span>BÁO GIÁ RÕ</span>
          <span style={{ color: "rgba(100,116,139,0.38)" }}>·</span>
          <span>CÓ BẢO HÀNH</span>
        </div>

        <p className="hv2-desc">
          Sửa chữa – Sơn xe – Bảo dưỡng định kỳ. Báo giá trước, không phát
          sinh chi phí, có bảo hành bằng văn bản.
        </p>

        <div className="flex flex-wrap gap-3 mt-1">
          <a
            href="#dat-lich"
            className="garage-primary-cta inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_46px_rgba(0,0,0,0.95)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-300"
          >
            🔴 Đặt lịch sửa xe
          </a>
          <a
            href="tel:0388476247"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-amber-400/60 hover:bg-white/10"
          >
            📞 Gọi tư vấn ngay
          </a>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="hero-stats-strip" style={{ position: "relative", zIndex: 5 }}>
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
