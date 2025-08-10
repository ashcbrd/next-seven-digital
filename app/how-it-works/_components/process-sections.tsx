"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarClock, MessageSquare, ClipboardCheck, FolderCheck, ShieldCheck } from "lucide-react"
import { AccordionList, type AccordionEntry } from "@/components/accordion-list"
import deliverables from "@/data/deliverables.json"
import requirements from "@/data/requirements.json"
import communications from "@/data/communications.json"
import schedule from "@/data/schedule.json"
import guarantees from "@/data/guarantees.json"

export function Deliverables() {
  const items = deliverables as { title: string; desc: string }[]
  return (
    <Section title="What you get at the end of the week" icon={<FolderCheck className="w-5 h-5 text-orange-500" />}>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <Card key={it.title} className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle className="text-base text-white">{it.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-white/70">{it.desc}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export function Requirements() {
  const items = requirements as string[]
  return (
    <Section title="What we need from you" icon={<ClipboardCheck className="w-5 h-5 text-orange-500" />}>
      <ul className="grid gap-2 sm:grid-cols-2">
        {items.map((c) => (
          <li key={c} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
            {c}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function Communication() {
  const items = communications as { title: string; desc: string }[]
  return (
    <Section title="Communication & tools" icon={<MessageSquare className="w-5 h-5 text-orange-500" />}>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <Card key={it.title} className="border-white/10 bg-white/5">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base text-white">{it.title}</CardTitle>
              <Badge className="bg-white/10 text-white hover:bg-white/15">Slack · Loom · Figma</Badge>
            </CardHeader>
            <CardContent className="text-sm text-white/70">{it.desc}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export function SampleSchedule() {
  const rows = schedule as { day: string; items: string[] }[]
  return (
    <Section title="Sample 7‑day schedule" icon={<CalendarClock className="w-5 h-5 text-orange-500" />}>
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="min-w-[640px] w-full text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Day</th>
              <th className="text-left px-4 py-3 font-semibold">Focus</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-white/10">
                <td className="px-4 py-3 text-white/80">{r.day}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    {r.items.map((it) => (
                      <span key={it} className="rounded-md bg-white/5 px-2 py-1 text-white/80">
                        {it}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

export function Guarantees() {
  const items = guarantees as { title: string; desc: string }[]
  const entries: AccordionEntry[] = items.map((g, i) => ({
    id: `g-${i}`,
    trigger: g.title,
    content: g.desc,
  }))

  return (
    <Section title="Our guarantees" icon={<ShieldCheck className="w-5 h-5 text-orange-500" />}>
      <AccordionList items={entries} type="multiple" className="rounded-xl border border-white/10 bg-white/5 p-2" />
    </Section>
  )
}

function Section({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center gap-2">
        {icon}
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>
      </div>
      {children}
    </section>
  )
}
