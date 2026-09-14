"use client";

import React from "react";

// The 8-spoke Wheel SVG Component with rolling animation
function AnimatedWheel() {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:lg:w-28 text-neutral-200/90 shrink-0 animate-roll-left select-none"
    >
      <rect
        width="16.1765"
        height="110"
        transform="translate(46.9118)"
        fill="currentColor"
      />
      <rect
        width="16.1765"
        height="110"
        transform="matrix(0 -1 1 0 0 63.0881)"
        fill="currentColor"
      />
      <rect
        width="16.1765"
        height="110"
        transform="translate(10.5148 21.9531) rotate(-45)"
        fill="currentColor"
      />
      <rect
        width="16.1765"
        height="110"
        transform="translate(88.2964 10.5148) rotate(45)"
        fill="currentColor"
      />
    </svg>
  );
}

const marqueeItems = [
  "Our Works",
  "Our Works",
  "Our Works",
  "Our Works",
  "Our Works",
  "Our Works",
];

export default function WorksSection() {
  return (
    <section
      id="works"
      className="w-full overflow-hidden bg-[#f8f8fa] py-14 sm:py-20 lg:py-24 font-sans"
    >
      {/* Infinite Horizontal Running Marquee */}
      <div className="relative flex w-full overflow-hidden select-none">
        {/* Repeating Track (duplicated for continuous infinite loop) */}
        <div className="flex w-max shrink-0 items-center gap-8 sm:gap-14 lg:gap-20 animate-marquee-left will-change-transform">
          {marqueeItems.map((text, i) => (
            <div key={`m1-${i}`} className="flex items-center gap-8 sm:gap-14 lg:gap-20 shrink-0">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-neutral-900 whitespace-nowrap">
                {text}
              </span>
              <AnimatedWheel />
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite looping */}
        <div
          aria-hidden="true"
          className="flex w-max shrink-0 items-center gap-8 sm:gap-14 lg:gap-20 animate-marquee-left will-change-transform"
        >
          {marqueeItems.map((text, i) => (
            <div key={`m2-${i}`} className="flex items-center gap-8 sm:gap-14 lg:gap-20 shrink-0">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-neutral-900 whitespace-nowrap">
                {text}
              </span>
              <AnimatedWheel />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
