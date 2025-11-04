import React from "react";

const PrivacyPolicySection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-100 via-white to-yellow-100 pt-52 pb-24 px-6 md:px-24 font-sans text-gray-800">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Privacy Policy
        </h1>
        <br />
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
         
        </p>
        <p className="text-sm md:text-base text-gray-600 mt-4 max-w-3xl mx-auto">
          This Privacy Policy explains how <strong>Pixla</strong>, a product of{" "}
          <strong>Tripalive.Me Technology Pvt Ltd</strong>, headquartered in
          Electronic City, Bengaluru, India, collects, uses, and protects your
          personal information when you use our website, mobile app, or related
          services. By accessing or using Pixla, you agree to this Privacy
          Policy.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {[
          {
            title: "1. Information We Collect",
            content: (
              <>
                <p>
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li>
                    <strong>Personal Information:</strong> Name, phone number,
                    email, gender, date of birth, and KYC documents (when
                    required).
                  </li>
                  <li>
                    <strong>Device & Usage Data:</strong> IP address, device
                    type, app activity, and log information.
                  </li>
                  <li>
                    <strong>Financial Information:</strong> Payment details,
                    transaction history, digital gold purchases, and
                    subscription records.
                  </li>
                  <li>
                    <strong>User Content:</strong> Videos, images, and posts you
                    upload.
                  </li>
                  <li>
                    <strong>Referral & Subscription Data:</strong> Information
                    about your referrals, earnings, and rewards.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "2. How We Use Your Information",
            content: (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Manage and verify your account.</li>
                <li>Process subscriptions, payments, and digital gold transactions.</li>
                <li>Improve app experience and personalize content.</li>
                <li>Communicate updates, offers, and new features.</li>
                <li>Ensure compliance with legal obligations.</li>
                <li>Prevent fraud, misuse, or unauthorized access.</li>
              </ul>
            ),
          },
          {
            title: "3. Information Sharing",
            content: (
              <>
                <p>We do not sell your personal information. We may share limited data only with:</p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                  <li>Authorized Service Providers (payments, KYC, logistics).</li>
                  <li>Legal Authorities (when required by law).</li>
                  <li>Partner Brands or Franchisees (only with your consent).</li>
                </ul>
                <p className="mt-3">
                  All third parties are bound by strict data protection and confidentiality agreements.
                </p>
              </>
            ),
          },
          {
            title: "4. Security",
            content:
              "We use SSL encryption, secure cloud storage, and restricted access controls to safeguard all user data. Financial and digital gold transactions are protected by MMTC-PAMP and other licensed partners.",
          },
          {
            title: "5. Your Rights",
            content: (
              <>
                <p>You may:</p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>Access or update your personal details.</li>
                  <li>Request deletion of your account or stored data.</li>
                  <li>Opt out of marketing emails or notifications.</li>
                </ul>
                <p className="mt-3">
                  For such requests, contact:{" "}
                  <a href="mailto:info@pixla.in" className="text-blue-600 hover:underline">
                    info@pixla.in
                  </a>
                </p>
              </>
            ),
          },
          {
            title: "6. Cookies and Tracking",
            content:
              "Pixla uses cookies and analytics tools to enhance performance and improve user experience. You can control cookies through your browser or device settings.",
          },
          {
            title: "7. Children’s Privacy",
            content:
              "Pixla is not intended for children under 13. We do not knowingly collect data from minors without parental consent.",
          },
          {
            title: "8. Updates to This Policy",
            content:
              "We may update this Privacy Policy from time to time. Any revisions will be posted on this page with a new effective date.",
          },
          {
            title: "9. Contact Us",
            content: (
              <>
                <p>For any questions, concerns, or complaints about this Privacy Policy, please reach out to us at:</p>
                <div className="mt-3 space-y-1">
                  <p>📧 <a href="mailto:info@pixla.in" className="text-blue-600 hover:underline">info@pixla.in</a></p>
                  <p>🏢 Tripalive.Me Technology Pvt Ltd</p>
                  <p>Headquarters: Electronic City, Bengaluru, India</p>
                </div>
              </>
            ),
          },
        ].map((section, index) => (
          <div
            key={index}
            className=" p-6 md:p-8 hover:shadow-lg hover:bg-white transition-all duration-300"
          >
            <h2 className="text-lg md:text-2xl font-semibold text-black mb-3">
              {section.title}
            </h2>
            <div className="text-gray-700 text-sm md:text-base leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="text-center mt-16 text-gray-600 text-sm md:text-base">
        <p>© 2025 Tripalive.Me Technology Pvt Ltd. All Rights Reserved.</p>
        <p>
          Email:{" "}
          <a href="mailto:info@pixla.in" className="text-blue-600 hover:underline">
            info@pixla.in
          </a>
          {" "} | Headquarters: Bengaluru, India
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
