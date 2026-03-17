import type { Metadata } from "next";
import { BASE_URL } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Hình ảnh thực tế tại Gara | Thành Nam Auto",
  description: "Thư viện hình ảnh thực tế các dòng xe đã được sửa chữa và chăm sóc tại Gara Thành Nam Auto.",
  alternates: { canonical: `${BASE_URL}/hinh-anh-thuc-te` },
};

export default function HinhAnhThucTePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-4 py-16">
      <h1 className="text-3xl font-semibold text-zinc-900">
        Hình ảnh thực tế tại gara
      </h1>
      <p className="text-zinc-700">
        Trang này sẽ là nơi trưng bày các xe đã làm tại Thành Nam Auto, đặc biệt
        là hình before/after cho các dịch vụ sơn, dặm, detailing.
      </p>
      <p className="text-sm text-zinc-500">
        Ở giai đoạn sau, sẽ bổ sung gallery sử dụng <code>next/image</code> và
        tối ưu cho tốc độ tải.
      </p>
    </main>
  );
}

