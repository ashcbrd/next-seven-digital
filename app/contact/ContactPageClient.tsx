"use client";

import { MarketingShell } from "@/components/marketing-shell";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPageClient() {
  return (
    <MarketingShell>
      <section className="pt-16 md:pt-24 pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Contact
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            Ready to launch in a week? Share a few details and we’ll reply
            within one business day.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(
                "7‑Day Website — Project Inquiry"
              );
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get(
                  "email"
                )}\nCompany: ${data.get("company")}\nGoal:\n${data.get("goal")}`
              );
              window.location.href = `mailto:hello@nextsevendigital.com?subject=${subject}&body=${body}`;
            }}
            className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4 flex flex-col"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-white/80">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md bg-black border border-white/15 px-3 py-2 outline-none focus:border-orange-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/80">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md bg-black border border-white/15 px-3 py-2 outline-none focus:border-orange-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm text-white/80">
                Company
              </label>
              <input
                id="company"
                name="company"
                className="w-full rounded-md bg-black border border-white/15 px-3 py-2 outline-none focus:border-orange-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="goal" className="text-sm text-white/80">
                What do you want to launch in a week?
              </label>
              <textarea
                id="goal"
                name="goal"
                rows={5}
                required
                className="w-full rounded-md bg-black border border-white/15 px-3 py-2 outline-none focus:border-orange-500"
              />
            </div>
            <button
              className="h-11 px-6 w-full md:w-max rounded-md bg-orange-500 hover:bg-orange-600 text-black font-semibold ml-auto"
              type="submit"
            >
              Start your 7‑day build
            </button>
            <p className="text-xs text-white/60">
              Or email us directly at{" "}
              <Link
                href="mailto:hello@nextsevendigital.com"
                className="text-orange-400 underline"
              >
                hello@nextsevendigital.com
              </Link>
            </p>
          </form>
        </div>
      </section>

      <SiteFooter />
    </MarketingShell>
  );
}
