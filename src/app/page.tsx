"use client";

import { useState } from "react";
     import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import CohortsFeaturesSection from "@/components/CohortsFeatureSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Build");
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
    question: "What payment options do you offer for the Plus and Premium plans?",
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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white">Cohorts</h1>
            <span className="text-sm text-purple-400">App</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="border-white text-white px-6 py-2 rounded-lg transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative mt-[5vmax] min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900/20 via-black to-black overflow-hidden"
      >
        {/* Floating Elements */}
        <img
          src="/connected.png"
          className="absolute top-[5%] left-[10%] w-36 animate-float"
        />
        <img
          src="/notification-31.png"
          className="absolute top-[8%] left-[24%] w-10 animate-ping-slow"
        />
        <img
          src="/heart-1009.png"
          className="absolute top-[20%] left-[18%] w-10 animate-float"
        />
        <img
          src="/profile-avatar1.png"
          className="absolute top-[30%] left-[22%] w-12 rounded-full animate-bounce-slow"
        />
        <img
          src="/idea-lightbulb.png"
          className="absolute top-[15%] right-[10%] w-10 animate-float"
        />
        <img
          src="/profile-avatar2.png"
          className="absolute top-[28%] right-[16%] w-12 rounded-full animate-bounce"
        />
        <img
          src="/notification-200.png"
          className="absolute top-[6%] right-[18%] w-12 animate-ping-slow"
        />
        <img
          src="/notification-31.png"
          className="absolute bottom-[10%] left-[8%] w-10 animate-float"
        />
        <img
          src="/rocket-icon.png"
          className="absolute bottom-[8%] right-[6%] w-10 animate-bounce"
        />

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full glow-orb" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full glow-orb" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-300 rounded-full glow-orb" />
        <div className="absolute bottom-20 right-1/4 w-5 h-5 bg-purple-500 rounded-full glow-orb" />

        {/* Content */}
        <div className="container mx-auto px-4 text-center z-10 mt-[5vmax]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The complete community platform for{" "}
            <span className="text-purple-400">Businesses!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Build, Engage, and Monetize Your Community - All in One Platform.
          </p>

          {/* Central App Mockup */}
          <div className="relative mx-auto mb-10">
            <img
              src="/hero-feed.png"
              alt="App Feed UI"
              className="w-full max-w-4xl mx-auto shadow-2xl rounded-lg"
            />
          </div>

          {/* CTA Button */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Creators Section */}
      <section className="py-20 bg-black bg-wavy-lines">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Creators and Communities on{" "}
            <span className="text-purple-400 underline">Cohorts</span>
          </h2>

          <img src="/frame.png" alt="" />
        </div>
      </section>

      {/* Empowering Communities Section */}
      <section className="py-24 bg-black bg-wavy-pattern relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          {/* Top Badge */}
          <div className="text-xs font-semibold text-white bg-purple-500/20 text-purple-300 px-4 py-1 inline-block rounded-full uppercase tracking-wider mb-4">
            Built For This
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 relative inline-block">
            Empowering Every Kind of{" "}
            <span className="text-white underline decoration-purple-500 decoration-4 underline-offset-[6px]">
              Community!
            </span>
          </h2>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Feature 1 - Large card on left (span 2 cols) */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#2B0A3D] to-[#1E0030] rounded-xl p-8 text-left shadow-lg text-white">
              <h3 className="text-2xl font-semibold mb-4">
                Community OS - Built for Depth, Not Just Broadcast
              </h3>
              <p className="text-gray-300">
                Real communities are more than comments. Host live events, run
                deep discussions, and create spaces where your people engage –
                not just scroll.
              </p>
            </div>

            {/* Feature 2 - Monetisation */}
            <div className="bg-white rounded-xl p-8 text-left shadow-md">
              <div className="text-black text-xl font-semibold mb-3">
                Monetisation
              </div>
              <p className="text-gray-700 text-sm">
                Coins, events, memberships – without the algorithm middleman. We
                let you earn from what actually matters: connection, not clout.
              </p>
            </div>

            {/* Feature 3 - Course Hosting */}
            <div className="bg-gradient-to-br from-[#2B0A3D] to-[#1E0030] rounded-xl p-8 text-left text-white shadow-lg">
              <div className="text-xl font-semibold mb-3">
                Course Hosting with Community Built-In
              </div>
              <p className="text-gray-300 text-sm">
                Launch courses where learning is social, real-time, and
                feedback-driven.
              </p>
            </div>

            {/* Feature 4 - Brands */}
            <div className="bg-white rounded-xl p-8 text-left shadow-md">
              <div className="text-black text-xl font-semibold mb-3">
                Brands and Internet Startups
              </div>
              <p className="text-gray-700 text-sm">
                Create customer-led communities that fuel feedback loops,
                loyalty, and true product evangelism.
              </p>
            </div>

            {/* Feature 5 - Creator Economy */}
            <div className="bg-gradient-to-br from-[#2B0A3D] to-[#1E0030] rounded-xl p-8 text-left text-white shadow-lg">
              <div className="text-xl font-semibold mb-3">
                Designed for the Creator Economy 2.0
              </div>
              <p className="text-gray-300 text-sm">
                Beyond content – it’s connection that pays. We let you own your
                income, income, and future – all in one place.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      <CohortsFeaturesSection/>

      {/* 3 Pillars Section */}
 <section className="py-24 bg-black text-white relative">
  {/* Top Pillar Badge */}
  <div className="text-center mb-6">
    <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
      Pillars
    </span>
  </div>

  {/* Heading with Underline */}
  <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">
    The 3 Pillars of Powerful{" "}
    <span className="relative inline-block">
      <span className="z-10 relative">Communities</span>
      <span className="absolute left-0 right-0 bottom-0 h-2 bg-[#D946EF] rounded-full blur-sm z-0 -mb-1" />
    </span>
  </h2>

  {/* Tab Bar */}
  <div className="flex justify-center mb-12">
    <div className="flex rounded-full bg-gradient-to-r from-purple-500 to-purple-900 p-1 gap-1">
      {["Build", "Engage", "Monetize"].map((tab, idx) => (
        <button
          key={tab}
          className={`px-6 py-2 text-sm rounded-full font-medium transition-all ${
            tab === "Build"
              ? "bg-white text-black shadow-sm"
              : "text-white hover:bg-white/10"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>

  {/* Content Grid */}
  <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
    {/* Left Column */}
    <div className="space-y-10">
      <div className="border-l border-white/20 pl-4">
        <h3 className="text-lg font-semibold mb-1">4-Minute Launch Flow!</h3>
        <p className="text-gray-300 text-sm">
          Start your own branded community space in just a few clicks. No clutter, no friction.
        </p>
      </div>

      <div className="border-l border-white/20 pl-4">
        <h3 className="text-lg font-semibold mb-1">Multi-Format Content Hosting!</h3>
        <p className="text-gray-300 text-sm">
          Host videos, PDFs, modules, and discussions in one seamless place.
        </p>
      </div>
    </div>

    {/* Right Column */}
    <div className="space-y-10">
      <div className="border-l border-white/20 pl-4">
        <h3 className="text-lg font-semibold mb-1">Private Communities!</h3>
        <p className="text-gray-300 text-sm">
          Limit access to select members, teams, or internal circles – perfect for exclusivity.
        </p>
      </div>

      <div className="border-l border-white/20 pl-4">
        <h3 className="text-lg font-semibold mb-1">Free or Paid Access!</h3>
        <p className="text-gray-300 text-sm">
          Decide how your community lives: open to all or gated behind membership.
        </p>
      </div>
    </div>
  </div>
</section>

      <div className="flex justify-center">
      <img src="/frame2.png" alt="" />
      </div>

      {/* FAQ Section */}
     <section className="py-24 bg-black text-white">
  {/* Top Badge */}
  <div className="text-center mb-6">
    <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
      FAQ
    </span>
  </div>

  {/* Heading with underline */}
  <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
    Frequently{" "}
    <span className="relative inline-block">
      <span className="z-10 relative">Asked Questions</span>
      <span className="absolute left-0 right-0 bottom-0 h-2 bg-[#D946EF] rounded-full blur-sm z-0 -mb-1" />
    </span>
  </h2>

  {/* Accordion Section */}
  <div className="max-w-3xl mx-auto px-4 space-y-3">
    {faqData.map((faq, index) => (
      <div
        key={index}
        className="border border-white/10 rounded-lg overflow-hidden"
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


      {/* Footer */}


<footer className="bg-black border-t border-purple-500/20 text-white">
  <div className="container mx-auto px-4 py-12 grid md:grid-cols-5 gap-10">
    {/* Branding + Socials */}
    <div className="md:col-span-2">
      <h3 className="text-xl font-bold mb-3">COHORTS APP</h3>
      <p className="text-gray-400 text-sm mb-4 max-w-sm">
        Cohorts App is the all-in-one platform to build powerful online
        communities, host content, and monetize without limits!
      </p>
      <div className="flex space-x-4 text-gray-400">
        <a href="#" className="hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <Youtube className="w-5 h-5" />
        </a>
      </div>
      <h2 className="text-5xl font-extrabold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
        COHORTS
      </h2>
    </div>

    {/* Navigation */}
    <div>
      <h4 className="font-semibold text-sm mb-4">Navigate</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        <li>
          <a href="#" className="hover:text-white">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">About Us</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Contact Us</a>
        </li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h4 className="font-semibold text-sm mb-4">Support Us</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        <li>
          <a href="#" className="hover:text-white">Contact Us</a>
        </li>
      </ul>
    </div>

    {/* Resources + Contact */}
    <div>
      <h4 className="font-semibold text-sm mb-4">Resources</h4>
      <ul className="space-y-2 text-sm text-gray-400 mb-4">
        <li>
          <a href="#" className="hover:text-white">Community</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Contact</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </li>
      </ul>

      {/* Contact */}
      <div className="text-sm space-y-1 text-gray-400 mb-3">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a href="mailto:info@cohortsapp.com" className="hover:text-white">
            info@cohortsapp.com
          </a>
        </div>
      </div>
      <button className="mt-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-all">
        Help Center
      </button>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-800 mt-10 py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
    <p>© 2025 – OYM LABS PRIVATE LIMITED, ALL RIGHTS RESERVED.</p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="#" className="hover:text-white">Terms & Conditions</a>
      <a href="#" className="hover:text-white">Privacy Policy</a>
    </div>
  </div>
</footer>

    </div>
  );
}
