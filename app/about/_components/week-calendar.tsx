"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import type { LucideIcon } from "lucide-react"
import { Target, FileText, Layout, Palette, Code2, ShieldCheck, Rocket } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type DayPlan = {
  short: string
  title: string
  aria: string
  Icon: LucideIcon
}

const PLAN: DayPlan[] = [
  {
    short: "Mon",
    title: "Kickoff + Goals",
    aria: "Monday: Project kickoff, alignment, goals and success metrics.",
    Icon: Target,
  },
  {
    short: "Tue",
    title: "Copy + IA",
    aria: "Tuesday: Information architecture and conversion-first copy.",
    Icon: FileText,
  },
  { short: "Wed", title: "Wireframes", aria: "Wednesday: Wireframes and key user flows.", Icon: Layout },
  {
    short: "Thu",
    title: "Visual Design",
    aria: "Thursday: Visual design, components, and motion direction.",
    Icon: Palette,
  },
  { short: "Fri", title: "Build + CMS", aria: "Friday: Build pages, connect CMS, and analytics.", Icon: Code2 },
  {
    short: "Sat",
    title: "QA + Polish",
    aria: "Saturday: QA, performance, accessibility, and polish.",
    Icon: ShieldCheck,
  },
  { short: "Sun", title: "Launch + Handoff", aria: "Sunday: Launch, handoff, and Loom walkthroughs.", Icon: Rocket },
]

// Convert JS day (Sun=0..Sat=6) to Monday-start index (Mon=0..Sun=6)
function monStartIndex(jsDay: number) {
  return (jsDay + 6) % 7
}

export function WeekCalendar() {
  const prefersReducedMotion = useReducedMotion()
  const [active, setActive] = useState<number>(monStartIndex(new Date().getDay()))

  // Animate the highlight moving across Mon -> Sun
  useEffect(() => {
    if (prefersReducedMotion) return
    const id = setInterval(() => setActive((i) => (i + 1) % 7), 900)
    return () => clearInterval(id)
  }, [prefersReducedMotion])

  const monthLabel = useMemo(() => {
    const d = new Date()
    return new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }).format(d)
  }, [])

  return (
    <TooltipProvider delayDuration={200}>
      <div
        className="w-full max-w-[560px] rounded-2xl border border-white/10 bg-white/[0.06] p-4 md:p-5"
        aria-label="Seven-day sprint plan with icons"
        role="group"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-white/60">This week</div>
          <div className="text-sm font-medium text-white/80">{monthLabel}</div>
        </div>

        {/* Days grid with icon plan */}
        <div className="mt-3 grid grid-cols-7 gap-2">
          {PLAN.map((d, i) => {
            const isActive = i === active
            const Icon = d.Icon
            return (
              <div key={d.short} className="relative">
                {/* Animated spotlight */}
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg bg-orange-500/25"
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                />
                {/* Cell */}
                <motion.div
                  className={[
                    "relative z-[1] flex flex-col items-center justify-between rounded-lg border bg-white/[0.03] px-2 py-2",
                    isActive ? "border-orange-500 text-white" : "border-white/10 text-white/80",
                    "min-h-[88px]",
                  ].join(" ")}
                  animate={isActive ? { scale: 1.04 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  aria-label={d.aria}
                >
                  {/* Day label */}
                  <div className="flex w-full items-center justify-between">
                    <span className="text-[11px] font-medium text-white/70">{d.short}</span>
                    {isActive && (
                      <span aria-hidden="true" className="ml-1 inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
                    )}
                  </div>

                  {/* Icon with tooltip (replaces words) */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-1 items-center justify-center">
                        <Icon
                          className={isActive ? "h-6 w-6 text-orange-400" : "h-6 w-6 text-white/80"}
                          aria-hidden="true"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="text-xs">
                      {d.title}
                    </TooltipContent>
                  </Tooltip>

                  {/* Spacer to keep layout balanced */}
                  <div className="h-0.5" />
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Footer strip */}
        <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="text-sm text-white/70">
            7‑day build
            <span className="ml-2 inline-flex h-2 w-2 animate-pulse rounded-full bg-orange-500 align-middle" />
          </div>
          <div className="text-xs text-white/55">Kickoff → Copy → Wireframe → Design → Build → QA → Launch</div>
        </div>
      </div>
    </TooltipProvider>
  )
}
