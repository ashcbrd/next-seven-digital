import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import details from "@/data/work-details.json";
import testimonials from "@/data/testimonials.json";
import { MarketingShell } from "@/components/marketing-shell";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";

type WorkDetail = {
  slug: string;
  title: string;
  company: string;
  image: string;
  projectLink: string;
  summary: string;
  whyDesign: string;
  layout: string;
  development: string;
  benefits: string[];
  services: string[];
  stack: string[];
  testimonialName?: string | null;
};

type Testimonial = {
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
};

function getWork(slug: string): WorkDetail | undefined {
  return (details as WorkDetail[]).find((w) => w.slug === slug);
}

export async function generateStaticParams() {
  return (details as WorkDetail[]).map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = getWork(params.slug);
  if (!item) return {};
  const title = `${item.title} — Case Study`;
  return {
    title,
    description: item.summary,
    openGraph: {
      title,
      description: item.summary,
      images: [{ url: item.image }],
      type: "article",
    },
    alternates: { canonical: `/portfolio/${item.slug}` },
  };
}

export default function WorkCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getWork(params.slug);
  if (!item) notFound();

  const t = (testimonials as Testimonial[] | undefined)?.find(
    (x) => x.name === item.testimonialName
  );

  return (
    <MarketingShell>
      <main>
        <section className="pt-10 md:pt-16">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to portfolio
              </Link>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                {item.title}
              </h1>
              <p className="mt-3 text-white/80">{item.summary}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge className="bg-white/10 text-white border border-white/10">
                  {item.company}
                </Badge>
                <Badge className="bg-orange-500 text-black">7‑day build</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03]">
              <div className="relative w-full h-[340px] sm:h-[440px] md:h-[560px]">
                <Image
                  src={
                    item.image ||
                    "/placeholder.svg?height=560&width=1200&query=project%20hero"
                  }
                  alt={`${item.title} — project image`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Card>
          </div>
        </section>

        <section className="pb-6 md:pb-10">
          <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <ContentBlock
                eyebrow="Design rationale"
                title="Why this design works"
                body={item.whyDesign}
              />
              <ContentBlock
                eyebrow="Information architecture"
                title="A layout that tells a story"
                body={item.layout}
              />
              <ContentBlock
                eyebrow="Engineering"
                title="Development that doesn’t get in the way"
                body={item.development}
              />

              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  What this delivers for their team
                </h2>
                <ul className="mt-4 grid gap-3">
                  {item.benefits.map((b, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/80"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href={item.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    View live project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-1 space-y-6">
              <Card className="border-white/10 bg-white/5">
                <CardContent className="p-5">
                  <h3 className="text-sm font-semibold tracking-wide text-white/80">
                    Services
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.services.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="bg-white/10 text-white border border-white/10"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-6 text-sm font-semibold tracking-wide text-white/80">
                    Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="bg-white/10 text-white border border-white/10"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {t && (
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-5">
                    <div
                      className="flex items-center gap-2 text-orange-400"
                      aria-label="5 out of 5 stars"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-3 text-white/80">
                      {t.quote}
                    </blockquote>
                    <div className="mt-4 text-sm text-white/60">
                      — {t.name}
                      {t.role ? `, ${t.role}` : ""}
                    </div>
                  </CardContent>
                </Card>
              )}
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </MarketingShell>
  );
}

function ContentBlock({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section>
      <div className="text-xs uppercase tracking-wider text-white/50">
        {eyebrow}
      </div>
      <h2 className="mt-1 text-xl md:text-2xl font-semibold">{title}</h2>
      <p className="mt-3 text-white/80 leading-relaxed">{body}</p>
    </section>
  );
}
