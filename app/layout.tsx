import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextseven.digital"),
  title: {
    default: "Next Seven Digital — High-Performance Websites in 7 Days",
    template: "%s — Next Seven Digital",
  },
  description:
    "Next Seven Digital builds high-performance, conversion-focused websites in just 7 days. Expert web design, fast development, SEO-ready, and mobile-optimized for businesses that want results fast.",
  applicationName: "Next Seven Digital",
  openGraph: {
    type: "website",
    url: "https://nextseven.digital/",
    siteName: "Next Seven Digital",
    title: "Next Seven Digital — High-Performance Websites in 7 Days",
    description:
      "Next Seven Digital delivers premium, SEO-ready websites in just one week. Senior design team, modern branding, and conversion-optimized development for rapid business growth.",
    images: [
      {
        url: "https://nextseven.digital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next Seven Digital — High-Performance Websites in 7 Days",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Seven Digital — High-Performance Websites in 7 Days",
    description:
      "Websites designed to convert, built in just 7 days. Mobile-friendly, SEO-optimized, and ready to grow your business fast.",
    images: ["https://nextseven.digital/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nextseven.digital/",
  },
  themeColor: "#0a0a0a",
  generator: "v0.dev",
  keywords: [
    "website builder",
    "web design in 7 days",
    "fast website development",
    "conversion-focused websites",
    "SEO-ready websites",
    "mobile-friendly websites",
    "Next Seven Digital",
    "premium web design",
    "high-performance websites",
    "business website design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
