import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us — Next Seven Digital | Launch Your Website in 7 Days",
  description:
    "Get in touch with Next Seven Digital to start your 7-day website build. Talk to our expert web design team about creating a high-performance, SEO-ready, and conversion-focused website for your business.",
  keywords: [
    "Contact Next Seven Digital",
    "start website in 7 days",
    "fast website launch",
    "website design contact",
    "7-day website builder",
    "premium website development",
    "conversion-focused websites",
    "SEO-ready websites",
    "business website design",
  ],
};

export default function ContactPage() {
  return <ContactPageClient />;
}
