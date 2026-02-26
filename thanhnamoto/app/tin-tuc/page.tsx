export default function TinTucPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 py-16">
      <h1 className="text-3xl font-semibold text-zinc-900">
        Tin tức &amp; kinh nghiệm chăm sóc xe
      </h1>
      <p className="text-zinc-700">
        Đây là nơi tập trung các bài viết chia sẻ kiến thức, mẹo vặt về bảo
        dưỡng, sửa chữa và chăm sóc xe, phục vụ nhóm từ khóa &quot;Thông tin
        (Traffic)&quot;.
      </p>
      <p className="text-sm text-zinc-500">
        Ở giai đoạn sau, route này sẽ được mở rộng thành danh sách bài viết và
        các trang chi tiết <code>/tin-tuc/[slug]</code>.
      </p>
    </main>
  );
}

