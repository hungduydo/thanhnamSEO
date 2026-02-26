# Cấu trúc sitemap / Sitemap Structure

Tài liệu này mô tả cấu trúc URL và sitemap đề xuất cho website Thành Nam Oto, hướng tới coder triển khai trên Next.js (App Router).

## 1. Cấu trúc chính (Plaintext)

```text
/ (Home: Tổng quan & Local Schema)
├── /dich-vu (Danh mục chính dịch vụ)
│   ├── /son-xe-o-to          (Trọng tâm: Quy trình, bảng giá, ảnh Before/After)
│   ├── /bao-duong-dinh-ky   (Các cấp độ bảo dưỡng)
│   └── /sua-chua-may-gam    (Kỹ thuật cao, máy đọc lỗi)
├── /tin-tuc                 (Blog chia sẻ kiến thức, mẹo vặt)
├── /hinh-anh-thuc-te        (Showcase các xe đã làm)
└── /lien-he                 (Bản đồ, Form đặt lịch, Hotline)
```

## 2. Ghi chú triển khai

### 2.1 Trang chủ `/`

- Nội dung:
  - Tổng quan về gara (uy tín, kinh nghiệm, cam kết).
  - Các nhóm dịch vụ chính (link sang từng trang con trong `/dich-vu`).
  - Đối tác bảo hiểm (nếu có).
- Kỹ thuật:
  - Nhúng **LocalBusiness JSON-LD**.
  - Rõ ràng CTA: “Gọi ngay”, “Chỉ đường”, “Đặt lịch”.

### 2.2 Trang danh mục dịch vụ `/dich-vu`

- Vai trò:
  - Là hub cho toàn bộ dịch vụ, mỗi dịch vụ có 1 landing page riêng.
- Nội dung:
  - Danh sách các dịch vụ chính, tóm tắt ngắn + nút “Xem chi tiết”.
  - Liên kết nội bộ mạnh đến từng trang dịch vụ con.

### 2.3 Các trang dịch vụ con

#### `/dich-vu/son-xe-o-to`

- Nội dung:
  - Quy trình sơn xe chi tiết.
  - Bảng giá tham khảo hoặc cách báo giá.
  - Hình ảnh before/after (dùng `next/image`).
- Từ khóa mục tiêu:
  - “sơn xe ô tô Xuân Lộc”
  - “sơn đổi màu ô tô giá bao nhiêu”
  - “sơn dặm xóa trầy lấy liền”

#### `/dich-vu/bao-duong-dinh-ky`

- Nội dung:
  - Giải thích các mốc bảo dưỡng: 5k, 10k, 20k km…
  - Các hạng mục kiểm tra cho từng mốc.
- Từ khóa mục tiêu:
  - “bảo dưỡng ô tô Xuân Lộc”
  - “bảo dưỡng xe Ford/Toyota/Hyundai tại Xuân Lộc”

#### `/dich-vu/sua-chua-may-gam`

- Nội dung:
  - Các lỗi thường gặp về máy, gầm, điện.
  - Trang bị máy đọc lỗi hiện đại, phụ tùng chính hãng.
- Từ khóa mục tiêu:
  - “sửa ô tô Xuân Lộc”
  - “cứu hộ ô tô Đồng Nai”

### 2.4 Trang tin tức `/tin-tuc`

- Vai trò:
  - Thu hút traffic qua các từ khóa dạng câu hỏi/kinh nghiệm.
- Nội dung gợi ý:
  - “Dấu hiệu xe bị hỏng thước lái”
  - “Khi nào cần thay nhớt hộp số”
  - “Kinh nghiệm chọn màu sơn xe hợp mệnh”

### 2.5 Trang hình ảnh thực tế `/hinh-anh-thuc-te`

- Nội dung:
  - Bộ sưu tập xe đã làm tại gara.
  - Hình before/after, nhiều góc độ.
- Kỹ thuật:
  - Dùng `next/image` + lazy loading, tối ưu kích thước, WebP.

### 2.6 Trang liên hệ `/lien-he`

- Nội dung:
  - Bản đồ (Google Maps embed).
  - Form đặt lịch / gửi yêu cầu.
  - Hotline, Zalo, giờ mở cửa.
- Kỹ thuật:
  - Đảm bảo CTA “Gọi ngay” dễ bấm trên mobile.

