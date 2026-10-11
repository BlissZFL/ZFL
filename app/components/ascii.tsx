"use client";

import React, { useState } from "react";
import Image from "next/image";

const ASCII_LINE_1 = [
  "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
  "▓▒░ ZFL STUDIOS ░▒▓",
  "╔══════════════════╗",
  "║ 01001010 01000110 01001100 ║",
  "╚══════════════════╝",
  "┌─────────────────────────────┐",
  "│ DESIGN × DEVELOP × DEPLOY  │",
  "└─────────────────────────────┘",
  "≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋",
  "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
];

const ASCII_LINE_2 = [
  "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
  "[ WEB APPS ]",
  "{ AUTOMATION }",
  "< AI PIPELINES >",
  "[ UX + PRODUCT ]",
  "{ MVP LAUNCH }",
  "< PITCH DECKS >",
  "[ TECH PARTNER ]",
  "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
];

const ASCII_LINE_3 = [
  "▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀",
  "⌗ STUDIO · 2024",
  "⌗ BUILD FAST · SHIP SMART",
  "⌗ PIXELS TO PRODUCTION",
  "⌗ DESIGN SYSTEMS",
  "⌗ ZERO BLOAT CODE",
  "⌗ YOUR TECH PARTNER",
  "▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀",
];

interface MarqueeRowProps {
  items: string[];
  speed?: number;
  reversed?: boolean;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function MarqueeRow({
  items,
  speed = 28,
  reversed = false,
  hovered,
  onMouseEnter,
  onMouseLeave,
}: MarqueeRowProps) {
  const repeated = [...items, ...items, ...items, ...items];
  const joined = repeated.join("   ·   ");

  return (
    <div
      className="overflow-hidden w-full select-none cursor-default"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`inline-flex whitespace-nowrap transition-colors duration-500 ${
          hovered ? "text-blue-500" : "text-neutral-400"
        }`}
        style={{
          animation: `${reversed ? "marquee-ascii-right" : "marquee-ascii-left"} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        <span className="font-mono text-xs sm:text-sm tracking-widest pr-8">
          {joined}
        </span>
        <span
          className="font-mono text-xs sm:text-sm tracking-widest pr-8"
          aria-hidden="true"
        >
          {joined}
        </span>
      </div>
    </div>
  );
}

export default function ASCIISection() {
  const [row1Hovered, setRow1Hovered] = useState(false);
  const [row2Hovered, setRow2Hovered] = useState(false);
  const [row3Hovered, setRow3Hovered] = useState(false);

  return (
    <section
      id="ascii-marquee"
      className="relative w-full overflow-hidden bg-white border-t border-b border-neutral-100 py-0"
    >
      {/* Keyframes for both directions */}
      <style>{`
        @keyframes marquee-ascii-left {
          0%   { transform: translateX(0%);   }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-ascii-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%);   }
        }
      `}</style>

      <div className="w-full py-10 flex flex-col gap-7">
        {/* ── Row 1 ── scrolls left */}
        <MarqueeRow
          items={ASCII_LINE_1}
          speed={30}
          reversed={false}
          hovered={row1Hovered}
          onMouseEnter={() => setRow1Hovered(true)}
          onMouseLeave={() => setRow1Hovered(false)}
        />

        {/* ── Center logo row ── row 2 scrolls right, circle floats above */}
        <div className="relative flex items-center justify-center w-full">
          {/* Row 2 behind circle */}
          <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
            <MarqueeRow
              items={ASCII_LINE_2}
              speed={20}
              reversed={true}
              hovered={row2Hovered}
              onMouseEnter={() => setRow2Hovered(true)}
              onMouseLeave={() => setRow2Hovered(false)}
            />
          </div>

          {/* Black circle with ZFL white logo */}
          <div
            className="relative z-10 flex items-center justify-center rounded-full bg-black shadow-2xl"
            style={{
              width: "clamp(160px, 18vw, 260px)",
              height: "clamp(160px, 18vw, 260px)",
              flexShrink: 0,
            }}
          >
            <div className="relative w-[58%] h-[58%]">
              <Image
                src="/zflwhite.svg"
                alt="ZFL Logo"
                fill
                className="object-contain select-none pointer-events-none"
                priority
              />
            </div>
          </div>

          {/* Hover zone for row 2 (above circle) */}
          <div
            className="absolute inset-0 z-20 pointer-events-auto"
            onMouseEnter={() => setRow2Hovered(true)}
            onMouseLeave={() => setRow2Hovered(false)}
            style={{ borderRadius: "50%", pointerEvents: "none" }}
          />
        </div>

        {/* ── Row 3 ── scrolls left */}
        <MarqueeRow
          items={ASCII_LINE_3}
          speed={36}
          reversed={false}
          hovered={row3Hovered}
          onMouseEnter={() => setRow3Hovered(true)}
          onMouseLeave={() => setRow3Hovered(false)}
        />
      </div>
    </section>
  );
}
