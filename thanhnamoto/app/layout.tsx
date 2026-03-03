import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

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

export const metadata: Metadata = {
  title: "Gara sửa chữa & chăm sóc ô tô | Thành Nam Oto Xuân Lộc",
  description:
    "Gara sửa chữa, sơn xe và bảo dưỡng định kỳ cho xe ô tô cá nhân tại Xuân Lộc, Đồng Nai. Báo giá rõ ràng, không phát sinh, có bảo hành bằng văn bản.",
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
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/60 bg-black/60 text-sm font-semibold text-amber-300 shadow-[0_0_18px_rgba(0,0,0,0.9)]">
                  TN
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-wide">
                    Thành Nam Oto
                  </span>
                  <span className="text-xs text-slate-400">
                    Gara sửa chữa &amp; chăm sóc ô tô cá nhân
                  </span>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
                <a href="#hero" className="header-link">
                  Trang chủ
                </a>
                <a href="#dich-vu" className="header-link">
                  Dịch vụ
                </a>
                <a href="#quy-trinh" className="header-link">
                  Quy trình
                </a>
                <a href="#thu-vien" className="header-link">
                  Thư viện
                </a>
                <a href="#dat-lich" className="header-link">
                  Đặt lịch
                </a>
                <a
                  href="#lien-he"
                  className="header-link"
                >
                  Liên hệ
                </a>
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

          <footer
            id="lien-he"
            className="mt-16 border-t border-white/10 bg-black/60 py-10 text-sm text-slate-300"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:justify-between md:px-6 lg:px-8">
              <div>
                <h2 className="text-base font-semibold text-slate-50">
                  Thành Nam Oto
                </h2>
                <p className="mt-2 max-w-sm text-sm text-slate-400">
                  Gara sửa chữa, sơn xe và chăm sóc xe ô tô cá nhân tại Xuân
                  Lộc, Đồng Nai. Làm đúng hẹn, báo giá rõ ràng, có bảo hành.
                </p>
              </div>
              <div className="space-y-1">
                <p>Địa chỉ: Trần Nhân Tông, Khu Phố 8, Xuân Lộc, Đồng Nai</p>
                <p>Điện thoại: 0388 476 247</p>
                <p>Giờ làm việc: 08:00 – 17:30 (Thứ 2 – Chủ nhật)</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Liên hệ trực tuyến
                </p>
                <div className="flex flex-wrap gap-2">
                  <button className="rounded-full border border-sky-400/60 px-3 py-1.5 text-xs font-semibold text-sky-300">
                    Zalo
                  </button>
                  <button className="rounded-full border border-sky-400/60 px-3 py-1.5 text-xs font-semibold text-sky-300">
                    Messenger
                  </button>
                  <button className="rounded-full border border-slate-500/60 px-3 py-1.5 text-xs font-semibold text-slate-200">
                    Facebook
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Thành Nam Oto. Website tối ưu với
              Next.js &amp; Vercel.
            </p>
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
