export default function DichVuPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-4 py-16">
      <h1 className="text-3xl font-semibold text-zinc-900">
        Dịch vụ tại Thành Nam Oto
      </h1>
      <p className="text-zinc-700">
        Đây là trang danh mục tổng hợp các dịch vụ chính của gara. Mỗi dịch vụ
        bên dưới sẽ có một trang riêng theo đúng sitemap trong{" "}
        <code>docs/sitemap.md</code>.
      </p>
      <ul className="grid gap-4 md:grid-cols-3">
        <li className="rounded-lg border border-zinc-200 p-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            Sơn xe ô tô / Car Painting
          </h2>
          <p className="mt-2 text-sm text-zinc-700">
            Quy trình sơn, sơn dặm, đổi màu, kèm hình ảnh before/after.
          </p>
          <a
            href="/dich-vu/son-xe-o-to"
            className="mt-3 inline-block text-sm font-medium text-zinc-900 underline"
          >
            Xem chi tiết
          </a>
        </li>
        <li className="rounded-lg border border-zinc-200 p-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            Bảo dưỡng định kỳ / Maintenance
          </h2>
          <p className="mt-2 text-sm text-zinc-700">
            Các gói bảo dưỡng theo mốc km cho nhiều dòng xe.
          </p>
          <a
            href="/dich-vu/bao-duong-dinh-ky"
            className="mt-3 inline-block text-sm font-medium text-zinc-900 underline"
          >
            Xem chi tiết
          </a>
        </li>
        <li className="rounded-lg border border-zinc-200 p-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            Sửa chữa máy gầm / Repair
          </h2>
          <p className="mt-2 text-sm text-zinc-700">
            Máy đọc lỗi, xử lý sự cố về máy, gầm, điện cho xe.
          </p>
          <a
            href="/dich-vu/sua-chua-may-gam"
            className="mt-3 inline-block text-sm font-medium text-zinc-900 underline"
          >
            Xem chi tiết
          </a>
        </li>
      </ul>
    </main>
  );
}

