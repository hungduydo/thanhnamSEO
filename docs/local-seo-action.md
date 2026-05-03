# Local SEO — Hành động off-site cần user thực hiện

Phần on-site (metadata, schema, blog) đã được tối ưu trong code. Phần dưới đây cần **user trực tiếp làm** vì cần quyền truy cập tài khoản Google, mạng xã hội, và các nền tảng directory.

Cập nhật: 2026-05-03

---

## 1. Google Business Profile (ƯU TIÊN CAO NHẤT)

GBP là nguồn lưu lượng lớn nhất cho local SEO. Một profile được tối ưu có thể vượt qua nhiều đối thủ ngay trong 2-4 tuần.

### Việc cần làm

- [ ] **Xác minh chủ sở hữu** profile "Thành Nam Auto" tại https://business.google.com (gửi thư xác minh PIN qua bưu điện về địa chỉ gara).
- [ ] **NAP nhất quán 100%** với JSON-LD trên web:
  - Tên: `Thành Nam Auto`
  - Địa chỉ: `Trần Nhân Tông, Khu Phố 8, tt. Gia Ray, Xuân Lộc, Đồng Nai`
  - Điện thoại: `0388 476 247`
  - Website: `https://thanhnamoto.com`
- [ ] **Danh mục chính**: chọn `Auto repair shop` (Gara sửa chữa ô tô).
- [ ] **Danh mục phụ** (chọn 2-3): `Auto body shop`, `Car detailing service`, `Oil change service`.
- [ ] **Giờ mở cửa**: 08:00 - 17:30, Thứ 2 - Chủ nhật.
- [ ] **Mô tả doanh nghiệp** (750 ký tự): chứa các cụm từ khóa "gara ô tô Xuân Lộc", "sửa chữa ô tô Gia Ray", "sơn xe ô tô Đồng Nai".
- [ ] **Ảnh** (đăng ngay 20-30 ảnh, sau đó duy trì 2-4 ảnh/tuần):
  - 5 ảnh ngoại thất gara (biển hiệu, mặt tiền)
  - 5 ảnh nội thất (khu sửa chữa, phòng sơn, khu chờ)
  - 10 ảnh quy trình (thợ làm việc, máy chẩn đoán, sơn xe trong phòng kín)
  - 10 ảnh trước/sau (xe trầy xước → sơn lại, xe móp → làm đồng)
  - 1 logo, 1 ảnh cover

### Bài đăng GBP (Posts) — duy trì 1-2 bài/tuần

Các loại bài đăng nên dùng:
- **Cập nhật dịch vụ**: "Tuần này nhận 5 xe sơn dặm, hoàn thành đúng hẹn"
- **Khuyến mãi**: "Bảo dưỡng tháng 5 - tặng kiểm tra phanh miễn phí"
- **Sự kiện**: "Mở cửa lễ 30/4 - 1/5 phục vụ khẩn cấp"
- **Sản phẩm**: link tới các trang `/dich-vu/*` cụ thể

### Reviews (cực kỳ quan trọng)

- [ ] Mục tiêu: **30 review 5 sao trong 60 ngày đầu**, sau đó duy trì 4-8 review/tháng.
- [ ] Cách xin review:
  - In QR code link review GBP, dán tại quầy lễ tân và trên hóa đơn.
  - Sau khi giao xe 1-2 ngày, gửi tin nhắn Zalo: "Anh/chị hài lòng với dịch vụ tại Thành Nam Auto không ạ? Nếu được, anh/chị có thể để lại 1 đánh giá Google giúp em không? Link đây: [URL]"
  - **Không** mua review giả - Google sẽ flag và phạt nặng.
- [ ] **Trả lời mọi review** (cả tốt và xấu) trong 24h:
  - Review tốt: cảm ơn cá nhân hóa, nhắc tên xe (không nhắc tên khách)
  - Review xấu: xin lỗi, đề nghị giải quyết riêng, không tranh cãi public

---

## 2. Citations & Directory listings (NAP nhất quán)

Đăng ký doanh nghiệp lên các directory để Google xác thực sự tồn tại của gara.

Danh sách ưu tiên (làm theo thứ tự):

- [ ] **Cốc Cốc Maps** — bản đồ phổ biến tại Việt Nam
- [ ] **Foody.vn** — directory dịch vụ
- [ ] **Otosaigon.com** — forum lớn, có mục "Tìm gara theo khu vực"
- [ ] **Otofun.net** — forum lớn về ô tô
- [ ] **Vietnamtourism.gov.vn** — directory doanh nghiệp địa phương (nếu áp dụng)
- [ ] **Yellowpages.vn** — danh bạ vàng
- [ ] **Trangvangvietnam.com**
- [ ] **123pay.vn / 123job.vn** — listings doanh nghiệp
- [ ] **Bizdirectory.vn**
- [ ] **Local groups Facebook**: "Hội ô tô Đồng Nai", "Hội xe Xuân Lộc"

**Quy tắc bất biến**: NAP (Name - Address - Phone) phải copy-paste y hệt trên mọi nền tảng. Một sai lệch nhỏ ("tt." vs "thị trấn") đủ làm Google nghĩ là 2 doanh nghiệp khác nhau.

---

## 3. Mạng xã hội

- [ ] **Facebook Page**: cập nhật `CONTACT.fbHref` trong code (`thanhnamoto/app/lib/contact.ts`) - hiện đang để `#`. Đăng 2-3 bài/tuần với ảnh thực tế xe đã làm.
- [ ] **Zalo OA (Official Account)**: tạo account để khách follow, gửi tin khuyến mãi.
- [ ] **TikTok**: nếu có thời gian, đăng video ngắn trước/sau sơn xe - nội dung "trending" trong cộng đồng ô tô.
- [ ] **YouTube**: kênh ngắn quay quy trình sửa chữa, đặt URL website ở description.

---

## 4. Backlinks địa phương (chậm nhưng hiệu quả)

- [ ] Liên hệ các báo địa phương (báo Đồng Nai online) đề nghị viết bài giới thiệu gara.
- [ ] Tham gia hội/nhóm doanh nghiệp tại Xuân Lộc, đề nghị backlink trong danh sách thành viên.
- [ ] Tài trợ sự kiện địa phương nhỏ → đổi lấy mention + link.
- [ ] Guest post trên các blog ô tô Việt Nam (otosaigon, otofun) với link về website.

---

## 5. Theo dõi & đo lường

- [ ] **Google Search Console**: đã có (verification meta tag trong layout). Vào hàng tuần xem:
  - Impressions / Clicks tăng dần
  - Top queries có chứa từ khóa target không
  - Trang nào được index, trang nào lỗi
- [ ] **Google Analytics 4**: thiết lập, theo dõi traffic organic, conversion (gọi điện, click Zalo).
- [ ] **GBP Insights**: xem mỗi tuần - số lượt search direct/discovery, hành động (gọi, chỉ đường, click website).

### Mục tiêu sau 90 ngày

- 50+ review GBP (4.5+ sao trung bình)
- Top 3 trên Google Maps cho "gara ô tô Xuân Lộc", "gara ô tô Gia Ray"
- Top 10 trên Google Search cho cùng các từ khóa
- 30+ citations với NAP nhất quán
- Trang chủ + 3 trang dịch vụ + 14 bài blog đều được Google index

---

## 6. Ghi chú quan trọng

- **Đừng** gian lận (review giả, keyword stuffing, doorway pages) — Google AI hiện phát hiện rất nhanh và phạt nặng.
- **Đừng** thay đổi NAP thường xuyên — mỗi lần thay phải cập nhật ĐỒNG THỜI: GBP, web, mọi directory.
- **Đừng** tạo nhiều GBP cho cùng một gara — Google sẽ merge/khoá.
- **Hãy** kiên nhẫn — local SEO cần 2-4 tháng để thấy kết quả rõ rệt sau khi setup đầy đủ.
