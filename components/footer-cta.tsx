"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FooterCta({ disableLinks = false }: { disableLinks?: boolean }) {
  return (
    <footer id="cta" className="border-t border-white/10 mt-12">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to launch in a week?</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              Tell us your goal and we’ll map a 7‑day sprint that ships the most impactful pages first.
            </p>
          </div>

          {!disableLinks ? (
            <div className="flex gap-3">
              <Link href="mailto:hello@nextsevendigital.com">
                <Button className="h-11 px-6 bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                  Get in touch
                </Button>
              </Link>
              <Link
                href="#services"
                className="h-11 px-6 inline-flex items-center justify-center rounded-md border border-white/15 hover:bg-white/10"
              >
                See services
              </Link>
            </div>
          ) : (
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
              Email: hello@nextsevendigital.com
            </div>
          )}
        </div>

        {!disableLinks ? (
          <div className="mt-12 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              <span className="text-orange-500">*</span> Next Seven Digital — Websites in 7 Days
            </div>
            <div className="space-x-3">
              <a href="#work" className="hover:text-white">
                Work
              </a>
              <a href="#why" className="hover:text-white">
                Why Us
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-12 text-xs text-white/50">
            <span className="text-orange-500">*</span> Next Seven Digital — Websites in 7 Days
          </div>
        )}
      </div>
    </footer>
  )
}
