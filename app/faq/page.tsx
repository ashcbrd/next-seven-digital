import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { Faqs } from "./_components/faqs";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "FAQs — Next Seven Digital | 7-Day Website Build Questions Answered",
  description:
    "Find answers to common questions about Next Seven Digital’s 7-day website design sprint. Learn about our process, pricing, timelines, and how we deliver high-performance, SEO-ready, conversion-focused websites.",
  keywords: [
    "Next Seven Digital FAQ",
    "7-day website questions",
    "website sprint process",
    "fast website design",
    "conversion-focused websites",
    "SEO-ready websites",
    "website build timeline",
    "premium website development",
    "one-week website design",
  ],
};

export default function FaqPage() {
  return (
    <MarketingShell>
      <section className="pt-16 md:pt-24 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            The details on speed, scope, and process.
          </p>
        </div>
      </section>
      <section className="py-12">
        <Faqs defaultType="multiple" />
      </section>

      <SiteFooter />
    </MarketingShell>
  );
}
