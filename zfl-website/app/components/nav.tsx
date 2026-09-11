"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Company", href: "#company" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      {/* Main Pill Navbar */}
      <nav className="relative flex items-center justify-between rounded-full bg-white/95 px-3 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md border border-neutral-200/80 transition-all duration-300">
        {/* Left: Logo container */}
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-black px-3.5 py-1.5 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          aria-label="ZeroFrictionLab Home"
        >
          <Image
            src="/ZeroFrictionLab.svg"
            alt="ZeroFrictionLab Logo"
            width={140}
            height={16}
            className="h-4 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Hire Team CTA Button */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Pixelated Arrow Icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-white transition-transform group-hover:translate-x-0.5"
            >
              {/* First Pixel Column */}
              <rect x="1" y="2" width="2" height="2" fill="currentColor" />
              <rect x="3" y="4" width="2" height="2" fill="currentColor" />
              <rect x="5" y="6" width="2" height="2" fill="currentColor" />
              <rect x="3" y="8" width="2" height="2" fill="currentColor" />
              <rect x="1" y="10" width="2" height="2" fill="currentColor" />
              {/* Second Pixel Column */}
              <rect x="5" y="2" width="2" height="2" fill="currentColor" />
              <rect x="7" y="4" width="2" height="2" fill="currentColor" />
              <rect x="9" y="6" width="2" height="2" fill="currentColor" />
              <rect x="7" y="8" width="2" height="2" fill="currentColor" />
              <rect x="5" y="10" width="2" height="2" fill="currentColor" />
            </svg>
            <span>Hire Team</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-neutral-800"
          >
            {/* Pixel Arrow Icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
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
            <span className="text-[11px]">Hire</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-full p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-neutral-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-neutral-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-2.5 text-xs font-semibold text-white shadow-sm"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-white"
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
              <span>Hire Team</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
