import type { MetadataRoute } from "next"

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://thanhnamoto.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/home2/", "/hero-v1/", "/hero-v2/", "/hero-v3/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
