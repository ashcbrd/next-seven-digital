"use client"

import { Quote } from "lucide-react"

export function FounderMessage() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
        <Quote className="absolute -top-6 -left-6 h-24 w-24 text-orange-500/20" aria-hidden="true" />
        <h3 className="text-xl font-semibold">A note from the founder</h3>
        <p className="mt-3 text-white/80 leading-relaxed">
          I started Next Seven Digital because great teams shouldn’t wait months for a site that sings. We keep the loop
          tight, the craft high, and the vibes good. Bring your story — we’ll turn it into a site your audience can’t
          ignore. One week. Big smile.
        </p>
        <div className="mt-5 text-sm text-white/60">
          — Founder of Next Seven Digital
        </div>
      </div>
    </div>
  )
}
