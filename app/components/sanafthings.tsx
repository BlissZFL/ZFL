"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface System {
  slug: "radar" | "flash" | "orbit" | "lens" | "pulse" | string;
  name: string;
  tag: string;
  short: string;
}

export const systems: System[] = [
  {
    slug: "radar",
    name: "Radar",
    tag: "Market Intelligence",
    short:
      "Autonomous competitor tracking, price-gap discovery, and customer sentiment intelligence synthesized in real-time.",
  },
  {
    slug: "flash",
    name: "Flash",
    tag: "Lead Qualification",
    short:
      "Instant inbound lead enrichment, behavioral match scoring, and autonomous calendar booking in under 3 minutes.",
  },
  {
    slug: "orbit",
    name: "Orbit",
    tag: "Outbound Engine",
    short:
      "Hyper-personalized multi-channel outreach engine that converts high-value cold prospects into qualified pipeline.",
  },
  {
    slug: "lens",
    name: "Lens",
    tag: "Content Intelligence",
    short:
      "Deep social content teardown, visual hook scoring, and trending hashtag cluster extraction on demand.",
  },
  {
    slug: "pulse",
    name: "Pulse",
    tag: "Unified Analytics",
    short:
      "Live cross-channel ROAS, MER, and agency revenue telemetry consolidated into one cohesive real-time dashboard.",
  },
];

export function Products() {
  const [scrollSlug, setScrollSlug] = useState(systems[0].slug);
  const [hoverSlug, setHoverSlug] = useState<string | null>(null);
  const activeSlug = hoverSlug ?? scrollSlug;
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const viewportCenter = window.innerHeight / 2;
      let bestSlug = scrollSlug;
      let bestDist = Infinity;
      sectionRefs.current.forEach((el, slug) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestSlug = slug;
        }
      });
      setScrollSlug((prev) => (prev !== bestSlug ? bestSlug : prev));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scrollSlug]);

  const active = systems.find((s) => s.slug === activeSlug) ?? systems[0];

  return (
    <section
      id="products"
      className="relative w-full bg-[#f8f8fa] text-neutral-900 pt-10 sm:pt-16 pb-20 sm:pb-28 lg:pb-36 font-sans overflow-visible"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Sticky Header + Core Output Preview (Desktop)                */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 self-start space-y-6">
            {/* Section Tag & Titles */}
            <div>
              
              <h2 className="mt-4 font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.12]">
                From Internal Friction to{" "}
                <span className="text-[#FF7300]">Seamless Output.</span>
              </h2>
              <p className="mt-3.5 text-neutral-500 text-base sm:text-lg leading-relaxed">
                Scroll through the systems on the right. Watch the core output update live — the exact deliverable your team receives.
              </p>
            </div>

            {/* Sticky Deliverable Preview Container (Desktop) */}
            <div className="hidden lg:block relative rounded-[28px] p-6 sm:p-7 overflow-hidden border border-neutral-200/80 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] mb-5 border-b border-neutral-100 pb-3.5">
                <span className="text-neutral-400">Core Output</span>
                <span className="text-[#FF7300] font-bold">{active.name}</span>
              </div>

              <div key={active.slug} className="min-h-[410px] transition-all duration-300">
                <DeliverablePreview system={active} />
              </div>
            </div>

            {/* Progress Navigation Dots (Desktop) */}
            <div className="hidden lg:flex items-center justify-center gap-2 pt-1">
              {systems.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => {
                    const el = sectionRefs.current.get(s.slug);
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  aria-label={`Show ${s.name}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    s.slug === active.slug
                      ? "w-8 bg-[#FF7300]"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE PREVIEW: Horizontal Carousel (Mobile Only)                         */}
          {/* ========================================================================= */}
          <div className="lg:hidden -mx-4 px-4 col-span-1">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {systems.map((s) => (
                <Link
                  key={s.slug}
                  href="/contact"
                  aria-label={`Open ${s.name} details`}
                  className="snap-center shrink-0 w-[88%] rounded-2xl p-5 overflow-hidden block transition-transform active:scale-[0.98] border border-neutral-200/80 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] mb-4 border-b border-neutral-100 pb-2.5">
                    <span className="text-neutral-400">Core Output</span>
                    <span className="text-[#FF7300] font-bold">{s.name}</span>
                  </div>
                  <DeliverablePreview system={s} />
                  <div className="mt-4 flex items-center justify-end gap-1 text-xs font-semibold text-[#FF7300]">
                    View details
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-2 text-center text-[11px] text-neutral-400 font-mono">
              Swipe to explore deliverables →
            </p>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 5 Scrolling Cards                                           */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {systems.map((s, i) => {
              const isActive = s.slug === active.slug;
              return (
                <article
                  key={s.slug}
                  data-slug={s.slug}
                  ref={(el) => {
                    if (el) sectionRefs.current.set(s.slug, el);
                    else sectionRefs.current.delete(s.slug);
                  }}
                  onMouseEnter={() => setHoverSlug(s.slug)}
                  onMouseLeave={() => setHoverSlug(null)}
                  onFocus={() => setHoverSlug(s.slug)}
                  onBlur={() => setHoverSlug(null)}
                  className={`scroll-mt-32 rounded-[28px] p-7 sm:p-8 transition-all duration-300 border ${
                    isActive
                      ? "border-[#FF7300]/50 bg-white shadow-[0_16px_40px_rgba(255,115,0,0.08),0_2px_12px_rgba(0,0,0,0.04)] ring-1 ring-[#FF7300]/30 -translate-y-1"
                      : "border-neutral-200/80 bg-white/80 hover:bg-white hover:border-neutral-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                  }`}
                >
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                    <span className="font-mono text-[#FF7300] font-bold">0{i + 1}</span>
                    <span className="h-px w-8 bg-neutral-200" />
                    <span className="font-mono text-neutral-500 font-medium">{s.tag}</span>
                  </div>

                  <h3 className="mt-3.5 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                    {s.name}
                  </h3>

                  <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-neutral-600 font-normal">
                    {s.short}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7300] hover:text-[#e06500] transition-colors group"
                  >
                    See {s.name} in detail
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

/* ========================================================================= */
/* Deliverable Previews (Light Mode Matching Our Works)                     */
/* ========================================================================= */

function DeliverablePreview({ system }: { system: System }) {
  switch (system.slug) {
    case "radar":
      return <ScoutDeliverable />;
    case "flash":
      return <SiftDeliverable />;
    case "orbit":
      return <OutreachDeliverable />;
    case "lens":
      return <LensDeliverable />;
    case "pulse":
      return <PulseDeliverable />;
    default:
      return null;
  }
}

/* Shared primitive */
function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">
        {label}
      </div>
      <div className="mt-1.5 text-[14px] sm:text-[15px] text-neutral-800 leading-snug">
        {value}
      </div>
    </div>
  );
}

/* Radar — Competitor Strategy Snapshot */
function ScoutDeliverable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-neutral-900">
          Competitor Strategy Snapshot
        </div>
        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-medium">
          Ready · 4m 38s
        </span>
      </div>

      <div className="space-y-3.5 rounded-2xl border border-neutral-200/80 p-5 bg-[#fafafc]">
        <Field label="Competitor" value="Northwave Outfitters · Amazon US" />
        <Field
          label="Pricing Gap Found"
          value={
            <span>
              You are <span className="text-emerald-600 font-semibold">18% below</span> category median. Room to lift by $4–6.
            </span>
          }
        />
        <Field
          label="Top Under-Invested Keywords"
          value={
            <div className="flex flex-wrap gap-1.5 mt-1">
              {["organic cotton tee", "soft everyday tee", "minimalist basics", "breathable cotton"].map((k) => (
                <span
                  key={k}
                  className="text-xs px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700 shadow-sm font-medium"
                >
                  {k}
                </span>
              ))}
            </div>
          }
        />
        <Field
          label="Review Pattern"
          value="47 mentions of slow shipping in last 30 days — angle for a fulfillment-focused counter campaign."
        />
      </div>

      <div className="text-xs text-neutral-400">
        Delivered to <span className="text-neutral-700 font-mono bg-neutral-100 px-1.5 py-0.5 rounded">#amazon-intel</span> · 8:14 AM
      </div>
    </div>
  );
}

/* Flash — Slack-style lead notification */
function SiftDeliverable() {
  return (
    <div className="space-y-4">
      <div className="text-sm font-semibold text-neutral-900">
        New lead notification · #leads-priority
      </div>

      <div className="rounded-2xl border border-neutral-200/80 bg-[#fafafc] p-5">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#FF7300] to-amber-500 grid place-items-center text-sm font-bold text-white shadow-sm shrink-0">
            F
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-neutral-900">Flash</span>
              <span className="text-[10px] bg-neutral-200/80 text-neutral-700 px-1.5 py-0.5 rounded font-mono font-semibold">APP</span>
              <span className="text-xs text-neutral-400">· 9:02 AM</span>
            </div>

            <div className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-neutral-800 font-medium">
              🔥 <span className="font-semibold text-neutral-900">New Lead Auto-Qualified</span> — Mara Chen, Founder at Acme Corp.
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
                <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">Match score</div>
                <div className="mt-1 text-2xl font-bold font-mono text-emerald-600">96<span className="text-sm text-neutral-400">/100</span></div>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">
                <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">Response time</div>
                <div className="mt-1 text-2xl font-bold font-mono text-neutral-900">2m 11s</div>
              </div>
            </div>

            <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-neutral-600">
              <li>· Intro email sent — personalized to pricing page visit</li>
              <li>· Intro call auto-booked — <span className="text-neutral-900 font-semibold">Tuesday, 2:00 PM</span></li>
              <li>· Closer pinged in #leads-priority</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Orbit — LinkedIn outreach thread */
function OutreachDeliverable() {
  return (
    <div className="space-y-4">
      <div className="text-sm font-semibold text-neutral-900">
        LinkedIn · conversation with Daniel Reyes
      </div>

      <div className="rounded-2xl border border-neutral-200/80 bg-[#fafafc] p-5 space-y-4">
        {/* Outbound */}
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#FF7300] to-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
            Y
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="font-semibold text-neutral-800">You</span>
              <span>· Mon 10:18 AM</span>
            </div>
            <div className="mt-1 rounded-2xl rounded-tl-sm bg-white border border-neutral-200/80 px-4 py-3 text-[13.5px] leading-relaxed text-neutral-800 shadow-sm">
              Hey Daniel — saw Lume Studio just launched the new product line in EU. Smart timing with Q4. We help DTC brands stitch Meta + Klaviyo + Shopify into one live ROAS view, usually clears 10+ hours of reporting a week. Worth a quick look?
            </div>
          </div>
        </div>

        {/* Inbound */}
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded-full bg-neutral-200 text-neutral-700 font-bold text-xs flex items-center justify-center shrink-0">
            DR
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="font-semibold text-neutral-800">Daniel Reyes</span>
              <span>· Head of Growth · Mon 10:46 AM</span>
            </div>
            <div className="mt-1 rounded-2xl rounded-tl-sm bg-emerald-50 border border-emerald-200 px-4 py-3 text-[13.5px] leading-relaxed text-emerald-950 shadow-sm">
              Actually yes — reporting is the bottleneck right now. Drop me your calendar?
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 text-xs">
          <span className="text-emerald-600 font-semibold">✓ Qualified · routed to calendar</span>
          <span className="text-neutral-400 font-mono">Sequence v3 · reply #142</span>
        </div>
      </div>
    </div>
  );
}

/* Lens — Content intelligence report */
function LensDeliverable() {
  return (
    <div className="space-y-4">
      <div className="text-sm font-semibold text-neutral-900">
        Telegram · @LensBot
      </div>

      <div className="rounded-2xl border border-neutral-200/80 bg-[#fafafc] p-5 space-y-3">
        {/* User Request */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-[#FF7300] text-white px-4 py-2 text-sm font-medium shadow-sm">
            @rivalbrand
          </div>
        </div>

        {/* Bot Reply */}
        <div className="flex">
          <div className="max-w-[95%] rounded-2xl rounded-bl-sm bg-white border border-neutral-200/80 px-4 py-3.5 text-[13.5px] leading-relaxed text-neutral-800 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-neutral-900">@rivalbrand · last 30 posts</span>
              <span className="text-emerald-600 text-sm font-bold font-mono">88<span className="text-xs text-neutral-400">/100</span></span>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">High-performing visual hooks</div>
              <ul className="mt-1 space-y-1 text-[13px] text-neutral-700">
                <li>· Slow-pan studio shots on neutral backdrops</li>
                <li>· Founder POV unboxing reels</li>
                <li>· Before / after split frames</li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">Trending hashtags detected</div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {["#quietluxury", "#dailycarry", "#studiolight", "#slowmade"].map((h) => (
                  <span key={h} className="text-xs px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-200/80 text-neutral-700 font-mono">
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-neutral-400 pt-1 font-mono">
              Generated in 1m 47s · 30/30 posts scored
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Pulse — Minimal live dashboard */
function PulseDeliverable() {
  const revenue = [12, 18, 15, 22, 19, 28, 26, 34, 31, 38, 42, 47];
  const channels = [
    { name: "Meta", value: 78 },
    { name: "Google", value: 92 },
    { name: "Klaviyo", value: 64 },
    { name: "TikTok", value: 41 },
    { name: "Shopify", value: 86 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-neutral-900">
          Agency health · today
        </div>
        <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full inline-flex items-center gap-1.5 font-mono font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live · updated 2m ago
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <KpiCard label="Blended ROAS" value="4.2x" trend="+0.6" />
        <KpiCard label="Unified MER" value="22%" trend="+3pt" />
        <KpiCard label="Hours saved" value="12h" trend="this wk" muted />
      </div>

      {/* Line graph — revenue trend */}
      <div className="rounded-2xl border border-neutral-200/80 bg-[#fafafc] p-4">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">
            Revenue · last 12 weeks
          </div>
          <div className="text-xs text-emerald-600 font-semibold font-mono">+38%</div>
        </div>
        <LineChart data={revenue} />
      </div>

      {/* Bar graph — channel ROAS */}
      <div className="rounded-2xl border border-neutral-200/80 bg-[#fafafc] p-4">
        <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-2.5 font-mono">
          Channel performance · index
        </div>
        <div className="space-y-2">
          {channels.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <div className="w-14 text-xs font-medium text-neutral-600">{c.name}</div>
              <div className="flex-1 h-2 rounded-full bg-neutral-200/70 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF7300] to-amber-500"
                  style={{ width: `${c.value}%` }}
                />
              </div>
              <div className="w-8 text-right text-xs font-bold text-neutral-800 font-mono">
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LineChart({ data }: { data: number[] }) {
  const w = 320;
  const h = 85;
  const pad = 6;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const step = (w - pad * 2) / (data.length - 1);
  const points = data.map((v, i) => {
    const x = pad + i * step;
    const y = pad + (1 - (v - min) / (max - min || 1)) * (h - pad * 2);
    return [x, y] as const;
  });
  const path = points.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
  const area = `${path} L${points[points.length - 1][0]},${h - pad} L${points[0][0]},${h - pad} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 w-full h-[85px]" preserveAspectRatio="none">
      <defs>
        <linearGradient id="pulse-area-light" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FF7300" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FF7300" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#pulse-area-light)" />
      <path d={path} fill="none" stroke="#FF7300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === points.length - 1 ? 3 : 0} fill="#FF7300" />
      ))}
    </svg>
  );
}

function KpiCard({
  label,
  value,
  trend,
  muted,
}: { label: string; value: string; trend?: string; muted?: boolean }) {
  return (
    <div className="rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
      <div className="text-[9px] uppercase tracking-[0.16em] text-neutral-400 font-mono truncate">
        {label}
      </div>
      <div className="mt-1 text-xl sm:text-2xl font-bold text-neutral-900 font-mono">
        {value}
      </div>
      {trend && (
        <div className={`mt-0.5 text-[11px] font-mono ${muted ? "text-neutral-400" : "text-emerald-600 font-semibold"}`}>
          {trend}
        </div>
      )}
    </div>
  );
}
