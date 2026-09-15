"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does a website take?",
    answer:
      "Most marketing websites take around 2–6 weeks depending on scope, content, integrations and feedback cycles. Larger platforms and web apps are planned around their feature set.",
  },
  {
    question: "Can you design and develop the entire product?",
    answer:
      "Yes. We can handle strategy, UX, UI design, development, integrations, QA and launch as one connected process.",
  },
  {
    question: "Can you work with our existing design or brand?",
    answer:
      "Absolutely. We can extend an existing brand system or build a new digital design language around it.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We select the stack according to the product requirements. Our common tools include Next.js, React, TypeScript, modern databases, cloud infrastructure and AI/automation platforms.",
  },
  {
    question: "Can you build AI features into our website or app?",
    answer:
      "Yes. We can design and implement AI assistants, recommendation systems, workflow automation, internal tools, content systems and custom AI integrations.",
  },
  {
    question: "Do we own the website and code?",
    answer:
      "Yes. Your project assets and bespoke code are delivered to your organization. We avoid unnecessary vendor lock-in.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We can continue with maintenance, optimization, new features, analytics and ongoing product development.",
  },
  {
    question: "Can you start with an MVP?",
    answer:
      "Yes. We can define a focused MVP, launch the essential experience first and build the product in measurable iterations.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#f8f8fa] text-neutral-900 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 font-sans"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (Sticky info & CTA) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full lg:sticky lg:top-28">
          <div>
            {/* Tag Badge */}
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-16 rounded-full border-2 border-[#FF7300]" />
              <div className="h-px w-20 bg-neutral-300" />
              <span className="text-[11px] font-mono font-semibold tracking-widest text-neutral-500 uppercase">
                FAQ // COMMON QUESTIONS
              </span>
            </div>

            {/* Description */}
            <p className="mt-8 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
              Find answers to timelines, full-stack product capabilities, tech
              stack, code ownership and post-launch support.
            </p>

            {/* Main Headline */}
            <h2 className="mt-8 sm:mt-4 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-950 leading-[1.08]">
              Everything you need to know.
            </h2>
          </div>

          {/* Contact Support CTA Button */}
          <div className="mt-10 sm:mt-14">
            <Link
              href="/contact"
              className="group inline-flex items-center overflow-hidden rounded-2xl border border-neutral-300 bg-neutral-200/60 p-1 shadow-sm transition-all hover:border-neutral-400 hover:shadow-md active:scale-[0.98]"
            >
              {/* Left Pixel Chevron Icon Box */}
              <span className="flex h-11 w-12 items-center justify-center rounded-xl bg-white text-neutral-900 shadow-sm transition-transform group-hover:scale-105">
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
              </span>

              {/* Right Label */}
              <span className="flex h-11 items-center justify-center rounded-xl bg-[#FF7300] px-7 text-sm font-semibold text-black transition-colors">
                Start a Project
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Dark Accordion Cards */}
        <div className="lg:col-span-7 flex flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl bg-[#18181b] text-white shadow-sm transition-all duration-300 hover:bg-[#1f1f23]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-normal tracking-tight text-neutral-100">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen ? "rotate-45 text-[#FF7300]" : "rotate-0 text-neutral-400"
                    }`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>

                {/* Smooth Animated Height & Opacity Collapse/Expand */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 pt-0 sm:px-6 sm:pb-7">
                      <p className="text-sm sm:text-base leading-relaxed text-neutral-400 border-t border-white/10 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
