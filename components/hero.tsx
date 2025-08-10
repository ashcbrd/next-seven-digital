"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import marqueeItems from "@/data/marquee.json"

export function Hero({ showCtas = true }: { showCtas?: boolean }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 60])
  const y2 = useTransform(scrollY, [0, 300], [0, -60])

  return (
    <div className="relative overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-3xl"
        style={{ y }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="container mx-auto px-4 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
        >
          <Sparkles className="w-4 h-4 text-orange-400" />
          Launch in 7 days · Senior team · Fair, fixed pricing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
          className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          Build a premium website in <span className="text-orange-500">one week</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.7, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-base md:text-xl text-white/70"
        >
          We plan, write, design, and build conversion‑ready landing pages, portfolios, and product sites in a focused
          7‑day sprint. Small senior team. Clear process. Results you can measure.
        </motion.p>

        {showCtas && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="#cta">
              <Button className="h-11 px-6 bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                Start your 7‑day build
              </Button>
            </Link>
            <Link
              href="#work"
              className="h-11 px-6 inline-flex items-center justify-center rounded-md border border-white/15 bg-white/0 text-white hover:bg-white/5"
            >
              See recent work
            </Link>
          </motion.div>
        )}
      </div>

      <div className="border-y border-white/10 bg-white/5">
        <div className="container mx-auto px-4">
          <Marquee />
        </div>
      </div>
    </div>
  )
}

function Marquee() {
  const items: string[] = marqueeItems
  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex gap-10 whitespace-nowrap text-white/60 text-sm font-medium marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500/80" />
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        .marquee { animation: marquee 22s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
