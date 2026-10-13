"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  className?: string;
  style?: React.CSSProperties;
  theme?: "dark" | "light";
}

export default function Navbar({
  className = "",
  style,
  theme = "dark",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLight = theme === "light";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);

      const targetId = href.replace("#", "");
      const heroContainer = document.getElementById("doorway-hero-container");
      const whiteContainer = document.getElementById("white-homepage-container");

      // 1. If currently at the top hero doorway (not scrolled down to white homepage yet)
      if (heroContainer) {
        const totalScrollable =
          heroContainer.getBoundingClientRect().height - window.innerHeight;
        if (window.scrollY < totalScrollable - 50) {
          window.scrollTo({
            top: heroContainer.offsetTop + totalScrollable,
            behavior: "smooth",
          });
        }
      }

      // 2. Smoothly scroll the white homepage container to target section
      const scrollToTarget = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement && whiteContainer) {
          const containerRect = whiteContainer.getBoundingClientRect();
          const targetRect = targetElement.getBoundingClientRect();
          const targetTop =
            whiteContainer.scrollTop + (targetRect.top - containerRect.top);

          whiteContainer.scrollTo({
            top: Math.max(0, targetTop),
            behavior: "smooth",
          });
        } else if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      scrollToTarget();
      setTimeout(scrollToTarget, 300);
      setTimeout(scrollToTarget, 650);

      if (typeof window !== "undefined") {
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header
      style={style}
      className={`sticky top-0 left-0 right-0 z-50 w-full border-b backdrop-blur-md transition-all duration-200 ${
        isLight
          ? "border-neutral-200/80 bg-white/90 text-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "border-white/[0.08] bg-black/25 text-white"
      } ${className}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left: Logo using zflblack.svg */}
        <Link
          href="/"
          onClick={(e) => {
            if (isLight) {
              e.preventDefault();
              const whiteContainer = document.getElementById(
                "white-homepage-container"
              );
              if (whiteContainer) {
                whiteContainer.scrollTo({ top: 0, behavior: "smooth" });
              }
            }
          }}
          className="group flex items-center transition-opacity"
        >
          <div className="relative h-9 w-28 sm:h-10 sm:w-32">
            <Image
              src="/zflblack.svg"
              alt="ZFL Logo"
              fill
              priority
              className={`object-contain object-left ${
                isLight ? "" : "brightness-0 invert"
              }`}
            />
          </div>
        </Link>

        {/* Center / Right-Middle: Desktop Navigation Links (Blog removed) */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-xs font-normal tracking-wide transition-colors duration-200 lg:text-[13px] ${
                isLight
                  ? "text-neutral-800 hover:text-black"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              <span
                className={
                  isLight
                    ? "text-neutral-500 group-hover:text-neutral-700"
                    : "text-neutral-500 group-hover:text-neutral-300"
                }
              >
                [
              </span>
              <span className="px-0.5">{item.label}</span>
              <span
                className={
                  isLight
                    ? "text-neutral-500 group-hover:text-neutral-700"
                    : "text-neutral-500 group-hover:text-neutral-300"
                }
              >
                ]
              </span>
            </Link>
          ))}
        </nav>

        {/* Right: Book a Call CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="https://cal.com/sanaf-suhail/discoverycall"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium shadow-sm backdrop-blur-sm transition-all duration-200 active:scale-95 sm:text-sm ${
              isLight
                ? "border border-neutral-300/90 bg-neutral-100/90 text-neutral-900 hover:bg-neutral-200/90 hover:border-neutral-400"
                : "border border-white/20 bg-neutral-800/80 text-white hover:border-white/35 hover:bg-neutral-700/80"
            }`}
          >
            Book a call
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:hidden ${
              isLight
                ? "text-neutral-800 hover:text-black"
                : "text-neutral-300 hover:text-white"
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.75"
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`border-t px-6 py-5 backdrop-blur-xl md:hidden ${
            isLight
              ? "border-neutral-200 bg-white/95 text-neutral-900"
              : "border-white/[0.08] bg-black/90 text-white"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`py-1 text-sm font-normal tracking-wide transition-colors ${
                  isLight
                    ? "text-neutral-800 hover:text-black"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                <span className={isLight ? "text-neutral-500" : "text-neutral-500"}>
                  [
                </span>
                <span className="px-0.5">{item.label}</span>
                <span className={isLight ? "text-neutral-500" : "text-neutral-500"}>
                  ]
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
