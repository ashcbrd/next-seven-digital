import type { Metadata } from "next"
import { MarketingShell } from "@/components/marketing-shell"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WorkCarousel } from "@/components/work-carousel"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { WhyChoose } from "@/components/why-choose"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Next Seven Digital — Websites in 7 Days",
  description:
    "We launch high‑converting landing pages, portfolios, and product sites in a focused 7‑day sprint. Senior team, sharp copy, and motion that converts.",
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Next Seven Digital",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    logo: "/og-image.png",
    sameAs: [],
    description:
      "Premium, conversion‑first websites launched in a single week. Senior team, fun copy, and motion that performs.",
  }

  return (
    <MarketingShell>
      <section id="home" aria-label="Home">
        <Hero showCtas={false} />
      </section>

      <section id="services" className="py-24 md:py-32" aria-label="Services">
        <Services />
      </section>

      <section id="work" className="py-24 md:py-32" aria-label="Selected Work">
        <WorkCarousel showLinks={false} />
      </section>

      <section id="testimonials" className="py-24 md:py-32" aria-label="Testimonials">
        <TestimonialsCarousel />
      </section>

      <section id="why" className="py-24 md:py-32" aria-label="Why Choose Next Seven Digital">
        <WhyChoose />
      </section>

      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteFooter />
    </MarketingShell>
  )
}
