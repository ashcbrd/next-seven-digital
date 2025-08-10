import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing-shell";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import slides from "@/data/work-slides.json";

type Slide = {
  title: string;
  desc: string;
  href?: string;
  img: string;
  isSelectedWork?: boolean;
};

export const metadata: Metadata = {
  title: "Portfolio — Next Seven Digital | Websites Built in 7 Days",
  description:
    "Explore Next Seven Digital’s portfolio of high-performance websites built in just 7 days. View landing pages, portfolios, and product sites designed for maximum conversions, SEO readiness, and stunning visual impact.",
  keywords: [
    "Next Seven Digital portfolio",
    "websites built in 7 days",
    "fast website design examples",
    "conversion-focused websites",
    "SEO-ready websites",
    "premium landing page design",
    "product website design",
    "one-week website build",
    "web design portfolio",
  ],
};

export default function PortfolioPage() {
  const items = slides as Slide[];
  return (
    <MarketingShell>
      <section className="pt-16 md:pt-24 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Portfolio
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            Recent projects from our 7‑day sprints—conversion‑minded, tastefully
            animated, and built for speed.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s, i) => (
              <Card
                key={s.title + i}
                className="relative overflow-hidden border-white/10 bg-white/5"
              >
                <div className="relative w-full h-56 sm:h-60 md:h-64 overflow-hidden">
                  <Image
                    src={
                      s.img ||
                      "/placeholder.svg?height=360&width=640&query=project%20preview"
                    }
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={i < 2}
                  />
                </div>
                <div className="p-4">
                  <div className="text-white font-semibold">{s.title}</div>
                  <p className="text-sm text-white/70 mt-1">{s.desc}</p>
                  {s.href ? (
                    <Link
                      href={s.href}
                      className="mt-3 inline-flex text-sm text-orange-400 hover:text-orange-300 underline underline-offset-4"
                    >
                      View project
                    </Link>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
