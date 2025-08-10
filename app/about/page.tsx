import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import { About } from "./_components/about-section";
import { FounderMessage } from "./_components/founder-message";
import { AboutExtra } from "./_components/about-extra";
import { SiteFooter } from "@/components/site-footer";
import { WhyWeExist } from "./_components/why-we-exist";

export const metadata: Metadata = {
  title: "About Us — Next Seven Digital | Websites Built in 7 Days",
  description:
    "Learn about Next Seven Digital — a senior web design studio creating high-performance, conversion-focused websites in just 7 days. Expert designers, fast development, and SEO-ready builds for businesses that want results.",
  keywords: [
    "About Next Seven Digital",
    "website builder in 7 days",
    "fast website design",
    "conversion-focused websites",
    "SEO-ready web development",
    "premium website studio",
    "Next Seven Digital team",
    "high-performance websites",
    "expert web designers",
  ],
};

export default function AboutPage() {
  return (
    <MarketingShell>
      <section className="pt-16 md:pt-24 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            About Next Seven Digital
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            We help founders and marketing teams move fast with clarity and
            craft. Every project is led by senior talent—no handoffs, no drag.
          </p>
        </div>
      </section>

      {/* Core studio overview */}
      <section className="py-16 md:py-24">
        <About />
      </section>

      {/* Extra details (principles, tools) */}
      <section className="py-16 md:py-24">
        <AboutExtra />
      </section>

      {/* Second to last: Why we exist (paragraph-only) */}
      <section className="py-16 md:py-24">
        <WhyWeExist />
      </section>

      {/* Last: Founder note */}
      <section className="py-16 md:py-24">
        <FounderMessage />
      </section>

      <SiteFooter />
    </MarketingShell>
  );
}
