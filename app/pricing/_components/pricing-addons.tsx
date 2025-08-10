"use client"

import addons from "@/data/addons.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenSquare, Images, Database, Languages, CalendarClock, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  PenSquare,
  Images,
  Database,
  Languages,
  CalendarClock,
}

type Addon = { icon: keyof typeof iconMap; title: string; desc: string; price: string }

export function PricingAddons() {
  const items = addons as Addon[]
  return (
    <section className="container mx-auto px-4 py-12">
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Optional add‑ons</h3>
      <p className="mt-3 text-white/70 max-w-2xl">Keep costs lean and tack on extras only if you need them.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3 items-stretch">
        {items.map((it) => {
          const Icon = iconMap[it.icon] || PenSquare
          return (
            <Card key={it.title} className="h-full border-white/10 bg-white/5">
              <CardHeader className="flex flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-orange-500" />
                  <CardTitle className="text-white text-base">{it.title}</CardTitle>
                </div>
                <div className="text-sm text-orange-400 font-semibold">{it.price}</div>
              </CardHeader>
              <CardContent className="text-white/70 text-sm">{it.desc}</CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
