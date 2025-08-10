"use client"

import { motion } from "framer-motion"
import { WeekCalendar } from "./week-calendar"

export function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Small team. Big outcomes.</h2>
          <p className="mt-4 text-white/70">
            We’re a compact, senior studio that ships fast without cutting corners. We remove ceremony, stay close to
            the goal, and deliver brand‑level craft you can launch — and grow — in days, not months.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            <Stat label="Avg. delivery" value="7 days" />
            <Stat label="Projects shipped" value="100+" />
            <Stat label="Client satisfaction" value="95%+" />
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-end"
        >
          <WeekCalendar />
        </motion.div>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-2xl font-semibold text-orange-500">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  )
}
