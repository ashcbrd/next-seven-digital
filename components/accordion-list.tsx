"use client"

import type * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export type AccordionEntry = {
  id?: string
  trigger: React.ReactNode
  content: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionList({
  items,
  type = "single",
  className = "",
  collapsible = true,
}: {
  items: AccordionEntry[]
  type?: "single" | "multiple"
  className?: string
  collapsible?: boolean
}) {
  // Only pass collapsible for type="single" to avoid DOM warning
  const collapsibleProps = type === "single" ? { collapsible } : {}
  const defaultValue =
    type === "single"
      ? (items.find((i) => i.defaultOpen)?.id ?? undefined)
      : items.filter((i) => i.defaultOpen).map((i, idx) => i.id ?? `item-${idx}`)

  return (
    <Accordion type={type} className={className} defaultValue={defaultValue as any} {...collapsibleProps}>
      {items.map((it, idx) => {
        const value = it.id ?? `item-${idx}`
        return (
          <AccordionItem key={value} value={value} className="border-white/10 px-4">
            <AccordionTrigger className="text-left text-white">{it.trigger}</AccordionTrigger>
            <AccordionContent className="text-white/80 whitespace-pre-wrap">{it.content}</AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
