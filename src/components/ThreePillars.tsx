import React from 'react'

function ThreePillars() {
  return (
    <>
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

      </>
  )
}

export default ThreePillars
