export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 px-4 py-16 text-center sm:px-8">
      <h1 className="text-3xl font-semibold text-zinc-900">
        Thành Nam Oto – Gara ô tô tại Xuân Lộc, Đồng Nai
      </h1>
      <p className="max-w-2xl text-lg text-zinc-700">
        Website đang được xây dựng lại bằng Next.js &amp; Vercel để tối ưu Local
        SEO, tốc độ tải trang và trải nghiệm khách hàng trên mobile.
      </p>
      <nav className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
        <a
          href="/dich-vu"
          className="rounded-full bg-zinc-900 px-5 py-2 text-white hover:bg-zinc-800"
        >
          Xem dịch vụ / Services
        </a>
        <a
          href="/tin-tuc"
          className="rounded-full border border-zinc-300 px-5 py-2 text-zinc-800 hover:bg-white"
        >
          Tin tức &amp; kinh nghiệm
        </a>
        <a
          href="/hinh-anh-thuc-te"
          className="rounded-full border border-zinc-300 px-5 py-2 text-zinc-800 hover:bg-white"
        >
          Hình ảnh thực tế
        </a>
        <a
          href="/lien-he"
          className="rounded-full border border-zinc-300 px-5 py-2 text-zinc-800 hover:bg-white"
        >
          Liên hệ / Contact
        </a>
      </nav>
      <p className="text-sm text-zinc-500">
        Cấu trúc route được mô tả trong <code>docs/sitemap.md</code> và sẽ được
        mở rộng ở các giai đoạn tiếp theo.
      </p>
    </main>
  );
}
