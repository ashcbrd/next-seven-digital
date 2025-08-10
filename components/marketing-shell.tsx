"use client"

import { SiteHeader } from "@/components/site-header"
import { Analytics } from "@/components/site-analytics"
import type { ReactNode } from "react"

export function MarketingShell({
  children,
  headerMinimal = false,
}: {
  children: ReactNode
  headerMinimal?: boolean
}) {
  return (
    <div className="min-h-[100dvh] bg-black text-white">
      <SiteHeader minimal={headerMinimal} />
      <main>{children}</main>
      <Analytics />
    </div>
  )
}
