"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "./components/nav";
import { Products } from "./components/sanafthings";
import FAQSection from "./components/faq";
import Footer from "./components/footer";

// Dynamically import Beams to ensure WebGL/Three.js runs on the client only
const Beams = dynamic(() => import("./components/Beams"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />,
});

// The 8-spoke Wheel SVG Component with rolling animation
function AnimatedWheel() {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 text-neutral-200/90 shrink-0 animate-roll-left select-none"
    >
      <rect
        width="16.1765"
        height="110"
        transform="translate(46.9118)"
        fill="currentColor"
      />
      <rect
        width="16.1765"
        height="110"
        transform="matrix(0 -1 1 0 0 63.0881)"
        fill="currentColor"
      />
      <rect
        width="16.1765"
        height="110"
        transform="translate(10.5148 21.9531) rotate(-45)"
        fill="currentColor"
      />
      <rect
        width="16.1765"
        height="110"
        transform="translate(88.2964 10.5148) rotate(45)"
        fill="currentColor"
      />
    </svg>
  );
}

const marqueeItems = [
  "Our Works",
  "Our Works",
  "Our Works",
  "Our Works",
];

interface ProcessStep {
  step: string;
  title: string;
  tag: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "// 01",
    title: "Comprehensive Strategic Audit",
    tag: "AUDIT",
    description:
      "We perform a deep-layer analysis of your current technical stack and fragmented data silos to identify high-impact AI opportunities that align with your core business objectives and ROI targets.",
  },
  {
    step: "// 02",
    title: "Custom Architecture Design",
    tag: "DESIGN",
    description:
      "We engineer tailored neural pipelines, local vector databases, and multi-agent coordination architectures built for extreme throughput, fault tolerance, and absolute privacy.",
  },
  {
    step: "// 03",
    title: "Rapid Prototype Development",
    tag: "PROTOTYPE",
    description:
      "Iterative 14-day sprint cycles deploying functional agent sandboxes to validate edge-case reasoning, tool-use execution, and sub-second model latency benchmarks.",
  },
  {
    step: "// 04",
    title: "Enterprise Scale Deployment",
    tag: "DEPLOY",
    description:
      "Seamless production deployment with continuous automated evaluation benchmarks, real-time guardrail security monitors, and SOC2 compliance validation.",
  },
];

export default function Home() {
  const [activeProcessStep, setActiveProcessStep] = React.useState<number | null>(0);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-[#FF7300] selection:text-white">
      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex h-screen min-h-[640px] w-full flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-16 pt-16">
        {/* Background 3D Beams Container */}
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
            beamColor="#000000"
            backgroundColor="#000000"
          />
        </div>

        {/* Hero Foreground 2-Column Content */}
        <div className="relative z-10 max-w-8xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.05]">
              <span className="block font-normal text-neutral-400">
                Scale your ideas.
              </span>
              <span className="block font-medium text-white mt-1 sm:mt-2">
                Build with AI.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-lg text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Deploy custom neural agents, LLMs, and automation in one seamless
              flow.
            </p>

            {/* CTA Button */}
            <div className="mt-10 sm:mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center overflow-hidden rounded-2xl border border-neutral-300/30 bg-white/10 p-1 shadow-lg backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15 active:scale-[0.98]"
              >
                {/* Left Pixel Icon Box */}
                <span className="flex h-11 w-12 items-center justify-center rounded-xl bg-[#FF7300] text-neutral-950 shadow-sm transition-transform group-hover:scale-105">
                  {/* Pixelated Double Chevron Icon */}
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
                </span>

                {/* Right Label */}
                <span className="flex h-11 items-center justify-center rounded-xl bg-[#18181b] px-7 text-sm font-semibold text-white transition-colors group-hover:bg-neutral-900">
                  Start Build
                </span>
              </Link>
            </div>

            {/* Deployments & Trust Line */}
            <p className="mt-8 text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-sm">
              +2,400 active deployments and 8,200 brands trust our high-performance architecture.
            </p>
          </div>

          {/* Right Column: Floating Digital Brain Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Link
              href="/contact"
              className="group relative w-full max-w-sm sm:max-w-md overflow-hidden rounded-2xl bg-white/25 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-neutral-900 transition-all duration-300"
            >
              {/* Graphic Screen Preview */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl bg-[#09090b] border border-neutral-800/80 flex flex-col justify-between p-5">
                {/* Background Cyber Grid & Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.15)_0%,transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Card Header Telemetry */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF7300] animate-ping" />
                    NAVBOX // 0.1
                  </span>
                  <span className="text-neutral-500">QUANTUM ENGINE</span>
                </div>

                {/* Futuristic Core Wireframe Animation Graphic */}
                <div className="relative z-10 my-auto flex items-center justify-center">
                  <div className="relative flex h-28 w-44 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(255,115,0,0.1)]">
                    {/* Concentric glowing rings */}
                    <div
                      className="absolute h-20 w-20 rounded-full border border-[#FF7300]/40 animate-spin"
                      style={{ animationDuration: "12s" }}
                    />
                    <div
                      className="absolute h-14 w-14 rounded-full border border-white/30 animate-spin"
                      style={{
                        animationDuration: "8s",
                        animationDirection: "reverse",
                      }}
                    />

                    {/* Glowing neural core */}
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#FF7300] to-amber-200 blur-[2px] shadow-[0_0_25px_#FF7300]" />

                    {/* Data indicators */}
                    <div className="absolute bottom-2 left-3 text-[9px] font-mono text-neutral-400">
                      98.4 GFLOPS
                    </div>
                    <div className="absolute top-2 right-3 text-[9px] font-mono text-[#FF7300]">
                      LIVE
                    </div>
                  </div>
                </div>

                {/* Bottom Model Tag */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>LATENCY // 12ms</span>
                  <span>SYNC // 100%</span>
                </div>
              </div>

              {/* Card Footer Info Bar */}
              <div className="flex items-center justify-between px-2 pt-4 pb-1">
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    Digital Brain
                  </h3>
                  <p className="text-xs font-mono text-white/65 mt-0.5">
                    // Model v4.0.2
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 transition-all duration-300 group-hover:bg-neutral-950 group-hover:text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Works Running Wheel Marquee & Project Cards Section */}
      <section
        id="works"
        className="w-full overflow-hidden bg-[#f8f8fa] pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 font-sans text-neutral-900"
      >
        {/* Running Wheel Marquee Header */}
        <div className="relative flex w-full overflow-hidden select-none mb-14 sm:mb-20">
          {/* Repeating Track */}
          <div className="flex w-max shrink-0 items-center gap-8 sm:gap-14 lg:gap-20 animate-marquee-left will-change-transform">
            {marqueeItems.map((text, i) => (
              <div
                key={`m1-${i}`}
                className="flex items-center gap-8 sm:gap-14 lg:gap-20 shrink-0"
              >
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-neutral-900 whitespace-nowrap">
                  {text}
                </span>
                <AnimatedWheel />
              </div>
            ))}
          </div>

          {/* Duplicate track for seamless infinite looping */}
          <div
            aria-hidden="true"
            className="flex w-max shrink-0 items-center gap-8 sm:gap-14 lg:gap-20 animate-marquee-left will-change-transform"
          >
            {marqueeItems.map((text, i) => (
              <div
                key={`m2-${i}`}
                className="flex items-center gap-8 sm:gap-14 lg:gap-20 shrink-0"
              >
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-neutral-900 whitespace-nowrap">
                  {text}
                </span>
                <AnimatedWheel />
              </div>
            ))}
          </div>
        </div>

        {/* Project Cards 3-Column Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
            {/* Project Card 1: Cigna Healthcare */}
            <div className="flex flex-col group">
              {/* Top Card Hero / Logo Container */}
              <div className="relative flex h-72 sm:h-80 w-full flex-col justify-between rounded-[28px] border border-neutral-200/80 bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:border-neutral-300">
                {/* Category Badge */}
                <div className="self-start rounded-full border border-neutral-200/90 bg-white px-3.5 py-1 text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-neutral-600 uppercase">
                  HEALTHCARE AI
                </div>

                {/* Centered Brand Logo */}
                <div className="my-auto flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1 text-neutral-900">
                    <svg
                      className="h-10 w-10 text-neutral-900"
                      viewBox="0 0 40 40"
                      fill="currentColor"
                    >
                      {/* Cigna Tree / Bloom Leaves and Branches */}
                      <circle cx="20" cy="8" r="2.2" />
                      <circle cx="15" cy="11" r="2" />
                      <circle cx="25" cy="11" r="2" />
                      <circle cx="11" cy="16" r="1.8" />
                      <circle cx="29" cy="16" r="1.8" />
                      <circle cx="9" cy="22" r="1.6" />
                      <circle cx="31" cy="22" r="1.6" />
                      <path d="M19 14h2v12h-2z" />
                      <path
                        d="M15 19c2-1 3.5-3 4-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M25 19c-2-1-3.5-3-4-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 23c3-1 5.5-4 7-9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M29 23c-3-1-5.5-4-7-9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-neutral-900 leading-none">
                        cigna
                      </span>
                      <span className="text-[10px] font-medium tracking-wide text-neutral-500 lowercase mt-0.5">
                        healthcare
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Spacer */}
                <div className="h-2" />
              </div>

              {/* Bottom 2x2 Stats Grid */}
              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    $45M+
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    Funds raised
                  </span>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    700%
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    Social growth
                  </span>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    41x
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    ATH ROI
                  </span>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    84
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    Partnerships
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2: Aetna */}
            <div className="flex flex-col group">
              {/* Top Card Hero / Logo Container */}
              <div className="relative flex h-72 sm:h-80 w-full flex-col justify-between rounded-[28px] border border-neutral-200/80 bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:border-neutral-300">
                {/* Category Badge */}
                <div className="self-start rounded-full border border-neutral-200/90 bg-white px-3.5 py-1 text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-neutral-600 uppercase">
                  HEALTHCARE
                </div>

                {/* Centered Brand Logo */}
                <div className="my-auto flex items-center justify-center">
                  <div className="flex items-center gap-2.5 text-neutral-900">
                    <svg
                      className="h-7 w-7 text-neutral-900 fill-current shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                      aetna<span className="text-sm font-normal align-top ml-0.5">®</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Spacer */}
                <div className="h-2" />
              </div>

              {/* Bottom 2x2 Stats Grid */}
              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    $62M+
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    Funds raised
                  </span>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    450%
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    Social growth
                  </span>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    32x
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    ATH ROI
                  </span>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    91
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    Partnerships
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 3: Anthem */}
            <div className="flex flex-col group">
              {/* Top Card Hero / Logo Container */}
              <div className="relative flex h-72 sm:h-80 w-full flex-col justify-between rounded-[28px] border border-neutral-200/80 bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:border-neutral-300">
                {/* Category Badge */}
                <div className="self-start rounded-full border border-neutral-200/90 bg-white px-3.5 py-1 text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-neutral-600 uppercase">
                  HEALTHCARE
                </div>

                {/* Centered Brand Logo */}
                <div className="my-auto flex items-center justify-center">
                  <div className="flex items-center gap-2 text-neutral-900">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                      Anthem.
                    </span>
                    <div className="flex items-center gap-1.5 ml-0.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-neutral-900 text-xs font-black text-white leading-none">
                        +
                      </span>
                      <svg
                        className="h-6 w-6 text-neutral-900 fill-current shrink-0"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Spacer */}
                <div className="h-2" />
              </div>

              {/* Bottom 2x2 Stats Grid */}
              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    $82M+
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    Funds raised
                  </span>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    340%
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    Social growth
                  </span>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    19x
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    ATH ROI
                  </span>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50/50">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    56
                  </span>
                  <span className="mt-1 text-xs font-normal text-neutral-500">
                    Partnerships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Systems Deliverables Section */}
      <Products />

      {/* Our Process Section */}
      <section
        id="process"
        className="w-full bg-[#242424] text-white py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 font-sans relative overflow-hidden"
      >
        <div className="max-w-8xl mx-auto">
          {/* Top Indicator Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-mono font-semibold tracking-widest text-neutral-300 uppercase">
                OUR PROCESS
              </span>
              <div className="h-px w-14 sm:w-302 bg-neutral-600/80" />
            </div>

            {/* Stadium outline pill */}
            <span className="flex h-8 w-16 rounded-full border-2 border-[#FF7300]" />
          </div>

          {/* Section Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12] max-w-4xl mb-14 sm:mb-20">
            From raw data to refined intelligence. Our iterative deployment cycle.
          </h2>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Our Process Image Card */}
            <div className="lg:col-span-5 relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#1a1a1c] p-5 sm:p-6 min-h-[380px] sm:min-h-[440px] shadow-2xl group overflow-hidden">
              {/* Image Container with object-contain for full clarity */}
              <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[340px] flex items-center justify-center p-4">
                <Image
                  src="/ourprocess.jpg"
                  alt="Our Process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Bottom Card Telemetry */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-white/10 pt-4 mt-2">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF7300] animate-pulse" />
                  NEURAL STACK // v4.2
                </span>
                <span>SOC-2 CERTIFIED</span>
              </div>
            </div>

            {/* Right Column: Interactive Process Step Rows */}
            <div className="lg:col-span-7 flex flex-col gap-3.5 justify-center">
              {processSteps.map((step, index) => {
                const isOpen = activeProcessStep === index;
                return (
                  <div
                    key={step.step}
                    onClick={() =>
                      setActiveProcessStep(isOpen ? null : index)
                    }
                    className={`rounded-2xl border transition-all duration-300 p-5 sm:p-6 cursor-pointer select-none ${
                      isOpen
                        ? "border-white/20 bg-[#1d1d1f] shadow-lg"
                        : "border-white/5 bg-[#1a1a1c] hover:bg-[#1e1e20] hover:border-white/10"
                    }`}
                  >
                    {/* Row Header */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="text-xs sm:text-sm font-mono text-neutral-400 shrink-0">
                          {step.step}
                        </span>
                        <h3 className="text-base sm:text-lg lg:text-xl font-medium tracking-tight text-white">
                          {step.title}
                        </h3>
                      </div>

                      {/* Right Tag Pill */}
                      <span className="rounded-full bg-white px-3 py-1 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-neutral-900 uppercase shrink-0 shadow-sm">
                        {step.tag}
                      </span>
                    </div>

                    {/* Smooth Collapsible Description */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal pl-0 sm:pl-12 max-w-2xl">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
