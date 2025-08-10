"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  PencilRuler,
  Code2,
  Rocket,
  CheckCircle2,
  Layout,
  FileText,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import { AccordionList, type AccordionEntry } from "@/components/accordion-list"
import steps from "@/data/process-steps.json"

const iconMap: Record<string, LucideIcon> = { PencilRuler, Code2, Rocket, Layout, FileText, Palette, Sparkles }
type Step = {
  day: string
  title: string
  icon: keyof typeof iconMap
  owner: "Design" | "Engineering" | "Both"
  summary: string
  outputs: string[]
}

export function HowItWorksDetailed() {
  const items = steps as Step[]
  return (
    <div className="container mx-auto px-4">
      <header className="max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our 7‑day sprint, in detail</h2>
        <p className="mt-3 text-white/70">
          Senior design and engineering work in parallel. Fewer handoffs, tighter feedback, higher quality—shipped in a
          week.
        </p>
      </header>

      <div className="mt-10 grid gap-4">
        {items.map((s, i) => {
          const Icon = iconMap[s.icon] || PencilRuler
          const entries: AccordionEntry[] = [
            {
              id: `outputs-${i}`,
              trigger: "See deliverables",
              content: (
                <ul className="grid sm:grid-cols-2 gap-2">
                  {s.outputs.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              ),
              defaultOpen: false,
            },
          ]

          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Card className="border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-orange-500" />
                    <div>
                      <CardTitle className="text-lg text-white">
                        {s.day} — {s.title}
                      </CardTitle>
                      <p className="text-sm text-white/70">{s.summary}</p>
                    </div>
                  </div>
                  <Badge className="w-fit bg-white/10 text-white hover:bg-white/15">Owner: {s.owner}</Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <AccordionList
                    items={entries}
                    type="single"
                    className="rounded-lg border border-white/10 bg-white/5 p-2"
                  />
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
