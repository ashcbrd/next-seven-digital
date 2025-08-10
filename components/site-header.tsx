"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MainNav } from "@/components/main-nav";
import navItems from "@/data/nav-items.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const items = navItems as { href: string; label: string }[];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg flex items-center gap-x-2"
        >
          <img src="/logo.png" alt="Next Seven Digital" className="w-8 h-8" />{" "}
          Next Seven Digital
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <MainNav items={items} orientation="row" />
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
              Get in touch
            </Button>
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-white/10 hover:bg-white/5"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black absolute w-full">
          <div className="px-4 py-3">
            <MainNav
              items={items}
              orientation="col"
              onNavigate={() => setOpen(false)}
            />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-3"
            >
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
