"use client"

import { motion } from "framer-motion"
import { Timer, PencilRuler, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: PencilRuler,
    title: "Day 1 — Strategy & script",
    text: "Positioning, audience, and the site outline. We write the narrative and wire the flow.",
  },
  {
    icon: Code2,
    title: "Days 2–4 — Design & build",
    text: "High‑fidelity design with motion, and parallel development with real content.",
  },
  {
    icon: Timer,
    title: "Day 5 — Polish & QA",
    text: "Micro‑interactions, accessibility, performance, and responsive sweeps.",
  },
  {
    icon: Rocket,
    title: "Day 6–7 — Launch",
    text: "DNS, analytics, SEO metadata, and go‑live. Ship, learn, iterate.",
  },
]

export function HowItWorks() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How it works</h2>
      <p className="mt-3 text-white/70 max-w-2xl">
        A focused 7‑day sprint. We remove handoffs, keep feedback tight, and ship faster than traditional teams.
      </p>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <s.icon className="w-6 h-6 text-orange-500" />
            <div className="mt-3 font-semibold">{s.title}</div>
            <p className="text-white/70 text-sm mt-1">{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
