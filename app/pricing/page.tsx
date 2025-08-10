import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { Pricing } from "./_components/pricing";
import { PricingIncluded } from "./_components/pricing-included";
import { PricingAddons } from "./_components/pricing-addons";
import { PricingFaqs } from "./_components/pricing-faqs";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Pricing — Next Seven Digital | Website in 7 Days Cost & Plans",
  description:
    "See Next Seven Digital’s clear, transparent pricing for high-performance websites built in just 7 days. Affordable, senior-level design, SEO-ready development, and conversion-focused builds—no hidden fees.",
  keywords: [
    "Next Seven Digital pricing",
    "website in 7 days cost",
    "fast website design pricing",
    "affordable premium websites",
    "SEO-ready website cost",
    "conversion-focused website plans",
    "one-week website development price",
    "premium web design packages",
    "7-day website builder pricing",
  ],
};

export default function PricingPage() {
  return (
    <MarketingShell>
      <section className="pt-16 md:pt-24 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Pricing that respects your runway
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            Launch fast without the agency price tag. Our compact, senior team
            ships premium results in one focused week.
          </p>
          <p className="mt-2 text-white/60 max-w-2xl">
            Fixed scope. No surprise fees. You own everything on day one.
          </p>
        </div>
      </section>

      <section className="py-12">
        <Pricing showCta />
      </section>

      <PricingIncluded />
      <PricingAddons />
      <PricingFaqs />

      <SiteFooter />
    </MarketingShell>
  );
}
