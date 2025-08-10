"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import testimonials from "@/data/testimonials.json"

type T = { name: string; role: string; quote: string; avatar: string }

export function Testimonials() {
  const items = testimonials as T[]
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What clients say</h2>
          <p className="mt-3 text-white/70">Real feedback from fast launches.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <motion.div
            key={t.name + i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Card className="h-full border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar || "/placeholder.svg"}
                    alt={`${t.name} avatar`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-xs text-white/60">{t.role}</div>
                  </div>
                </div>
                <div className="mt-4 text-white/80">{t.quote}</div>
                <div className="mt-4 flex items-center gap-1 text-orange-400" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
