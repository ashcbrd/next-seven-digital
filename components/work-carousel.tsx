"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import slides from "@/data/work-slides.json";

type Slide = {
  title: string;
  desc: string;
  href?: string;
  img: string;
  isSelectedWork?: boolean;
  slug?: string;
};

export function WorkCarousel({ showLinks = false }: { showLinks?: boolean }) {
  // Only show items explicitly selected for homepage
  const items = (slides as Slide[]).filter((s) => s.isSelectedWork === true);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // Auto-advance gently
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const id = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = Math.min(el.scrollLeft + el.clientWidth * 0.8, maxScroll);
      el.scrollTo({ left: next >= maxScroll ? 0 : next, behavior: "smooth" });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Selected work
          </h2>
          <p className="mt-3 text-white/70">
            A few highlights from recent one‑week sprints.
          </p>
          <div className="mt-4 sm:hidden">
            <Link href="/portfolio" aria-label="See the full portfolio">
              <Button
                variant="outline"
                className="!hover:text-zinc-200 bg-transparent"
              >
                See full portfolio
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Link href="/portfolio" aria-label="See the full portfolio">
            <Button
              variant="outline"
              className="border-white/15 bg-transparent text-white hover:bg-white/10"
            >
              See full portfolio
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-white/15 text-white hover:bg-white/10 bg-transparent"
            onClick={() => scrollByAmount("left")}
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="border-white/15 text-white hover:bg-white/10 bg-transparent"
            onClick={() => scrollByAmount("right")}
            aria-label="Next projects"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-8 relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map((s, i) => (
            <motion.div
              key={s.title + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="snap-start shrink-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[33%]"
            >
              <Card className="relative overflow-hidden border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] group">
                <Link
                  href={s.slug ? `/portfolio/${s.slug}` : s.href || "#"}
                  aria-label={`Open case study: ${s.title}`}
                  className="absolute inset-0 z-10"
                />
                <div className="relative w-full h-56 sm:h-60 md:h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={
                      s.img ||
                      "/placeholder.svg?height=360&width=640&query=project%20preview"
                    }
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    priority={i === 0}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-lg p-3">
                    <div className="text-white font-semibold">{s.title}</div>
                    <p className="text-sm text-white/70 line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-4 flex justify-center gap-3">
          <Button
            size="icon"
            variant="outline"
            className="border-white/15 text-white hover:bg-white/10 bg-transparent"
            onClick={() => scrollByAmount("left")}
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="border-white/15 text-white hover:bg-white/10 bg-transparent"
            onClick={() => scrollByAmount("right")}
            aria-label="Next projects"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar {
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
