"use client";

import React from "react";
import Image from "next/image";

interface TwoCentsSectionProps {
  className?: string;
}

export default function TwoCentsSection({ className = "" }: TwoCentsSectionProps) {
  return (
    <section
      className={`relative w-full bg-white text-black py-16 sm:py-24 px-6 sm:px-10 lg:px-16 selection:bg-black selection:text-white ${className}`}
    >
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 text-center leading-[1.1]">
          Your Vision. Our Frictionless Execution.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-neutral-500 text-center font-normal max-w-xl leading-relaxed">
          From bold ideas to beautifully designed experiences, custom-built products, and intelligent 
          
          automation. We turn complexity into clarity and ambitious visions into things that actually work.
        </p>

        {/* Dashed Box Container with 4 Corner Brackets - Zero horizontal padding so hands reach the borders */}
        <div className="relative w-full max-w-7xl mt-10 sm:mt-14 border border-dashed border-neutral-300 bg-white px-0 pt-6 sm:pt-8 pb-6 sm:pb-8 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
          {/* Top-Left Corner Bracket ┌ */}
          <span
            aria-hidden="true"
            className="absolute -top-[1.5px] -left-[1.5px] w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-neutral-900 pointer-events-none z-10"
          />

          {/* Top-Right Corner Bracket ┐ */}
          <span
            aria-hidden="true"
            className="absolute -top-[1.5px] -right-[1.5px] w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-neutral-900 pointer-events-none z-10"
          />

          {/* Bottom-Left Corner Bracket └ */}
          <span
            aria-hidden="true"
            className="absolute -bottom-[1.5px] -left-[1.5px] w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-neutral-900 pointer-events-none z-10"
          />

          {/* Bottom-Right Corner Bracket ┘ */}
          <span
            aria-hidden="true"
            className="absolute -bottom-[1.5px] -right-[1.5px] w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-neutral-900 pointer-events-none z-10"
          />

          {/* ASCII Creation Hands Image spanning 100% full width from border to border */}
          <div className="relative w-full select-none">
            <Image
              src="/ASCII%20Creation_%20Hands%20Almost%20Touching.png"
              alt="Your Idea, Our Two Cents - ASCII Creation Hands"
              width={2171}
              height={724}
              priority
              className="w-full h-auto block select-none"
            />

            {/* Pins and Labels directly below the hands */}
            <div className="w-full grid grid-cols-2  px-6 sm:px-12">
              {/* Left Pin Label */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 bg-black" />
                <div className="w-[1.5px] h-6 bg-neutral-400" />
                <span className="mt-2 text-xs sm:text-sm font-sans font-medium text-neutral-800 tracking-tight">
                  Your Vision
                </span>
              </div>

              {/* Right Pin Label */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 bg-blue-600" />
                <div className="w-[1.5px] h-6 bg-neutral-400" />
                <span className="mt-2 text-xs sm:text-sm font-sans font-medium text-neutral-800 tracking-tight">
                  Our Execution
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
