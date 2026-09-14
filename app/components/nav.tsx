"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const desktopNavItems: NavItem[] = [
  { label: "Works", href: "/#works" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

const mobileNavItems: NavItem[] = [
  { label: "Works", href: "/#works" },
  { label: "Services", href: "/#services" },
  { label: "Insights", href: "/#insights" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Company", href: "/#about" },
];

function BrandLogo({ className = "h-4 w-auto" }: { className?: string }) {
  return (
    <svg
      width="251"
      height="26"
      viewBox="0 0 251 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} object-contain`}
    >
      {/* "Zero" in #FF7300 */}
      <path
        d="M6.83591e-06 25.2V20.615L12.285 5.985H6.83591e-06V1.4H18.725V5.985L6.44001 20.615H18.725V25.2H6.83591e-06ZM39.319 19.005C38.339 23.345 34.839 25.76 30.219 25.76C24.374 25.76 20.769 21.98 20.769 15.785C20.769 9.38 24.409 5.775 30.009 5.775C35.644 5.775 39.179 9.52 39.179 15.68V16.87H26.229C26.509 19.88 27.909 21.49 30.219 21.49C31.969 21.49 33.159 20.72 33.719 19.005H39.319ZM30.009 10.045C28.014 10.045 26.754 11.34 26.334 13.79H33.649C33.229 11.34 31.969 10.045 30.009 10.045ZM42.1159 25.2V6.37H47.4709V8.995C48.6609 6.755 50.4809 5.775 52.4059 5.775C53.1759 5.775 53.8759 5.985 54.2609 6.37V10.885C53.6309 10.745 52.9659 10.675 52.1259 10.675C48.9059 10.675 47.4709 12.495 47.4709 15.47V25.2H42.1159ZM64.4963 25.76C58.7913 25.76 55.2563 21.98 55.2563 15.785C55.2563 9.38 58.8963 5.775 64.4963 5.775C70.2013 5.775 73.7713 9.625 73.7713 15.785C73.7713 22.155 70.0963 25.76 64.4963 25.76ZM64.4963 21.42C66.9813 21.42 68.2763 19.46 68.2763 15.785C68.2763 12.145 66.9463 10.115 64.4963 10.115C62.0463 10.115 60.7513 12.11 60.7513 15.785C60.7513 19.425 62.0813 21.42 64.4963 21.42Z"
        fill="#FF7300"
      />
      {/* "FrictionLab" in crisp dark #171717 */}
      <path
        d="M77.5132 25.2V1.4H93.6483V4.025H80.7332V12.18H92.3533V14.805H80.7332V25.2H77.5132ZM96.8182 25.2V6.615H99.8982V9.485C101.158 7.21 103.153 6.16 105.393 6.16C106.128 6.16 106.793 6.335 107.143 6.615V9.38C106.618 9.205 105.953 9.135 105.218 9.135C101.508 9.135 99.8982 11.445 99.8982 14.805V25.2H96.8182ZM109.875 4.12999V-4.05312e-06H112.955V4.12999H109.875ZM109.875 25.2V6.615H112.955V25.2H109.875ZM133.204 13.02H130.124C129.634 10.185 127.744 8.82 125.294 8.82C121.864 8.82 120.044 11.34 120.044 15.925C120.044 20.44 121.969 22.995 125.399 22.995C127.884 22.995 129.669 21.665 130.264 19.005H133.344C132.504 23.625 129.389 25.62 125.329 25.62C120.044 25.62 116.894 21.945 116.894 15.925C116.894 9.625 120.114 6.16 125.294 6.16C129.389 6.16 132.609 8.47 133.204 13.02ZM137.57 19.845V9.065H134.98V6.615H137.57V2.34499H140.65V6.615H144.745V9.065H140.65V19.845C140.65 22.085 141.315 23.135 144.045 23.135H144.675V25.34C144.325 25.515 143.555 25.62 142.68 25.62C139.215 25.62 137.57 23.765 137.57 19.845ZM147.678 4.12999V-4.05312e-06H150.758V4.12999H147.678ZM147.678 25.2V6.615H150.758V25.2H147.678ZM163.201 25.62C157.881 25.62 154.696 21.98 154.696 15.925C154.696 9.625 157.986 6.16 163.201 6.16C168.521 6.16 171.706 9.87 171.706 15.925C171.706 22.19 168.416 25.62 163.201 25.62ZM163.201 22.96C166.666 22.96 168.556 20.475 168.556 15.925C168.556 11.41 166.631 8.82 163.201 8.82C159.736 8.82 157.846 11.34 157.846 15.925C157.846 20.405 159.771 22.96 163.201 22.96ZM175.671 25.2V6.615H178.751V9.135C180.011 7.175 182.041 6.16 184.491 6.16C188.446 6.16 190.791 8.47 190.791 12.775V25.2H187.711V13.405C187.711 10.605 186.451 8.785 183.651 8.785C180.571 8.785 178.751 11.55 178.751 14.21V25.2H175.671ZM195.98 25.2V1.4H199.2V22.575H211.17V25.2H195.98ZM217.573 12.67H214.493C215.088 8.575 217.783 6.16 222.333 6.16C227.303 6.16 229.718 9.065 229.718 13.405V20.72C229.718 22.855 229.893 24.185 230.383 25.2H227.128C226.778 24.465 226.673 23.38 226.638 22.26C225.063 24.605 222.543 25.62 220.303 25.62C216.453 25.62 213.863 23.835 213.863 20.3C213.863 17.745 215.263 15.89 217.993 14.98C220.513 14.14 223.068 13.93 226.638 13.895V13.475C226.638 10.465 225.238 8.82 222.053 8.82C219.393 8.82 217.958 10.29 217.573 12.67ZM217.013 20.23C217.013 21.945 218.448 22.96 220.618 22.96C224.048 22.96 226.638 20.265 226.638 17.08V16.205C218.728 16.275 217.013 17.955 217.013 20.23ZM237.847 25.2H234.767V-4.05312e-06H237.847V8.925C239.072 7.175 240.857 6.16 243.062 6.16C247.997 6.16 250.972 9.8 250.972 15.855C250.972 22.155 247.927 25.62 243.062 25.62C240.857 25.62 239.072 24.71 237.847 22.995V25.2ZM242.852 8.82C239.597 8.82 237.847 11.305 237.847 15.855C237.847 20.37 239.667 22.96 242.852 22.96C246.072 22.96 247.822 20.44 247.822 15.855C247.822 11.375 246.002 8.82 242.852 8.82Z"
        fill="#171717"
      />
    </svg>
  );
}

// Reusable Pixel Arrow Icon
function PixelArrow({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-8 max-w-8xl mx-auto flex items-center justify-between pointer-events-none font-sans">
      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (md:flex)                                                 */}
      {/* ========================================================================= */}

      {/* Left Island: Frosted Glass Capsule with Logo & Nav Links */}
      <div className="pointer-events-auto hidden md:flex items-center gap-6 rounded-full bg-white/75 px-5 py-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] backdrop-blur-xl border border-white/40 transition-all duration-300">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-85 pr-1"
          aria-label="ZeroFrictionLab Home"
        >
          <BrandLogo className="h-4 w-auto" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="flex items-center gap-1.5">
          {desktopNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3.5 py-1 text-sm font-medium text-neutral-700 transition-colors hover:bg-black/5 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Island: Frosted Glass Capsule with CTA Button */}
      <div className="pointer-events-auto hidden md:flex items-center">
        <Link
          href="/contact"
          className="group flex items-center gap-2.5 rounded-full bg-white/75 px-2.5 py-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] backdrop-blur-xl border border-white/40 transition-all hover:shadow-md hover:bg-white/90 active:scale-[0.98]"
        >
          {/* Orange Icon Squircle */}
          <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#FF7300] text-white shadow-sm transition-transform group-hover:scale-105">
            <PixelArrow className="h-3 w-3 text-white transition-transform group-hover:translate-x-0.5" />
          </span>

          <span className="pr-3 text-xs sm:text-sm font-medium text-neutral-900">
            Hire Team
          </span>
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE LAYOUT (md:hidden) — Clean & Free of Circular Arc Distortion       */}
      {/* ========================================================================= */}
      <div className="pointer-events-auto relative w-full md:hidden">
        {/* Closed/Persistent Capsule Navbar */}
        <div
          className={`flex w-full items-center justify-between rounded-full bg-white/85 px-4 py-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] backdrop-blur-xl border border-white/50 transition-opacity duration-200 ${
            mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-85 pl-1"
            aria-label="ZeroFrictionLab Home"
          >
            <BrandLogo className="h-3.5 w-auto" />
          </Link>

          {/* Right: 2-Line Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-full hover:bg-black/5 active:scale-90 transition-transform focus:outline-none cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <span className="h-[2px] w-5 rounded-full bg-neutral-900" />
            <span className="h-[2px] w-5 rounded-full bg-neutral-900" />
          </button>
        </div>

        {/* Open State Menu Modal Card */}
        <div
          className={`absolute top-0 left-0 right-0 flex w-full flex-col rounded-[28px] border border-white/60 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-250 ease-out origin-top ${
            mobileMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {/* Top Row: Brand Logo on Left, 'X' on Right */}
          <div className="flex items-center justify-between pb-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center pl-1"
              aria-label="ZeroFrictionLab Home"
            >
              <BrandLogo className="h-3.5 w-auto" />
            </Link>

            {/* Close Button ('X') */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-full text-neutral-900 hover:bg-black/5 active:scale-90 focus:outline-none transition-all cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <svg
                className="h-5 w-5 stroke-[2.5]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Middle Nav Links */}
          <div className="flex flex-col gap-3 py-3 pl-1">
            {mobileNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-normal text-neutral-600 hover:text-neutral-950 active:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom Dark CTA Button */}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative flex w-full items-center justify-between rounded-2xl bg-[#1c1c1e] p-1.5 text-white shadow-sm transition-all hover:bg-black active:scale-[0.98]"
            >
              {/* Left Dark Squircle Box with Pixel Arrow */}
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-800/80 text-white shadow-inner transition-transform group-hover:scale-105">
                <PixelArrow className="h-3.5 w-3.5 text-white" />
              </span>

              {/* Centered Label */}
              <span className="flex-1 text-center text-sm font-semibold tracking-tight text-white pr-4">
                Hire Team
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
