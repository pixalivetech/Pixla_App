import React from "react";

const TermsSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b to-yellow-100 via-white from-yellow-100 pt-52 pb-24 px-6 md:px-24 font-sans text-gray-800">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Terms & Conditions
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Company: <strong>Tripalive.Me Technology Pvt Ltd</strong> <br />
          Product: <strong>Pixla</strong> <br />
          Contact: <a href="mailto:info@pixla.in" className="text-blue-600 hover:underline">info@pixla.in</a> <br />
          Headquarters: <strong>Bengaluru, India</strong>
        </p>
      </div>

      {/* Terms Container */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing or using Pixla, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, you may not use the platform.",
          },
          {
            title: "2. About Pixla",
            content:
              "Pixla is a digital platform developed and owned by Tripalive.Me Technology Pvt Ltd. The platform allows users to connect, share content, invest in digital gold, earn rewards, and participate in subscription-based benefits.",
          },
          {
            title: "3. Eligibility",
            content:
              "Users must be at least 13 years old to create an account on Pixla. Certain services, such as financial or investment-related features, may require users to be 18 years or older and comply with applicable laws.",
          },
          {
            title: "4. Account Registration",
            content:
              "Users must provide accurate and complete information during sign-up. Each account is personal and non-transferable. Pixla reserves the right to suspend or terminate accounts found engaging in fraudulent, abusive, or unauthorized activity.",
          },
          {
            title: "5. Referral & Rewards Program",
            content:
              "Users can invite others using a unique referral code. Referral rewards, including Gold Dots or monetary incentives, are credited as per the current Pixla policy. Pixla reserves the right to change, suspend, or terminate the referral system without notice.",
          },
          {
            title: "6. Subscription",
            content:
              "Subscription users enjoy exclusive benefits including higher commissions, ad-free experience, discounts, and rewards. The annual subscription fee is ₹10,000, valid for one year and renewable. Subscription fees once paid are non-refundable.",
          },
          {
            title: "7. Digital Gold & Wallet",
            content:
              "Pixla offers users the ability to buy, earn, and redeem digital gold (backed by MMTC-PAMP). Users can start investing from ₹10. All gold transactions are securely stored, insured, and trackable. Pixla is not responsible for third-party delays or technical issues in gold-related transactions.",
          },
          {
            title: "8. User Content",
            content:
              "Users can upload videos, photos, and other media on the Pixla platform. By uploading content, you grant Pixla a non-exclusive, royalty-free, worldwide license to use, display, and promote your content. Inappropriate or copyrighted content may be removed without notice.",
          },
          {
            title: "9. Privacy",
            content:
              "Your personal information is collected, used, and protected in accordance with our Privacy Policy. Pixla ensures reasonable safeguards to protect your data from unauthorized access or misuse.",
          },
          {
            title: "10. Restrictions",
            content:
              "Users must not violate any local or international laws, upload harmful or abusive content, engage in spamming, hacking, or misuse referral systems.",
          },
          {
            title: "11. Termination",
            content:
              "Pixla reserves the right to suspend or terminate accounts if a user violates any terms or engages in illegal or unethical activity.",
          },
          {
            title: "12. Limitation of Liability",
            content:
              "Pixla and Tripalive.Me Technology Pvt Ltd shall not be liable for indirect, incidental, or consequential damages arising from the use or inability to use the platform, services, or products.",
          },
          {
            title: "13. Modifications",
            content:
              "Pixla may modify these Terms and Conditions at any time. Updated versions will be posted on the platform, and continued use signifies acceptance of the changes.",
          },
          {
            title: "14. Governing Law",
            content:
              "These Terms shall be governed and interpreted under the laws of India, with exclusive jurisdiction in the courts of Bengaluru, Karnataka.",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="p-6 md:p-8 hover:shadow-lg hover:bg-white transition-all duration-300"
          >
            <h2 className="text-lg md:text-2xl font-semibold text-black mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {section.content}
            </p>
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

export default TermsSection;
