"use client";

import React from "react";
import Link from "next/link";

interface ProcessStep {
  stepNumber: string;
  stepTag: string;
  title: string;
  description: string;
  timeline: string;
  ctaText: string;
  ctaHref: string;
  features: string[];
}

const processSteps: ProcessStep[] = [
  {
    stepNumber: "1",
    stepTag: "Step 1",
    title: "Shape",
    description:
      "Workshops, UX flows and a clickable prototype, so everyone can see and test the product before it's built.",
    timeline: "Weeks 1 – 2",
    ctaText: "Book a call",
    ctaHref: "#contact",
    features: [
      "Problem, users and must-have features mapped",
      "User flows and wireframes for the core journey",
      "Clickable prototype and onboarding screens",
      "Pitch deck and product story, if you're raising",
    ],
  },
  {
    stepNumber: "2",
    stepTag: "Step 2",
    title: "Launch",
    description:
      "We design the full product and build the MVP, with a live demo every single week until launch.",
    timeline: "Weeks 3 – 8",
    ctaText: "Start a build",
    ctaHref: "#contact",
    features: [
      "High-fidelity UI and a design system",
      "MVP, web app or dashboard, built to ship",
      "Analytics and feedback loops from day one",
      "Launch support and a clean handover",
    ],
  },
  {
    stepNumber: "3",
    stepTag: "Step 3",
    title: "Scale",
    description:
      "After launch we stay on as your tech partner: new features, growth experiments and the stack behind it.",
    timeline: "After launch",
    ctaText: "Keep us on",
    ctaHref: "#contact",
    features: [
      "A team that already knows your product",
      "New features, experiments and redesigns",
      "Internal tools and automations as you grow",
      "Performance, security and uptime",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="w-full bg-white text-neutral-900 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-t border-neutral-100 selection:bg-black selection:text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.12] max-w-2xl">
            From Launchpad to Tech Partner
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-md">
            Every product runs the same three steps. Shape it,
            <br className="hidden sm:block" /> launch it, then scale it with a
            team that already knows it.
          </p>
        </div>

        {/* ── FLOW DIAGRAM CONTAINER ── */}
        <div className="relative flex flex-col gap-12 sm:gap-16">
          {/* ================= STEP 1 (Offset Right) ================= */}
          <div className="relative flex w-full justify-end items-center">
            {/* Left connector line with Step 1 black badge */}
            <div className="hidden lg:flex absolute left-0 right-[78%] items-center z-10 pointer-events-none">
              <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5 shrink-0">
                Step 1
              </span>
              <div className="w-full h-px border-t border-dashed border-neutral-400" />
            </div>

            {/* Mobile Step 1 Tag */}
            <div className="flex lg:hidden mb-2">
              <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5">
                Step 1
              </span>
            </div>

            {/* Card 1 */}
            <div className="w-full lg:w-[78%] border border-dashed border-neutral-300 bg-white p-6 sm:p-9 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {/* Left Column: Info & Action */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Inner Step Badge */}
                    <span className="inline-block border border-dashed border-neutral-300 text-[10px] font-mono text-neutral-500 px-2.5 py-1 mb-5">
                      Step 1
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                      Shape
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed pr-2">
                      Workshops, UX flows and a clickable prototype, so everyone
                      can see and test the product before it&apos;s built.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 flex items-center justify-between gap-4">
                    <span className="text-xs sm:text-sm font-medium text-neutral-800">
                      Weeks 1 – 2
                    </span>

                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center bg-[#2563eb] text-white text-xs font-medium px-5 py-2  transition-colors"
                    >
                      Book a call
                    </Link>
                  </div>
                </div>

                {/* Right Column: 4 Individual Dashed Boxes */}
                <div className="md:col-span-6 flex flex-col gap-3 justify-center">
                  {processSteps[0].features.map((feature, i) => (
                    <div
                      key={i}
                      className="border border-dashed border-neutral-300 bg-white px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-neutral-700 font-normal leading-snug"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Connecting Line between Card 1 and Card 2 on the Right */}
          <div className="hidden lg:block absolute right-6 top-[28%] bottom-[49%] w-px border-r border-dashed border-neutral-400 z-0" />

          {/* ================= STEP 2 (Offset Left) ================= */}
          <div className="relative flex w-full justify-start items-center">
            {/* Mobile Step 2 Tag */}
            <div className="flex lg:hidden mb-2">
              <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5">
                Step 2
              </span>
            </div>

            {/* Card 2 */}
            <div className="w-full lg:w-[78%] border border-dashed border-neutral-300 bg-white p-6 sm:p-9 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {/* Left Column */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Inner Step Badge */}
                    <span className="inline-block border border-dashed border-neutral-300 text-[10px] font-mono text-neutral-500 px-2.5 py-1 mb-5">
                      Step 2
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                      Launch
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed pr-2">
                      We design the full product and build the MVP, with a live
                      demo every single week until launch.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 flex items-center justify-between gap-4">
                    <span className="text-xs sm:text-sm font-medium text-neutral-800">
                      Weeks 3 – 8
                    </span>

                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center bg-[#2563eb] text-white text-xs font-medium px-5 py-2 transition-colors"
                    >
                      Start a build
                    </Link>
                  </div>
                </div>

                {/* Right Column: 4 Individual Dashed Boxes */}
                <div className="md:col-span-6 flex flex-col gap-3 justify-center">
                  {processSteps[1].features.map((feature, i) => (
                    <div
                      key={i}
                      className="border border-dashed border-neutral-300 bg-white px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-neutral-700 font-normal leading-snug"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right connector line with Step 2 black badge */}
            <div className="hidden lg:flex absolute right-0 left-[78%] items-center z-10 pointer-events-none">
              <div className="w-full h-px border-t border-dashed border-neutral-400" />
              <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5 shrink-0">
                Step 2
              </span>
            </div>
          </div>

          {/* Vertical Connecting Line between Card 2 and Card 3 on the Left */}
          <div className="hidden lg:block absolute left-6 top-[62%] bottom-[15%] w-px border-l border-dashed border-neutral-400 z-0" />

          {/* ================= STEP 3 (Offset Right) ================= */}
          <div className="relative flex w-full justify-end items-center">
            {/* Left connector line with Step 3 black badge */}
            <div className="hidden lg:flex absolute left-0 right-[78%] items-center z-10 pointer-events-none">
              <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5 shrink-0">
                Step 3
              </span>
              <div className="w-full h-px border-t border-dashed border-neutral-400" />
            </div>

            {/* Mobile Step 3 Tag */}
            <div className="flex lg:hidden mb-2">
              <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5">
                Step 3
              </span>
            </div>

            {/* Card 3 */}
            <div className="w-full lg:w-[78%] border border-dashed border-neutral-300 bg-white p-6 sm:p-9  relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {/* Left Column */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Inner Step Badge */}
                    <span className="inline-block border border-dashed border-neutral-300 text-[10px] font-mono text-neutral-500 px-2.5 py-1 mb-5">
                      Step 3
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                      Scale
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed pr-2">
                      After launch we stay on as your tech partner: new features,
                      growth experiments and the stack behind it.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 flex items-center justify-between gap-4">
                    <span className="text-xs sm:text-sm font-medium text-neutral-800">
                      After launch
                    </span>

                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center bg-[#2563eb] text-white text-xs font-medium px-5 py-2 transition-colors"
                    >
                      Keep us on
                    </Link>
                  </div>
                </div>

                {/* Right Column: 4 Individual Dashed Boxes */}
                <div className="md:col-span-6 flex flex-col gap-3 justify-center">
                  {processSteps[2].features.map((feature, i) => (
                    <div
                      key={i}
                      className="border border-dashed border-neutral-300 bg-white px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-neutral-700 font-normal leading-snug"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
