import type { Metadata } from "next";
import { BASE_URL } from "@/app/lib/constants";
import { CONTACT } from "@/app/lib/contact";

export const metadata: Metadata = {
  title: "Liên hệ Gara Thành Nam Auto | Xuân Lộc, Đồng Nai",
  description:
    "Liên hệ Gara Thành Nam Auto qua điện thoại, Zalo hoặc Facebook. Địa chỉ: Trần Nhân Tông, Khu Phố 8, tt. Gia Ray, Xuân Lộc, Đồng Nai. Mở cửa 7 ngày/tuần.",
  alternates: { canonical: `${BASE_URL}/lien-he` },
};

const HOURS = [
  { days: "Thứ 2 – Thứ 6", hours: "07:30 – 17:30", highlight: true },
  { days: "Thứ 7", hours: "07:30 – 17:00", highlight: false },
  { days: "Chủ nhật", hours: "08:00 – 12:00", highlight: false },
];

const TRUST_ITEMS = [
  { icon: "🔧", label: "Báo giá trước khi làm", sub: "Không phát sinh ngoài thỏa thuận" },
  { icon: "🛡️", label: "Bảo hành bằng văn bản", sub: "Rõ ràng, minh bạch" },
  { icon: "📅", label: "Đặt lịch linh hoạt", sub: "Mở cửa 7 ngày / tuần" },
  { icon: "🚗", label: "Tập trung xe cá nhân", sub: "Ô tô gia đình & cá nhân" },
];

export default function LienHePage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/5">
        {/* Atmospheric glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 8% 0%, rgba(245,158,11,0.13) 0%, transparent 55%), radial-gradient(ellipse at 88% 0%, rgba(16,185,129,0.08) 0%, transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          {/* Kicker */}
          <div className="hero-kicker mb-5">Gara ô tô Xuân Lộc, Đồng Nai</div>

          <h1
            className="text-[clamp(2.8rem,8vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-slate-50"
            style={{ fontFamily: "var(--font-display),system-ui,sans-serif", fontWeight: 900 }}
          >
            Liên hệ &amp;{" "}
            <span style={{ color: "var(--clr-amber)" }}>Đặt lịch</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-400">
            Gọi điện, nhắn Zalo hoặc ghé trực tiếp gara. Chúng tôi tư vấn và báo
            giá miễn phí — không phát sinh ngoài thỏa thuận.
          </p>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.55fr] lg:gap-8">

          {/* ── Left column: contact cards ── */}
          <div className="flex flex-col gap-5">

            {/* Hotline — hero card */}
            <a
              href={CONTACT.phoneHref}
              className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 transition-all duration-200 hover:border-amber-400/45 hover:bg-amber-400/10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 25% 50%, rgba(245,158,11,0.09) 0%, transparent 70%)",
                }}
              />
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-amber-400/70">
                Hotline
              </p>
              <p
                className="mt-1 text-[clamp(2rem,4.5vw,2.8rem)] font-black leading-none tracking-tight text-amber-400"
                style={{ fontFamily: "var(--font-display),system-ui,sans-serif", fontWeight: 900 }}
              >
                {CONTACT.phoneDisplay}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Nhấn để gọi ngay — hỗ trợ 7 ngày / tuần
              </p>
              <span className="garage-primary-cta mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold text-slate-950 shadow-[0_8px_24px_rgba(245,158,11,0.28)] transition-colors group-hover:bg-amber-300">
                📞 Gọi ngay
              </span>
            </a>

            {/* Zalo & Facebook */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={CONTACT.zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start gap-2 rounded-xl border border-sky-400/20 bg-sky-400/5 p-4 transition-all hover:border-sky-400/45 hover:bg-sky-400/10"
              >
                <span className="text-2xl" aria-hidden>💬</span>
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-sky-400">
                  Zalo
                </span>
                <span className="text-[0.7rem] text-slate-400">Nhắn tin tư vấn</span>
                <span className="mt-auto text-[0.65rem] text-sky-400/60 underline underline-offset-2">
                  Chat ngay →
                </span>
              </a>

              {/* TODO: thay href bằng URL fanpage thực tế */}
              <a
                href={CONTACT.fbHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start gap-2 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 transition-all hover:border-blue-400/45 hover:bg-blue-500/10"
              >
                <span className="text-2xl" aria-hidden>📘</span>
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-blue-400">
                  Facebook
                </span>
                <span className="text-[0.7rem] text-slate-400">Theo dõi fanpage</span>
                <span className="mt-auto text-[0.65rem] text-blue-400/60 underline underline-offset-2">
                  Xem trang →
                </span>
              </a>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-white/7 bg-white/[0.025] p-5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Địa chỉ gara
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-200">
                {CONTACT.addressStreet}<br />
                {CONTACT.addressCity}, {CONTACT.addressRegion}
              </p>
              <a
                href={CONTACT.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 px-3 py-1 text-[0.68rem] font-semibold text-emerald-400 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10"
              >
                📍 Mở Google Maps
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-xl border border-white/7 bg-white/[0.025] p-5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Giờ làm việc
              </p>
              <div className="mt-3.5 flex flex-col gap-2.5">
                {HOURS.map(({ days, hours, highlight }) => (
                  <div key={days} className="flex items-center justify-between gap-2 text-sm">
                    <span className={highlight ? "text-slate-200" : "text-slate-400"}>
                      {days}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={
                        highlight
                          ? {
                              background: "rgba(245,158,11,0.15)",
                              color: "var(--clr-amber)",
                            }
                          : {
                              background: "rgba(148,163,184,0.08)",
                              color: "var(--clr-steel)",
                            }
                      }
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column: Google Maps ── */}
          <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-white/8 lg:min-h-[560px]">
            {/* Amber top accent line */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-0 z-10 h-[2px]"
              style={{
                background:
                  "linear-gradient(to right, var(--clr-amber), rgba(245,158,11,0.4) 60%, transparent)",
              }}
            />

            {/* Map iframe — dark-filtered to match theme */}
            <iframe
              src={CONTACT.mapsEmbedSrc}
              title="Bản đồ Gara Thành Nam Auto"
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: "block",
                minHeight: "inherit",
                filter: "invert(90%) hue-rotate(180deg) grayscale(0.15)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom overlay label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 py-4">
              <p className="text-xs font-semibold text-slate-300">
                📍 {CONTACT.addressFull}
              </p>
              <a
                href={CONTACT.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-[0.68rem] text-amber-400 hover:text-amber-300"
              >
                Mở bản đồ đầy đủ →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ─────────────────────────────────────── */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {TRUST_ITEMS.map(({ icon, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-1.5 rounded-xl border border-white/6 bg-white/[0.02] p-4"
              >
                <span className="text-xl" aria-hidden>
                  {icon}
                </span>
                <p className="text-xs font-semibold text-slate-200">{label}</p>
                <p className="text-[0.65rem] text-slate-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
