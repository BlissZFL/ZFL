"use client";

import React from "react";
import Link from "next/link";
import { Palette, Code2, Cpu, type LucideIcon } from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  deliverables: string[];
}

const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Web & App Design",
    tagline: "UI/UX · Design Systems · Product Design",
    description:
      "Design high-converting websites, intuitive web apps and mobile interfaces built around your brand, users and business goals. We create clear user flows, scalable design systems and frictionless digital interactions.",
    icon: Palette,
    deliverables: [
      "User Journey & Wireframing",
      "Interactive UI/UX Design",
      "Design Systems & Component Libraries",
      "Mobile App Experience (iOS & Android)",
      "Conversion & CRO Strategy",
    ],
  },
  {
    number: "02",
    title: "Website Development",
    tagline: "Next.js · Modern Web Architecture · Full-Stack",
    description:
      "Build fast, scalable and production-grade websites and web applications with modern architecture, sub-second load times and reliable API integrations. Engineered for performance, security and long-term maintainability.",
    icon: Code2,
    deliverables: [
      "Full-Stack Web Applications",
      "High-Performance Marketing Platforms",
      "Custom Headless CMS & APIs",
      "SEO Architecture & Core Web Vitals",
      "Third-Party Cloud Integrations",
    ],
  },
  {
    number: "03",
    title: "AI & Automation",
    tagline: "Intelligent Workflows · AI Agents · Custom Pipelines",
    description:
      "Build practical AI systems, autonomous agents and intelligent workflows that eliminate repetitive operations and compound business efficiency. Practical AI implementations tailored to your exact business processes.",
    icon: Cpu,
    deliverables: [
      "Custom AI Agents & Copilots",
      "Automated Workflows (n8n, Make, Custom)",
      "LLM Fine-tuning & RAG Pipelines",
      "CRM & Database Automations",
      "Internal Business Tools",
    ],
  },
];

// Pixelated Double Chevron Icon from Hero CTA
function PixelDoubleChevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5 text-neutral-900"
    >
      <rect x="1" y="2" width="2" height="2" fill="currentColor" />
      <rect x="3" y="4" width="2" height="2" fill="currentColor" />
      <rect x="5" y="6" width="2" height="2" fill="currentColor" />
      <rect x="3" y="8" width="2" height="2" fill="currentColor" />
      <rect x="1" y="10" width="2" height="2" fill="currentColor" />
      <rect x="5" y="2" width="2" height="2" fill="currentColor" />
      <rect x="7" y="4" width="2" height="2" fill="currentColor" />
      <rect x="9" y="6" width="2" height="2" fill="currentColor" />
      <rect x="7" y="8" width="2" height="2" fill="currentColor" />
      <rect x="5" y="10" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-[#18181b] text-white py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 font-sans relative border-t border-white/5"
    >
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Sticky Overview & CTA (lg:sticky lg:top-28 lg:self-start)   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start flex flex-col justify-between space-y-10 lg:pr-8 lg:border-r lg:border-white/10">
            <div>
              {/* Category Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#FF7300]">
                  [ SERVICES ]
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.1] uppercase">
                Digital Product <br className="hidden sm:inline" />
                Services Built <br className="hidden sm:inline" />
                For Growth
              </h2>

              {/* Supporting Body Copy */}
              <p className="mt-6 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md font-normal">
                In today&apos;s competitive market, having a basic template is not
                enough. We provide a focused, multi-disciplinary approach to
                design, develop and automate digital products that generate
                measurable business impact and scale without friction.
              </p>
            </div>

            {/* Bottom Hero-Style CTA Button */}
            <div className="pt-6 border-t border-white/10 flex flex-col items-start gap-4">
              <p className="text-xs sm:text-sm text-neutral-400 font-medium">
                Let&apos;s build something great together.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center overflow-hidden rounded-2xl border border-neutral-300/30 bg-white/10 p-1 shadow-lg backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15 active:scale-[0.98]"
              >
                {/* Left Pixel Icon Box */}
                <span className="flex h-11 w-12 items-center justify-center rounded-xl bg-[#FF7300] text-neutral-950 shadow-sm transition-transform group-hover:scale-105">
                  <PixelDoubleChevron />
                </span>

                {/* Right Label */}
                <span className="flex h-11 items-center justify-center rounded-xl bg-[#18181b] px-7 text-sm font-semibold text-white transition-colors group-hover:bg-neutral-900">
                  Start a Project
                </span>
              </Link>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Scrolling Services Stack (01, 02, 03)                       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className={`group py-12 sm:py-16 ${
                    index === 0 ? "pt-0 lg:pt-0" : ""
                  }`}
                >
                  {/* Top Row: Big Number, Accent Line & Icon Badge */}
                  <div className="flex items-center gap-4 sm:gap-6 mb-6">
                    {/* Big Bold Number */}
                    <span className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans">
                      {service.number}
                    </span>

                    {/* Vertical Accent Divider */}
                    <div className="h-10 sm:h-12 w-[3px] bg-[#FF7300] rounded-full shrink-0" />

                    {/* Circular Icon Badge */}
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#FF7300] shadow-[0_0_20px_rgba(255,115,0,0.06)] transition-all duration-300 group-hover:border-[#FF7300]/50 group-hover:bg-[#FF7300]/10 group-hover:scale-105">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-[#FF7300] transition-colors">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1 text-xs sm:text-sm font-mono text-[#FF7300]/90 tracking-wide uppercase">
                    // {service.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl">
                    {service.description}
                  </p>

                  {/* Deliverables / Capabilities Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-neutral-300 font-medium transition-colors group-hover:border-white/20 group-hover:bg-white/[0.06]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
