"use client"

import { AccordionList, type AccordionEntry } from "@/components/accordion-list"
import faqs from "@/data/faqs.json"

type Faq = { q: string; a: string }

export function Faqs({ defaultType = "single" }: { defaultType?: "single" | "multiple" }) {
  const items = (faqs as Faq[]).map<AccordionEntry>((f, i) => ({
    id: `faq-${i}`,
    trigger: f.q,
    content: f.a,
  }))

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">FAQs</h2>
      <p className="mt-3 text-white/70 max-w-2xl">Answers to common questions about our 7‑day sprint.</p>

      <AccordionList
        items={items}
        type={defaultType}
        className="mt-8 rounded-xl border border-white/10 bg-white/5 p-2"
      />
    </div>
  )
}
