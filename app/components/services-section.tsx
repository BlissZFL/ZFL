"use client";

import React, { useState } from "react";

type ServiceTab = "web" | "automation";

interface ServiceCardData {
  number: string;
  title: string;
  description: string;
  visualType: "layers" | "code" | "tokens" | "pipeline" | "agents" | "telemetry";
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
    title: "Workflow & Trigger Automation",
    description:
      "Replace repetitive tasks with smart triggers, seamless integrations, and automated workflows that keep your business moving without the manual grind.",
    visualType: "pipeline",
  },
  {
    number: "02",
    title: "Autonomous AI Agents",
    description:
      "Go beyond basic chatbots. Deploy AI agents that handle tasks, process information, connect tools, and move work forward with less human hand-holding.",
    visualType: "agents",
  },
  {
    number: "03",
    title: "Integrations & Real-Time Sync",
    description:
      "Connect disconnected systems, sync data automatically, and build reliable integrations that keep information flowing and bottlenecks out of the way.",
    visualType: "telemetry",
  },
];

function CardVisual({ type }: { type: ServiceCardData["visualType"] }) {
  if (type === "layers") {
    // 3 isometric frosted browser windows with nebula blur glow & orbital ellipse (matches Image 2!)
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Ambient radial nebula glow */}
        <div className="absolute w-44 h-44 rounded-full bg-blue-500/25 blur-2xl" />
        <div className="absolute w-24 h-24 rounded-full bg-orange-400/20 blur-xl translate-y-6" />

        {/* Orbiting thin ellipse */}
        <div className="absolute w-64 h-32 rounded-[100%] border border-blue-400/30 rotate-[-15deg] pointer-events-none" />

        {/* 3 stacked isometric frosted cards */}
        <div className="relative w-48 h-36">
          {/* Back card */}
          <div className="absolute top-0 left-0 w-32 h-24 rounded-xl border border-blue-300/40 bg-white/40 backdrop-blur-sm shadow-sm p-2 transform rotate-[-8deg] translate-x-2">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-300/60" />
            </div>
          </div>

          {/* Middle card */}
          <div className="absolute top-3 left-6 w-32 h-24 rounded-xl border border-blue-400/50 bg-white/50 backdrop-blur-md shadow-md p-2 transform rotate-[-4deg] translate-x-4 translate-y-2">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
            </div>
          </div>

          {/* Front card */}
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
    // Modern full-stack terminal & reactive components
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
    // Design tokens & modular component widgets
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-44 h-44 rounded-full bg-violet-500/20 blur-2xl" />
        <div className="grid grid-cols-2 gap-2.5 w-48">
          <div className="rounded-xl border border-neutral-200 bg-white/90 p-2.5 shadow-sm flex flex-col justify-between h-20">
            <span className="text-[10px] font-mono text-neutral-400">#FF7300</span>
            <div className="w-full h-4 rounded-lg bg-[#FF7300]" />
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white/90 p-2.5 shadow-sm flex flex-col justify-between h-20">
            <span className="text-[10px] font-mono text-neutral-400">#2563EB</span>
            <div className="w-full h-4 rounded-lg bg-blue-600" />
          </div>
          <div className="col-span-2 rounded-xl border border-neutral-200 bg-white/90 px-3 py-2 shadow-sm flex items-center justify-between">
            <span className="text-[10px] font-medium text-neutral-700">Button / Radius</span>
            <span className="text-[9px] font-mono text-neutral-400">9999px</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "pipeline") {
    // Automation trigger pipeline visual
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-44 h-44 rounded-full bg-cyan-500/20 blur-2xl" />
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 rounded-xl border border-neutral-200 bg-white/90 shadow-sm flex flex-col items-center justify-center p-1 text-[9px] font-mono">
            <span className="text-cyan-600 font-bold">TRIGGER</span>
            <span className="text-neutral-400 text-[8px]">Webhook</span>
          </div>
          <div className="w-6 h-[1.5px] bg-cyan-400 relative">
            <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
          </div>
          <div className="w-14 h-14 rounded-xl border border-neutral-200 bg-white/90 shadow-sm flex flex-col items-center justify-center p-1 text-[9px] font-mono">
            <span className="text-neutral-800 font-bold">ACTION</span>
            <span className="text-neutral-400 text-[8px]">Sync DB</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "agents") {
    // Autonomous AI agents network
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-44 h-44 rounded-full bg-amber-500/20 blur-2xl" />
        <div className="relative w-48 h-32 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-neutral-200 bg-white shadow-md flex items-center justify-center z-10 text-[10px] font-mono font-bold text-neutral-800">
            AGENT
          </div>
          <div className="absolute w-24 h-24 rounded-full border border-dashed border-amber-400/50 animate-spin" />
          <span className="absolute top-1 left-4 w-2 h-2 rounded-full bg-blue-500" />
          <span className="absolute bottom-2 right-6 w-2 h-2 rounded-full bg-amber-500" />
        </div>
      </div>
    );
  }

  // Telemetry visual
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-44 h-44 rounded-full bg-indigo-500/20 blur-2xl" />
      <div className="w-48 rounded-xl border border-neutral-200 bg-white p-3 font-mono text-[10px] space-y-2">
        <div className="flex justify-between text-neutral-400">
          <span>PIPELINE HEALTH</span>
          <span className="text-emerald-600 font-bold">99.99%</span>
        </div>
        <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full w-[94%]" />
        </div>
        <div className="flex justify-between text-[9px] text-neutral-500">
          <span>Latency: 8ms</span>
          <span>Throughput: 14k/s</span>
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
    // Switch data halfway through the 360-degree flip
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
          Great ideas deserve more than good looks. We design intuitive experiences, build custom digital products, and automate the work behind them so your business can move forward without friction.
        </p>

        {/* Two Interactive Category Pills */}
        <div className="inline-flex p-1 bg-neutral-100/90 border border-neutral-200 mt-8 gap-1 select-none">
          <button
            type="button"
            onClick={() => handleTabChange("web")}
            className={` px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
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
            className={` px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "automation"
                ? "bg-neutral-950 text-white shadow-sm"
                : "text-neutral-600 hover:text-black hover:bg-neutral-200/60"
            }`}
          >
            Automation
          </button>
        </div>

        {/* 3 Cards Grid with 360-degree flip animation */}
        <div className="w-full max-w-7xl mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 perspective-[1200px]">
          {cards.map((card, index) => (
            <div
              key={`${activeTab}-${card.number}`}
              style={{
                transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isFlipping ? "rotateY(360deg)" : "rotateY(0deg)",
                transitionDelay: `${index * 80}ms`,
              }}
              className="relative flex flex-col justify-between border border-dashed border-neutral-300 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-shadow duration-300 hover:border-neutral-400 group"
            >
              {/* Top-Left Solid Black Handle Marker (matching Image 2) */}
              <span
                aria-hidden="true"
                className="absolute -top-[3.5px] -left-[3.5px] w-2 h-2 bg-neutral-900 pointer-events-none z-10"
              />

              {/* Card Top: Graphic/Visual Area with faint number */}
              <div className="relative h-64 sm:h-72 w-full bg-[#fbfbfb] overflow-hidden p-6 flex flex-col justify-between items-center text-center">
                {/* Faint Purple/Blue Number (matching Image 2) */}
                <span className="text-[#818cf8] font-mono text-xs font-medium tracking-wider select-none text-center">
                  {card.number}
                </span>

                {/* Visual Graphic Component */}
                <div className="flex-1 w-full flex items-center justify-center my-auto">
                  <CardVisual type={card.visualType} />
                </div>
              </div>

              {/* Dashed Horizontal Divider */}
              <div className="w-full border-t border-dashed border-neutral-300" />

              {/* Card Bottom: Text Content */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
