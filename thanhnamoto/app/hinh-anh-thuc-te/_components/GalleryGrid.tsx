"use client";

import { useState } from "react";
import Image from "next/image";

const CATEGORIES = [
  { key: "all",      label: "Tất cả" },
  { key: "son-xe",   label: "Sơn xe" },
  { key: "sua-chua", label: "Sửa chữa" },
  { key: "noi-that", label: "Nội thất" },
];

type SpanKey = "wide" | "normal" | "half";

const SPAN_CLASS: Record<SpanKey, string> = {
  wide:   "col-span-2 md:col-span-4",
  normal: "col-span-1 md:col-span-2",
  half:   "col-span-1 md:col-span-3",
};

const TAG_CLASS: Record<string, string> = {
  "Sơn xe":    "bg-amber-400/15 border border-amber-400/35 text-amber-400",
  "Sửa chữa": "bg-emerald-400/12 border border-emerald-400/28 text-emerald-400",
  "Nội thất":  "bg-slate-400/10 border border-slate-400/22 text-slate-300",
};

const ITEMS: {
  id: number; num: string; src: string; alt: string;
  title: string; category: string; label: string;
  year: string; desc: string; span: SpanKey;
}[] = [
  {
    id: 1, num: "01", src: "/images/gallery/son-vios.png",
    alt: "Sơn phủ full xe Toyota Vios tại Thành Nam Auto",
    title: "Sơn phủ full Toyota Vios",
    category: "son-xe", label: "Sơn xe", year: "2025",
    desc: "Phục hồi toàn bộ lớp sơn phai màu, trầy xước nặng — sơn phòng kín tiêu chuẩn.",
    span: "wide",
  },
  {
    id: 2, num: "02", src: "/images/gallery/sua-honda.png",
    alt: "Sửa chữa động cơ Honda City tại Thành Nam Auto",
    title: "Sửa chữa máy Honda City",
    category: "sua-chua", label: "Sửa chữa", year: "2025",
    desc: "Chẩn đoán và đại tu hệ thống động cơ i-VTEC — xe vận hành êm ái như mới.",
    span: "normal",
  },
  {
    id: 3, num: "03", src: "/images/gallery/noi-that-mazda.png",
    alt: "Phục hồi nội thất Mazda CX-5 tại Thành Nam Auto",
    title: "Phục hồi nội thất Mazda CX-5",
    category: "noi-that", label: "Nội thất", year: "2025",
    desc: "Vệ sinh hơi nước nóng, phục hồi ghế da và đánh bóng nhựa nhám nội thất.",
    span: "normal",
  },
  {
    id: 4, num: "04", src: "/images/gallery/sua-gam-ranger.png",
    alt: "Sửa chữa hệ thống treo gầm Ford Ranger tại Thành Nam Auto",
    title: "Sửa gầm & phanh Ford Ranger",
    category: "sua-chua", label: "Sửa chữa", year: "2025",
    desc: "Kiểm tra và thay thế hệ thống treo, má phanh cho dòng xe bán tải chuyên dụng.",
    span: "normal",
  },
  {
    id: 5, num: "05", src: "/images/gallery/sua-dien.png",
    alt: "Sửa chữa hệ thống điện ô tô tại Thành Nam Auto",
    title: "Sửa điện & Taplo ô tô",
    category: "sua-chua", label: "Sửa chữa", year: "2025",
    desc: "Xử lý lỗi hệ thống điện, chập cháy dây dẫn và phục hồi bảng điều khiển taplo.",
    span: "normal",
  },
  {
    id: 6, num: "06", src: "/images/gallery/danh-bong-xe.png",
    alt: "Đánh bóng và phủ ceramic xe ô tô tại Thành Nam Auto",
    title: "Đánh bóng & Phủ Ceramic",
    category: "son-xe", label: "Sơn xe", year: "2024",
    desc: "Hiệu chỉnh bề mặt sơn, đánh bóng 3 bước và phủ lớp bảo vệ ceramic siêu bóng.",
    span: "normal",
  },
  {
    id: 7, num: "07", src: "/images/gallery/xuong-garage.png",
    alt: "Toàn cảnh xưởng sửa chữa Thành Nam Auto tại Xuân Lộc",
    title: "Hạ tầng xưởng hiện đại",
    category: "all", label: "Xưởng xe", year: "2024",
    desc: "Xưởng rộng rãi, trang bị đầy đủ cầu nâng và máy móc chẩn đoán lỗi tiên tiến.",
    span: "wide",
  },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <div>
      {/* ── Filter tabs ── */}
      <div
        className="flex flex-wrap gap-2 mb-8"
        role="tablist"
        aria-label="Lọc theo danh mục"
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.key;
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat.key)}
              className={[
                "px-4 py-1.5 rounded-full text-[0.72rem] font-semibold uppercase tracking-[0.08em] border transition-all duration-150 cursor-pointer",
                isActive
                  ? "bg-amber-400 border-amber-400 text-slate-950 shadow-[0_4px_16px_rgba(245,158,11,0.3)]"
                  : "border-white/10 text-slate-400 hover:border-amber-400/30 hover:text-amber-400 bg-transparent",
              ].join(" ")}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* ── Bento grid ── */}
      <div
        key={active}
        className="grid grid-cols-2 md:grid-cols-6 auto-rows-[200px] md:auto-rows-[260px] gap-3"
      >
        {filtered.map((item, i) => (
          <article
            key={item.id}
            className={[
              SPAN_CLASS[item.span],
              "relative rounded-md overflow-hidden bg-slate-950 border border-white/[0.06] cursor-pointer group",
              "animate-[gallery-card-in_0.45s_cubic-bezier(0.22,1,0.36,1)_both]",
            ].join(" ")}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Ghost catalogue number */}
            <span
              aria-hidden="true"
              className="absolute bottom-[-0.1em] right-2 z-[2] pointer-events-none select-none font-[family-name:var(--font-display)] font-black text-[7rem] leading-none tracking-[-0.06em] text-white/[0.04]"
              style={{ fontFamily: "var(--font-display),system-ui,sans-serif" }}
            >
              {item.num}
            </span>

            {/* Image */}
            <div className="absolute inset-0 z-[1]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
            </div>

            {/* Category tag */}
            <span
              className={[
                "absolute top-3 left-3 z-[4] px-2.5 py-[0.22rem] rounded-full text-[0.6rem] font-bold tracking-[0.1em] uppercase backdrop-blur-sm",
                TAG_CLASS[item.label] ?? "",
              ].join(" ")}
            >
              {item.label}
            </span>

            {/* Hover overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[3] flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(to top, rgba(2,6,23,0.97) 0%, rgba(2,6,23,0.8) 40%, rgba(2,6,23,0.1) 75%, transparent 100%)",
              }}
            >
              <div className="p-4 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <p className="text-[0.56rem] font-semibold tracking-[0.28em] uppercase text-amber-400 mb-1">
                  {item.year}
                </p>
                <h3
                  className="font-black text-[clamp(0.9rem,2vw,1.1rem)] uppercase tracking-[0.02em] text-[#f5f0e8] leading-[1.1] mb-1.5"
                  style={{ fontFamily: "var(--font-display),system-ui,sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[0.72rem] text-slate-400 leading-relaxed mb-2.5 line-clamp-2">
                  {item.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-amber-400">
                  Xem chi tiết
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 6.5h8M7 3L10.5 6.5 7 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-16 text-center text-slate-500 text-sm">
          Chưa có hình ảnh trong danh mục này.
        </div>
      )}
    </div>
  );
}
