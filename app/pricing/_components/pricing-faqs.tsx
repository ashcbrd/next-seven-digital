"use client"

import { AccordionList, type AccordionEntry } from "@/components/accordion-list"
import faqs from "@/data/pricing-faqs.json"

type Q = { q: string; a: string }

export function PricingFaqs() {
  const items = (faqs as Q[]).map<AccordionEntry>((f, i) => ({
    id: `pricing-faq-${i}`,
    trigger: f.q,
    content: f.a,
  }))

  return (
    <section className="container mx-auto px-4 py-12">
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Pricing FAQs</h3>
      <AccordionList items={items} type="multiple" className="mt-8 rounded-xl border border-white/10 bg-white/5 p-2" />
    </section>
  )
}
