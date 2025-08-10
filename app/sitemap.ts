import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const routes = ["", "/how-it-works", "/portfolio", "/pricing", "/about", "/faq", "/contact"]
  const now = new Date().toISOString()
  return routes.map((r) => ({
    url: `${base}${r || "/"}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.8,
  }))
}
