# Tầm nhìn dự án / Project Vision

## Bối cảnh

Thành Nam Oto là gara ô tô tại **Xuân Lộc, Đồng Nai**, phục vụ các nhu cầu:

- Cứu hộ & sửa chữa khẩn cấp.
- Bảo dưỡng định kỳ cho các dòng xe phổ biến (Ford, Toyota, Hyundai…).
- Sơn, dặm, làm đẹp xe, phủ ceramic, detailing.

Website cũ (ví dụ dùng Site.pro hoặc nền tảng builder tương tự) có các hạn chế:

- HTML được tạo động phía client, Google khó lập chỉ mục đầy đủ.
- Tốc độ tải trang không ổn định, đặc biệt với nhiều ảnh xe nặng.
- Khó tùy biến sâu về SEO (schema, meta từng trang, sitemap, redirects…).

## Mục tiêu

Mục tiêu của dự án là xây dựng lại website của Thành Nam Oto bằng **Next.js (App Router)** và deploy trên **Vercel** để:

- **Tăng lead từ tìm kiếm Google** với các từ khóa địa phương như:
  - “sửa ô tô Xuân Lộc”
  - “gara ô tô gần đây nhất”
  - “cứu hộ ô tô Đồng Nai”
  - “phủ ceramic ô tô Xuân Lộc”
- **Nâng cấp trải nghiệm người dùng**:
  - Tải trang nhanh, ổn định, ít giật lag.
  - Giao diện mobile-first, dễ bấm nút “Gọi ngay” và “Chỉ đường”.
- **Xây nền tảng kỹ thuật bền vững**:
  - Dễ mở rộng thêm tính năng, trang dịch vụ mới, khu vực khác.
  - Dễ quản lý nội dung, tái sử dụng component.

## Định hướng giải pháp

1. **Chọn Next.js thay vì React thuần**
   - Sử dụng **Server-Side Rendering (SSR)** và **Static Site Generation (SSG)** để Google đọc được nội dung ngay lập tức.
   - App Router + Server Components giúp giảm lượng JS gửi xuống trình duyệt.

2. **Tập trung vào Local SEO cho Xuân Lộc, Đồng Nai**
   - URL, nội dung, title, description đều được bản địa hóa (địa danh, nhu cầu thực tế).
   - Triển khai **LocalBusiness Schema (JSON-LD)** cho trang chủ.

3. **Tối ưu Core Web Vitals**
   - Dùng `next/image` để tối ưu hình ảnh, chuyển sang WebP, lazy loading.
   - Dùng `next/font` để giảm CLS (layout shift).

4. **Triển khai & vận hành trên Vercel**
   - Tận dụng **Global Edge Network** để khách ở Xuân Lộc truy cập nhanh.
   - Dùng **Preview Deployments** để kiểm tra giao diện thực tế trước khi lên production.
   - Bật **Vercel Analytics** và **Speed Insights** để theo dõi hiệu năng thật.

## Kết quả mong đợi

- Website mới **index tốt hơn trên Google**, đặc biệt với các từ khóa dịch vụ và từ khóa địa phương.
- Trải nghiệm trên mobile tốt, giúp khách hàng dễ dàng gọi điện hoặc xem đường đi đến gara.
- Hệ thống kỹ thuật rõ ràng, có tài liệu (`docs/`) để coder và SEOer cùng làm việc lâu dài.

