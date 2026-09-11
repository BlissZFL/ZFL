"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do you ensure our data remains secure?",
    answer:
      "We utilize SOC2-compliant local vector databases and on-premise LLM hosting to ensure your proprietary data never leaves your infrastructure.",
  },
  {
    question: "What is the typical deployment timeline?",
    answer:
      "Most standard agent workflows and integrations deploy within 2 to 4 weeks, with dedicated staging and benchmark evaluations prior to production.",
  },
  {
    question: "Can we integrate with our existing CRM?",
    answer:
      "Yes, we offer native bi-directional connectors for HubSpot, Salesforce, Zoho, Zendesk, and custom internal REST/GraphQL APIs.",
  },
  {
    question: "Do you provide model fine-tuning?",
    answer:
      "Absolutely. We train domain-adapted LoRA adapters and fine-tune open-weight or proprietary foundational models using your historical datasets.",
  },
  {
    question: "How do you calculate ROI for automation?",
    answer:
      "We quantify throughput gains, manual hour reduction, error elimination, and customer response latency improvements via real-time dashboard analytics.",
  },
  {
    question: "Do we own the custom code you build?",
    answer:
      "Yes. All bespoke neural pipelines, tooling, and integrations developed for your project are 100% owned by your organization with zero vendor lock-in.",
  },
  {
    question: "What models do you specialize in?",
    answer:
      "We work extensively with Claude 3.7, GPT-4o, DeepSeek, Llama 3, and specialized open-source embeddings and multimodal architectures.",
  },
];

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
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (Sticky info & CTA) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full lg:sticky lg:top-28">
          <div>
            {/* Tag Badge */}
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-16 rounded-full border-2 border-[#FF7300]" />
              <div className="h-px w-20 bg-neutral-300" />
              <span className="text-[11px] font-mono font-semibold tracking-widest text-neutral-500 uppercase">
                COMMON QUERIES
              </span>
            </div>

            {/* Description */}
            <p className="mt-8 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
              Find answers to technical specifications, deployment timelines, and
              our data security protocols.
            </p>

            {/* Main Headline */}
            <h2 className="mt-8 sm:mt-4 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-950 leading-[1.08]">
              Everything you need to know about our AI.
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
                Contact Support
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
