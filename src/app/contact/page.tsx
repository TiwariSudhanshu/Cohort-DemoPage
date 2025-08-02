"use client";


import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBG from "@/components/ui/heroBG";
import Underline from "@/components/ui/Underline";

export default function Contact() {
       const contacts = [
    {
      icon: "/contact-icon-1.png",
      title: "Call Us",
      description: "Call our team Mon–Fri from 8am to 10pm",
      detail: "+91 7892921796",
      link: "tel:+917892921796",
    },
    {
      icon: "/contact-icon-2.png",
      title: "Mail Us",
      description: "We’re here to help",
      detail: "support@cohortsapp.com",
      link: "mailto:support@cohortsapp.com",
    },
    {
      icon: "/contact-icon-3.png",
      title: "Chat to our Team",
      description: "Speak to our friendly team",
      detail: "Chat Now →",
      link: "#", // Replace with actual chat link
    },
  ];
  return (
    <div>
      <Header/>
      <section
      id="contact"
      className="relative mt-[6vmax] pt-[1.5vmax] min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000000, #271A34, #000000)",
      }}
    >
      {/* Decorative background (dots, orbits, etc.) */}
      <HeroBG />

      <div className="container mx-auto px-4 text-center z-30 mt-[5vmax]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
          Got a question? Reach out to us!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          We're always here for creators, community builders, and changemakers like you.
        </p>
        <a
          href="mailto:support@cohortsapp.com"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg inline-block"
        >
          Write to us!
        </a>
      </div>
     
    </section>
    <section>
         <div className="text-center">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Contact Us
          </span>
        </div>
          <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl text-white">
                      <Underline>Get In Touch</Underline>
                  <span className="relative inline-block w-fit ml-3">
                    with us
                  </span>
                </h2>
    </section>
        <section
      className="relative py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-b from-black via-[#271A34] to-black"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/contact.png"
          alt="Contact Visual"
          className="max-w-[500px] w-full h-auto"
        />
      </div>

      {/* Right Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 max-w-xl bg-black/30 backdrop-blur-sm p-8 rounded-xl space-y-6"
      >
        <div>
          <label className="block text-white font-semibold mb-1">Full Name</label>
          <div className="flex items-center bg-[#1A1A1A] px-4 py-3 rounded-lg">
            <span className="text-gray-400 mr-3">👤</span>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent text-white w-full focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">Email</label>
          <div className="flex items-center bg-[#1A1A1A] px-4 py-3 rounded-lg">
            <span className="text-gray-400 mr-3">✉️</span>
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-white w-full focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">Phone Number</label>
          <div className="flex items-center bg-[#1A1A1A] px-4 py-3 rounded-lg">
            <span className="text-gray-400 mr-3">📱</span>
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent text-white w-full focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">Message</label>
          <div className="flex items-start bg-[#1A1A1A] px-4 py-3 rounded-lg">
            <span className="text-gray-400 mr-3 mt-1">💬</span>
            <textarea
              rows={4}
              placeholder="Message"
              className="bg-transparent text-white w-full focus:outline-none resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-800 transition"
        >
          Send Message!
        </button>
      </form>
    </section>
     <section className="py-16 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="group bg-gradient-to-b from-[#151515] to-[#1e102e] border border-[#272727] rounded-2xl p-6 hover:shadow-lg transition duration-300 flex flex-col gap-4"
          >
            <div className="w-12 h-12">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              <p className="text-white mt-2 font-semibold">
                {item.detail}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
      <Footer/>
    </div>
  )
}

