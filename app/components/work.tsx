"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkProject {
  title: string;
  category: string;
  url: string;
  displayUrl: string;
  image: string;
  scrollOffset?: string;
}

const projects: WorkProject[] = [
  {
    title: "Bullet",
    category: "PRODUCT",
    url: "https://bulletshorts.com",
    displayUrl: "bulletshorts.com",
    image: "/bullet_preview.jpg",
    scrollOffset: "-32%",
  },
  {
    title: "Shashank Udupa",
    category: "BRAND",
    url: "https://shashankudupa.co.in",
    displayUrl: "shashankudupa.co.in",
    image: "/shashank_preview.jpg",
    scrollOffset: "-28%",
  },
];

export default function WorkSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="w-full bg-white text-neutral-900 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-t border-neutral-100 selection:bg-black selection:text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.12]">
            Shipped, Live, Still Running.
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-md">
            Products, sites and brands we&apos;ve designed and launched. Hover a
            card to scroll the real thing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <Link
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group flex flex-col border border-dashed border-neutral-300 bg-white p-3.5 sm:p-5 transition-all duration-300 hover:border-neutral-400 select-none cursor-pointer"
              >
                {/* Browser Window Mockup */}
                <div className="w-full border border-neutral-200 overflow-hidden bg-neutral-100 flex flex-col">
                  {/* Browser Address Bar */}
                  <div className="flex items-center px-3 sm:px-4 py-2 sm:py-2.5 bg-[#f4f4f5] border-b border-neutral-200 gap-3">
                    {/* Window Controls (Three Dots) */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-neutral-300" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-neutral-300" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-neutral-300" />
                    </div>

                    {/* Centered / Offset URL display */}
                    <span className="font-mono text-[11px] sm:text-xs text-neutral-500 tracking-wide select-none">
                      {project.displayUrl}
                    </span>
                  </div>

                  {/* Browser Viewport with Scroll on Hover */}
                  <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] overflow-hidden bg-neutral-900">
                    <div
                      className="absolute top-0 left-0 w-full will-change-transform"
                      style={{
                        transform: isHovered
                          ? `translateY(${project.scrollOffset || "-30%"})`
                          : "translateY(0%)",
                        transition: "transform 4s cubic-bezier(0.25, 1, 0.5, 1)",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} website screenshot`}
                        width={1280}
                        height={1600}
                        className="w-full h-auto object-cover object-top select-none pointer-events-none"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta Info */}
                <div className="mt-4 sm:mt-5 flex items-center justify-between px-1">
                  <h3 className="text-base sm:text-lg font-medium text-neutral-900 tracking-tight">
                    {project.title}
                  </h3>

                  <div className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono text-neutral-400 group-hover:text-neutral-700 transition-colors tracking-widest uppercase">
                    <span>{project.category}</span>
                    <span className="text-sm">↗</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
