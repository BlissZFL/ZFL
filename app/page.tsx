"use client";

import React from "react";
import HeroSection from "./components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section with Doorway Scroll-Zoom and in-place white homepage reveal */}
      <HeroSection />
    </main>
  );
}
