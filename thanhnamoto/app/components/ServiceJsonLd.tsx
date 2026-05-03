import { BASE_URL } from "@/app/lib/constants"
import { CONTACT } from "@/app/lib/contact"

type Props = {
  name: string
  description: string
  slug: string
  serviceType?: string
}

export function ServiceJsonLd({ name, description, slug, serviceType }: Props) {
  const url = `${BASE_URL}${slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    url,
    areaServed: [
      { "@type": "City", name: "tt. Gia Ray, Xuân Lộc, Đồng Nai" },
      { "@type": "AdministrativeArea", name: "Xuân Lộc, Đồng Nai" },
    ],
    provider: {
      "@type": "AutoRepair",
      name: "Thành Nam Auto",
      url: BASE_URL,
      telephone: CONTACT.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.addressStreet,
        addressLocality: CONTACT.addressCity,
        addressRegion: CONTACT.addressRegion,
        postalCode: CONTACT.addressPostal,
        addressCountry: "VN",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
      url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
