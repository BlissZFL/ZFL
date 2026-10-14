"use client";

import React from "react";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="w-full bg-white text-neutral-900 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-t border-neutral-100 selection:bg-black selection:text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.12] max-w-2xl">
            A clear process. Two tracks.
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-md">
            Same standard either way — you see the plan before anything is built.
          </p>
        </div>

        {/* Two Blocks in a Single Column */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* Track 1 — Website */}
          <div className="border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3 pb-5 mb-6 border-b border-neutral-100">
              <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5">
                Track 1
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
                Website
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Step 1 */}
              <div className="border border-neutral-100 bg-neutral-50/60 p-5 flex flex-col">
                <span className="text-[11px] font-mono text-neutral-400 mb-2">01</span>
                <h4 className="text-base font-semibold text-neutral-900 mb-2">
                  1. Shape
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Strategy, wireframes, a design you approve before a line of code is written.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border border-neutral-100 bg-neutral-50/60 p-5 flex flex-col">
                <span className="text-[11px] font-mono text-neutral-400 mb-2">02</span>
                <h4 className="text-base font-semibold text-neutral-900 mb-2">
                  2. Build
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Custom-coded, conversion-focused, tested across devices.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border border-neutral-100 bg-neutral-50/60 p-5 flex flex-col">
                <span className="text-[11px] font-mono text-neutral-400 mb-2">03</span>
                <h4 className="text-base font-semibold text-neutral-900 mb-2">
                  3. Launch & support
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Live site, clean handover, support after launch.
                </p>
              </div>
            </div>
          </div>

          {/* Track 2 — AI Automation */}
          <div className="border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3 pb-5 mb-6 border-b border-neutral-100">
              <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5">
                Track 2
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
                AI Automation
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Step 1 */}
              <div className="border border-neutral-100 bg-neutral-50/60 p-5 flex flex-col">
                <span className="text-[11px] font-mono text-neutral-400 mb-2">01</span>
                <h4 className="text-base font-semibold text-neutral-900 mb-2">
                  1. Audit
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  We map where time is actually being lost and what&apos;s worth automating.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border border-neutral-100 bg-neutral-50/60 p-5 flex flex-col">
                <span className="text-[11px] font-mono text-neutral-400 mb-2">02</span>
                <h4 className="text-base font-semibold text-neutral-900 mb-2">
                  2. Build & test
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  The system is built and run against real data before it goes live.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border border-neutral-100 bg-neutral-50/60 p-5 flex flex-col">
                <span className="text-[11px] font-mono text-neutral-400 mb-2">03</span>
                <h4 className="text-base font-semibold text-neutral-900 mb-2">
                  3. Deploy & monitor
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  Live, monitored, adjusted as your business changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
