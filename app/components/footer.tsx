"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Works", href: "/#works" },
    { name: "Services", href: "/#services" },
    
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Web Design & Development",
    "Web Apps",
    "Mobile Apps",
    "UI/UX Design",
    "AI & Automation",
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#09090b] text-white font-sans pt-14 sm:pt-20 lg:pt-24 pb-0 border-t border-neutral-800">
      {/* High-Fidelity Film Grain Noise Texture Overlay */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16] mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="footer-noise-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0.3333 0.3333 0.3333 0 0
                    0.3333 0.3333 0.3333 0 0
                    0.3333 0.3333 0.3333 0 0
                    0      0      0      1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#footer-noise-grain)" />
      </svg>

      <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Positioning Statement */}
          <div className="md:col-span-6 lg:col-span-5">
            
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              We design and build digital products that move businesses forward.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
              Websites, web apps, mobile experiences, AI systems and automation —
              designed around the way your business actually works.
            </p>
          </div>

          {/* Middle Column: Quick links & Services */}
          <div className="md:col-span-6 lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                /Quick Links
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white border border-white/10 transition-all hover:bg-white hover:text-black active:scale-[0.98]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                /Services
              </span>
              <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-neutral-300">
                {services.map((s) => (
                  <li key={s} className="text-neutral-400 hover:text-white transition-colors">
                    · {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Contact info */}
          <div className="md:col-span-12 lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              /Contact
            </span>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="mailto:info@zerofrictionlab.com"
                className="text-base sm:text-lg font-medium text-white transition-colors hover:text-[#FF7300]"
              >
                info@zerofrictionlab.com
              </a>
              <p className="text-xs text-neutral-500 font-mono mt-2">
                ZEROFRICTIONLAB © 2026. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Giant Brand Typography "ZFL" with 25% cropped from bottom */}
        <div className="mt-12 sm:mt-16 w-full h-[25vw] sm:h-[21vw] md:h-[18vw] overflow-hidden select-none pointer-events-none flex items-start justify-center">
          <span className="text-[34vw] sm:text-[28vw] md:text-[24vw] font-black tracking-tight text-neutral-800/60 leading-none whitespace-nowrap text-center">
            ZFL
          </span>
        </div>
      </div>
    </footer>
  );
}
