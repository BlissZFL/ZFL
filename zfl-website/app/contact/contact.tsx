"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/nav";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full bg-white font-sans text-neutral-900">
      {/* Floating Navbar */}
      <Navbar />

      <main className="flex min-h-screen w-full flex-col lg:flex-row">
        {/* Left Side: 60% Width, Full-Bleed Image Covering Top End-to-End */}
        <section className="relative flex min-h-[60vh] w-full flex-col justify-between overflow-hidden p-6 sm:p-10 md:p-14 lg:min-h-screen lg:w-[60%]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Contact.jpg"
              alt="Team collaboration"
              fill
              priority
              className="object-cover object-center brightness-[0.85] contrast-[1.05]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Dark gradient overlay for bottom text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          </div>

          {/* Top Spacer for floating nav */}
          <div className="relative z-10 pt-20 sm:pt-24" />

          {/* Bottom Overlay Content */}
          <div className="relative z-10 mt-auto flex flex-col gap-6 text-white pb-4 sm:pb-8">
            <h1 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Let&apos;s build your neural future together.
            </h1>

            <div className="flex flex-col gap-3 pt-2">
              {/* Phone number */}
              <a
                href="tel:+2348051698842"
                className="group flex items-center gap-3 text-sm text-neutral-300 transition-colors hover:text-white sm:text-base"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <span>+234 805 169 8842</span>
              </a>

              {/* Email address */}
              <a
                href="mailto:info@spartanai.org"
                className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80 sm:text-xl md:text-2xl"
              >
                info@spartanai.org
              </a>
            </div>
          </div>
        </section>

        {/* Right Side: 40% Width Form Section */}
        <section className="flex w-full flex-col justify-center bg-white px-6 py-16 sm:px-10 sm:py-24 lg:w-[40%] lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-lg lg:pt-12">
            {/* Header Content */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl leading-[1.12]">
                Deploy your first agent today.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-600">
                Ready to transform your legacy data into a strategic asset? Reach out
                to our research team to discuss a custom neural integration or a
                pilot of Digital Brain v4.0.2.
              </p>
            </div>

            {/* Contact Form */}
            {isSubmitted ? (
              <div className="rounded-2xl bg-neutral-50 p-8 text-center border border-neutral-200">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Message Sent Successfully!
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Our research team will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", budget: "", message: "" });
                  }}
                  className="mt-6 rounded-full bg-black px-6 py-2.5 text-xs font-semibold text-white hover:bg-neutral-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name and Email 2-col Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-neutral-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl bg-[#f4f4f6] px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/10 border border-transparent focus:border-neutral-300 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-neutral-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@framer.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl bg-[#f4f4f6] px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/10 border border-transparent focus:border-neutral-300 transition-all"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="budget"
                    className="text-xs font-medium text-neutral-700"
                  >
                    Budget
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="budget"
                      type="text"
                      placeholder="Enter budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full rounded-xl bg-[#f4f4f6] px-4 py-3 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/10 border border-transparent focus:border-neutral-300 transition-all"
                    />
                    <span className="pointer-events-none absolute right-4 text-sm font-medium text-neutral-400">
                      $
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-neutral-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Type here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl bg-[#f4f4f6] p-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/10 border border-transparent focus:border-neutral-300 transition-all"
                  />
                </div>

                {/* Submit Button with Left Pixel Icon */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-200/50 p-1 shadow-sm transition-all hover:border-neutral-400 hover:shadow"
                  >
                    {/* Left Icon Pill */}
                    <span className="flex h-11 w-12 items-center justify-center rounded-xl bg-white text-neutral-900 shadow-sm transition-transform group-hover:scale-105">
                      {/* Pixelated Double Chevron Icon */}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 text-neutral-800"
                      >
                        {/* First Chevron */}
                        <rect x="1" y="2" width="2" height="2" fill="currentColor" />
                        <rect x="3" y="4" width="2" height="2" fill="currentColor" />
                        <rect x="5" y="6" width="2" height="2" fill="currentColor" />
                        <rect x="3" y="8" width="2" height="2" fill="currentColor" />
                        <rect x="1" y="10" width="2" height="2" fill="currentColor" />
                        {/* Second Chevron */}
                        <rect x="5" y="2" width="2" height="2" fill="currentColor" />
                        <rect x="7" y="4" width="2" height="2" fill="currentColor" />
                        <rect x="9" y="6" width="2" height="2" fill="currentColor" />
                        <rect x="7" y="8" width="2" height="2" fill="currentColor" />
                        <rect x="5" y="10" width="2" height="2" fill="currentColor" />
                      </svg>
                    </span>

                    {/* Right Label */}
                    <span className="flex h-11 items-center justify-center rounded-xl bg-[#52525b] px-8 text-sm font-medium text-white transition-colors group-hover:bg-neutral-900">
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
