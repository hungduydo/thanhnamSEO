import { BASE_URL } from "@/app/lib/constants"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Thành Nam Oto",
  description:
    "Gara sửa chữa, sơn xe và bảo dưỡng định kỳ cho xe ô tô cá nhân tại Xuân Lộc, Đồng Nai. Báo giá rõ ràng, không phát sinh, bảo hành bằng văn bản.",
  url: BASE_URL,
  telephone: "+84388476247",
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Trần Nhân Tông, Khu Phố 8",
    addressLocality: "Xuân Lộc",
    addressRegion: "Đồng Nai",
    postalCode: "76600",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.918214879920205,
    longitude: 107.40338518778738,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "17:30",
    },
  ],
  openingHours: "Mo-Su 08:00-17:30",
  priceRange: "$$",
  currenciesAccepted: "VND",
  areaServed: {
    "@type": "City",
    name: "Xuân Lộc, Đồng Nai",
  },
  hasMap: "https://maps.google.com/?q=10.918214879920205,107.40338518778738",
}

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
