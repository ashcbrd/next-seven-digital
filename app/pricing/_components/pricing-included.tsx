"use client"

import included from "@/data/whats-included.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Gauge, ShieldCheck, BarChart3, ScrollText, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  CheckCircle2,
  Sparkles,
  Gauge,
  ShieldCheck,
  BarChart3,
  ScrollText,
}

type Item = { icon: keyof typeof iconMap; title: string; desc: string }

export function PricingIncluded() {
  const items = included as Item[]
  return (
    <section className="container mx-auto px-4 py-12">
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">What’s included in every plan</h3>
      <p className="mt-3 text-white/70 max-w-2xl">Everything you need to launch confidently—without surprise fees.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3 items-stretch">
        {items.map((it) => {
          const Icon = iconMap[it.icon] || CheckCircle2
          return (
            <Card key={it.title} className="h-full border-white/10 bg-white/5">
              <CardHeader className="flex flex-row items-center gap-3">
                <Icon className="w-6 h-6 text-orange-500" />
                <CardTitle className="text-white text-base">{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-white/70 text-sm">{it.desc}</CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
