import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20 text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-5 gap-10">
        {/* Branding & Social Links */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-3">COHORTS APP</h3>
          <p className="text-gray-400 text-sm mb-4 max-w-sm">
            Cohorts App is the all-in-one platform to build powerful online
            communities, host content, and monetize without limits!
          </p>
          <div className="flex space-x-4 text-gray-400">
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
          <h2 className="text-5xl font-extrabold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            COHORTS
          </h2>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Support Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Resources & Contact */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400 mb-4">
            <li>
              <a href="#" className="hover:text-white">Community</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </li>
          </ul>

          <div className="text-sm space-y-1 text-gray-400 mb-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@cohortsapp.com" className="hover:text-white">
                info@cohortsapp.com
              </a>
            </div>
          </div>
          <button className="mt-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white text-sm font-medium px-5 py-2 rounded-full transition-all">
            Help Center
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 – OYM LABS PRIVATE LIMITED, ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}