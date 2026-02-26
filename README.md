# Thành Nam Oto SEO – Next.js & Vercel

Website cho gara ô tô Thành Nam tại Xuân Lộc, Đồng Nai, được xây dựng lại bằng **Next.js (App Router)** và deploy trên **Vercel** để tối ưu **Local SEO**, tốc độ tải trang và khả năng mở rộng về sau.

## Giới thiệu / Overview

Dự án này là bước chuyển từ nền tảng cũ (như Site.pro) sang **Next.js** hiện đại:

- **SSR/SSG**: Nội dung hiển thị sẵn trên server, giúp Google dễ lập chỉ mục hơn.
- **Core Web Vitals tốt**: Tối ưu hình ảnh, font chữ, và layout để trang tải nhanh, ổn định.
- **URL sạch & bản địa hóa**: Cấu trúc URL rõ ràng, tập trung vào từ khóa địa phương như *Xuân Lộc*, *Đồng Nai*.
- **Vercel hosting**: Deploy nhanh, có preview, HTTPS mặc định, edge network toàn cầu.

Mục tiêu chính: mang lại **nhiều khách hàng hơn từ tìm kiếm Google**, đặc biệt là các truy vấn như “sửa ô tô Xuân Lộc”, “gara ô tô gần đây nhất”, “phủ ceramic ô tô Xuân Lộc”.

## Công nghệ / Tech Stack

- **Next.js (App Router)** – sử dụng Server Components khi phù hợp để giảm JS gửi xuống trình duyệt.
- **React** – giao diện hiện đại, dễ mở rộng component.
- **Vercel** – hosting, CI/CD, preview deployments, Analytics & Speed Insights.
- (Tuỳ chọn) **TypeScript** – tăng độ an toàn khi code, dễ bảo trì dài hạn.

Chi tiết về chiến lược kỹ thuật xem thêm trong `docs/tech-strategy.md`.

## Tài liệu / Documentation

Tài liệu dự án được tổ chức trong thư mục `docs/`:

- `docs/vision.md` – Tầm nhìn dự án & lý do chuyển sang Next.js + Vercel.
- `docs/tech-strategy.md` – Chiến lược kỹ thuật & SEO cho Next.js (App Router).
- `docs/sitemap.md` – Cấu trúc sitemap dành cho coder, bao phủ các trang dịch vụ, tin tức, hình ảnh, liên hệ.
- `docs/keyword-strategy.md` – Chiến lược từ khóa & nội dung SEO (Xuân Lộc, Đồng Nai).
- `docs/seo-checklist.md` – Checklist SEO trước và sau khi deploy lên Vercel.
- `docs/vercel-benefits.md` – Lợi ích khi dùng Vercel cho dự án này.
- `docs/TASKS.md` – Danh sách công việc (checkbox) cho từng giai đoạn triển khai.

## Bắt đầu / Getting Started

Dự án hiện đang ở giai đoạn thiết kế cấu trúc & tài liệu. Sau khi khởi tạo mã nguồn Next.js, phần này sẽ được cập nhật chi tiết hơn.

Gợi ý cấu trúc lệnh (sau khi app được tạo):

```bash
# Cài đặt dependencies
npm install

# Chạy dev server
npm run dev

# Build & kiểm tra production
npm run build
npm start
```

## SEO & triển khai / SEO & Deployment

Các nguyên tắc SEO quan trọng đã được mô tả trong:

- `docs/tech-strategy.md` – Next.js App Router, `next/image`, `next/font`, Metadata API, JSON-LD LocalBusiness.
- `docs/keyword-strategy.md` – Nhóm từ khóa High Intent / High Value / Traffic và mapping sang page.
- `docs/seo-checklist.md` – Từ on-page, schema, tốc độ đến các bước sau khi deploy (Search Console, Google Business Profile, theo dõi 404).

## Giấy phép / License

Chưa xác định. Bạn có thể bổ sung giấy phép phù hợp (ví dụ MIT, proprietary, v.v.) tùy nhu cầu sử dụng.

# thanhnamSEO
# thanhnamSEO
