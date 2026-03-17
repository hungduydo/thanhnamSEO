import type { Metadata } from "next";
import { BASE_URL } from "@/app/lib/constants";
import { CONTACT } from "@/app/lib/contact";
import GalleryGrid from "./_components/GalleryGrid";

export const metadata: Metadata = {
  title: "Hình ảnh thực tế tại Gara | Thành Nam Auto",
  description:
    "Thư viện hình ảnh thực tế các dòng xe đã được sơn xe, sửa chữa máy gầm và phục hồi nội thất tại Gara Thành Nam Auto, Xuân Lộc, Đồng Nai.",
  alternates: { canonical: `${BASE_URL}/hinh-anh-thuc-te` },
};

export default function HinhAnhThucTePage() {
  return (
    <div className="min-h-screen">
      {/* ── Page header ── */}
      <header className="relative max-w-[72rem] mx-auto px-[clamp(1.25rem,4vw,2.5rem)] pt-[clamp(5rem,10vh,7rem)] pb-[clamp(2.5rem,4vh,3.5rem)] overflow-hidden">
        {/* Amber vertical rule — left accent */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-16 bottom-8 w-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #f59e0b 20%, #10b981 80%, transparent)",
          }}
        />

        <div className="pl-5">
          {/* Kicker */}
          <p className="flex items-center gap-3 text-[0.6rem] font-semibold tracking-[0.34em] uppercase text-amber-400/70 mb-5">
            <span
              aria-hidden="true"
              className="flex-none w-7 h-px"
              style={{ background: "linear-gradient(to right, rgba(245,158,11,0.5), transparent)" }}
            />
            Thành Nam Auto · Xuân Lộc
            <span
              aria-hidden="true"
              className="flex-none w-7 h-px"
              style={{ background: "linear-gradient(to left, rgba(245,158,11,0.5), transparent)" }}
            />
          </p>

          {/* Title */}
          <h1 className="flex flex-col leading-[0.88] mb-5">
            <span
              className="font-black uppercase tracking-[-0.02em] text-white/[0.16]"
              style={{
                fontFamily: "var(--font-display),system-ui,sans-serif",
                fontSize: "clamp(3.5rem,9vw,7rem)",
              }}
            >
              Hình ảnh
            </span>
            <span
              className="relative font-black uppercase tracking-[-0.02em] text-[#f5f0e8] w-fit"
              style={{
                fontFamily: "var(--font-display),system-ui,sans-serif",
                fontSize: "clamp(3.5rem,9vw,7rem)",
              }}
            >
              Thực tế
              {/* Amber underline — grows in */}
              <span
                aria-hidden="true"
                className="absolute bottom-[0.08em] left-0 right-0 h-1 rounded-sm animate-[gallery-accent-grow_0.6s_0.3s_cubic-bezier(0.22,1,0.36,1)_both]"
                style={{ background: "linear-gradient(to right, #f59e0b, #10b981)" }}
              />
            </span>
          </h1>

          {/* Sub */}
          <p className="text-[0.88rem] text-slate-400 max-w-[34rem] leading-relaxed mb-7">
            Những công trình hoàn thiện tại xưởng — từ sơn xe, sửa chữa đến phục hồi nội thất.
          </p>

          {/* Stats bar */}
          <div className="flex items-center gap-5 flex-wrap">
            {[
              { num: "7+",   label: "Công trình" },
              { num: "3",    label: "Danh mục" },
              { num: "100%", label: "Thực tế" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-5">
                {i > 0 && (
                  <div aria-hidden="true" className="w-px h-8 bg-white/[0.08]" />
                )}
                <div className="flex flex-col gap-0.5">
                  <span
                    className="font-black text-[1.4rem] leading-none tracking-[-0.02em] text-amber-400"
                    style={{ fontFamily: "var(--font-display),system-ui,sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-slate-500">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Gallery ── */}
      <section className="px-[clamp(1.25rem,4vw,2.5rem)] pb-[clamp(3rem,6vw,5rem)]">
        <div className="max-w-[72rem] mx-auto">
          <GalleryGrid />
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section
        className="border-t border-white/[0.06]"
        style={{ background: "linear-gradient(to right, rgba(245,158,11,0.04), transparent 60%)" }}
      >
        <div className="max-w-[72rem] mx-auto px-[clamp(1.25rem,4vw,2.5rem)] py-10 flex items-center justify-between gap-6 flex-wrap">
          <p
            className="font-black uppercase tracking-[0.02em] text-[#f5f0e8]"
            style={{
              fontFamily: "var(--font-display),system-ui,sans-serif",
              fontSize: "clamp(1.1rem,3vw,1.6rem)",
            }}
          >
            Xe của bạn cần được chăm sóc?
          </p>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-400 text-slate-950 text-[0.82rem] font-bold tracking-[0.05em] shadow-[0_8px_28px_rgba(245,158,11,0.28)] hover:bg-amber-300 hover:shadow-[0_12px_36px_rgba(245,158,11,0.4)] transition-all whitespace-nowrap"
          >
            Đặt lịch ngay — 0388 476 247
          </a>
        </div>
      </section>
    </div>
  );
}
