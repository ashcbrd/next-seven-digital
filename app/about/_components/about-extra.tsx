"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Target, Rocket, Ruler, BarChart3, HeartHandshake, Sparkles, type LucideIcon } from "lucide-react"
import principles from "@/data/about-principles.json"
import tools from "@/data/tools.json"

const iconMap: Record<string, LucideIcon> = { Target, Rocket, Ruler, BarChart3, HeartHandshake, Sparkles }

type Principle = { icon: keyof typeof iconMap; title: string; desc: string }

export function AboutExtra() {
  const list = principles as Principle[]
  const toolList = tools as string[]
  return (
    <div className="container mx-auto px-4">
      <section>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our approach</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          We’re small by design, senior by default, and obsessive about clarity. Expect fewer meetings, more momentum,
          and work that makes a measurable dent.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {list.map((p, i) => {
            const Icon = iconMap[p.icon] || Target
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="h-full"
              >
                <Card className="h-full border-white/10 bg-white/5">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <Icon className="w-6 h-6 text-orange-500" />
                    <CardTitle className="text-white text-lg">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/70">{p.desc}</CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Our stack & tools</h3>
        <p className="mt-3 text-white/70 max-w-2xl">
          We choose tools that help us ship faster and maintain quality. You’ll get clean code, docs, and an editing
          workflow your team can own.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {toolList.map((t, i) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
