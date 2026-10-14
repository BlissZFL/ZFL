"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./nav";
import TwoCentsSection from "./two-cents-section";
import ServicesSection from "./services-section";
import WorkSection from "./work";
import ProcessSection from "./process";
import FAQSection from "./faq";
import CalendlySection from "./calendly";

import Footer from "./footer";

const servicesList = [
  "/ Website Design & Development ",
  "/ AI Automation & Systems",
  
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UI Content fade & slide up quickly during the first ~22% of scroll
  const contentOpacity = Math.max(0, 1 - progress * 4.5);
  const contentTranslateY = -(progress * 60);

  // Exponential zoom into the door center (50% 48%)
  const imageScale = 1 + Math.pow(Math.min(progress / 0.72, 1), 2) * 28;

  // Pure white flash as we enter through the door between 52% and 72%
  const whiteOpacity =
    progress < 0.52
      ? 0
      : Math.min(1, Math.pow((progress - 0.52) / 0.2, 1.3));

  // Homepage reveals IN PLACE out of the full white screen (NOT sliding from bottom)
  // between 72% and 94% scroll progress
  const homepageRevealOpacity =
    progress < 0.72
      ? 0
      : Math.min(1, Math.pow((progress - 0.72) / 0.2, 1.1));

  return (
    <div
      ref={containerRef}
      id="doorway-hero-container"
      className="relative h-[320vh] w-full bg-black"
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {/* Background Image with Zoom centered at the glowing door */}
        <div
          className="absolute inset-0 h-full w-full will-change-transform"
          style={{
            transform: `scale(${imageScale})`,
            transformOrigin: "50% 48%",
            transition: "transform 0.05s ease-out",
          }}
        >
          <Image
            src="/hero-door-walk-poster.jpg"
            alt="Hero Glowing Portal Doorway"
            fill
            priority
            quality={95}
            className="object-cover object-center select-none pointer-events-none"
          />
        </div>

        {/* Ambient Dark Gradients for contrast while hero content is visible */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 transition-opacity duration-300"
          style={{ opacity: contentOpacity }}
        />

        {/* Hero Top Navbar (Dark Theme) - fades away as user scrolls into the door */}
        <div
          className="relative z-30 transition-opacity duration-200"
          style={{
            opacity: contentOpacity,
            pointerEvents: contentOpacity < 0.1 ? "none" : "auto",
          }}
        >
          <Navbar theme="dark" />
        </div>

        {/* Hero Foreground Content */}
        <div
          className="relative z-20 flex h-full w-full flex-col justify-end px-6 pb-28 pt-24 sm:px-10 sm:pb-36 lg:px-16 lg:pb-40"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentTranslateY}px)`,
            pointerEvents: contentOpacity < 0.1 ? "none" : "auto",
            transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
          }}
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-12 lg:grid-cols-12">
            {/* Left Column: Headline, Paragraph, CTAs */}
            <div className="flex flex-col items-start lg:col-span-7">
              {/* Main Headline */}
              <h1 className="max-w-xl text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl leading-[1.08]">
                Websites that convert. AI systems that saves time. 
              </h1>

              {/* Subtitle / Description */}
              <p className="mt-6 max-w-lg text-sm sm:text-base font-light leading-relaxed text-neutral-300/95">
                Conversion-focused websites that speak for your brand. AI systems that save time, cut 
busywork, and get better results, without you managing it. 
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="https://cal.com/sanaf-suhail/discoverycall"
                  className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition-all duration-200 active:scale-95"
                >
                  <span>Book a Call</span>
                </Link>

                <Link
                  href="#work"
                  className="inline-flex items-center border border-white/20 bg-neutral-900/80 px-6 py-3 text-sm font-medium text-white shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-white/35 active:scale-95"
                >
                  See our work
                </Link>
              </div>
            </div>

            {/* Right Column: Service Highlights Stack */}
            <div className="flex flex-col items-start lg:items-end justify-end lg:col-span-5">
              <div className="space-y-2.5 text-left lg:text-right">
                {servicesList.map((service, index) => (
                  <p
                    key={index}
                    className="text-xs sm:text-sm font-mono tracking-widest text-neutral-300/90 uppercase"
                  >
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>

          
        </div>

        {/* Pure White Takeover Overlay when fully zoomed into the gate */}
        <div
          className="pointer-events-none absolute inset-0 z-40 bg-white will-change-opacity"
          style={{
            opacity: whiteOpacity,
            transition: "opacity 0.05s ease-out",
          }}
        />

        {/* White Homepage UI: Emerges IN PLACE out of the white screen with Light Navbar */}
        <div
          id="white-homepage-container"
          className="absolute inset-0 z-50 flex flex-col justify-start overflow-y-auto bg-white will-change-opacity will-change-transform scroll-smooth"
          style={{
            opacity: homepageRevealOpacity,
            pointerEvents: homepageRevealOpacity > 0.85 ? "auto" : "none",
            transform: `scale(${0.98 + 0.02 * homepageRevealOpacity})`,
            transition: "opacity 0.08s ease-out, transform 0.08s ease-out",
          }}
        >
          {/* Light Theme Navbar with zflblack.svg, dark nav links & dark CTA text */}
          <Navbar theme="light" />

          {/* White Homepage Content: Two Cents Section, Services Section, FAQ & Footer */}
          <div className="w-full mx-auto pt-0 pb-0">
            <TwoCentsSection />
            <ServicesSection />
            <WorkSection />
            <ProcessSection />
            <FAQSection />
            <CalendlySection />

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
