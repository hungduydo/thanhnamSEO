import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ Gara Thành Nam Oto | Xuân Lộc, Đồng Nai",
  description: "Thông tin liên hệ, địa chỉ và bản đồ dẫn đường đến Gara Thành Nam Oto tại Xuân Lộc, Đồng Nai.",
  alternates: { canonical: "/lien-he" },
};

export default function LienHePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-4 py-16">
      <h1 className="text-3xl font-semibold text-zinc-900">
        Liên hệ Thành Nam Oto
      </h1>
      <p className="text-zinc-700">
        Trang này sẽ chứa bản đồ, form đặt lịch và các nút hành động như &quot;Gọi
        ngay&quot; và &quot;Chỉ đường&quot; để khách hàng dễ liên hệ.
      </p>
      <p className="text-sm text-zinc-500">
        Ở giai đoạn sau, có thể tích hợp thêm Google Maps embed và form gửi yêu
        cầu.
      </p>
    </main>
  );
}

