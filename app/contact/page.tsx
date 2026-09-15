import ContactSection from "./contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project | ZeroFrictionLab",
  description:
    "Tell us what you're building, where you're stuck and what success looks like. We'll help turn the idea into a clear next step.",
  alternates: {
    canonical: "https://www.zerofrictionlab.com/contact",
  },
  openGraph: {
    type: "website",
    siteName: "ZeroFrictionLab",
    title: "Start a Project | ZeroFrictionLab",
    description:
      "Tell us what you're building, where you're stuck and what success looks like. We'll help turn the idea into a clear next step.",
    url: "https://www.zerofrictionlab.com/contact",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
