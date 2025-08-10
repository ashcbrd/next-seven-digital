"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Palette, Code2, BarChart3, MousePointerClick, PenTool, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import services from "@/data/services.json"

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Palette,
  Code2,
  BarChart3,
  MousePointerClick,
  PenTool,
}

type Service = { icon: keyof typeof iconMap; title: string; desc: string }

export function Services() {
  const items = services as Service[]
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Services built for speed</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            A focused, senior team ships the most important pages first. Launch in a week, iterate every week after.
          </p>
        </div>
        <Badge className="hidden sm:inline-flex bg-white/10 text-white hover:bg-white/15">7‑Day Sprint</Badge>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {items.map((s, i) => {
          const Icon = iconMap[s.icon] || Rocket
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Icon className="w-6 h-6 text-orange-500" />
                  <CardTitle className="text-lg text-white">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-white/70">{s.desc}</CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
