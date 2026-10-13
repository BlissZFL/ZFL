"use client";

import React, { useState } from "react";

interface CalendlySectionProps {
  calendlyUrl?: string;
}

export default function CalendlySection({
  calendlyUrl = "https://cal.com/sanaf-suhail/discoverycall",
}: CalendlySectionProps) {
  // Calendar state for month navigation
  const [currentDate, setCurrentDate] = useState(() => new Date(2026, 9, 1)); // October 2026

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Days calculation
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (dayNumber: number) => {
    // Redirect to Calendly
    if (typeof window !== "undefined") {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-white text-neutral-900 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-t border-neutral-100 selection:bg-black selection:text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Description & Value Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.12]">
              Get Your Roadmap.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-md">
              Book a 15-minute call. Within a few days you get a written plan:
              what to build, in what order, and a fixed quote.
            </p>

            {/* 3 Value Cards with Dashed Borders */}
            <div className="mt-8 sm:mt-10 flex flex-col gap-3.5 max-w-lg">
              {/* Card 1: No aggressive sales */}
              <div className="flex items-center gap-3.5 border border-dashed border-neutral-300 bg-[#fafafa] p-4 sm:p-4.5 rounded-none transition-colors hover:bg-neutral-100/60">
                <div className="flex items-center justify-center text-neutral-800 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.75"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-neutral-800 tracking-tight">
                  No aggressive sales pitches.
                </span>
              </div>

              {/* Card 2: Talk directly */}
              <div className="flex items-center gap-3.5 border border-dashed border-neutral-300 bg-[#fafafa] p-4 sm:p-4.5 rounded-none transition-colors hover:bg-neutral-100/60">
                <div className="flex items-center justify-center text-neutral-800 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.75"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-neutral-800 tracking-tight">
                  Talk directly to the people who&apos;ll design and build it.
                </span>
              </div>

              {/* Card 3: Clear written plan */}
              <div className="flex items-center gap-3.5 border border-dashed border-neutral-300 bg-[#fafafa] p-4 sm:p-4.5 rounded-none transition-colors hover:bg-neutral-100/60">
                <div className="flex items-center justify-center text-neutral-800 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.75"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934a1.12 1.12 0 01-1.006 0L9.503 3.314a1.125 1.125 0 00-1.006 0L3.622 5.75A1.125 1.125 0 003 6.757v12.428c0 .836.88 1.38 1.628 1.006l3.869-1.934a1.12 1.12 0 011.006 0l4.997 2.498a1.125 1.125 0 001.003-.257z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-neutral-800 tracking-tight">
                  Leave with a clear written plan.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Modern Calendar Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-[#141414] text-white p-6 sm:p-8 shadow-2xl border border-neutral-800 flex flex-col justify-between">
              {/* Calendar Header: Month + Year & Nav arrows */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800/80">
                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white">
                  <span>{monthNames[month]}</span>{" "}
                  <span className="text-neutral-400 font-normal">{year}</span>
                </h3>

                <div className="flex items-center gap-1 text-neutral-400">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    aria-label="Previous month"
                    className="p-1.5 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    aria-label="Next month"
                    className="p-1.5 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Days of week header */}
              <div className="grid grid-cols-7 gap-2 pt-6 pb-3 text-center">
                {daysOfWeek.map((day) => (
                  <span
                    key={day}
                    className="text-[10px] sm:text-[11px] font-mono tracking-wider text-neutral-500 uppercase select-none"
                  >
                    {day}
                  </span>
                ))}
              </div>

              {/* Calendar Days Grid */}
              <div className="grid grid-cols-7 gap-2 sm:gap-2.5 my-2">
                {/* Empty slots before first day */}
                {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}

                {/* Days of the month */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dayOfWeek = (firstDayIndex + i) % 7;
                  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                  // Today highlight (e.g. 11th like the screenshot)
                  const isToday = day === 11 && month === 9 && year === 2026;
                  // Active / open booking days (weekdays from day 12 to 30)
                  const isAvailable =
                    !isWeekend &&
                    ((month === 9 && year === 2026 && day >= 12 && day <= 30) ||
                      (month !== 9 || year !== 2026));

                  if (isToday) {
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleDateClick(day)}
                        className="aspect-square rounded-lg bg-white text-black font-semibold text-sm sm:text-base flex flex-col items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md relative group cursor-pointer"
                        title={`Select ${monthNames[month]} ${day}`}
                      >
                        <span>{day}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-0.5" />
                      </button>
                    );
                  }

                  if (isAvailable) {
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleDateClick(day)}
                        className="aspect-square rounded-lg bg-[#27272a] hover:bg-[#3f3f46] text-white font-medium text-xs sm:text-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                        title={`Book for ${monthNames[month]} ${day}`}
                      >
                        {day}
                      </button>
                    );
                  }

                  // Non-available / Weekend days — not clickable
                  return (
                    <div
                      key={day}
                      className="aspect-square text-neutral-600 font-normal text-xs sm:text-sm flex items-center justify-center cursor-default select-none"
                    >
                      {day}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Footer Info inside Calendar Card */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-neutral-800/80 text-[11px] sm:text-xs">
                <span className="text-neutral-500 font-mono">
                  Grey days are open
                </span>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors font-mono"
                >
                  <span>Opens our booking page</span>
                  <span className="text-sm">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
