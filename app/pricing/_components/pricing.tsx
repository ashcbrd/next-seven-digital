"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import plans from "@/data/pricing.json"

type Plan = {
  name: string
  price: string
  highlight: boolean
  tagline?: string
  features: string[]
  cta?: string
}

export function Pricing({ showCta = true }: { showCta?: boolean }) {
  const items = plans as Plan[]
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Straightforward pricing</h2>
      <p className="mt-3 text-white/70 max-w-2xl">
        Quality you can feel, at a price that doesn’t slow you down. Pick a week, bring your goals—we’ll launch.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3 items-stretch">
        {items.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="h-full"
          >
            <Card
              className={`h-full flex flex-col border-white/10 ${
                p.highlight ? "bg-white/10" : "bg-white/5"
              } hover:bg-white/[0.12] transition-colors`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">{p.name}</CardTitle>
                  {p.highlight && <Badge className="bg-orange-500 text-black">Most popular</Badge>}
                </div>
                <div className="mt-2 text-orange-500 text-xl font-semibold">{p.price}</div>
                {p.tagline && <p className="text-sm text-white/70 mt-1">{p.tagline}</p>}
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/80">
                      <Check className="w-4 h-4 text-orange-500 mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {showCta && (
                <CardFooter className="mt-auto">
                  <Link
                    href="/contact"
                    className="w-full"
                    aria-label={`${p.cta || "Book your build week"} — ${p.name}`}
                  >
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                      {p.cta || "Book your build week"}
                    </Button>
                  </Link>
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
