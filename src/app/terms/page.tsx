"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBG from "@/components/ui/heroBG";
import Underline from "@/components/ui/Underline";

export default function Terms() {
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
            Terms and Conditions
          </h1>  

          <a
            href="mailto:support@cohortsapp.com"
            className="inline-block w-[200px]  bg-[#7816C9]
             hover:bg-purple-700 text-white px-8 py-3 mt-3  rounded-lg text-lg font-semibold transition duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
      <section>
        <div className="text-center">
          <span className="inline-block mb-8 bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Terms
          </span>
        </div>
        <h2 className="mb-10 text-center text-3xl font-bold md:text-5xl text-white">
          <Underline>Terms and Conditions</Underline>
        </h2>
      </section>
      <section className="bg-black text-white px-6 md:px-15 py-20 ">
        <div className="max-w-6xl mx-auto space-y-6 font-[Inter]  text-[15px] leading-[24px] tracking-wider">
          <p>
            <strong>Effective Date:</strong> April 17, 2025
            <br />
            <strong>Last Updated:</strong> April 5, 2025
          </p>

          <p>
            Welcome to Cohorts, a platform by OYM Labs Private Limited
            ("Cohorts", "we", "our", or "us"). These Terms of Service (“Terms”)
            govern your access to and use of the platform available at{" "}
            <a href="https://cohorts.xyz">https://cohorts.xyz</a> (the “Site”)
            and our services, including our mobile apps, software, features, and
            other offerings (collectively, the “Services”).
          </p>

          <p>
            By accessing or using the Services, you agree to be bound by these
            Terms and our Privacy Policy. If you do not agree to these Terms,
            please do not use our Services.
          </p>

          <div>
            <h2 className="font-semibold text-base">1. Eligibility</h2>
            <ul className="list-none  mt-2 space-y-1">
              <li>
                Are at least 13 years old (or the minimum legal age in your
                jurisdiction),
              </li>
              <li>Are capable of forming a binding contract,</li>
              <li>
                Are not barred from using the Services under applicable laws.
              </li>
            </ul>
            <p className="mt-2">
              If you are under 18, you must have the permission of a parent or
              legal guardian.
            </p>
          </div>

          <div>
            <h2 className=" font-semibold text-base">
              2. Account Registration and Security
            </h2>
            <ul className="list-none  mt-2 space-y-1">
              <li>
                To access certain features, you must register for an account.
              </li>
              <li>
                You agree to provide accurate, current, and complete
                information.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                login credentials.
              </li>
              <li>
                You agree to notify us immediately of any unauthorized use of
                your account.
              </li>
              <li>
                You are solely responsible for all activities that occur under
                your account.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base">3. Platform Overview</h2>
            <p className="mt-2">
              Cohorts enables users ("Creators") to create and manage digital
              communities where they can:
            </p>
            <ul className="list-none  mt-2 space-y-1">
              <li>Post content (videos, documents, updates)</li>
              <li>Host live sessions or events</li>
              <li>Engage with members via feeds and chat</li>
              <li>
                Monetize content or community access via paid subscriptions or
                one-time payments
              </li>
              <li>Track engagement with analytics and leaderboards</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base">
              4. Subscription Plans and Payments
            </h2>
            <p className="mt-2">
              We offer free and paid plans with different features.
            </p>

            <p className="mt-4 font-medium">a. Free Plan</p>
            <ul className="list-none mt-1 space-y-1">
              <li>Basic community creation</li>
              <li>Limited features</li>
            </ul>

            <p className="mt-4 font-medium">b. Paid Plans</p>
            <ul className="list-none mt-1 space-y-1">
              <li>
                <strong>Plus Plan:</strong> ₹999/month – Unlock monetization
                features, leaderboards, analytics, and more
              </li>
              <li>
                <strong>Premium Plan:</strong> ₹2999/month – Full access
                including advanced integrations and features
              </li>
            </ul>

            <p className="mt-4 font-medium">c. Billing & Renewals</p>
            <ul className="list-none mt-1 space-y-1">
              <li>Payments are processed via third-party payment providers</li>
              <li>
                Subscriptions auto-renew unless canceled before the renewal date
              </li>
              <li>
                You may cancel your subscription at any time. No refunds will be
                issued for partial periods unless required by law
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base">
              5. Content Ownership & License
            </h2>

            <p className="mt-4 font-medium">a. User Content</p>
            <p>
              You retain ownership of the content you upload or create on the
              platform.
            </p>
            <p className="mt-2">
              By posting content, you grant Cohorts a non-exclusive, worldwide,
              royalty-free license to use, host, store, display, and distribute
              such content solely for the purposes of operating and improving
              our Services.
            </p>
            <p className="mt-2">
              You are responsible for ensuring your content does not violate any
              laws or third-party rights.
            </p>

            <p className="mt-4 font-medium">b. Cohorts’ Content</p>
            <p>
              All rights, title, and interest in the Services—including
              software, design, branding, and intellectual property—belong to
              Cohorts or its licensors.
            </p>
            <p className="mt-2">
              You may not copy, reproduce, distribute, or create derivative
              works without our permission.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base">
              6. Acceptable Use Policy
            </h2>
            <ul className="list-none  mt-2 space-y-1">
              <li>
                Post or share content that is abusive, defamatory, illegal,
                infringing, or harmful
              </li>
              <li>Mislead, impersonate, or defraud others</li>
              <li>Interfere with the security or integrity of the platform</li>
              <li>
                Access or use the platform to compete with us or
                reverse-engineer our code
              </li>
              <li>Spam, solicit, or promote unrelated products/services</li>
            </ul>
            <p className="mt-2">
              Cohorts reserves the right to remove content or terminate accounts
              that violate this policy.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base">
              7. Moderation & Community Guidelines
            </h2>
            <p className="mt-2">
              Creators are responsible for moderating their communities.
              However, we reserve the right to:
            </p>
            <ul className="list-none  mt-2 space-y-1">
              <li>Intervene in case of violations</li>
              <li>
                Suspend communities that engage in illegal or harmful activity
              </li>
              <li>Remove content that violates our terms or policies</li>
            </ul>
            <p className="mt-2">
              We encourage healthy, respectful, and inclusive conversations on
              Cohorts.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base">
              8. Third-Party Services & Integrations
            </h2>
            <p className="mt-2">
              Our platform may integrate with third-party services (e.g.,
              payment gateways, Zoom, Google Meet). Your use of these services
              is subject to their own terms and privacy policies.
            </p>
            <p className="mt-2">
              We are not responsible for the practices or content of third-party
              platforms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base">9. Termination</h2>
            <p className="mt-2 font-medium">a. By You</p>
            <p>
              You may stop using the Services and delete your account at any
              time.
            </p>

            <p className="mt-2 font-medium">b. By Us</p>
            <p>We may suspend or terminate your access if you:</p>
            <ul className="list-none  mt-2 space-y-1">
              <li>Violate these Terms or our policies</li>
              <li>Cause harm or risk to other users or the platform</li>
              <li>Fail to pay applicable fees</li>
            </ul>
            <p className="mt-2">
              Upon termination, your access will be revoked, and content may be
              deleted.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base">10. Disclaimers</h2>
            <ul className="list-none  mt-2 space-y-1">
              <li>We provide the Services “as is” and “as available”</li>
              <li>
                We do not guarantee uninterrupted, secure, or error-free
                Services
              </li>
              <li>
                We are not responsible for user content or actions on the
                platform
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base">
              11. Limitation of Liability
            </h2>
            <ul className="list-none  mt-2 space-y-1">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, data, or goodwill</li>
              <li>
                Damages related to unauthorized access or use of your content or
                account
              </li>
            </ul>
            <p className="mt-2">
              In no event shall our total liability exceed the amount you paid
              to us in the past 12 months.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base">12. Indemnification</h2>
            <p className="mt-2">
              You agree to indemnify and hold harmless Cohorts and its
              affiliates from any claims, losses, damages, liabilities, costs,
              and expenses arising out of your:
            </p>
            <ul className="list-none  mt-2 space-y-1">
              <li>Use or misuse of the Services</li>
              <li>Violation of these Terms or any applicable laws</li>
              <li>Infringement of third-party rights</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base">
              13. Changes to the Terms
            </h2>
            <p className="mt-2">
              We may update these Terms at any time. We will notify you via
              email or in-app notice. Continued use of the Services after
              changes become effective constitutes your acceptance.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base">
              14. Governing Law & Dispute Resolution
            </h2>
            <p className="mt-2">
              These Terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts of Mysore,
              Karnataka.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base">15. Contact Us</h2>
            <p className="mt-2">
              OYM Labs Private Limited
              <br />
              851, Sathgalli, A Zone, Rajiv Nagar 3rd Stage,
              <br />
              Mysore, Karnataka – 570022
              <br />
              Email:{" "}
              <a href="mailto:support@cohorts.xyz">support@cohorts.xyz</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
