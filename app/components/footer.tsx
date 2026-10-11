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
      className="w-full bg-white text-neutral-900 pt-16 pb-12 px-6 sm:px-10 lg:px-16 selection:bg-black selection:text-white border-t border-neutral-100 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Header Row: Value Proposition & Action CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12">
          <div className="max-w-xl">
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900">
              Design-first MVPs, launched in weeks.
            </h3>
            <p className="mt-1 text-sm text-neutral-500 font-normal leading-relaxed">
              UX, product design, pitch decks and the build, from one studio that
              stays on as your tech partner.
            </p>
          </div>

          <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
            {/* Gradient border pill: SEND A BRIEF */}
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center  px-6 py-2.5 text-xs font-mono font-semibold tracking-wider text-neutral-900 bg-white border border-transparent shadow-sm transition-all duration-200 hover:shadow active:scale-95 [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#f97316,#3b82f6)_border-box]"
            >
              BOOK A CALL
            </Link>

            
          </div>
        </div>

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
              <li>
                <Link
                  href="#services"
                  className="transition-colors hover:text-black"
                >
                  Product &amp; UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="transition-colors hover:text-black"
                >
                  Onboarding &amp; User Flows
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="transition-colors hover:text-black"
                >
                  Pitch Decks &amp; Brand
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="transition-colors hover:text-black"
                >
                  MVPs That Launch
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="transition-colors hover:text-black"
                >
                  Tech Partnership
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
              <li>
                <Link
                  href="#work"
                  onClick={(e) => handleScrollTo(e, "#work")}
                  className="transition-colors hover:text-black"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  onClick={(e) => handleScrollTo(e, "#process")}
                  className="transition-colors hover:text-black"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  onClick={(e) => handleScrollTo(e, "#faq")}
                  className="transition-colors hover:text-black"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="transition-colors hover:text-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: GET IN TOUCH */}
          <div>
            <h4 className="text-xs font-mono font-medium tracking-widest text-neutral-400 uppercase mb-5">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3.5 text-sm font-medium text-neutral-800">
              <li>
                <Link
                  href="mailto:hello@twocents.studio"
                  className="transition-colors hover:text-black"
                >
                  hello@zfl.com
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="transition-colors hover:text-black"
                >
                  Book a 15-min call
                </Link>
              </li>
              <li>
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
              href="mailto:hello@twocents.studio"
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
