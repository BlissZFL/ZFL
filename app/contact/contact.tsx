"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/nav";
import FAQSection from "../components/faq";
import Footer from "../components/footer";
import { CheckCircle2 } from "lucide-react";

// Pixelated Double Chevron Icon from Hero CTA
function PixelDoubleChevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5 text-neutral-900"
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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#f8f8fa] font-sans text-neutral-900 selection:bg-[#FF7300] selection:text-white">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative max-w-8xl mx-auto px-6 sm:px-10 lg:px-12 pt-28 sm:pt-36 pb-16 sm:pb-24">
        {/* Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF7300]">
            CONTACT / HIRE TEAM
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
            Let&apos;s build something <span className="text-[#FF7300]">worth using.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 font-normal max-w-2xl">
            Have a website, app, product or automation in mind? Tell us what you are building,
            where you are stuck and what success looks like. We will help you turn the idea into a clear next step.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Form | Right Calendly Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Contact Form Card (Name, Work Email, Agency/Company, Message)*/}
          {/* ========================================================================= */}
          <section className="lg:col-span-7 bg-white rounded-[32px] p-7 sm:p-10 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
                  Project Brief Received!
                </h3>
                <p className="text-sm sm:text-base text-neutral-500 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A product lead will review your project
                  details and get back to you within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      message: "",
                    });
                  }}
                  className="mt-6 group inline-flex items-center overflow-hidden rounded-2xl border border-neutral-300/80 bg-neutral-100/90 p-1 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-200/60 active:scale-[0.98] cursor-pointer"
                >
                  <span className="flex h-10 w-11 items-center justify-center rounded-xl bg-[#FF7300] text-neutral-950 shadow-sm transition-transform group-hover:scale-105">
                    <PixelDoubleChevron />
                  </span>
                  <span className="flex h-10 items-center justify-center rounded-xl bg-[#18181b] px-6 text-xs font-semibold text-white transition-colors group-hover:bg-black">
                    Send another message
                  </span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Name & Work Email (2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider font-mono"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-2xl bg-[#fcfcfa] px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF7300]/20 border border-neutral-200/90 focus:border-[#FF7300] transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
                    />
                  </div>

                  {/* Work email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider font-mono"
                    >
                      Work email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-2xl bg-[#fcfcfa] px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF7300]/20 border border-neutral-200/90 focus:border-[#FF7300] transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
                    />
                  </div>
                </div>

                {/* Agency / Company */}
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider font-mono"
                  >
                    Agency / Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Company or brand name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-2xl bg-[#fcfcfa] px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF7300]/20 border border-neutral-200/90 focus:border-[#FF7300] transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
                  />
                </div>

                {/* Message / Project details */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider font-mono"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell us what you are building, what you need and what success looks like."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-2xl bg-[#fcfcfa] p-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF7300]/20 border border-neutral-200/90 focus:border-[#FF7300] transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
                  />
                </div>

                {/* Microcopy & CTA Submit Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center overflow-hidden rounded-2xl border border-neutral-300/80 bg-neutral-100/90 p-1 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-200/60 active:scale-[0.98] disabled:opacity-60 cursor-pointer"
                  >
                    {/* Left Pixel Icon Box */}
                    <span className="flex h-11 w-12 items-center justify-center rounded-xl bg-[#FF7300] text-neutral-950 shadow-sm transition-transform group-hover:scale-105">
                      <PixelDoubleChevron />
                    </span>

                    {/* Right Label */}
                    <span className="flex h-11 items-center justify-center rounded-xl bg-[#18181b] px-8 text-sm font-semibold text-white transition-colors group-hover:bg-black">
                      {isSubmitting ? "Sending Brief..." : "Send Project Brief"}
                    </span>
                  </button>

                  <p className="text-xs text-neutral-400 font-sans">
                    No pressure. No unnecessary sales pitch. Just a clear conversation about your project.
                  </p>
                </div>
              </form>
            )}
          </section>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Calendly Card (Matching Image 2)                            */}
          {/* ========================================================================= */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-[32px] bg-white p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
              {/* Calendly Logo */}
              <div className="flex items-center">
                <Image
                  src="/cal.png"
                  alt="Calendly"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>

              {/* Heading */}
              <h2 className="mt-6 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 leading-snug">
                Short in time?
              </h2>

              {/* Subtext */}
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
                Let&apos;s turn your vision into reality! Book a discovery call directly with our team, and let&apos;s start a conversation about your next project.
              </p>

              {/* "Book a call" CTA Button (Matching Hero Section Design) */}
              <div className="mt-6">
                <a
                  href="https://cal.com/sanaf-suhail/discoverycall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center overflow-hidden rounded-2xl border border-neutral-300/80 bg-neutral-100/90 p-1 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-200/60 active:scale-[0.98]"
                >
                  {/* Left Pixel Icon Box */}
                  <span className="flex h-11 w-12 items-center justify-center rounded-xl bg-[#FF7300] text-neutral-950 shadow-sm transition-transform group-hover:scale-105">
                    <PixelDoubleChevron />
                  </span>

                  {/* Right Label */}
                  <span className="flex h-11 items-center justify-center rounded-xl bg-[#18181b] px-7 text-sm font-semibold text-white transition-colors group-hover:bg-black">
                    Book a call
                  </span>
                </a>
              </div>
            </div>

            {/* Supporting Direct Contact Card */}
            <div className="rounded-[32px] bg-white p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-3">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Direct Contact
              </span>
              <div className="pt-1">
                <a
                  href="mailto:info@zerofrictionlab.com"
                  className="text-base sm:text-lg font-bold text-neutral-900 hover:text-[#FF7300] transition-colors"
                >
                  info@zerofrictionlab.com
                </a>
                <p className="text-xs text-neutral-500 mt-1">
                  Response time: Within 1 business day
                </p>
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed pt-2 border-t border-neutral-100">
                Not sure exactly what you need? That&apos;s fine. Send us what you have — a rough idea, an existing website, a Figma file, a product brief or simply a problem you want to solve. We&apos;ll help define the path.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
