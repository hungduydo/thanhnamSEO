# SEO Checklist / Danh sách kiểm SEO

Checklist này giúp đảm bảo website Thành Nam Oto được chuẩn bị tốt về SEO **trước** và **sau** khi deploy lên Vercel.

## 1. Trước khi deploy / Pre-Launch

### 1.1 Cấu trúc & nội dung

- [ ] Cấu trúc URL theo sitemap ở `docs/sitemap.md` đã được triển khai đầy đủ.
- [ ] Mỗi trang dịch vụ có nội dung riêng, phù hợp nhóm từ khóa tương ứng:
  - `/dich-vu/son-xe-o-to`
  - `/dich-vu/bao-duong-dinh-ky`
  - `/dich-vu/sua-chua-may-gam`
- [ ] Trang `/tin-tuc` đã có ít nhất vài bài viết nhóm “Thông tin (Traffic)”.
- [ ] Trang `/hinh-anh-thuc-te` có đủ hình before/after chất lượng tốt (dùng `next/image`).

### 1.2 Metadata & on-page SEO

- [ ] Mỗi trang có **H1** rõ ràng, chứa từ khóa chính.
- [ ] Đã cấu hình **Metadata API** cho:
  - [ ] Trang chủ `/`
  - [ ] `/dich-vu` và từng trang con
  - [ ] `/tin-tuc` và từng bài blog
- [ ] Title & Description **không trùng lặp** giữa các trang, có chứa từ khóa và địa phương (Xuân Lộc, Đồng Nai khi phù hợp).
- [ ] Hình ảnh có `alt` mô tả rõ và tự nhiên.

### 1.3 Kỹ thuật & hiệu năng

- [ ] Sử dụng **Next.js App Router** với phân tách Server/Client Components hợp lý.
- [ ] Toàn bộ hình ảnh sử dụng `next/image`.
- [ ] Font chữ cấu hình bằng `next/font` để giảm CLS.
- [ ] Các trang dịch vụ chính được dựng bằng **SSG** (hoặc tương đương) để tốc độ phản hồi tốt.
- [ ] Không có lỗi console nghiêm trọng trên trình duyệt.

### 1.4 Schema & Local SEO

- [ ] Đã nhúng **LocalBusiness JSON-LD** trên trang chủ `/`:
  - [ ] Tên gara, địa chỉ, số điện thoại, giờ mở cửa, toạ độ.
- [ ] Đã cấu hình `robots.txt` (nếu cần) và đảm bảo không chặn nhầm các trang quan trọng.
- [ ] `sitemap.xml` được generate (thường thông qua route hoặc lib trong Next.js).

### 1.5 301 Redirects

- [ ] Có kế hoạch rõ ràng chuyển từ URL cũ (Site.pro, etc.) sang URL mới theo sitemap.
- [ ] `next.config.js` đã có các rule 301 cơ bản (xem ví dụ trong `docs/tech-strategy.md`).
- [ ] Kiểm tra thủ công một số URL cũ để đảm bảo redirect đúng.

## 2. Sau khi deploy lên Vercel / Post-Deployment

### 2.1 Google Search Console

- [ ] Thêm hoặc cập nhật **property** cho domain (ví dụ `https://thanhnamoto.com`).
- [ ] Gửi lại `sitemap.xml` để Google thu thập dữ liệu cấu trúc mới.
- [ ] Theo dõi:
  - [ ] Coverage (các trang được index / bị lỗi).
  - [ ] Core Web Vitals report.

### 2.2 Vercel Tools

- [ ] Sử dụng **Vercel Toolbar** trên bản **Preview** để:
  - [ ] Kiểm tra điểm **SEO**.
  - [ ] Kiểm tra **Accessibility** (ALT text, heading structure, contrast…).
- [ ] Kiểm tra **Vercel Analytics**:
  - [ ] Traffic, page views.
  - [ ] Các trang có thời gian tải bất thường.
- [ ] Kiểm tra **Speed Insights**:
  - [ ] LCP, FID/INP, CLS trên dữ liệu thực tế.

### 2.3 Google Business Profile (Google Maps)

- [ ] Cập nhật **link website mới** trong hồ sơ Google Maps của gara.
- [ ] Đảm bảo địa chỉ, số điện thoại, giờ mở cửa chính xác và trùng với thông tin trên website.

### 2.4 Logs & 404

- [ ] Theo dõi logs từ Vercel (hoặc hệ thống logging khác) để phát hiện:
  - [ ] Lỗi 404 từ các URL cũ.
  - [ ] Lỗi server (5xx) nếu có.
- [ ] Với mỗi URL 404 quan trọng:
  - [ ] Thêm rule 301 redirect phù hợp.
  - [ ] Hoặc cập nhật link nội bộ sai trên website.

## 3. Duy trì & tối ưu liên tục

- [ ] Bổ sung bài viết mới vào `/tin-tuc` hàng tháng/quý dựa trên nhóm từ khóa “Thông tin”.
- [ ] Định kỳ cập nhật hình ảnh mới cho `/hinh-anh-thuc-te`.
- [ ] Kiểm tra lại Core Web Vitals sau mỗi đợt cập nhật lớn giao diện/nội dung.

