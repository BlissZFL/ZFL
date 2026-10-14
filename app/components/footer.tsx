"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      const whiteContainer = document.getElementById(
        "white-homepage-container"
      );

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

      if (typeof window !== "undefined") {
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer
      id="footer"
      className="w-full bg-white text-neutral-900 pt-10 pb-12 px-6 sm:px-10 lg:px-16 selection:bg-black selection:text-white scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        

        {/* Top Divider */}
        <div className="w-full border-t border-neutral-200/80" />

        {/* Middle Navigation Grid: Services, Studio, Get in Touch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 py-14">
          {/* Column 1: SERVICES */}
          <div>
            <h4 className="text-xs font-mono font-medium tracking-widest text-neutral-400 uppercase mb-5">
              SERVICES
            </h4>
            <ul className="space-y-3.5 text-sm font-medium text-neutral-800">
              <li className="flex items-center gap-2">
                <span className="text-[8px] text-neutral-400">●</span>
                <Link
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="transition-colors hover:text-black"
                >
                  Website Design &amp; Development
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[8px] text-neutral-400">●</span>
                <Link
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="transition-colors hover:text-black"
                >
                  Conversion-Focused Web Design
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[8px] text-neutral-400">●</span>
                <Link
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="transition-colors hover:text-black"
                >
                  AI Automation &amp; Systems
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[8px] text-neutral-400">●</span>
                <Link
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="transition-colors hover:text-black"
                >
                  Lead &amp; Reporting Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: STUDIO */}
          <div>
            <h4 className="text-xs font-mono font-medium tracking-widest text-neutral-400 uppercase mb-5">
              STUDIO
            </h4>
            <ul className="space-y-3.5 text-sm font-medium text-neutral-800">
              <li className="flex items-center gap-2">
                <span className="text-[8px] text-neutral-400">●</span>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href="#work"
                    onClick={(e) => handleScrollTo(e, "#work")}
                    className="transition-colors hover:text-black"
                  >
                    Work
                  </Link>
                  <span className="text-neutral-400">·</span>
                  <Link
                    href="#process"
                    onClick={(e) => handleScrollTo(e, "#process")}
                    className="transition-colors hover:text-black"
                  >
                    Process
                  </Link>
                  <span className="text-neutral-400">·</span>
                  <Link
                    href="#faq"
                    onClick={(e) => handleScrollTo(e, "#faq")}
                    className="transition-colors hover:text-black"
                  >
                    FAQ
                  </Link>
                  <span className="text-neutral-400">·</span>
                  <Link
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, "#contact")}
                    className="transition-colors hover:text-black"
                  >
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: GET IN TOUCH */}
          <div>
            <h4 className="text-xs font-mono font-medium tracking-widest text-neutral-400 uppercase mb-5">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3.5 text-sm font-medium text-neutral-800">
              <li className="flex items-center gap-2">
                <span className="text-[8px] text-neutral-400">●</span>
                <Link
                  href="mailto:sanaf@zerofrictionlab.com"
                  className="transition-colors hover:text-black"
                >
                  sanaf@zerofrictionlab.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[8px] text-neutral-400">●</span>
                <Link
                  href="https://cal.com/sanaf-suhail/discoverycall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-black"
                >
                  Book a 15-min call
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[8px] text-neutral-400">●</span>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-black"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full border-t border-neutral-200/80" />

        {/* Bottom Bar: Logo, Legal Links, Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs text-neutral-500">
          {/* Left: Brand Logo & Legal Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-neutral-900 transition-opacity"
            >
              <div className="relative h-6 w-16">
                <Image
                  src="/zflblack.svg"
                  alt="Two Cents Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              
            </Link>

            <nav className="flex items-center gap-6 text-neutral-600">
              <Link href="/privacy" className="transition-colors hover:text-black">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-black">
                Terms
              </Link>
              
            </nav>
          </div>

          {/* Right: Social Icons & Copyright */}
          <div className="flex items-center gap-4">
            {/* Instagram Icon Box */}
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center  bg-black text-white transition-opacity hover:opacity-85"
            >
              <svg
                className="h-3.5 w-3.5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>

            {/* Email Icon Box */}
            <Link
              href="mailto:sanaf@zerofrictionlab.com"
              aria-label="Email"
              className="flex h-7 w-7 items-center justify-center  bg-black text-white transition-opacity hover:opacity-85"
            >
              <svg
                className="h-3.5 w-3.5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l9.518 7.713 9.518-7.713v11.817h-19.036z" />
              </svg>
            </Link>

            {/* Copyright */}
            <span className="text-xs text-neutral-500 ml-1">
              &copy; 2026 ZFL
              
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
