"use client"
function EmpoweringCommunities() {
  return (
     <section className="py-24 bg-black bg-wavy-pattern relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          {/* Top Badge */}
          <div className="text-xs font-semibold  bg-purple-500/20 text-purple-300 px-4 py-1 inline-block rounded-full uppercase tracking-wider mb-4">
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
  )
}

export default EmpoweringCommunities
