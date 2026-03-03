import Image from "next/image";

/**
 * Hero V3 — PANORAMIC MAGAZINE
 *
 * Luxury automotive magazine editorial aesthetic:
 * - Three real garage photos laid out as a contact-sheet mosaic
 *   anchored to the bottom of the viewport, each photo fading
 *   upward into the pure-black background
 * - Full-width amber racing stripe exactly at the mosaic boundary —
 *   the single most dramatic element on the page
 * - Large centred Barlow Condensed editorial title floating above
 * - An amber badge pill with flanking lines between the two
 *   headline lines (classic mag-cover typographic trick)
 * - Stats strip at the bottom
 */
export function HeroV3() {
  return (
    <section className="hv3">
      {/* ── Three-image panoramic mosaic ── */}
      <div className="hv3-mosaic">
        <div className="hv3-mosaic-item">
          <Image
            src="/images/son-xe.png"
            alt="Sơn xe ô tô tại gara Thành Nam"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="hv3-mosaic-item">
          <Image
            src="/images/sua-chua.png"
            alt="Sửa chữa ô tô tại gara Thành Nam"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="hv3-mosaic-item">
          <Image
            src="/images/noi-that.png"
            alt="Chăm sóc nội thất ô tô tại gara Thành Nam"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ── The racing stripe — most memorable element ── */}
      <div className="hv3-racing-stripe" />

      {/* ── Editorial centred content ── */}
      <div className="hv3-content garage-hero-stagger">
        <p className="hv3-eyebrow">Gara ô tô · Xuân Lộc · Đồng Nai</p>

        <h1 className="hv3-h1">GARA SỬA CHỮA</h1>

        {/* Amber badge between the two headline lines */}
        <div className="hv3-badge-row">
          <div className="hv3-badge-line" />
          <span className="hv3-badge">CHO XE CÁ NHÂN</span>
          <div className="hv3-badge-line" />
        </div>

        <p className="hv3-h1-amber">&amp; CHĂM SÓC Ô TÔ</p>

        <p className="hv3-sub">
          Sửa chữa · Sơn xe · Bảo dưỡng định kỳ
          <span style={{ margin: "0 0.5rem", color: "rgba(100,116,139,0.4)" }}>—</span>
          Báo giá rõ · Không phát sinh · Có bảo hành
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <a
            href="#dat-lich"
            className="garage-primary-cta inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-300"
          >
            🔴 Đặt lịch sửa xe
          </a>
          <a
            href="tel:0388476247"
            className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-black/48 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:border-amber-400/60"
          >
            📞 Gọi tư vấn ngay
          </a>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="hero-stats-strip" style={{ position: "relative", zIndex: 6 }}>
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
