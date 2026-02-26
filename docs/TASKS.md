# Nhiệm vụ triển khai / Implementation Tasks

Danh sách công việc theo giai đoạn để triển khai website Thành Nam Oto bằng Next.js & Vercel theo đúng chiến lược SEO đã đề ra.

## Giai đoạn 1 – Nền tảng kỹ thuật / Foundation

- [ ] Khởi tạo project Next.js với **App Router**.
- [ ] Cấu hình **TypeScript** (nếu sử dụng).
- [ ] Thiết lập cấu trúc thư mục theo sitemap trong `docs/sitemap.md`:
  - [ ] `/` (Home)
  - [ ] `/dich-vu` và các trang con
  - [ ] `/tin-tuc`
  - [ ] `/hinh-anh-thuc-te`
  - [ ] `/lien-he`
- [ ] Tách biệt **Server Components** và **Client Components** hợp lý (xem `docs/tech-strategy.md`).
- [ ] Kết nối repo (GitHub/GitLab) với **Vercel**, tạo project trên Vercel.

## Giai đoạn 2 – SEO kỹ thuật / Technical SEO

- [ ] Tích hợp `next/image` cho toàn bộ hình ảnh chính.
- [ ] Cấu hình font bằng `next/font` để giảm CLS.
- [ ] Áp dụng **Metadata API** cho:
  - [ ] Trang chủ `/`
  - [ ] `/dich-vu` và từng trang con
  - [ ] `/tin-tuc` (listing) và từng bài chi tiết
  - [ ] `/hinh-anh-thuc-te`, `/lien-he`
- [ ] Thêm **LocalBusiness JSON-LD** cho trang chủ (`/`) theo mô tả trong `docs/tech-strategy.md`.
- [ ] Triển khai **SSG** cho các trang dịch vụ chính:
  - [ ] `/dich-vu`
  - [ ] `/dich-vu/son-xe-o-to`
  - [ ] `/dich-vu/bao-duong-dinh-ky`
  - [ ] `/dich-vu/sua-chua-may-gam`
- [ ] Chuẩn bị kế hoạch **301 Redirects**:
  - [ ] Thu thập danh sách URL cũ từ Site.pro (hoặc hệ thống cũ).
  - [ ] Thiết kế mapping sang URL mới.
  - [ ] Thêm một số rule mẫu vào `next.config.js` (xem ví dụ trong `docs/tech-strategy.md`).

## Giai đoạn 3 – Nội dung & trải nghiệm / Content & UX

- [ ] Viết nội dung cho:
  - [ ] Trang chủ `/`
  - [ ] `/dich-vu` (tổng quan dịch vụ)
  - [ ] `/dich-vu/son-xe-o-to`
  - [ ] `/dich-vu/bao-duong-dinh-ky`
  - [ ] `/dich-vu/sua-chua-may-gam`
- [ ] Tạo ít nhất 3–5 bài viết đầu tiên cho `/tin-tuc` dựa trên nhóm từ khóa “Thông tin (Traffic)” trong `docs/keyword-strategy.md`.
- [ ] Thêm nội dung và hình ảnh cho `/hinh-anh-thuc-te` (before/after).
- [ ] Thiết kế UX **mobile-first**:
  - [ ] Nút “Gọi ngay” luôn dễ thấy và dễ bấm trên mobile.
  - [ ] Nút “Chỉ đường” rõ ràng, dẫn tới Google Maps.

## Giai đoạn 4 – Kiểm tra & tối ưu trước deploy / Pre-Launch QA

- [ ] Chạy qua toàn bộ **Pre-Launch Checklist** trong `docs/seo-checklist.md`:
  - [ ] Cấu trúc URL, nội dung, metadata, hình ảnh.
  - [ ] Schema & sitemap.
  - [ ] 301 redirects cơ bản đã hoạt động.
- [ ] Kiểm tra:
  - [ ] Không có lỗi 404 nội bộ (link gãy).
  - [ ] Không có lỗi JS nghiêm trọng trên trình duyệt.
  - [ ] Giao diện hiển thị tốt trên các kích thước màn hình chính (mobile, tablet, desktop).

## Giai đoạn 5 – Deploy & hậu kiểm / Deployment & Post-Launch

- [ ] Deploy production lên Vercel (gắn domain thật, ví dụ `thanhnamoto.com`).
- [ ] Cấu hình & kiểm tra trên **Google Search Console**:
  - [ ] Property cho domain.
  - [ ] Gửi `sitemap.xml`.
- [ ] Cập nhật link website mới trong **Google Business Profile** (Google Maps).
- [ ] Sử dụng **Vercel Toolbar** trên bản Preview/Production để:
  - [ ] Kiểm tra điểm SEO.
  - [ ] Kiểm tra Accessibility.
- [ ] Theo dõi:
  - [ ] **Vercel Analytics** (lưu lượng, trang phổ biến).
  - [ ] **Speed Insights** (Core Web Vitals thực tế).
- [ ] Theo dõi logs và lỗi 404, bổ sung hoặc chỉnh sửa rule 301 Redirects khi cần.

