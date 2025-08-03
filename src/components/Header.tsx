"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={()=>{router.push("/")}}>
   <div className="flex items-center space-x-2">
          <img src="cohort-logo.png" alt="logo" className="h-9 w-auto" />
        </div>
        </button>
     

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-white hover:text-purple-400 transition-colors">Home</a>
          <a href="/about" className="text-white hover:text-purple-400 transition-colors">About Us</a>
          <a href="/contact" className="text-white hover:text-purple-400 transition-colors">Contact Us</a>
        </nav>

        {/* Sign Up & Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="border border-white text-white px-4 py-1 rounded-[10px] transition-colors">
            Sign Up
          </button>

          {/* Hamburger icon for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 border-t border-purple-500/20 px-6 py-4 space-y-4">
          <a href="/" className="block text-white hover:text-purple-400">Home</a>
          <a href="/about" className="block text-white hover:text-purple-400">About Us</a>
          <a href="/contact" className="block text-white hover:text-purple-400">Contact Us</a>
        </div>
      )}
    </header>
  );
}

export default Header;
