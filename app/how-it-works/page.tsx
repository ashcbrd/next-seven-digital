import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { HowItWorksDetailed } from "./_components/how-it-works-detailed";
import {
  Deliverables,
  Requirements,
  Communication,
  SampleSchedule,
  Guarantees,
} from "./_components/process-sections";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "How It Works — Next Seven Digital | 7-Day Website Design Process",
  description:
    "Discover how Next Seven Digital delivers high-performance, conversion-focused websites in just 7 days. Our sprint includes strategy, design system, parallel build, motion & QA, integrations, and Vercel launch—plus clear deliverables, communication, and guarantees.",
  keywords: [
    "7-day website design process",
    "how Next Seven Digital works",
    "fast website development",
    "conversion-focused websites",
    "SEO-ready website build",
    "premium website sprint",
    "website launch in 7 days",
    "one-week website design",
    "Next Seven Digital process",
  ],
};

export default function HowItWorksPage() {
  return (
    <MarketingShell>
      <section className="pt-16 md:pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            How it works
          </h1>
          <p className="mt-4 text-white/70 max-w-3xl">
            A focused week with senior talent working in parallel. See exactly
            what happens each day—and what you’ll get at the end.
          </p>
        </div>
      </section>

      <section className="py-8">
        <HowItWorksDetailed />
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Deliverables />
          <Requirements />
          <Communication />
          <SampleSchedule />
          <Guarantees />
        </div>
      </section>

      <SiteFooter />
    </MarketingShell>
  );
}
