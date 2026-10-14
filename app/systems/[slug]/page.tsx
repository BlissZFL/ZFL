import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { systemsData, allSystemsList } from "../systems-data";
import Navbar from "@/app/components/nav";
import Footer from "@/app/components/footer";
import SystemVisual from "@/app/components/system-visual";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  X,
  Sparkles,
  Zap,
  Layers,
  Clock,
  ShieldCheck,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { slug: "campaign-lens" },
    { slug: "lead-intelligence" },
    { slug: "marketplace-radar" },
    { slug: "speed-to-lead" },
    { slug: "social-rival" },
    { slug: "pulse" },
    { slug: "orbit" },
    { slug: "radar" },
    { slug: "flash" },
    { slug: "lens" },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const system = systemsData[slug];

  if (!system) {
    return {
      title: "System Not Found — ZeroFrictionLab",
    };
  }

  return {
    title: `${system.name} — ${system.category} | ZeroFrictionLab`,
    description: system.hero,
  };
}

export default async function SystemDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const system = systemsData[slug];

  if (!system) {
    notFound();
  }

  const otherSystems = allSystemsList.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Light Theme Navbar */}
      <Navbar theme="light" />

      {/* Main Content */}
      <main className="w-full">
        {/* Sub-header / Breadcrumbs */}
        <div className="w-full border-b border-neutral-100 bg-[#fafafa]/80 py-3.5 px-6 sm:px-10 lg:px-16 text-xs font-mono">
          <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3 text-neutral-500">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-black transition-colors">
                ZeroFrictionLab
              </Link>
              <span>•</span>
              <Link href="/#services" className="hover:text-black transition-colors">
                All systems
              </Link>
              <span>•</span>
              <span className="text-neutral-900 font-medium">
                {system.name}
              </span>
            </div>

            <Link
              href="https://cal.com/sanaf-suhail/discoverycall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-800 hover:text-black font-semibold transition-colors"
            >
              <span>Get audit</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 px-6 sm:px-10 lg:px-16 border-b border-neutral-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Headline & Details */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 border border-neutral-200 bg-neutral-50 px-3 py-1 mb-6">
                  <span className="bg-black text-white text-[10px] font-mono font-medium px-2 py-0.5">
                    {system.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-600">
                    {system.category}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
                  {system.name}
                </h1>

                <p className="mt-6 text-lg sm:text-xl md:text-2xl font-normal leading-snug text-neutral-700 max-w-2xl">
                  {system.hero}
                </p>

                {/* Primary Action Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="https://cal.com/sanaf-suhail/discoverycall"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-7 py-3.5 transition-all shadow-sm group"
                  >
                    <span>Book a free 30-min system audit</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 text-sm font-medium px-6 py-3.5 transition-colors"
                  >
                    <span>See how it works</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Live Interactive Visual Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Ambient Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-xl opacity-75 pointer-events-none" />
                  <SystemVisual type={system.visualType} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Grid */}
        <section className="py-16 sm:py-20 px-6 sm:px-10 lg:px-16 border-b border-neutral-100 bg-neutral-50/40">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Key Metrics
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {system.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="border border-dashed border-neutral-300 bg-white p-6 sm:p-7 flex flex-col justify-between"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 font-mono">
                    {metric.value}
                  </span>
                  <span className="mt-4 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem Statement */}
        <section className="py-16 sm:py-20 px-6 sm:px-10 lg:px-16 border-b border-neutral-100">
          <div className="mx-auto max-w-4xl">
            <div className="border border-neutral-200 bg-[#fbfbfb] p-8 sm:p-12 relative">
              <div className="inline-block border border-dashed border-neutral-300 bg-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-neutral-600 mb-5">
                The Problem
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 leading-snug">
                &ldquo;{system.problem}&rdquo;
              </h2>
            </div>
          </div>
        </section>

        {/* What It Does */}
        <section
          id="how-it-works"
          className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-neutral-100 scroll-mt-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col mb-12 sm:mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900">
                What It Does
              </h2>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {system.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-400 transition-colors"
                >
                  <div>
                    <span className="text-xs font-mono text-neutral-400 mb-3 block">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 mb-2.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Callout Banner */}
            <div className="mt-10 sm:mt-12 border border-dashed border-neutral-300 bg-neutral-50/60 p-6 sm:p-8 flex items-center justify-between gap-6 flex-col sm:flex-row">
              <p className="text-base sm:text-lg font-medium text-neutral-900 leading-relaxed">
                {system.summaryCallout}
              </p>
              <Link
                href="https://cal.com/sanaf-suhail/discoverycall"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-neutral-900 hover:bg-black text-white text-xs font-medium px-5 py-2.5 transition-colors"
              >
                <span>Get a walkthrough</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Before / After Table */}
        <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-neutral-100 bg-[#fafafa]">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col mb-10 sm:mb-12 text-center items-center">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Operational Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900">
                Before / After
              </h2>
            </div>

            {/* Table Container */}
            <div className="border border-neutral-200 bg-white overflow-hidden shadow-xs">
              {/* Table Header */}
              <div className="grid grid-cols-2 border-b border-neutral-200 bg-neutral-50 text-xs font-mono uppercase tracking-wider text-neutral-500">
                <div className="p-4 sm:p-5 border-r border-neutral-200">Before</div>
                <div className="p-4 sm:p-5 text-neutral-900 font-semibold">After</div>
              </div>

              {/* Table Rows */}
              {system.comparisons.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2 border-b last:border-b-0 border-neutral-100 text-xs sm:text-sm font-normal"
                >
                  <div className="p-4 sm:p-5 border-r border-neutral-100 text-neutral-500 flex items-center gap-2.5">
                    <X className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>{row.before}</span>
                  </div>
                  <div className="p-4 sm:p-5 text-neutral-900 font-medium flex items-center gap-2.5 bg-emerald-50/20">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{row.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-14 sm:py-18 px-6 sm:px-10 lg:px-16 border-b border-neutral-100">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
              Audience
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 mb-6">
              Who It&apos;s For
            </h2>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-2xl">
              {system.audience.map((item, idx) => (
                <span
                  key={idx}
                  className="border border-neutral-200 bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-medium px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-b border-neutral-100 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="border border-neutral-200 bg-neutral-50/70 p-8 sm:p-14 lg:p-16 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 border border-neutral-200 bg-white px-3 py-1 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-600">
                  System Audit
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 max-w-2xl leading-[1.12]">
                {system.finalCta.headline}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-lg">
                {system.finalCta.sub}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="https://cal.com/sanaf-suhail/discoverycall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-8 py-3.5 transition-all shadow-sm"
                >
                  <span>{system.finalCta.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* More Systems Navigation */}
        <section className="py-16 sm:py-20 px-6 sm:px-10 lg:px-16 bg-[#fafafa]">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
              <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500">
                Explore More Systems
              </h3>
              <Link
                href="/#services"
                className="text-xs font-mono text-neutral-600 hover:text-black transition-colors"
              >
                All Systems →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {otherSystems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/systems/${item.slug}`}
                  className="border border-neutral-200 bg-white p-5 hover:border-neutral-400 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  <span className="mt-4 text-xs font-medium text-neutral-500 group-hover:text-black transition-colors inline-flex items-center gap-1">
                    <span>View system</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
