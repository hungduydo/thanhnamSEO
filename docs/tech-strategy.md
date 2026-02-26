# Chiến lược kỹ thuật / Tech Strategy

Tài liệu này mô tả cách triển khai Next.js (App Router) và các cấu hình kỹ thuật quan trọng để tối ưu SEO cho Thành Nam Oto.

## 1. Bảng triển khai kỹ thuật / Implementation Table

| Giai đoạn   | Công việc cụ thể                                      | Lưu ý kỹ thuật                                                                                                             |
| ----------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Phát triển  | Sử dụng Next.js App Router (phiên bản mới nhất).      | Tận dụng Server Components để giảm dung lượng JS tải xuống trình duyệt.                                                   |
| Hình ảnh    | Dùng Component `<Image />` của Next.js.                | Tự động convert ảnh sang WebP, cực kỳ quan trọng vì web Gara sẽ có rất nhiều ảnh xe.                                      |
| Font chữ    | Dùng `next/font`.                                     | Giảm thiểu CLS (Layout Shift) để đạt điểm Google Core Web Vitals tuyệt đối.                                              |
| Metadata    | Sử dụng Metadata API (tĩnh và động).                  | Mỗi trang dịch vụ phải có Title và Description riêng biệt, không dùng chung.                                              |
| Hosting     | Kết nối Repo (GitHub/GitLab) với Vercel.              | Bật tính năng Vercel Analytics và Speed Insights để theo dõi tốc độ thực tế.                                             |

## 2. Next.js App Router & Server Components

- Sử dụng **App Router** (`app/` directory) thay vì Pages Router.
- Ưu tiên dùng **Server Components** cho các phần chỉ cần render HTML và không có tương tác phức tạp phía client.
- Chỉ dùng **Client Components** (`'use client'`) khi:
  - Có state phía client (form, modal, interactive UI).
  - Cần hook như `useState`, `useEffect`, `useRouter`, v.v.

Lợi ích:

- Giảm dung lượng JS gửi xuống trình duyệt.
- Tăng tốc độ tải lần đầu (First Load JS giảm).

## 3. Hình ảnh / Images với `next/image`

- Tất cả hình ảnh (xe, gara, before/after) nên dùng component `Image` của Next.js.
- Cấu hình:
  - Định rõ `width`, `height` hoặc sử dụng layout responsive phù hợp.
  - Đặt `alt` có chứa từ khóa và mô tả ngắn về hình ảnh.
- Lợi ích:
  - Tự động tối ưu hóa kích thước ảnh.
  - Hỗ trợ WebP và lazy loading, cải thiện LCP và tổng thời gian tải.

## 4. Font chữ / Fonts với `next/font`

- Dùng `next/font` (Google Fonts hoặc local fonts) để:
  - Giảm FOUT/FoIT.
  - Kiểm soát preload và subset.
- Mục tiêu:
  - **Giảm CLS (Cumulative Layout Shift)**, giữ layout ổn định khi text load.

## 5. Metadata API (tĩnh & động)

- Sử dụng **Metadata API** của Next.js để set:
  - `title`
  - `description`
  - Open Graph tags (nếu cần chia sẻ mạng xã hội).
- Yêu cầu:
  - **Mỗi trang dịch vụ** (ví dụ `/son-xe-o-to`, `/bao-duong-dinh-ky`, `/sua-chua-may-gam`) phải có **Title & Description riêng**, không dùng chung.
  - Trang tin tức (`/tin-tuc`) và từng bài blog cũng có meta riêng, chứa từ khóa nhóm “Thông tin”.

## 6. Hosting & Monitoring trên Vercel

- Kết nối repo Git (GitHub/GitLab) với Vercel để:
  - Mỗi lần push sẽ có **Preview Deployment**.
  - Branch `main` (hoặc `production`) sẽ deploy lên production.
- Bật:
  - **Vercel Analytics** – theo dõi traffic, hành vi người dùng.
  - **Vercel Speed Insights** – theo dõi Core Web Vitals thực tế.

Chi tiết lợi ích xem thêm ở `docs/vercel-benefits.md`.

## 7. Ghi chú phát triển quan trọng / Development Notes (SEO-Critical)

### 7.1 301 Redirects

Khi chuyển từ cấu trúc URL cũ (ví dụ `/services/...`) sang cấu trúc mới (`/dich-vu/...`), **bắt buộc phải dùng 301 Redirect** để:

- Giữ lại sức mạnh SEO từ các URL cũ.
- Tránh lỗi 404 và mất thứ hạng từ khóa đã có.

Ví dụ cấu hình (minh họa) trong `next.config.js`:

```js
// Ví dụ, cần chỉnh lại cho đúng URL thật
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/dich-vu',
        permanent: true,
      },
      {
        source: '/services/car-paint',
        destination: '/dich-vu/son-xe-o-to',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

**TODO: Redirect mapping thực tế**

- Sau khi có danh sách URL cũ từ Site.pro (hoặc nền tảng cũ), cần:
  - Liệt kê đầy đủ trong 1 file tham chiếu (CSV/MD).
  - Bổ sung mapping cụ thể vào `redirects()` như ví dụ trên.

### 7.2 Mobile First & CTA

- 90% khách hàng tìm gara khi đang ở trên xe hoặc trên đường, qua điện thoại.
- Nguyên tắc:
  - Nút **“Gọi ngay”** và **“Chỉ đường”** phải luôn dễ bấm, rõ ràng, không bị che khuất.
  - Trên mobile, nên đặt ở:
    - Header sticky, hoặc
    - Thanh action cố định dưới đáy màn hình.

### 7.3 LocalBusiness Schema (JSON-LD)

- Dùng JSON-LD để khai báo thông tin doanh nghiệp với Google:
  - Tên gara, địa chỉ, số điện thoại, giờ mở cửa, toạ độ (geo).
- Đặt script JSON-LD này ở **trang chủ** (`/`).

Ví dụ phác thảo (cần chỉnh lại thông tin thật trước khi dùng):

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Thành Nam Oto",
  "image": "https://thanhnamoto.com/hinh-anh-thuc-te/garage.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Địa chỉ cụ thể",
    "addressLocality": "Xuân Lộc",
    "addressRegion": "Đồng Nai",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 0,
    "longitude": 0
  },
  "telephone": "+84-xxx-xxx-xxx",
  "openingHours": "Mo-Su 08:00-17:30"
}
```

### 7.4 SSG cho trang dịch vụ

- Dùng **Static Site Generation (SSG)** cho các trang:
  - `/dich-vu`
  - `/dich-vu/son-xe-o-to`
  - `/dich-vu/bao-duong-dinh-ky`
  - `/dich-vu/sua-chua-may-gam`
- Mục tiêu:
  - Khi khách bấm vào trang dịch vụ, nội dung hiển thị **gần như ngay lập tức** (mục tiêu < 1 giây trên mạng thực tế nếu có thể).

