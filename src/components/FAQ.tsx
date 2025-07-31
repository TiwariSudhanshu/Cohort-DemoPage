"use client";
import { useState } from "react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Cohorts?",
      answer:
        "Cohorts is a platform that allows creators, coaches, and brands to build, engage, and monetize their communities through customizable features and tools.",
    },
    {
      question: "How do I create a community on Cohorts?",
      answer:
        "Creating a community is simple! Sign up, pick your community name and category, and you're off. Everything else is plug-and-play.",
    },
    {
      question:
        "What payment options do you offer for the Plus and Premium plans?",
      answer:
        "We support cards, Apple Pay, Google Pay, and even PayPal. Whether it's subs, tiers, or one-time payments — you got it.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes! You can upgrade, downgrade, or cancel anytime. Zero friction.",
    },
    {
      question: "Is my content secure on Cohorts?",
      answer:
        "Absolutely. We use enterprise-grade security. Everything’s encrypted and locked down.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "Docs, videos, live chat, and dedicated managers if you’re big. We’ve got your back.",
    },
  ];
  return (
    <section className="py-24 bg-black text-white mt-[5vmax]">
      {/* Top Badge */}
      <div className="text-center mb-6">
        <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
          FAQ
        </span>
      </div>

      {/* Heading with underline */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 text-white">
        Frequently{" "}
        <span className="relative inline-block">
          <span className="relative z-10">Asked Questions</span>
          <svg
            viewBox="0 0 300 30"
            className="absolute left-0 bottom-[-8px] w-full h-6 z-0"
            preserveAspectRatio="none"
          >
            <path
              d="M5 20 C60 35, 240 0, 295 20"
              stroke="#7e22ce"
              strokeWidth="12"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h2>

      {/* Accordion Section */}
      <div className="max-w-6xl mx-auto px-4 space-y-3">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-white/40 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <span className="text-base md:text-lg font-medium">
                {faq.question}
              </span>
              <span className="text-2xl font-semibold leading-none">
                {openFaq === index ? "−" : "+"}
              </span>
            </button>

            {openFaq === index && (
              <div className="px-6 pb-4 text-sm text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
