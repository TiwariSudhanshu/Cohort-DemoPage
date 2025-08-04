import {
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Branding & Socials */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <img src="cohort-logo.png" alt="logo" className="h-9 w-auto" />
            <h3 className="text-xl font-bold font-poppins">COHORTS APP</h3>
          </div>

          <p className="text-sm text-white/70 mb-4 max-w-sm font-poppins">
            Cohorts App is the all-in-one platform to build powerful online
            communities, host content, and monetize without limits!
          </p>

          <div className="flex space-x-4 text-white/60 mb-6">
            <a
              href="https://www.instagram.com/cohortsapp/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/cohortsapp"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/104463309/admin/dashboard/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@Cohortsapp/videos"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-6 text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 opacity-30 break-words">
            COHORTS
          </h2> */}
        </div>

       

        {/* Support */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4"></h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#" className="hover:text-white">
                
              </a>
            </li>
          </ul>
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

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4">Contact us</h4>
          <div className="text-sm space-y-2 text-white/80 mb-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:support@cohortsapp.com" className="hover:text-white">
                support@cohortsapp.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-35 lg:pr-37 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
        <p className="text-center md:text-left">
          © 2025 – OYM LABS PRIVATE LIMITED, ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/terms" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="/policies" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
