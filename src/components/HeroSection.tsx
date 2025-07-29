
function HeroSection() {
  return (
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
  )
}

export default HeroSection
