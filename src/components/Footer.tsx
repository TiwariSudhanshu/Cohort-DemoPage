import { Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-purple-500/20 text-white font-sans">
      <div className="container mx-auto px-10 py-12 grid md:grid-cols-5 gap-10">
        {/* Branding & Social Links */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-3">
            <img src="cohort-logo.png" alt="logo" className="h-9 w-auto" />
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              COHORTS APP
            </h3>
          </div>

          <p
            className="text-sm text-white/70 mb-4 max-w-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Cohorts App is the all-in-one platform to build powerful online
            communities, host content, and monetize without limits!
          </p>

          <div className="flex space-x-4 text-white/60 mb-6">
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

          <h2 className="text-7xl font-bold mt-6 text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 opacity-30">
            COHORTS
          </h2>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4">Support Us</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Resources & Contact */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-white/80 mb-4">
            <li>
              <a href="#" className="hover:text-white">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>

          <div className="text-sm space-y-1 text-white/80 mb-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@cohortsapp.com" className="hover:text-white">
                info@cohortsapp.com
              </a>
            </div>
          </div>

          <button className="mt-3 w-[201px] h-[56px] bg-gradient-to-r from-[#7816C9] to-[#25063F] text-white text-sm font-medium rounded-full transition-all hover:opacity-90">
            Help Center
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
        <p>© 2025 – OYM LABS PRIVATE LIMITED, ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
