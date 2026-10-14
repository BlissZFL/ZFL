"use client";

import React from "react";

interface SystemVisualProps {
  type: "pulse" | "orbit" | "radar" | "flash" | "lens";
  className?: string;
}

export default function SystemVisual({ type, className = "" }: SystemVisualProps) {
  if (type === "pulse") {
    return (
      <div className={`w-full bg-[#0b0e11] rounded-xl p-4 sm:p-5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22] shadow-2xl ${className}`}>
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-medium">
            CORE OUTPUT
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[#f59e0b] font-bold">
            PULSE
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold text-neutral-100 tracking-tight">
            Agency health · today
          </span>
          <span className="text-[10px] text-neutral-400 flex items-center gap-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live · updated 2m ago
          </span>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2.5 mt-3">
          <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-2.5">
            <p className="text-[8px] font-mono tracking-wider text-neutral-400 uppercase">
              BLENDED ROAS
            </p>
            <p className="text-lg font-bold text-neutral-100 leading-tight mt-1">
              4.2x
            </p>
            <p className="text-[10px] text-emerald-400 font-mono mt-0.5">+0.6</p>
          </div>
          <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-2.5">
            <p className="text-[8px] font-mono tracking-wider text-neutral-400 uppercase">
              UNIFIED MER
            </p>
            <p className="text-lg font-bold text-neutral-100 leading-tight mt-1">
              22%
            </p>
            <p className="text-[10px] text-emerald-400 font-mono mt-0.5">+3pt</p>
          </div>
          <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-2.5">
            <p className="text-[8px] font-mono tracking-wider text-neutral-400 uppercase">
              HOURS SAVED
            </p>
            <p className="text-lg font-bold text-neutral-100 leading-tight mt-1">
              12h
            </p>
            <p className="text-[10px] text-neutral-400 font-mono mt-0.5">this wk</p>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-3 mt-3">
          <div className="flex items-center justify-between text-[9px] font-mono">
            <span className="text-neutral-400 uppercase tracking-wider">
              REVENUE · LAST 12 WEEKS
            </span>
            <span className="text-emerald-400 font-semibold">+38%</span>
          </div>
          <div className="h-14 w-full mt-2 relative flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 100 30"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="systemPulseGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <polygon
                points="0,25 10,22 20,24 30,19 40,21 50,15 60,17 70,12 80,14 90,8 100,5 100,30 0,30"
                fill="url(#systemPulseGreen)"
              />
              <polyline
                points="0,25 10,22 20,24 30,19 40,21 50,15 60,17 70,12 80,14 90,8 100,5"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="100" cy="5" r="2.5" fill="#34d399" />
            </svg>
          </div>
        </div>

        {/* Channels */}
        <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-3 mt-3 space-y-1.5">
          <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
            CHANNEL PERFORMANCE · INDEX
          </p>
          {[
            { name: "Meta", val: "78%", score: "78" },
            { name: "Google", val: "92%", score: "92" },
            { name: "Klaviyo", val: "64%", score: "64" },
            { name: "TikTok", val: "41%", score: "41" },
            { name: "Shopify", val: "86%", score: "86" },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 text-[9px]">
              <span className="w-12 text-neutral-400 font-mono text-[8.5px]">
                {item.name}
              </span>
              <div className="flex-1 bg-neutral-800/80 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{ width: item.val }}
                />
              </div>
              <span className="text-neutral-400 font-mono text-[8.5px] w-6 text-right">
                {item.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "orbit") {
    return (
      <div className={`w-full bg-[#0b0e11] rounded-xl p-4 sm:p-5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22] shadow-2xl ${className}`}>
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-medium">
            CORE OUTPUT
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[#f59e0b] font-bold">
            ORBIT
          </span>
        </div>

        <div className="mt-2">
          <span className="text-sm font-semibold text-neutral-100 tracking-tight">
            LinkedIn · conversation with Daniel Reyes
          </span>
        </div>

        <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-3.5 mt-3 flex flex-col gap-3">
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-emerald-600 shrink-0 mt-0.5 flex items-center justify-center text-[9px] text-white font-bold">
              Y
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono">
                <span className="text-neutral-200 font-semibold">You</span>
                <span>· Mon 10:18 AM</span>
              </div>
              <div className="bg-[#161b24] border border-[#222a36] rounded-md p-2.5 mt-1 text-[10px] text-neutral-300 leading-relaxed">
                Hey Daniel — saw Lume Studio just launched the new product line in EU.
                Smart timing with Q4. We help DTC brands stitch Meta + Klaviyo + Shopify
                into one live ROAS view, usually clears 10+ hours of reporting a week.
                Worth a quick look?
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-neutral-600 shrink-0 mt-0.5 flex items-center justify-center text-[9px] text-white font-bold">
              D
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono">
                <span className="text-neutral-200 font-semibold">
                  Daniel Reyes
                </span>
                <span>· Head of Growth, Lume Studio</span>
              </div>
              <div className="bg-[#0f1715] border border-emerald-900/60 rounded-md p-2.5 mt-1 text-[10px] text-neutral-200 leading-relaxed">
                Actually yes — reporting is the bottleneck right now. Drop me your
                calendar?
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#1b222d] text-[9px] font-mono">
            <span className="text-emerald-400 font-medium">
              ✓ Qualified · routed to calendar
            </span>
            <span className="text-neutral-500">Sequence v3 · reply #142</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "radar") {
    return (
      <div className={`w-full bg-[#0b0e11] rounded-xl p-4 sm:p-5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22] shadow-2xl ${className}`}>
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-medium">
            CORE OUTPUT
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[#f59e0b] font-bold">
            RADAR
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold text-neutral-100 tracking-tight">
            Competitor Strategy Snapshot
          </span>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
            Ready · 4m 38s
          </span>
        </div>

        <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-3.5 mt-3 flex flex-col gap-2.5">
          <div>
            <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider">
              COMPETITOR
            </p>
            <p className="text-xs font-semibold text-neutral-100 mt-0.5">
              Northwave Outfitters · Amazon US
            </p>
          </div>

          <div>
            <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider">
              PRICING GAP FOUND
            </p>
            <p className="text-[10px] text-neutral-300 mt-0.5 leading-relaxed">
              You are <span className="text-emerald-400 font-semibold">18% below</span>{" "}
              category median. Room to lift by $4–6.
            </p>
          </div>

          <div>
            <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
              TOP UNDER-INVESTED KEYWORDS
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "organic cotton tee",
                "soft everyday tee",
                "minimalist basics",
                "breathable cotton",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[8.5px] font-mono bg-[#1a212c] text-neutral-300 px-2 py-0.5 rounded border border-[#263040]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider">
              REVIEW PATTERN
            </p>
            <p className="text-[9px] text-neutral-400 mt-0.5 leading-relaxed">
              47 mentions of slow shipping in last 30 days — angle for a
              fulfillment-focused counter campaign.
            </p>
          </div>

          <div className="pt-2 border-t border-[#1b222d] text-[9px] font-mono text-neutral-400">
            Delivered to #amazon-intel · 8:14 AM
          </div>
        </div>
      </div>
    );
  }

  if (type === "flash") {
    return (
      <div className={`w-full bg-[#0b0e11] rounded-xl p-4 sm:p-5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22] shadow-2xl ${className}`}>
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-medium">
            CORE OUTPUT
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[#f59e0b] font-bold">
            FLASH
          </span>
        </div>

        <div className="mt-2">
          <span className="text-sm font-semibold text-neutral-100 tracking-tight">
            New lead notification · #leads-priority
          </span>
        </div>

        <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-3.5 mt-3 flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
              S
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono">
              <span className="text-neutral-200 font-semibold">Sift APP</span>
              <span>· 9:02 AM</span>
            </div>
          </div>

          <p className="text-[11px] font-semibold text-neutral-100 leading-snug">
            🔥 New Lead Auto-Qualified — Mara Chen, Founder at Acme Corp.
          </p>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-[#161c24] border border-[#232c3a] rounded-md p-2">
              <p className="text-[8px] font-mono text-neutral-400 uppercase">
                MATCH SCORE
              </p>
              <p className="text-base font-bold text-emerald-400 leading-tight mt-0.5">
                96<span className="text-[10px] text-neutral-500 font-normal">/100</span>
              </p>
            </div>
            <div className="bg-[#161c24] border border-[#232c3a] rounded-md p-2">
              <p className="text-[8px] font-mono text-neutral-400 uppercase">
                RESPONSE TIME
              </p>
              <p className="text-base font-bold text-neutral-100 leading-tight mt-0.5">
                2m 11s
              </p>
            </div>
          </div>

          <div className="space-y-1 text-[9.5px] text-neutral-300 font-normal">
            <p>· Intro email sent — personalised to their pricing page visit</p>
            <p>· Intro call auto-booked — Tuesday, 2:00 PM</p>
            <p>· Closer pinged in #leads-priority</p>
          </div>
        </div>
      </div>
    );
  }

  // lens
  return (
    <div className={`w-full bg-[#0b0e11] rounded-xl p-4 sm:p-5 flex flex-col justify-between text-left font-sans select-none border border-[#161b22] shadow-2xl ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-medium">
          CORE OUTPUT
        </span>
        <span className="text-[9px] font-mono tracking-widest text-[#f59e0b] font-bold">
          LENS
        </span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-sm font-semibold text-neutral-100 tracking-tight">
          Telegram · @LensBot
        </span>
        <span className="text-[9px] font-mono bg-[#14231f] text-emerald-400 border border-emerald-900/60 px-2 py-0.5 rounded">
          @rivalbrand
        </span>
      </div>

      <div className="bg-[#12161d] border border-[#1d232e] rounded-lg p-3.5 mt-3 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-100">
            @rivalbrand · last 30 posts
          </span>
          <span className="text-xs font-mono font-bold text-emerald-400">
            88/100
          </span>
        </div>

        <div>
          <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
            HIGH-PERFORMING VISUAL HOOKS
          </p>
          <div className="space-y-1 text-[9.5px] text-neutral-300">
            <p>· Slow-pan studio shots on neutral backdrops</p>
            <p>· Founder POV unboxing reels</p>
            <p>· Before / after split frames</p>
          </div>
        </div>

        <div>
          <p className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
            TRENDING HASHTAGS DETECTED
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["#quietluxury", "#dailycarry", "#studiolight", "#slowmade"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[8.5px] font-mono bg-[#1a212c] text-neutral-300 px-2 py-0.5 rounded border border-[#263040]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className="pt-2 border-t border-[#1b222d] text-[9px] font-mono text-neutral-400">
          Generated in 1m 47s · 30/30 posts scored
        </div>
      </div>
    </div>
  );
}
