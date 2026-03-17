import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { BASE_URL } from "@/app/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = BASE_URL;
const DEFAULT_TITLE = "Gara sửa chữa & chăm sóc ô tô | Thành Nam Auto Xuân Lộc";
const DEFAULT_DESC =
  "Gara sửa chữa, sơn xe và bảo dưỡng định kỳ cho xe ô tô cá nhân tại Xuân Lộc, Đồng Nai. Báo giá rõ ràng, không phát sinh, có bảo hành bằng văn bản.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESC,
  openGraph: {
    siteName: "Thành Nam Auto",
    locale: "vi_VN",
    type: "website",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    url: SITE_URL,
    images: [
      {
        url: "/og-default.jpg", // TODO: replace with a real 1200×630 OG image
        width: 1200,
        height: 630,
        alt: "Thành Nam Auto — Gara sửa chữa & chăm sóc ô tô Xuân Lộc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} antialiased`}
      >
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#020617,_#020617_45%,_#000_100%)] text-slate-50">
          <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amber-400/60 bg-black/60 shadow-[0_0_18px_rgba(0,0,0,0.9)]">
                  <Image
                    src="/logo.png"
                    alt="Thành Nam Auto Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-wide">
                    Thành Nam Auto
                  </span>
                  <span className="text-xs text-slate-400">
                    Gara sửa chữa &amp; chăm sóc ô tô cá nhân
                  </span>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
                <Link href="/" className="header-link">
                  Trang chủ
                </Link>
                <Link href="/dich-vu" className="header-link">
                  Dịch vụ
                </Link>
                <Link href="/tin-tuc" className="header-link">
                  Tin tức
                </Link>
                <Link href="/hinh-anh-thuc-te" className="header-link">
                  Hình ảnh
                </Link>
                <Link href="/lien-he" className="header-link">
                  Liên hệ
                </Link>
                <a
                  href="tel:0388476247"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(0,0,0,0.8)] hover:bg-amber-300"
                >
                  📞 Gọi ngay
                </a>
              </nav>

              <div className="flex items-center gap-2 md:hidden">
                <a
                  href="tel:0388476247"
                  className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_10px_24px_rgba(0,0,0,0.85)]"
                >
                  📞 Gọi ngay
                </a>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer id="lien-he" className="site-footer">
            <div className="site-footer-inner">
              {/* ── Main grid: Brand | Sitemap | Contact ── */}
              <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.4fr] md:gap-8">

                {/* Brand column */}
                <div className="flex flex-col gap-4">
                  <Link href="/" className="flex items-center gap-3 w-fit">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amber-400/40 bg-black/60 shadow-[0_0_18px_rgba(0,0,0,0.9)]">
                      <Image
                        src="/logo.png"
                        alt="Thành Nam Auto Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="fn-display text-base font-800 tracking-wide text-slate-50 uppercase leading-none" style={{fontFamily:"var(--font-display),system-ui,sans-serif",fontWeight:800,letterSpacing:"0.04em"}}>
                        Thành Nam Auto
                      </span>
                      <span className="text-[0.65rem] text-slate-500 tracking-widest uppercase mt-0.5">
                        Gara ô tô Xuân Lộc
                      </span>
                    </div>
                  </Link>
                  <p className="text-[0.82rem] text-slate-400 leading-relaxed max-w-[18rem]">
                    Sửa chữa, sơn xe và bảo dưỡng ô tô cá nhân tại Xuân Lộc, Đồng Nai.
                    Báo giá rõ ràng, đúng hẹn, bảo hành bằng văn bản.
                  </p>
                  {/* Social pills */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    <a href="https://zalo.me/0388476247" target="_blank" rel="noopener noreferrer" className="footer-social-pill">
                      <span>💬</span> Zalo
                    </a>
                    <a href="#" className="footer-social-pill">
                      <span>📘</span> Facebook
                    </a>
                    <a href="#" className="footer-social-pill">
                      <span>✉️</span> Messenger
                    </a>
                  </div>
                </div>

                {/* Sitemap — Dịch vụ */}
                <nav aria-label="Dịch vụ">
                  <p className="footer-col-label">Dịch vụ</p>
                  <ul className="flex flex-col gap-2.5">
                    <li>
                      <Link href="/dich-vu" className="footer-link">
                        Tất cả dịch vụ
                      </Link>
                    </li>
                    <li>
                      <Link href="/dich-vu/son-xe-o-to" className="footer-link footer-link-sub">
                        Sơn xe ô tô
                      </Link>
                    </li>
                    <li>
                      <Link href="/dich-vu/bao-duong-dinh-ky" className="footer-link footer-link-sub">
                        Bảo dưỡng định kỳ
                      </Link>
                    </li>
                    <li>
                      <Link href="/dich-vu/sua-chua-may-gam" className="footer-link footer-link-sub">
                        Sửa chữa máy gầm
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* Sitemap — Thông tin */}
                <nav aria-label="Thông tin">
                  <p className="footer-col-label">Thông tin</p>
                  <ul className="flex flex-col gap-2.5">
                    <li>
                      <Link href="/" className="footer-link">Trang chủ</Link>
                    </li>
                    <li>
                      <Link href="/tin-tuc" className="footer-link">Tin tức</Link>
                    </li>
                    <li>
                      <Link href="/hinh-anh-thuc-te" className="footer-link">Hình ảnh thực tế</Link>
                    </li>
                    <li>
                      <Link href="/lien-he" className="footer-link">Liên hệ</Link>
                    </li>
                  </ul>
                </nav>

                {/* Contact */}
                <div>
                  <p className="footer-col-label">Liên hệ</p>
                  <div className="flex flex-col gap-3">
                    <div className="footer-contact-row">
                      <i className="footer-contact-icon">📍</i>
                      <span>Trần Nhân Tông, Khu Phố 8, tt. Gia Ray, Xuân Lộc, Đồng Nai</span>
                    </div>
                    <div className="footer-contact-row">
                      <i className="footer-contact-icon">📞</i>
                      <a href="tel:0388476247" className="footer-link" style={{fontSize:"0.82rem"}}>
                        0388 476 247
                      </a>
                    </div>
                    <div className="footer-contact-row">
                      <i className="footer-contact-icon">🕐</i>
                      <span>08:00 – 17:30<br />Thứ 2 – Chủ nhật</span>
                    </div>
                    <div className="mt-2">
                      <a
                        href="tel:0388476247"
                        className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_8px_24px_rgba(245,158,11,0.25)] hover:bg-amber-300 transition-colors"
                      >
                        Gọi đặt lịch ngay
                      </a>
                    </div>
                  </div>
                </div>

              </div>{/* /grid */}
            </div>

            {/* ── Bottom bar ── */}
            <div className="site-footer-bottom">
              <p className="site-footer-copy">
                © {new Date().getFullYear()} Thành Nam Auto — Gara ô tô Xuân Lộc, Đồng Nai
              </p>
              <div className="site-footer-tech">
                <span className="site-footer-tech-dot" />
                Next.js
                <span className="site-footer-tech-dot" />
                Vercel
                <span className="site-footer-tech-dot" />
                Local SEO
              </div>
            </div>
          </footer>

          <a
            href="tel:0388476247"
            className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(0,0,0,0.95)] ring-2 ring-emerald-300/60 md:hidden"
          >
            📞 Gọi gara
          </a>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
