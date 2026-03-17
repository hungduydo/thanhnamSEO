/**
 * Thông tin liên hệ tập trung — chỉnh sửa tại đây, áp dụng toàn site.
 */
export const CONTACT = {
  /** Số điện thoại thô (dùng cho href="tel:") */
  phoneRaw: "0388476247",

  /** Số điện thoại hiển thị đẹp */
  phoneDisplay: "0388 476 247",

  /** Định dạng E.164 (dùng cho JSON-LD / schema.org) */
  phoneE164: "+84388476247",

  /** href trực tiếp dùng trong thẻ <a> */
  phoneHref: "tel:0388476247",

  /** Link Zalo */
  zaloHref: "https://zalo.me/0388476247",

  /**
   * Link Facebook fanpage.
   * TODO: thay "#" bằng URL fanpage thực tế, ví dụ: "https://www.facebook.com/thanhnamoto"
   */
  fbHref: "#",

  /** Link mở Google Maps */
  mapsHref: "https://maps.google.com/?q=10.918214879920205,107.40338518778738",

  /** Src nhúng Google Maps iframe */
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=10.918214879920205,107.40338518778738&z=17&output=embed",

  /** Địa chỉ */
  addressStreet: "Trần Nhân Tông, Khu Phố 8",
  addressCity: "tt. Gia Ray, Xuân Lộc",
  addressRegion: "Đồng Nai",
  addressPostal: "76600",
  addressFull: "Trần Nhân Tông, Khu Phố 8, tt. Gia Ray, Xuân Lộc, Đồng Nai",

  /** Tọa độ GPS */
  geoLat: 10.918214879920205,
  geoLng: 107.40338518778738,
} as const;
