"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export type NavItem = { href: string; label: string }

function isActive(pathname: string, href: string) {
  if (!href || href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export function MainNav({
  items,
  orientation = "row",
  onNavigate,
  className = "",
}: {
  items: NavItem[]
  orientation?: "row" | "col"
  onNavigate?: () => void
  className?: string
}) {
  const pathname = usePathname()
  const base =
    orientation === "row"
      ? "items-center gap-6 text-sm font-medium hidden md:flex"
      : "flex flex-col items-center gap-3 text-base"

  return (
    <nav className={`${base} ${className}`}>
      {items.map((item) => {
        const active = isActive(pathname, item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`group relative inline-flex items-center gap-2 py-2 transition-colors
              ${active ? "text-white" : "text-white/70 hover:text-white"}
              after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0
              after:h-0.5 after:rounded-full after:bg-orange-500
              ${active ? "after:opacity-100" : "after:opacity-0 group-hover:after:opacity-60"}
            `}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
