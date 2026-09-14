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
    <section id="products" className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF7300]">
            Products
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight text-balance">
            From Internal Friction to <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Seamless Output.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base md:text-lg leading-relaxed">
            Scroll on the right. Watch the core output on the left change — the
            exact result your team sees when the system runs.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: sticky deliverable preview (desktop) */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <div
                className="relative rounded-2xl p-6 md:p-7 overflow-hidden border border-white/10 bg-[#111114] shadow-2xl backdrop-blur-md"
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] mb-5">
                  <span className="text-neutral-400">Core Output</span>
                  <span className="text-[#FF7300] font-semibold">{active.name}</span>
                </div>

                <div key={active.slug} className="min-h-[420px] transition-all duration-300 animate-fadeIn">
                  <DeliverablePreview system={active} />
                </div>

                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl shadow-[0_30px_80px_-30px_rgba(16,185,129,0.25)]"
                />
              </div>

              {/* Progress dots */}
              <div className="mt-5 flex items-center justify-center gap-2">
                {systems.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => {
                      const el = sectionRefs.current.get(s.slug);
                      el?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    aria-label={`Show ${s.name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      s.slug === active.slug
                        ? "w-8 bg-emerald-400"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: horizontal scroll-snap carousel of deliverables */}
          <div className="lg:hidden -mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {systems.map((s) => (
                <Link
                  key={s.slug}
                  href="/contact"
                  aria-label={`Open ${s.name} details`}
                  className="snap-center shrink-0 w-[88%] rounded-2xl p-5 overflow-hidden block transition-transform active:scale-[0.98] border border-white/10 bg-[#111114] shadow-xl"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] mb-4">
                    <span className="text-neutral-400">Core Output</span>
                    <span className="text-[#FF7300] font-semibold">{s.name}</span>
                  </div>
                  <DeliverablePreview system={s} />
                  <div className="mt-4 flex items-center justify-end gap-1 text-xs font-medium text-emerald-400">
                    View details
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-2 text-center text-[11px] text-neutral-400">
              Swipe, then tap a card to open it →
            </p>
          </div>

          {/* Right: scrolling cards */}
          <div className="lg:col-span-6 space-y-8 md:space-y-12">
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
                  className={`scroll-mt-32 rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 border ${
                    isActive
                      ? "border-emerald-500/40 bg-[#17171c] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                      : "border-white/10 bg-[#111114]/80 hover:border-white/20 hover:bg-[#141418]"
                  }`}
                >
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    <span className="font-mono">0{i + 1}</span>
                    <span className="h-px w-8 bg-white/20" />
                    <span>{s.tag}</span>
                  </div>

                  <h3 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    {s.name}
                  </h3>

                  <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-300">
                    {s.short}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group"
                  >
                    See {s.name} in detail
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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

/* ---------- Deliverable previews ---------- */

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

/* Shared primitives */
function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">
        {label}
      </div>
      <div className="mt-1.5 text-[14px] sm:text-[15px] text-white/95">{value}</div>
    </div>
  );
}

/* Radar / Scout — Competitor Strategy Snapshot */
function ScoutDeliverable() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-white/90">
          Competitor Strategy Snapshot
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
          Ready · 4m 38s
        </span>
      </div>

      <div className="space-y-4 rounded-xl border border-white/10 p-5 bg-white/[0.03]">
        <Field label="Competitor" value="Northwave Outfitters · Amazon US" />
        <Field
          label="Pricing Gap Found"
          value={
            <span>
              You are <span className="text-emerald-400 font-medium">18% below</span> category median. Room to lift by $4–6.
            </span>
          }
        />
        <Field
          label="Top Under-Invested Keywords"
          value={
            <div className="flex flex-wrap gap-1.5 mt-1">
              {["organic cotton tee", "soft everyday tee", "minimalist basics", "breathable cotton"].map((k) => (
                <span key={k} className="text-xs px-2 py-1 rounded-md bg-white/10 text-neutral-200">
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
        Delivered to <span className="text-white/80 font-mono">#amazon-intel</span> · 8:14 AM
      </div>
    </div>
  );
}

/* Flash / Sift — Slack-style lead notification */
function SiftDeliverable() {
  return (
    <div className="space-y-4">
      <div className="text-sm font-medium text-white/90">
        New lead notification · #leads-priority
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-400 to-teal-600 grid place-items-center text-sm font-semibold text-black">
            S
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-white">Sift</span>
              <span className="text-xs text-neutral-400 font-mono">APP</span>
              <span className="text-xs text-neutral-400">· 9:02 AM</span>
            </div>

            <div className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-white/95">
              🔥 <span className="font-medium">New Lead Auto-Qualified</span> — Mara Chen, Founder at Acme Corp.
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 p-3 bg-black/30">
                <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">Match score</div>
                <div className="mt-1 text-2xl font-display font-semibold text-emerald-400">96<span className="text-sm text-neutral-400">/100</span></div>
              </div>
              <div className="rounded-lg border border-white/10 p-3 bg-black/30">
                <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">Response time</div>
                <div className="mt-1 text-2xl font-display font-semibold text-white">2m 11s</div>
              </div>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm text-neutral-300">
              <li>· Intro email sent — personalised to their pricing page visit</li>
              <li>· Intro call auto-booked — <span className="text-white">Tuesday, 2:00 PM</span></li>
              <li>· Closer pinged in #leads-priority</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Orbit / Outreach Engine — LinkedIn thread */
function OutreachDeliverable() {
  return (
    <div className="space-y-4">
      <div className="text-sm font-medium text-white/90">
        LinkedIn · conversation with Daniel Reyes
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 space-y-4">
        {/* outbound */}
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 shrink-0" />
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="font-medium text-white">You</span>
              <span>· Mon 10:18 AM</span>
            </div>
            <div className="mt-1 rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-[14px] leading-relaxed text-white/95">
              Hey Daniel — saw Lume Studio just launched the new product line in EU. Smart timing with Q4. We help DTC brands stitch Meta + Klaviyo + Shopify into one live ROAS view, usually clears 10+ hours of reporting a week. Worth a quick look?
            </div>
          </div>
        </div>

        {/* inbound */}
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded-full bg-white/20 shrink-0" />
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span className="font-medium text-white">Daniel Reyes</span>
              <span>· Head of Growth, Lume Studio · Mon 10:46 AM</span>
            </div>
            <div className="mt-1 rounded-2xl rounded-tl-sm bg-emerald-950/40 border border-emerald-500/30 px-4 py-3 text-[14px] leading-relaxed text-white/95">
              Actually yes — reporting is the bottleneck right now. Drop me your calendar?
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 text-xs">
          <span className="text-emerald-400">✓ Qualified · routed to calendar</span>
          <span className="text-neutral-400 font-mono">Sequence v3 · reply #142</span>
        </div>
      </div>
    </div>
  );
}

/* Echo / Lens — Telegram report */
function LensDeliverable() {
  return (
    <div className="space-y-4">
      <div className="text-sm font-medium text-white/90">
        Telegram · @LensBot
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 space-y-3">
        {/* user request */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-emerald-700/30 border border-emerald-500/20 px-4 py-2 text-sm text-white">
            @rivalbrand
          </div>
        </div>

        {/* bot reply */}
        <div className="flex">
          <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3.5 text-[14px] leading-relaxed text-white/95 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">@rivalbrand · last 30 posts</span>
              <span className="text-emerald-400 text-sm font-semibold">88<span className="text-xs text-neutral-400">/100</span></span>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">High-performing visual hooks</div>
              <ul className="mt-1 space-y-1 text-[13.5px] text-neutral-200">
                <li>· Slow-pan studio shots on neutral backdrops</li>
                <li>· Founder POV unboxing reels</li>
                <li>· Before / after split frames</li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">Trending hashtags detected</div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {["#quietluxury", "#dailycarry", "#studiolight", "#slowmade"].map((h) => (
                  <span key={h} className="text-xs px-2 py-0.5 rounded-md bg-white/10 text-neutral-300 font-mono">
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

/* Signal / Pulse — Minimal live dashboard */
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
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-white/90">
          Agency health · today
        </div>
        <span className="text-[10px] text-neutral-400 inline-flex items-center gap-1.5 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live · updated 2m ago
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <KpiCard label="Blended ROAS" value="4.2x" trend="+0.6" />
        <KpiCard label="Unified MER" value="22%" trend="+3pt" />
        <KpiCard label="Hours saved" value="12h" trend="this wk" muted />
      </div>

      {/* Line graph — revenue trend */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">
            Revenue · last 12 weeks
          </div>
          <div className="text-xs text-emerald-400 font-medium font-mono">+38%</div>
        </div>
        <LineChart data={revenue} />
      </div>

      {/* Bar graph — channel ROAS */}
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
        <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-3 font-mono">
          Channel performance · index
        </div>
        <div className="space-y-2.5">
          {channels.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <div className="w-16 text-xs text-neutral-300">{c.name}</div>
              <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500/70 to-emerald-400"
                  style={{
                    width: `${c.value}%`,
                  }}
                />
              </div>
              <div className="w-8 text-right text-xs font-medium text-neutral-200 font-mono">
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
  const h = 90;
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
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full h-[90px]" preserveAspectRatio="none">
      <defs>
        <linearGradient id="pulse-area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#pulse-area)" />
      <path d={path} fill="none" stroke="#34d399" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === points.length - 1 ? 2.5 : 0} fill="#34d399" />
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
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-mono">
        {label}
      </div>
      <div className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
        {value}
      </div>
      {trend && (
        <div className={`mt-1 text-xs font-mono ${muted ? "text-neutral-400" : "text-emerald-400"}`}>
          {trend}
        </div>
      )}
    </div>
  );
}
