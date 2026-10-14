"use client";

import React, { useState } from "react";
import Link from "next/link";

type ServiceTab = "web" | "automation";

interface ServiceCardData {
  number: string;
  category?: string;
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
  visualType:
    | "layers"
    | "code"
    | "tokens"
    | "pulse"
    | "orbit"
    | "radar"
    | "flash"
    | "lens";
}

const webServices: ServiceCardData[] = [
  {
    number: "01",
    title: "Product & UX Design",
    description:
      "We make complicated feel intuitive. From user journeys to pixel-perfect interfaces, we design digital experiences people love to use and businesses love to grow.",
    visualType: "layers",
  },
  {
    number: "02",
    title: "Custom Web Development",
    description:
      "No cookie-cutter builds. Just clean code, lightning-fast experiences, and custom websites and web apps engineered around what your business actually needs.",
    visualType: "code",
  },
  {
    number: "03",
    title: "Design Systems That Scale",
    description:
      "Consistency isn't an accident. We build reusable components, thoughtful design systems, and flexible UI foundations that grow with your product, not against it.",
    visualType: "tokens",
  },
];

const automationServices: ServiceCardData[] = [
  {
    number: "01",
    category: "REVENUE INTELLIGENCE",
    title: "CAMPAIGN LENS",
    description: "Every ad platform. Every channel. One live dashboard.",
    actionText: "See Campaign Lens in detail",
    actionHref: "/systems/campaign-lens",
    visualType: "pulse",
  },
  {
    number: "02",
    category: "OUTBOUND PIPELINE ENGINE",
    title: "LEAD INTELLIGENCE",
    description:
      "1,000 prospects researched, contacted, qualified, and booked. Without you.",
    actionText: "See Lead Intelligence in detail",
    actionHref: "/systems/lead-intelligence",
    visualType: "orbit",
  },
  {
    number: "03",
    category: "COMPETITIVE INTELLIGENCE",
    title: "MARKETPLACE RADAR",
    description:
      "Full Amazon competitor report in five minutes. No spreadsheets.",
    actionText: "See Marketplace Radar in detail",
    actionHref: "/systems/marketplace-radar",
    visualType: "radar",
  },
  {
    number: "04",
    category: "SPEED TO LEAD",
    title: "SPEED TO LEAD",
    description:
      "A lead comes in. Qualified, followed up, and routed in 3 minutes.",
    actionText: "See Speed to Lead in detail",
    actionHref: "/systems/speed-to-lead",
    visualType: "flash",
  },
  {
    number: "05",
    category: "SOCIAL INTELLIGENCE",
    title: "SOCIAL RIVAL",
    description:
      "Your competitor's last 30 posts. Scored. Ranked. On your phone in under 2 minutes.",
    actionText: "See Social Rival in detail",
    actionHref: "/systems/social-rival",
    visualType: "lens",
  },
];

function CardVisual({ type }: { type: ServiceCardData["visualType"] }) {
  if (type === "layers") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-44 h-44 rounded-full bg-blue-500/25 blur-2xl" />
        <div className="absolute w-24 h-24 rounded-full bg-orange-400/20 blur-xl translate-y-6" />
        <div className="absolute w-64 h-32 rounded-[100%] border border-blue-400/30 rotate-[-15deg] pointer-events-none" />

        <div className="relative w-48 h-36">
          <div className="absolute top-0 left-0 w-32 h-24 rounded-xl border border-blue-300/40 bg-white/40 backdrop-blur-sm shadow-sm p-2 transform rotate-[-8deg] translate-x-2">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300/60" />
            </div>
          </div>

          <div className="absolute top-3 left-6 w-32 h-24 rounded-xl border border-blue-400/50 bg-white/50 backdrop-blur-md shadow-md p-2 transform rotate-[-4deg] translate-x-4 translate-y-2">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
            </div>
          </div>

          <div className="absolute top-6 left-12 w-32 h-24 rounded-xl border border-blue-500/60 bg-white/70 backdrop-blur-lg shadow-lg p-2.5 transform translate-x-4 translate-y-3">
            <div className="flex gap-1 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            </div>
            <div className="w-full h-1.5 rounded-full bg-blue-200/60 mb-1.5" />
            <div className="w-3/4 h-1.5 rounded-full bg-blue-100/60" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "code") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-44 h-44 rounded-full bg-emerald-500/15 blur-2xl" />
        <div className="relative w-52 rounded-xl border border-neutral-200/80 bg-white/80 p-3.5 shadow-sm font-mono text-[10px] space-y-1.5">
          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-100 text-neutral-400 text-[9px]">
            <span>api/deploy.ts</span>
            <span className="text-emerald-600 font-semibold">200 OK</span>
          </div>
          <p className="text-neutral-500">
            <span className="text-purple-600">export default</span> NextApp(
          </p>
          <p className="pl-3 text-neutral-700">
            latency: <span className="text-emerald-600 font-bold">12ms</span>,
          </p>
          <p className="pl-3 text-neutral-700">
            scale: <span className="text-blue-600 font-bold">&quot;auto&quot;</span>
          </p>
          <p className="text-neutral-500">);</p>
        </div>
      </div>
    );
  }

  if (type === "tokens") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-44 h-44 rounded-full bg-violet-500/20 blur-2xl" />
        <div className="grid grid-cols-2 gap-2.5 w-48">
          <div className="rounded-xl border border-neutral-200 bg-white/90 p-2.5 shadow-sm flex flex-col justify-between h-20">
            <div className="w-5 h-5 rounded-md bg-blue-500/20 border border-blue-500/40" />
            <div className="space-y-1">
              <div className="w-12 h-1.5 bg-neutral-200 rounded-full" />
              <div className="w-8 h-1 bg-neutral-100 rounded-full" />
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white/90 p-2.5 shadow-sm flex flex-col justify-between h-20">
            <div className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-500/40" />
            <div className="space-y-1">
              <div className="w-10 h-1.5 bg-neutral-200 rounded-full" />
              <div className="w-6 h-1 bg-neutral-100 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Automation 1: PULSE (Agency health · today dashboard)
  if (type === "pulse") {
    return (
      <div className="w-full h-full bg-[#0b0e11] rounded-lg p-3 sm:p-3.5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22]">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-mono tracking-widest text-neutral-400 font-medium">
            CORE OUTPUT
          </span>
          <span className="text-[8px] font-mono tracking-widest text-[#f59e0b] font-bold">
            PULSE
          </span>
        </div>

        <div className="flex items-center justify-between mt-1">
          <span className="text-[11px] font-semibold text-neutral-100 tracking-tight">
            Agency health · today
          </span>
          <span className="text-[8px] text-neutral-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live · updated 2m ago
          </span>
        </div>

        <div className="grid grid-cols-3 gap-1.5 mt-2">
          <div className="bg-[#12161d] border border-[#1d232e] rounded-md p-1.5">
            <p className="text-[7px] font-mono tracking-wider text-neutral-400 uppercase">
              BLENDED ROAS
            </p>
            <p className="text-[12px] font-bold text-neutral-100 leading-tight mt-0.5">
              4.2x
            </p>
            <p className="text-[8px] text-emerald-400 font-mono">+0.6</p>
          </div>
          <div className="bg-[#12161d] border border-[#1d232e] rounded-md p-1.5">
            <p className="text-[7px] font-mono tracking-wider text-neutral-400 uppercase">
              UNIFIED MER
            </p>
            <p className="text-[12px] font-bold text-neutral-100 leading-tight mt-0.5">
              22%
            </p>
            <p className="text-[8px] text-emerald-400 font-mono">+3pt</p>
          </div>
          <div className="bg-[#12161d] border border-[#1d232e] rounded-md p-1.5">
            <p className="text-[7px] font-mono tracking-wider text-neutral-400 uppercase">
              HOURS SAVED
            </p>
            <p className="text-[12px] font-bold text-neutral-100 leading-tight mt-0.5">
              12h
            </p>
            <p className="text-[8px] text-neutral-400 font-mono">this wk</p>
          </div>
        </div>

        <div className="bg-[#12161d] border border-[#1d232e] rounded-md p-2 mt-2">
          <div className="flex items-center justify-between text-[8px] font-mono">
            <span className="text-neutral-400">REVENUE · LAST 12 WEEKS</span>
            <span className="text-emerald-400 font-semibold">+38%</span>
          </div>
          <div className="h-9 w-full mt-1 relative flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 100 30"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="pulseGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <polygon
                points="0,25 10,22 20,24 30,19 40,21 50,15 60,17 70,12 80,14 90,8 100,5 100,30 0,30"
                fill="url(#pulseGreen)"
              />
              <polyline
                points="0,25 10,22 20,24 30,19 40,21 50,15 60,17 70,12 80,14 90,8 100,5"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="100" cy="5" r="2" fill="#34d399" />
            </svg>
          </div>
        </div>

        <div className="bg-[#12161d] border border-[#1d232e] rounded-md p-2 mt-2 space-y-1">
          <p className="text-[7.5px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
            CHANNEL PERFORMANCE · INDEX
          </p>
          {[
            { name: "Meta", val: "78%", score: "78" },
            { name: "Google", val: "92%", score: "92" },
            { name: "Shopify", val: "86%", score: "86" },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-[8px]">
              <span className="w-10 text-neutral-400 font-mono text-[7.5px]">
                {item.name}
              </span>
              <div className="flex-1 bg-neutral-800/80 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{ width: item.val }}
                />
              </div>
              <span className="text-neutral-400 font-mono text-[7.5px] w-4 text-right">
                {item.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Automation 2: ORBIT (LinkedIn outreach & auto-booking conversation)
  if (type === "orbit") {
    return (
      <div className="w-full h-full bg-[#0b0e11] rounded-lg p-3 sm:p-3.5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22]">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-mono tracking-widest text-neutral-400 font-medium">
            CORE OUTPUT
          </span>
          <span className="text-[8px] font-mono tracking-widest text-[#f59e0b] font-bold">
            ORBIT
          </span>
        </div>

        <div className="mt-1">
          <span className="text-[11px] font-semibold text-neutral-100 tracking-tight">
            LinkedIn · conversation with Daniel Reyes
          </span>
        </div>

        <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-2.5 mt-2 flex flex-col gap-2 flex-1 justify-between">
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-emerald-600 shrink-0 mt-0.5 flex items-center justify-center text-[7px] text-white font-bold">
              Y
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-[8px] text-neutral-400 font-mono">
                <span className="text-neutral-200 font-semibold">You</span>
                <span>· Mon 10:18 AM</span>
              </div>
              <div className="bg-[#161b24] border border-[#222a36] rounded-md p-2 mt-1 text-[8.5px] text-neutral-300 leading-snug">
                Hey Daniel — saw Lume Studio just launched the new product line.
                We help DTC brands stitch Meta + Klaviyo + Shopify into one live
                ROAS view, clears 10+ hrs/wk. Worth a quick look?
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-neutral-600 shrink-0 mt-0.5 flex items-center justify-center text-[7px] text-white font-bold">
              D
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-[8px] text-neutral-400 font-mono">
                <span className="text-neutral-200 font-semibold">
                  Daniel Reyes
                </span>
                <span>· Head of Growth</span>
              </div>
              <div className="bg-[#0f1715] border border-emerald-900/60 rounded-md p-2 mt-1 text-[8.5px] text-neutral-200 leading-snug">
                Actually yes — reporting is the bottleneck right now. Drop me
                your calendar?
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1.5 border-t border-[#1b222d] text-[8px] font-mono">
            <span className="text-emerald-400 font-medium">
              ✓ Qualified · routed to calendar
            </span>
            <span className="text-neutral-500">Sequence v3 · reply #142</span>
          </div>
        </div>
      </div>
    );
  }

  // Automation 3: RADAR (Competitor Strategy Snapshot)
  if (type === "radar") {
    return (
      <div className="w-full h-full bg-[#0b0e11] rounded-lg p-3 sm:p-3.5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22]">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-mono tracking-widest text-neutral-400 font-medium">
            CORE OUTPUT
          </span>
          <span className="text-[8px] font-mono tracking-widest text-[#f59e0b] font-bold">
            RADAR
          </span>
        </div>

        <div className="flex items-center justify-between mt-1">
          <span className="text-[11px] font-semibold text-neutral-100 tracking-tight">
            Competitor Strategy Snapshot
          </span>
          <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.5 rounded">
            Ready · 4m 38s
          </span>
        </div>

        <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-2.5 mt-2 flex flex-col gap-2 flex-1 justify-between">
          <div>
            <p className="text-[7px] font-mono text-neutral-400 uppercase tracking-wider">
              COMPETITOR
            </p>
            <p className="text-[10px] font-semibold text-neutral-100 mt-0.5">
              Northwave Outfitters · Amazon US
            </p>
          </div>

          <div>
            <p className="text-[7px] font-mono text-neutral-400 uppercase tracking-wider">
              PRICING GAP FOUND
            </p>
            <p className="text-[8.5px] text-neutral-300 mt-0.5 leading-snug">
              You are{" "}
              <span className="text-emerald-400 font-semibold">18% below</span>{" "}
              category median. Room to lift by $4–6.
            </p>
          </div>

          <div>
            <p className="text-[7px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
              TOP UNDER-INVESTED KEYWORDS
            </p>
            <div className="flex flex-wrap gap-1">
              {["organic cotton tee", "soft everyday tee", "breathable"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[7.5px] font-mono bg-[#1a212c] text-neutral-300 px-1.5 py-0.5 rounded border border-[#263040]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <p className="text-[7px] font-mono text-neutral-400 uppercase tracking-wider">
              REVIEW PATTERN
            </p>
            <p className="text-[8px] text-neutral-400 mt-0.5 leading-snug line-clamp-2">
              47 mentions of slow shipping in last 30 days — angle for a
              fulfillment-focused counter campaign.
            </p>
          </div>

          <div className="pt-1.5 border-t border-[#1b222d] text-[8px] font-mono text-neutral-400">
            Delivered to #amazon-intel · 8:14 AM
          </div>
        </div>
      </div>
    );
  }

  // Automation 4: FLASH (New lead notification · #leads-priority)
  if (type === "flash") {
    return (
      <div className="w-full h-full bg-[#0b0e11] rounded-lg p-3 sm:p-3.5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22]">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-mono tracking-widest text-neutral-400 font-medium">
            CORE OUTPUT
          </span>
          <span className="text-[8px] font-mono tracking-widest text-[#f59e0b] font-bold">
            FLASH
          </span>
        </div>

        <div className="mt-1">
          <span className="text-[11px] font-semibold text-neutral-100 tracking-tight">
            New lead notification · #leads-priority
          </span>
        </div>

        <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-2.5 mt-2 flex flex-col gap-2 flex-1 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-emerald-600 flex items-center justify-center text-[8px] font-bold text-white shrink-0">
              S
            </div>
            <div className="flex items-center gap-1.5 text-[8px] text-neutral-400 font-mono">
              <span className="text-neutral-200 font-semibold">Sift APP</span>
              <span>· 9:02 AM</span>
            </div>
          </div>

          <p className="text-[9px] font-semibold text-neutral-100 leading-snug">
            🔥 New Lead Auto-Qualified — Mara Chen, Founder at Acme Corp.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#161c24] border border-[#232c3a] rounded p-1.5">
              <p className="text-[7px] font-mono text-neutral-400 uppercase">
                MATCH SCORE
              </p>
              <p className="text-[13px] font-bold text-emerald-400 leading-tight mt-0.5">
                96<span className="text-[9px] text-neutral-500 font-normal">/100</span>
              </p>
            </div>
            <div className="bg-[#161c24] border border-[#232c3a] rounded p-1.5">
              <p className="text-[7px] font-mono text-neutral-400 uppercase">
                RESPONSE TIME
              </p>
              <p className="text-[13px] font-bold text-neutral-100 leading-tight mt-0.5">
                2m 11s
              </p>
            </div>
          </div>

          <div className="space-y-1 text-[8px] text-neutral-300 font-normal">
            <p>· Intro email sent — personalised to pricing page visit</p>
            <p>· Intro call auto-booked — Tuesday, 2:00 PM</p>
            <p>· Closer pinged in #leads-priority</p>
          </div>
        </div>
      </div>
    );
  }

  // Automation 5: LENS (Telegram · @LensBot social trend auditing)
  return (
    <div className="w-full h-full bg-[#0b0e11] rounded-lg p-3 sm:p-3.5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22]">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-mono tracking-widest text-neutral-400 font-medium">
          CORE OUTPUT
        </span>
        <span className="text-[8px] font-mono tracking-widest text-[#f59e0b] font-bold">
          LENS
        </span>
      </div>

      <div className="flex items-center justify-between mt-1">
        <span className="text-[11px] font-semibold text-neutral-100 tracking-tight">
          Telegram · @LensBot
        </span>
        <span className="text-[8px] font-mono bg-[#14231f] text-emerald-400 border border-emerald-900/60 px-1.5 py-0.5 rounded">
          @rivalbrand
        </span>
      </div>

      <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-2.5 mt-2 flex flex-col gap-2 flex-1 justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold text-neutral-100">
            @rivalbrand · last 30 posts
          </span>
          <span className="text-[9px] font-mono font-bold text-emerald-400">
            88/100
          </span>
        </div>

        <div>
          <p className="text-[7px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
            HIGH-PERFORMING VISUAL HOOKS
          </p>
          <div className="space-y-0.5 text-[8px] text-neutral-300">
            <p>· Slow-pan studio shots on neutral backdrops</p>
            <p>· Founder POV unboxing reels</p>
            <p>· Before / after split frames</p>
          </div>
        </div>

        <div>
          <p className="text-[7px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
            TRENDING HASHTAGS DETECTED
          </p>
          <div className="flex flex-wrap gap-1">
            {["#quietluxury", "#dailycarry", "#studiolight", "#slowmade"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[7.5px] font-mono bg-[#1a212c] text-neutral-300 px-1.5 py-0.5 rounded border border-[#263040]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className="pt-1.5 border-t border-[#1b222d] text-[8px] font-mono text-neutral-400">
          Generated in 1m 47s · 30/30 posts scored
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("web");
  const [isFlipping, setIsFlipping] = useState(false);

  const handleTabChange = (tab: ServiceTab) => {
    if (tab === activeTab || isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setActiveTab(tab);
    }, 300);
    setTimeout(() => {
      setIsFlipping(false);
    }, 700);
  };

  const cards = activeTab === "web" ? webServices : automationServices;

  return (
    <section
      id="services"
      className="relative w-full bg-white text-black py-20 sm:py-28 px-6 sm:px-10 lg:px-16 selection:bg-black selection:text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 text-center mt-6 leading-[1.1]">
          Design It. Build It. Automate It.
        </h2>

        {/* Section Subheading */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-500 text-center max-w-xl mx-auto font-normal leading-relaxed">
          Great ideas deserve more than good looks. We design intuitive
          experiences, build custom digital products, and automate the work
          behind them so your business can move forward without friction.
        </p>

        {/* Two Interactive Category Pills */}
        <div className="inline-flex p-1 bg-neutral-100/90 border border-neutral-200 mt-8 gap-1 select-none">
          <button
            type="button"
            onClick={() => handleTabChange("web")}
            className={`px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "web"
                ? "bg-neutral-950 text-white shadow-sm"
                : "text-neutral-600 hover:text-black hover:bg-neutral-200/60"
            }`}
          >
            Web Development
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("automation")}
            className={`px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "automation"
                ? "bg-neutral-950 text-white shadow-sm"
                : "text-neutral-600 hover:text-black hover:bg-neutral-200/60"
            }`}
          >
            Automation
          </button>
        </div>

        {/* Cards Grid with flip transition — card sizes untouched */}
        <div className="w-full max-w-7xl mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 perspective-[1200px]">
          {cards.map((card, index) => {
            const isAutomation = activeTab === "automation";

            return (
              <div
                key={`${activeTab}-${card.number}`}
                style={{
                  transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isFlipping ? "rotateY(360deg)" : "rotateY(0deg)",
                  transitionDelay: `${index * 60}ms`,
                }}
                className={`relative flex flex-col justify-between border border-dashed border-neutral-300 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-neutral-400 group ${
                  isAutomation ? "cursor-pointer hover:shadow-md" : ""
                }`}
              >
                {/* Full-card clickable link for automation cards */}
                {isAutomation && card.actionHref && (
                  <Link
                    href={card.actionHref}
                    className="absolute inset-0 z-20"
                    aria-label={`View ${card.title} details`}
                  />
                )}

                {/* Top-Left Solid Handle Marker */}
                <span
                  aria-hidden="true"
                  className="absolute -top-[3.5px] -left-[3.5px] w-2 h-2 bg-neutral-900 pointer-events-none z-10"
                />

                {/* Card Top: Graphic/Visual Area — card size identical */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden p-3 sm:p-4 flex flex-col justify-between items-center text-center bg-[#fbfbfb]">
                  {/* Visual Graphic Component */}
                  <div className="flex-1 w-full h-full flex items-center justify-center my-auto">
                    <CardVisual type={card.visualType} />
                  </div>
                </div>

                {/* Dashed Horizontal Divider */}
                <div className="w-full border-t border-dashed border-neutral-300" />

                {/* Card Bottom: Text Content in #FFFFFF */}
                {activeTab === "automation" ? (
                  <div className="p-6 sm:p-7 flex flex-col justify-between items-start text-left flex-1 bg-white">
                    <div className="flex flex-col items-start text-left w-full">
                      {/* Top Tag: 01 —— REVENUE INTELLIGENCE */}
                      <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-400 uppercase mb-3">
                        <span>{card.number}</span>
                        <span className="w-5 h-px bg-neutral-300 inline-block" />
                        <span>{card.category}</span>
                      </div>

                      {/* Title: PULSE */}
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase font-sans group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm text-neutral-500 font-normal leading-relaxed text-left">
                        {card.description}
                      </p>
                    </div>

                    {/* Green CTA Link */}
                    {card.actionText && (
                      <span className="mt-6 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-600 group-hover:text-emerald-700 transition-colors">
                        <span>{card.actionText}</span>
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="p-6 sm:p-8 flex flex-col justify-between items-center text-center flex-1 bg-white">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-medium tracking-tight text-neutral-900 leading-snug text-center">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm text-neutral-500 font-normal leading-relaxed text-center max-w-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
