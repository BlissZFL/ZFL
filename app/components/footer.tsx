"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Works", href: "/#works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#09090b] text-white font-sans pt-12 sm:pt-16 lg:pt-20 pb-0 border-t border-neutral-800">
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute inset-0" />

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Headline */}
          <div className="md:col-span-6 lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Scaling <br />
              Start-ups <br />
              for Growth.
            </h2>
          </div>

          {/* Middle Column: Quick links */}
          <div className="md:col-span-6 lg:col-span-4">
            <span className="text-sm font-mono text-neutral-400 tracking-tight">
              /Quick links
            </span>
            <div className="mt-4 flex flex-wrap gap-2.5 max-w-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:bg-neutral-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Contact */}
          <div className="md:col-span-12 lg:col-span-3">
            <span className="text-sm font-mono text-neutral-400 tracking-tight">
              /Contact
            </span>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="mailto:info@zerofrictionlab.com"
                className="text-base sm:text-lg font-medium text-white transition-colors hover:text-[#FF7300]"
              >
                info@zerofrictionlab.com
              </a>
              <p className="text-xs text-neutral-500 font-mono mt-1">
                ZeroFrictionLab © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Giant Brand Typography "ZFL" with 25% cropped from bottom */}
        <div className="mt-8 sm:mt-12 w-full h-[25vw] sm:h-[21vw] md:h-[18vw] overflow-hidden select-none pointer-events-none flex items-start justify-center">
          <span className="text-[34vw] sm:text-[28vw] md:text-[24vw] font-black tracking-tight text-neutral-800/60 leading-none whitespace-nowrap text-center">
            ZFL
          </span>
        </div>
      </div>
    </footer>
  );
}
