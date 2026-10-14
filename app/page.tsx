import type { Metadata } from "next";
import HeroSection from "./components/hero";

export const metadata: Metadata = {
  title: "Zero Friction Lab (ZFL) — AI Automation & High-Converting Digital Systems",
  description:
    "Zero Friction Lab designs, builds, and launches conversion-focused websites, AI automation engines, and custom intelligence workflows that eliminate business friction.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zero Friction Lab (ZFL) — AI Automation & High-Converting Digital Systems",
    description:
      "Zero Friction Lab designs, builds, and launches conversion-focused websites, AI automation engines, and custom intelligence workflows that eliminate business friction.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section with Doorway Scroll-Zoom and in-place white homepage reveal */}
      <HeroSection />
    </main>
  );
}
