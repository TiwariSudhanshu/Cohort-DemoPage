function HeroSection() {
 return (
    <section
       id="home"
       className="relative mt-[5vmax] min-h-screen flex items-center justify-center overflow-hidden"
       style={{
         background: 'linear-gradient(to bottom, #000000, #271A34, #000000)'
       }}
     >
       <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full glow-orb" />
       <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full glow-orb" />
       <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-300 rounded-full glow-orb" />
       <div className="absolute bottom-20 right-1/4 w-5 h-5 bg-purple-500 rounded-full glow-orb" />
       <div className="container mx-auto px-4 text-center z-10 mt-[5vmax]">
         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
           The complete community platform for{" "}
           <span className="text-purple-400">Businesses!</span>
         </h1>
         <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
           Build, Engage, and Monetize Your Community - All in One Platform.
         </p>
        
       <img src="/vector 1.png" alt="vector"  className="absolute left-0"/>

         <div className="relative mx-auto mb-10">
           <img
             src="/hero-feed.png"
             alt="App Feed UI"
             className="w-full max-w-4xl mx-auto shadow-2xl rounded-lg"
           />
         </div>
               <img src="/vector 2.png" alt="vector" className="absolute right-10 top-20" />

         <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibent transition duration-300 shadow-lg">
           Get Started for Free
         </button>
       </div>
     </section>
 )
}

export default HeroSection