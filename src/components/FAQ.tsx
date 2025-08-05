"use client";
import { useState } from "react";
import Underline from "./ui/Underline";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Cohorts App?",
      answer:
        "Cohorts App is an all-in-one online community platform to build, engage, and monetise your audience.",
    },
    {
      question: "How is Cohorts App different from other community platforms?",
      answer:
        "Unlike basic forums or group chats, Cohorts App offers monetisation, courses, leaderboards, and community ads - all in one place.",
    },
    {
      question: "Who can use the Cohorts App?",
      answer:
        "Creators, coaches, brands, and startups - anyone building a community online can use Cohorts App.",
    },
    {
      question: "Can I build both free and paid communities on Cohorts App?",
      answer:
        "Yes, you can create free or paid community spaces based on your audience strategy.",
    },
    {
      question: "How fast can I launch a community on Cohorts App?",
      answer:
        "You can create and launch a new community in under 4 minutes - no tech skills needed.",
    },

    {
      question: "Can I monetise my community without selling anything?",
      answer:
        "Absolutely - Cohorts App lets you earn through native community ads from relevant brands.",
    },
    {
      question: "What monetisation options does Cohorts App offer?",
      answer:
        "You can charge for memberships, courses, events, collabs, or enable ads inside your space.",
    },
    {
      question: "Is Cohorts App secure for my content and members?",
      answer:
        "Yes, we use enterprise-grade security to keep your content and community data protected.",
    },

    {
      question: "Does Cohorts App support course hosting?",
      answer:
        "Yes, you can upload, secure, and sell your courses directly inside your community.",
    },
    {
      question: "Do I need a large audience to start on Cohorts App?",
      answer:
        "Not at all - you can begin with just a few members and grow as you go.",
    },
    {
      question: "Is Cohorts App free to use?",
      answer:
        "Yes - it’s free unless you choose to monetise. We only charge when you start earning.",
    },
    {
      question: "Does the Cohorts App work on mobile?",
      answer:
        "Yes, Cohorts App is fully responsive - accessible on desktop and mobile browsers.",
    },
  ];

  return (
    <section className="pb-20 sm:py-24 bg-black text-white sm:mt-[5vmax] ">
      {/* Top Badge */}
      <div className="text-center mb-6">
        <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
          FAQ
        </span>
      </div>

      {/* Heading with underline */}
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-16 text-white">
        Frequently{" "}
        <span className="relative inline-block">
          <span className="relative z-10">
            <Underline>Asked Questions</Underline>
          </span>
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
