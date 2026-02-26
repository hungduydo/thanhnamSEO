export default function Home() {
  return (
    <div className="garage-hero">
      <div className="garage-hero-noise" />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:items-center md:justify-between md:gap-16 md:px-10 lg:px-12">
        {/* Left: Hero copy */}
        <section className="garage-hero-stagger z-10 flex max-w-xl flex-col gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-300/90 shadow-[0_0_30px_rgba(0,0,0,0.75)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            <span>Next.js • Vercel • Local SEO</span>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Gara ô tô Thành Nam
            <span className="block text-2xl font-normal text-slate-300 sm:text-3xl">
              Tối ưu cho khách hàng tại Xuân Lộc, Đồng Nai
            </span>
          </h1>

          <p className="max-w-xl text-pretty text-base text-slate-200/80 sm:text-lg">
            Website mới của gara được xây dựng với Next.js App Router, tối ưu
            tốc độ tải, cấu trúc URL và trải nghiệm trên mobile – để mỗi lượt
            tìm kiếm &quot;sửa ô tô Xuân Lộc&quot; trở thành một cơ hội khách
            hàng thật.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="/lien-he"
              className="garage-primary-cta inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Gọi tư vấn gara ngay
              <span className="text-xs text-slate-900/80">
                Phản hồi trong giờ làm việc
              </span>
            </a>
            <a
              href="/dich-vu"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-slate-50 backdrop-blur hover:border-amber-400/70 hover:bg-white/10"
            >
              Xem toàn bộ dịch vụ
            </a>
          </div>

          <dl className="mt-6 grid max-w-md grid-cols-3 gap-3 text-xs text-slate-300/80 sm:text-sm">
            <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-3">
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Tối ưu địa phương
              </dt>
              <dd className="mt-1 text-sm font-semibold text-emerald-400">
                Xuân Lộc • Đồng Nai
              </dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-3">
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Công nghệ
              </dt>
              <dd className="mt-1 text-sm font-semibold text-amber-300">
                Next.js App Router
              </dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-3">
              <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Triển khai
              </dt>
              <dd className="mt-1 text-sm font-semibold text-sky-300">
                Vercel Edge Network
              </dd>
            </div>
          </dl>
        </section>

        {/* Right: Orbital model of services */}
        <section className="relative z-10 mt-10 flex flex-1 items-center justify-center md:mt-0">
          <div className="garage-orbit" />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-auto grid w-full max-w-md grid-cols-2 gap-4 px-4">
              <article
                className="garage-chip rounded-2xl border border-emerald-400/30 bg-black/60 p-4 text-left shadow-[0_20px_40px_rgba(0,0,0,0.9)] backdrop-blur"
                style={{ "--delay": "0s" } as React.CSSProperties}
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Cứu hộ &amp; sửa chữa
                </p>
                <p className="mt-1 text-sm text-slate-100">
                  Ưu tiên hiển thị với các truy vấn &quot;gara ô tô gần đây
                  nhất&quot;, &quot;cứu hộ ô tô Đồng Nai&quot;.
                </p>
              </article>

              <article
                className="garage-chip rounded-2xl border border-amber-400/30 bg-black/60 p-4 text-left shadow-[0_20px_40px_rgba(0,0,0,0.9)] backdrop-blur"
                style={{ "--delay": "0.4s" } as React.CSSProperties}
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber-300">
                  Sơn &amp; thẩm mỹ
                </p>
                <p className="mt-1 text-sm text-slate-100">
                  Tập trung từ khóa sơn đổi màu, xóa trầy, phủ ceramic, với
                  gallery before/after ấn tượng.
                </p>
              </article>

              <article
                className="garage-chip rounded-2xl border border-sky-400/40 bg-black/60 p-4 text-left shadow-[0_20px_40px_rgba(0,0,0,0.9)] backdrop-blur md:col-span-2"
                style={{ "--delay": "0.8s" } as React.CSSProperties}
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Nội dung &amp; Local SEO
                </p>
                <p className="mt-1 text-sm text-slate-100">
                  Chiến lược từ khóa, sitemap và LocalBusiness Schema được mô tả
                  chi tiết trong <code>docs/</code>, đồng bộ với cấu trúc
                  Next.js App Router.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
