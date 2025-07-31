"use client";
import Image from "next/image";
import { useState } from "react";

export default function CohortsFeaturesSection() {
   const [active, setActive] = useState<"creators" | "users">("creators");
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background gradients */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[720px] rounded-[999px] opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(120, 40, 255, 0.35) 0%, rgba(120, 40, 255, 0.12) 45%, rgba(120, 40, 255, 0.0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-64 top-40 h-[620px] w-[880px] -rotate-12 rounded-[999px] opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(120, 40, 255, 0.28) 0%, rgba(120, 40, 255, 0.1) 45%, rgba(120, 40, 255, 0.0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-28">
        <div className="mb-6 flex justify-center">
          <span className="rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-semibold tracking-wider text-zinc-300 ring-1 ring-zinc-700/60">
            FEATURES
          </span>
        </div>

        <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl">
          What can you do on{" "}
          <span className="relative inline-block">
            Cohorts?
            <span className="absolute -bottom-1 left-0 block h-1 w-full rounded-full bg-purple-500 md:-bottom-2 md:h-1.5" />
          </span>
        </h2>

           <div className="mb-20 flex justify-center gap-3">
      <button
        type="button"
        className={active === "creators" ? "rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-900/30 ring-1 ring-purple-500/50" : "rounded-full bg-zinc-800 px-5 py-2 text-sm font-medium text-white ring-1 ring-zinc-700"}
        onClick={() => setActive("creators")}
        aria-pressed={active === "creators"}
      >
        Creators
      </button>
      <button
        type="button"
        className={active === "users" ? "rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-purple-900/30 ring-1 ring-purple-500/50" : "rounded-full bg-zinc-800 px-5 py-2 text-sm font-medium text-white ring-1 ring-zinc-700"}
        onClick={() => setActive("users")}
        aria-pressed={active === "users"}
      >
        Users
      </button>
    </div>

        {/* Create Community Section */}
       <div className="relative z-10 mb-28 mt-30 flex flex-col items-center md:mb-40 md:flex-row">
  {/* Background SVG */}
  <svg 
    className="absolute inset-0 w-full h-full -z-20" 
    viewBox="0 0 1200 600" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Flowing curved shapes */}
    <path 
      d="M-100 200C200 150 400 250 600 200C800 150 1000 250 1300 200L1300 0L-100 0Z" 
      fill="url(#gradient1)" 
      opacity="0.3"
    />
    <path 
      d="M-100 350C200 300 400 400 600 350C800 300 1000 400 1300 350L1300 150L-100 150Z" 
      fill="url(#gradient2)" 
      opacity="0.2"
    />
    <path 
      d="M-100 500C200 450 400 550 600 500C800 450 1000 550 1300 500L1300 300L-100 300Z" 
      fill="url(#gradient3)" 
      opacity="0.15"
    />
    
    {/* Dotted circles */}
    <circle 
      cx="300" 
      cy="300" 
      r="220" 
      fill="none" 
      stroke="rgba(139, 92, 246, 0.2)" 
      strokeWidth="1" 
      strokeDasharray="4 8"
    />
    <circle 
      cx="300" 
      cy="300" 
      r="160" 
      fill="none" 
      stroke="rgba(139, 92, 246, 0.15)" 
      strokeWidth="1" 
      strokeDasharray="3 6"
    />
    
    {/* Gradients */}
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
        <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
        <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
        <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
        <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
      </linearGradient>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
        <stop offset="50%" stopColor="rgba(168, 85, 247, 0.15)" />
        <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
      </linearGradient>
    </defs>
  </svg>

  <div className="relative w-full md:w-1/2">
    <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-zinc-700/60 md:block" />
    
    <div className="absolute -top-6 left-[38%] z-20 hidden -translate-x-1/2 items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-black shadow-lg shadow-black/40 md:flex">
      <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
      <span>Create your community &amp; approve instantly</span>
    </div>
    
    <div className="relative z-10 mx-auto w-[85%] max-w-[460px] rounded-xl bg-white p-4 shadow-lg">
      <Image
        src="/Content.png"
        width={460}
        height={460}
        alt="Create Community Modal"
        className="relative z-10 w-full rounded-xl"
        priority
      />
    </div>
    
    <Image
      src="/Ellipse 5.png"
      width={44}
      height={44}
      alt="User 1"
      className="absolute -top-6 left-10 z-20 rounded-full border-2 border-white"
    />
    <Image
      src="/Ellipse 6.png"
      width={44}
      height={44}
      alt="User 2"
      className="absolute top-14 -left-3 z-20 rounded-full border-2 border-white"
    />
    <Image
      src="/Ellipse 7.png"
      width={44}
      height={44}
      alt="User 3"
      className="absolute -bottom-3 right-8 z-20 rounded-full border-2 border-white"
    />
  </div>
  
  <div className="w-full px-2 pt-10 md:w-1/2 md:px-12 md:pt-0">
    <h3 className="mb-4 text-2xl font-bold md:text-3xl">
      Create Your Own Community{" "}
      <span className="text-purple-500">Space!</span>
    </h3>
    <p className="max-w-xl text-zinc-300">
      Launch a brand-new community in under 4 minutes!
      <br />
      Just name it, pick your type, and you're ready to bring people in
      — no tech, no waiting.
    </p>
  </div>
</div>
        {/* Engage Members Section */}
        <div className="relative z-10 flex flex-col items-center gap-16 md:flex-row">
          <div className="w-full px-2 md:w-1/2 md:px-12">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Engage Members{" "}
              <span className="text-purple-500">Effortlessly!</span>
            </h3>
            <p className="max-w-xl text-zinc-300">
              Start real conversations, not just content drops!
              <br />
              Post updates, polls, media, and more to keep your community active
              and connected.
            </p>
          </div>

          <div className="relative w-full md:w-1/2">
            <Image
              src="/Group 57.png"
              width={640}
              height={480}
              alt="Laptop View"
              className="w-[88%] rounded-xl md:w-[92%]"
            />

            <div className="absolute -top-6 left-6 z-20 rounded-xl bg-white px-4 py-2 text-[13px] font-semibold text-black shadow-lg shadow-black/30">
              <div className="flex gap-8">
                <div>
                  <span className="text-purple-600">2568</span>
                  <br />
                  <span className="text-[11px] font-medium text-zinc-600">
                    Total Members
                  </span>
                </div>
                <div>
                  <span className="text-purple-600">1654</span>
                  <br />
                  <span className="text-[11px] font-medium text-zinc-600">
                    Active Members
                  </span>
                </div>
              </div>
            </div>

            <Image
              src="/Locked.png"
              width={320}
              height={240}
              alt="Members box"
              className="absolute -bottom-10 right-0 z-20 w-[260px] rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Host Live Events Section */}
      <div className="relative mx-20 z-10 mt-28 grid grid-cols-1 items-center gap-12 md:mt-32 md:grid-cols-2">
        <svg
          className="pointer-events-none absolute -left-24 -top-20 -z-10 h-[360px] w-[900px]"
          viewBox="0 0 900 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 340C150 190 340 140 520 160c90 10 170-10 260-120"
            stroke="#6D28D9"
            strokeOpacity="0.22"
            strokeWidth="160"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative w-full md:pl-6">
          <Image
            src="/img.png"
            width={640}
            height={420}
            alt="Person on a call"
            className="mx-auto w-[90%] max-w-[560px] rounded-2xl shadow-xl"
            priority
          />

          <Image
            src="/group%2017.png"
            width={180}
            height={72}
            alt="Schedule a call"
            className="absolute left-12 -top-6 z-30 w-[176px] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          />

          <Image
            src="/Calendar.png"
            width={260}
            height={300}
            alt="Calendar"
            className="absolute -top-10 left-1/2 z-30 w-[240px] -translate-x-1/2 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          />

          <Image
            src="/vc.png"
            width={360}
            height={240}
            alt="Video call UI"
            className="absolute -bottom-16 -left-10 z-30 w-[340px] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          />
        </div>

        <div className="w-full px-2 md:px-10">
          <h3 className="mb-4 text-[28px] font-extrabold leading-tight md:text-[36px]">
            Host Live Events and{" "}
            <span className="text-purple-500">Gatherings!</span>
          </h3>
          <p className="max-w-[560px] text-zinc-300">
            Run live sessions, Q&amp;As, and community calls – directly inside
            your space. No Zoom links. No third‑party tools. Just click and
            connect.
          </p>
        </div>
      </div>

      {/* Share Exclusive Content Section */}
      <div className="relative z-10 mt-28 mx-20 grid grid-cols-1 items-center gap-12 md:mt-32 md:grid-cols-2">
        <svg
          className="pointer-events-none absolute -left-24 top-[-60px] -z-10 h-[420px] w-[1400px]"
          viewBox="0 0 1400 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 370c240-220 560-220 800-120 160 70 260 40 400-120"
            stroke="#6D28D9"
            strokeOpacity="0.2"
            strokeWidth="140"
            strokeLinecap="round"
          />
        </svg>

        <div className="w-full px-2 md:px-8">
          <h3 className="mb-4 text-[28px] font-extrabold leading-tight md:text-[36px]">
            Share Exclusive Content{" "}
            <span className="text-purple-500">Securely!</span>
          </h3>
          <p className="max-w-[560px] text-zinc-300">
            Upload and organise your premium content – Videos &amp; courses –
            with built‑in access control and no content leaks.
          </p>
        </div>

        <div className="relative w-full min-h-[360px]">
          <Image
            src="/frame3.png"
            width={560}
            height={340}
            alt="Course content card with progress"
            className="absolute right-8 bottom-0 w-[520px] max-w-[92%] rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.45)]"
            priority
          />

          <Image
            src="/Frame 4.png"
            width={320}
            height={380}
            alt="Module 1 list"
            className="absolute -right-10 -top-10 z-20 w-[300px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          />

          <svg
            className="absolute right-[140px] top-[130px] z-10 h-16 w-28"
            viewBox="0 0 112 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 58c42-34 66-38 100-44"
              stroke="#7C3AED"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M96 8l13 6-9 11"
              stroke="#7C3AED"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Leaderboards Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-y-12 gap-x-16 md:grid-cols-2">
            <div className="relative flex w-full justify-center md:justify-start">
              <Image
                src="/leaderboard.png"
                width={480}
                height={360}
                alt="Leaderboard"
                className="w-[360px] md:w-[420px] rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.45)]"
                priority
              />
              <Image
                src="/expense.png"
                width={170}
                height={82}
                alt="Total points"
                className="absolute -top-10 left-6 md:left-10 w-[168px] rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
              />
            </div>

            <div className="relative w-full max-w-xl md:pl-2">
              <svg
                className="pointer-events-none absolute -left-24 top-6 -z-10 h-40 w-40 md:-left-32 md:top-10"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 150c40-60 110-60 180-60"
                  stroke="#7C3AED"
                  strokeOpacity="0.22"
                  strokeWidth="6"
                />
                <path
                  d="M10 170c50-70 120-70 180-70"
                  stroke="#7C3AED"
                  strokeOpacity="0.14"
                  strokeWidth="6"
                />
                <path
                  d="M10 190c60-80 130-80 180-80"
                  stroke="#7C3AED"
                  strokeOpacity="0.10"
                  strokeWidth="6"
                />
              </svg>

              <h3 className="mb-2 text-[28px] font-extrabold leading-tight text-white md:text-[32px]">
                Inspire Participation with <br className="hidden md:block" />
                Leaderboards!
              </h3>
              <p className="text-[15px] leading-relaxed text-zinc-300 md:text-base">
                Turn your top members into ambassadors.
                <br className="hidden md:block" />
                Use gamification and leaderboard systems to reward activity,
                loyalty, and contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 md:py-24">
        <svg
          className="pointer-events-none absolute inset-x-0 top-10 -z-10 hidden h-[240px] w-full md:block"
          viewBox="0 0 1200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 200c180-80 360-120 560-80s280 20 520-80"
            stroke="#6D28D9"
            strokeOpacity="0.08"
            strokeWidth="140"
            strokeLinecap="round"
          />
        </svg>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-y-12 gap-x-16 md:grid-cols-2">
            <div className="w-full">
              <h3 className="mb-3 text-[28px] font-extrabold leading-tight md:text-[32px]">
                Monetise Your Community,{" "}
                <span className="text-purple-500">Your Way!</span>
              </h3>
              <p className="max-w-[520px] text-[15px] text-zinc-300 md:text-base">
                Charge for memberships, content, or events — or earn passively
                through native ads. With Cohorts App, you choose how to monetise
                without giving up control.
              </p>
            </div>

            <div className="relative w-full">
              <Image
                src="/monetization.png"
                width={440}
                height={300}
                alt="Monetisation card"
                className="ml-auto w-[400px] max-w-[95%] rounded-2xl shadow-[0_14px_44px_rgba(0,0,0,0.45)]"
                priority
              />
              <Image
                src="/analysis.png"
                width={260}
                height={160}
                alt="Analysis chart"
                className="absolute -top-16 right-8 z-20 w-[250px] rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.4)]"
              />
              <Image
                src="/invoice.png"
                width={160}
                height={84}
                alt="Revenue summary"
                className="absolute -bottom-10 right-2 z-20 w-[160px] rounded-xl shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
