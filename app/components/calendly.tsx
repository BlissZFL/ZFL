"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Users, FileText } from "lucide-react";

interface CalendlySectionProps {
  calendlyUrl?: string;
}

export default function CalendlySection({
  calendlyUrl = "https://cal.com/sanaf-suhail/discoverycall",
}: CalendlySectionProps) {
  return (
    <section
      id="contact"
      className="w-full bg-white text-neutral-900 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-t border-neutral-100 selection:bg-black selection:text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="border border-neutral-200 bg-neutral-50/50 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Header, Subtitle & CTA Button */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 border border-neutral-200 bg-white px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-600">
                  Next Step
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.12]">
                Find out where you&apos;re losing time.
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-xl">
                One call. A written plan — what to build, in what order, and what it costs.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-8 py-3.5 transition-all shadow-sm group"
                >
                  <span>Get a friction audit</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Reassurance Cards (kept structure, updated wording) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {/* Card 1: No aggressive sales */}
              <div className="flex items-center gap-3.5 border border-dashed border-neutral-300 bg-white p-4 sm:p-4.5 rounded-none transition-colors hover:bg-neutral-50">
                <div className="flex items-center justify-center text-neutral-800 shrink-0 w-8 h-8 rounded-none border border-neutral-200 bg-neutral-50">
                  <ShieldCheck className="w-4 h-4 text-neutral-700" />
                </div>
                <span className="text-sm font-medium text-neutral-800 tracking-tight">
                  No aggressive sales pitches.
                </span>
              </div>

              {/* Card 2: Talk directly */}
              <div className="flex items-center gap-3.5 border border-dashed border-neutral-300 bg-white p-4 sm:p-4.5 rounded-none transition-colors hover:bg-neutral-50">
                <div className="flex items-center justify-center text-neutral-800 shrink-0 w-8 h-8 rounded-none border border-neutral-200 bg-neutral-50">
                  <Users className="w-4 h-4 text-neutral-700" />
                </div>
                <span className="text-sm font-medium text-neutral-800 tracking-tight">
                  Talk directly to the people who&apos;ll design, build, or automate it.
                </span>
              </div>

              {/* Card 3: Clear written plan */}
              <div className="flex items-center gap-3.5 border border-dashed border-neutral-300 bg-white p-4 sm:p-4.5 rounded-none transition-colors hover:bg-neutral-50">
                <div className="flex items-center justify-center text-neutral-800 shrink-0 w-8 h-8 rounded-none border border-neutral-200 bg-neutral-50">
                  <FileText className="w-4 h-4 text-neutral-700" />
                </div>
                <span className="text-sm font-medium text-neutral-800 tracking-tight">
                  Leave with a clear written plan.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
