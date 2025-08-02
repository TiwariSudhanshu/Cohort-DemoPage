"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBG from "@/components/ui/heroBG";
import Underline from "@/components/ui/Underline";

export default function Policies() {
  return (
    <>
      <Header />
      <section
        className="relative mt-[6vmax] pt-[1.5vmax] min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #000000, #271A34, #000000)",
        }}
      >
        <HeroBG />

        <div className="container mx-auto px-4 text-center z-30 mt-[-10vmax]">
          <h1 className="text-3xl md:text-[44px] font-semibold text-white mb-6">
            Privacy & Cookies Policy
          </h1>

          <a
            href="mailto:dpo@cohorts.in"
            className="inline-block w-[200px] bg-[#7816C9]
            hover:bg-purple-700 text-white px-8 py-3 mt-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section>
        <div className="text-center">
          <span className="inline-block mb-8 bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Policies
          </span>
        </div>
        <h2 className="mb-10 text-center text-3xl font-bold md:text-5xl text-white">
          <Underline>Privacy & Cookies</Underline>
        </h2>
      </section>

      <section className="bg-black text-white px-6 md:px-15 py-20">
        <div className="max-w-6xl mx-auto space-y-6 font-[Inter] text-[15px] leading-[24px] tracking-wider">

          <p><strong>Effective Date:</strong> April 17, 2025<br />
          <strong>Last Updated:</strong> April 5, 2025</p>

          <p>
            OYM Labs Private Limited ("Cohorts", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, including our website and mobile applications (collectively, the “Services”).
          </p>

          <p>
            By using our Services, you agree to the collection and use of your information in accordance with this Privacy Policy.
          </p>

          <h2 className="font-semibold text-base">1. Information We Collect</h2>
          <p className="mt-2 font-medium">a. Personal Information:</p>
          <ul className="list-none mt-1 space-y-1">
            <li>- Name</li>
            <li>- Email address</li>
            <li>- Phone number</li>
            <li>- Profile photo</li>
            <li>- Payment information (via third-party providers)</li>
            <li>- Community and account details</li>
          </ul>

          <p className="mt-2 font-medium">b. Usage Data:</p>
          <ul className="list-none mt-1 space-y-1">
            <li>- Device information (browser, IP, OS)</li>
            <li>- Pages viewed and time spent</li>
            <li>- Clicks and user behavior</li>
            <li>- Community engagement metrics</li>
          </ul>

          <p className="mt-2 font-medium">c. User Content:</p>
          <p>- Posts, messages, files, and other data you share in communities</p>

          <p className="mt-2 font-medium">d. Third-Party Data:</p>
          <ul className="list-none mt-1 space-y-1">
            <li>- Information from social logins (Google, Facebook, etc.)</li>
            <li>- Data from integrated tools like Zoom, Google Meet, etc.</li>
          </ul>

          <h2 className="font-semibold text-base">2. How We Use Your Information</h2>
          <ul className="list-none mt-2 space-y-1">
            <li>- Provide and maintain the platform</li>
            <li>- Manage your account and preferences</li>
            <li>- Enable payments and subscriptions</li>
            <li>- Analyze and improve the user experience</li>
            <li>- Prevent fraud and maintain platform integrity</li>
            <li>- Send updates, newsletters, or support messages (opt-out anytime)</li>
          </ul>

          <h2 className="font-semibold text-base">3. Sharing of Information</h2>
          <p>
            We do <strong>not sell</strong> your data. While we have not built the complete infrastructure, multiple third-party service providers assist us in delivering the Services. We share your information with:
          </p>
          <ul className="list-none mt-2 space-y-1">
            <li>- <strong>Service providers:</strong> Payment gateways, email services, analytics, etc.</li>
            <li>- <strong>Community creators/admins:</strong> Limited profile info when you join their communities</li>
            <li>- <strong>Law enforcement/legal entities:</strong> If required under law or to enforce our Terms</li>
          </ul>

          <h2 className="font-semibold text-base">4. Data Security</h2>
          <p>
            We use encryption, secure servers, and access controls to protect your data. However, no system is 100% secure — please use strong passwords and be cautious with what you share.
          </p>

          <h2 className="font-semibold text-base">5. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-none mt-2 space-y-1">
            <li>- Access, correct, or delete your personal data</li>
            <li>- Object to processing or request data portability</li>
            <li>- Withdraw consent</li>
          </ul>
          <p className="mt-2">
            You can request this via <strong>support@cohorts.in</strong>. We'll respond within 30 days.
          </p>

          <h2 className="font-semibold text-base">6. Data Retention</h2>
          <p>
            We retain your data while your account is active and for legal or tax reasons afterward. We do not access your personal data without proper authorization, masking, or encryption.
          </p>

          <h2 className="font-semibold text-base">7. Children’s Privacy</h2>
          <p>
            Our platform is not for users under 13. If you believe a child has registered, contact us to remove the data.
          </p>

          <h2 className="font-semibold text-base">8. Changes to This Policy</h2>
          <p>
            We may update this policy and notify you of major changes. You’re encouraged to review it regularly and act accordingly.
          </p>

          <h2 className="font-semibold text-base">9. Contact Us</h2>
          <p>
            <strong>OYM Labs Private Limited</strong><br />
            Email: dpo@cohorts.in<br />
            Address: 851, Sathgalli, A Zone, Rajiv Nagar 3rd Stage,<br />
            Mysore, Karnataka, India – 570019.
          </p>

          <hr className="border-white/10 my-8" />

          <h2 className="font-semibold text-base">🍪 Cookies Policy</h2>
          <p><strong>Effective Date:</strong> April 17, 2025<br />
          <strong>Last Updated:</strong> April 5, 2025</p>

          <h2 className="font-semibold text-base">1. What Are Cookies?</h2>
          <p>
            Cookies are small files stored on your device. They help improve your experience and remember your preferences.
          </p>

          <h2 className="font-semibold text-base">2. Types of Cookies We Use</h2>
          <ul className="list-none mt-2 space-y-1">
            <li>- <strong>Essential:</strong> Login, navigation, basic features</li>
            <li>- <strong>Analytics:</strong> Google Analytics, usage tracking</li>
            <li>- <strong>Performance:</strong> Speed, functionality enhancements</li>
            <li>- <strong>Third-party:</strong> Zoom, Stripe, social logins</li>
          </ul>

          <h2 className="font-semibold text-base">3. Managing Cookies</h2>
          <p>
            You can block or delete cookies via your browser. Some platform features may stop working.
          </p>

          <h2 className="font-semibold text-base">4. Consent</h2>
          <p>
            By using our site, you consent to cookies. You may withdraw consent by changing browser settings.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
