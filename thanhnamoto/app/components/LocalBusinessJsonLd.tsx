import { BASE_URL } from "@/app/lib/constants"
import { CONTACT } from "@/app/lib/contact"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Thành Nam Auto",
  description:
    "Gara sửa chữa, sơn xe và bảo dưỡng định kỳ cho xe ô tô cá nhân tại Xuân Lộc, Đồng Nai. Báo giá rõ ràng, không phát sinh, bảo hành bằng văn bản.",
  url: BASE_URL,
  telephone: CONTACT.phoneE164,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.addressStreet,
    addressLocality: CONTACT.addressCity,
    addressRegion: CONTACT.addressRegion,
    postalCode: CONTACT.addressPostal,
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CONTACT.geoLat,
    longitude: CONTACT.geoLng,
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
    name: "tt. Gia Ray, Xuân Lộc, Đồng Nai",
  },
  hasMap: CONTACT.mapsHref,
}

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
