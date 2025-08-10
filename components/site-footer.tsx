import type React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/0 text-white/70 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
    >
      {children}
      <span className="sr-only">{label}</span>
    </Link>
  );
}

export function SiteFooter({
  disableLinks = false,
}: {
  disableLinks?: boolean;
}) {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold flex items-center gap-x-2">
              <img
                src="/logo.png"
                alt="Next Seven Digital"
                className="w-8 h-8"
              />{" "}
              Next Seven Digital
            </div>
            <p className="mt-2 text-sm text-white/60">
              Premium websites, launched in one focused week — without agency
              bloat.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <SocialIcon
              href="https://www.linkedin.com/company/next-seven-digital"
              label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="mailto:hello@nextsevendigital.com" label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="https://facebook.com" label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/45">
          © {new Date().getFullYear()} Next Seven Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
