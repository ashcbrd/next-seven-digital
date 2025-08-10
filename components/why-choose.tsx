"use client"

import { ShieldCheck, Timer, Gauge, Trophy, Zap, Handshake, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import points from "@/data/why-points.json"

const iconMap: Record<string, LucideIcon> = { ShieldCheck, Timer, Gauge, Trophy, Zap, Handshake }
type Point = { icon: keyof typeof iconMap; title: string; text: string }

export function WhyChoose() {
  const items = points as Point[]
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why choose Next Seven Digital</h2>
      <p className="mt-3 text-white/70 max-w-2xl">
        We combine product thinking with brand‑level craft and ship at startup speed.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => {
          const Icon = iconMap[p.icon] || ShieldCheck
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition-colors"
            >
              <Icon className="w-6 h-6 text-orange-500" />
              <div className="mt-3 font-semibold text-white">{p.title}</div>
              <p className="text-white/70 text-sm mt-1">{p.text}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
