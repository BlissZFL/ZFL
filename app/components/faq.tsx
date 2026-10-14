"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do you only build websites, or also AI automation?",
    answer:
      "Both, same team. Most clients start with one and add the other once they've seen how we work.",
  },
  {
    question: "How is this different from a typical agency?",
    answer:
      'Most agencies template a site, or call a chatbot "AI automation." We custom-code every site and build systems that handle real operational work - from research to reporting - not human conversations.',
  },
  {
    question: "Do you build the AI systems yourselves?",
    answer:
      "We scope, design, and manage every system end to end. Delivery runs through our technical partner network, so you get senior-level work without carrying an in-house AI team.",
  },
  {
    question: "How fast can we launch a website?",
    answer:
      "Most custom sites ship in 2–4 weeks from kickoff. You see the full design before we write a line of code.",
  },
  {
    question: "How fast can a system go live?",
    answer:
      "Depends on complexity — most go live within a couple of weeks of the audit.",
  },
  {
    question: "What does it cost?",
    answer:
      "Every project is scoped and quoted after the audit. No flat packages — no two businesses lose time the same way.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We don't disappear. Websites get support and updates. Systems get monitored and adjusted as your data and business change.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-white text-neutral-900 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 selection:bg-black selection:text-white border-t border-neutral-100 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title, Subtitle & Email Pin */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.12]">
                Common Questions,
                <br />
                Straight Answers
              </h2>

              <p className="mt-5 text-sm sm:text-base text-neutral-500 font-normal leading-relaxed max-w-md">
                Clear, zero-fluff answers on how we scope, design, build and
                support your product, from the first call to the last deploy.
              </p>
            </div>

            {/* Bottom Email Box with Stem Line (matching screenshot) */}
            <div className="mt-12 sm:mt-16 lg:mt-24 pt-4 flex flex-col items-start">
              {/* Vertical Guide Line */}
              <div className="w-[1.5px] h-9 bg-neutral-900 ml-3" />

              {/* Email Badge */}
              <Link
                href="mailto:sanaf@zerofrictionlab.com"
                className="inline-flex items-center gap-2 bg-black text-white px-3.5 py-2 text-xs font-mono font-medium transition-opacity hover:opacity-90 shadow-sm"
              >
                {/* Envelope Icon */}
                <svg
                  className="h-3.5 w-3.5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l9.518 7.713 9.518-7.713v11.817h-19.036z" />
                </svg>
                <span>sanaf@zerofrictionlab.com</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Dashed Accordion Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  onClick={() => toggleAccordion(index)}
                  className={`border border-dashed transition-colors duration-200 cursor-pointer select-none bg-[#fbfbfb] hover:bg-[#f8f8f8] ${
                    isOpen ? "border-neutral-400" : "border-neutral-300"
                  }`}
                >
                  {/* Accordion Question Row */}
                  <div className="flex items-center justify-between p-5 sm:p-6 gap-4">
                    <h3 className="text-sm sm:text-base font-medium text-neutral-900 tracking-tight">
                      {item.question}
                    </h3>

                    {/* Plus / Minus Indicator */}
                    <span className="flex h-5 w-5 items-center justify-center shrink-0 text-neutral-500 transition-transform duration-200">
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.75"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Accordion Answer Content */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out px-5 sm:px-6 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6"
                        : "grid-rows-[0fr] opacity-0 pb-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-neutral-600 font-normal leading-relaxed pt-2 border-t border-dashed border-neutral-200/80">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
