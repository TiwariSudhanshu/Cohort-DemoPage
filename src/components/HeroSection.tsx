function HeroSection() {
  return (
    <section
      id="home"
      className="relative mt-[6vmax] pt-[1.5vmax] min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000000, #271A34, #000000)",
      }}
    >
      {/* Background Elements */}
      <img
        src="/hero1.png"
        alt="hero"
        className="absolute top-35 left-62 z-[1] scale-[0.8]"
      />
      <img
        src="/hero2.png"
        alt="hero"
        className="absolute top-66 left-20 z-[1] scale-[0.8]"
      />
      <img
        src="/hero3.png"
        alt="hero"
        className="absolute left-20 z-[1] scale-[0.8]"
      />
      <img
        src="/hero4.png"
        alt="hero"
        className="absolute right-[-10] top-40 z-[1] scale-[0.8]"
      />
      <img
        src="/hero5.png"
        alt="hero"
        className="absolute left-80 top-75 z-[1] scale-[0.8]"
      />
      <img
        src="/hero5.png"
        alt="hero"
        className="absolute right-70 top-80 z-[1] scale-[0.8]"
      />
      <img
        src="/hero6.png"
        alt="hero"
        className="absolute top-0 right-80 z-[1] scale-[0.8]"
      />
      <img
        src="/hero7.png"
        alt="hero"
        className="absolute top-0 left-80 z-[1] scale-[0.8]"
      />
      <img
        src="/hero8.png"
        alt="hero"
        className="absolute top-10 left-10 z-[1] scale-[0.8]"
      />
      <div className="absolute top-30 left-68 w-4 h-4 bg-purple-500 rounded-full glow-orb" />
      <div className="absolute top-18 right-23 w-6 h-6 bg-purple-400 rounded-full glow-orb" />
      <div className="absolute bottom-75 left-88 w-3 h-3 bg-purple-400 rounded-full glow-orb" />
      <div className="absolute bottom-66 right-84 w-5 h-5 bg-purple-500 rounded-full glow-orb" />

      <div className="container mx-auto px-4 text-center z-10 mt-[5vmax]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
          The complete community platform for{" "}
          <span className="text-purple-400">Businesses!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Build, Engage, and Monetize Your Community - All in One Platform.
        </p>

        <img
          src="/vector 1.png"
          alt="vector"
          className="absolute left-0 top-30 "
        />

        <div className="relative mx-auto mb-10">
          <img
            src="/hero-feed.png"
            alt="App Feed UI"
            className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg"
          />
        </div>
        <img
          src="/vector 2.png"
          alt="vector"
          className="absolute right-18 top-20"
        />

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibent transition duration-300 shadow-lg">
          Get Started for Free
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
