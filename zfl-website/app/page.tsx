"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "./components/nav";

// Dynamically import Beams to ensure WebGL/Three.js runs on the client only
const Beams = dynamic(() => import("./components/Beams"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />,
});

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
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
          {/* Subtle vignette / gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_85%)] pointer-events-none" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-md transition-all hover:bg-white/10">
            <span className="flex h-2 w-2 rounded-full bg-[#FF7300] animate-pulse" />
            <span>Zero Friction Architecture v4.0</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] text-white">
            Build Without{" "}
            <span className="bg-gradient-to-r from-[#FF7300] via-orange-400 to-amber-200 bg-clip-text text-transparent">
              Friction.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed">
            Deploy autonomous intelligence, transform legacy systems into neural
            engines, and build seamless digital experiences with ZeroFrictionLab.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span>Get Started</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-black transition-transform group-hover:translate-x-0.5"
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
            </Link>

            <a
              href="#services"
              className="flex w-full sm:w-auto items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
            >
              Explore Solutions
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10 border-t border-white/10 pt-8 sm:pt-10 w-full">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                99.9%
              </div>
              <div className="text-xs text-neutral-400 mt-1">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                &lt; 50ms
              </div>
              <div className="text-xs text-neutral-400 mt-1">Latency</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                10x
              </div>
              <div className="text-xs text-neutral-400 mt-1">Speed to Market</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                24/7
              </div>
              <div className="text-xs text-neutral-400 mt-1">Expert Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
