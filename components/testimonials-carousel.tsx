"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import testimonials from "@/data/testimonials.json"

type T = { name: string; role: string; quote: string; avatar: string }

export function TestimonialsCarousel() {
  const items = testimonials as T[]
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current
    if (!el) return
    const amount = el.clientWidth * 0.75
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  // Auto-advance gently
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const id = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth
      const next = Math.min(el.scrollLeft + el.clientWidth * 0.75, maxScroll)
      el.scrollTo({ left: next >= maxScroll ? 0 : next, behavior: "smooth" })
    }, 6000)
    return () => clearInterval(id)
  }, [])

  // Keyboard support when focused
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollByAmount("left")
      if (e.key === "ArrowRight") scrollByAmount("right")
    }
    el.addEventListener("keydown", onKey as any)
    return () => el.removeEventListener("keydown", onKey as any)
  }, [])

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What clients say</h2>
          <p className="mt-3 text-white/70">Real feedback from fast launches.</p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Button
            variant="outline"
            className="border-white/15 text-white hover:bg-white/10 bg-transparent"
            onClick={() => scrollByAmount("left")}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="border-white/15 text-white hover:bg-white/10 bg-transparent"
            onClick={() => scrollByAmount("right")}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-8 relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar focus:outline-none"
          style={{ scrollSnapType: "x mandatory" }}
          tabIndex={0}
          aria-label="Testimonials carousel"
        >
          {items.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[33%]"
            >
              <Card className="h-full border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar || "/placeholder.svg?height=80&width=80&query=testimonial%20avatar"}
                      alt={`${t.name} avatar`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <div className="text-white font-semibold">{t.name}</div>
                      <div className="text-xs text-white/60">{t.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-white/80">{t.quote}</div>
                  <div className="mt-4 flex items-center gap-1 text-orange-400" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="sm:hidden mt-4 flex justify-center gap-3">
          <Button
            size="icon"
            variant="outline"
            className="border-white/15 text-white hover:bg-white/10 bg-transparent"
            onClick={() => scrollByAmount("left")}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="border-white/15 text-white hover:bg-white/10 bg-transparent"
            onClick={() => scrollByAmount("right")}
            aria-label="Next testimonials"
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
  )
}
