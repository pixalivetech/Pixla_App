import React from "react";

const TermsConditionsSection = () => {
  const sections = [
    {
      title: "1. Platform Overview",
      intro:
        "Pixla Gold Network is a creator-powered social digital gold savings ecosystem that may include:",
      content: [
        "Digital gold savings",
        "Creator engagement programs",
        "Gold Dots reward systems",
        "Referral and community features",
        "Jewellery partner services",
        "Franchise opportunities",
        "Subscription services",
        "Live streaming and creator interactions",
      ],
      extra:
        "Platform features may be updated, modified, or discontinued at any time.",
    },

    {
      title: "2. User Eligibility",
      intro: "Users must:",
      content: [
        "Be legally eligible to use digital platforms under applicable laws",
        "Provide accurate information during registration",
        "Maintain the confidentiality of their account credentials",
      ],
      extra:
        "We reserve the right to suspend or terminate accounts that violate policies or provide false information.",
    },

    {
      title: "3. Creator Rewards & Gold Dots",
      intro:
        "Creators may earn Gold Dots or ecosystem rewards based on:",
      content: [
        "Views",
        "Likes",
        "Comments",
        "Shares",
        "Audience engagement",
        "Referral activity",
        "Business growth generated through the platform",
      ],
      extra:
        "Reward structures, eligibility criteria, and earning models may change at the company’s discretion. Pixla Gold Network does not guarantee fixed earnings or income.",
    },

    {
      title: "4. Digital Gold Services",
      intro:
        "Users may access digital gold-related services through the platform. All gold-related activities are subject to:",
      content: [
        "Operational availability",
        "Partner integrations",
        "Applicable regulations",
        "Platform policies",
      ],
      extra:
        "Users are responsible for understanding gold pricing, market fluctuations, and applicable charges.",
    },

    {
      title: "5. Jewellery Partner Services",
      intro:
        "Jewellery redemption and related services may be provided through third-party jewellery partners. Pixla Gold Network is not responsible for:",
      content: [
        "Third-party partner disputes",
        "Store-level operational issues",
        "Product availability",
        "Partner-specific policies",
      ],
    },

    {
      title: "6. Franchise Opportunities",
      intro:
        "Franchise onboarding, pincode rights, and related business opportunities are subject to:",
      content: [
        "Company approval",
        "Operational guidelines",
        "Compliance verification",
        "Platform policies",
      ],
      extra:
        "The company reserves the right to modify franchise structures, benefits, or eligibility at any time.",
    },

    {
      title: "7. User Conduct",
      intro: "Users agree not to:",
      content: [
        "Misuse the platform",
        "Engage in fraud or illegal activities",
        "Post harmful, abusive, or misleading content",
        "Manipulate engagement systems",
        "Violate intellectual property or community guidelines",
      ],
      extra:
        "Violations may result in account suspension or permanent removal.",
    },

    {
      title: "8. Payments & Transactions",
      text:
        "Users are responsible for all transactions conducted through their accounts. Platform fees, subscriptions, onboarding charges, and service payments may be non-refundable unless otherwise specified. Transaction processing may involve third-party payment providers.",
    },

    {
      title: "9. Intellectual Property",
      text:
        "All platform content, branding, logos, designs, software, and ecosystem materials are the intellectual property of Tripalive.Me Technology Pvt Ltd unless otherwise stated. Unauthorized copying, reproduction, or misuse is prohibited.",
    },

    {
      title: "10. Limitation of Liability",
      intro:
        "Tripalive.Me Technology Pvt Ltd shall not be liable for:",
      content: [
        "Indirect or consequential losses",
        "Business interruptions",
        "Data loss",
        "Third-party service issues",
        "User-generated content",
        "Market-related fluctuations",
      ],
      extra:
        "Users access and use the platform at their own discretion and risk.",
    },

    {
      title: "11. Platform Modifications",
      intro: "We reserve the right to:",
      content: [
        "Update platform features",
        "Modify policies",
        "Change reward structures",
        "Restrict or discontinue services",
        "Update these Terms & Conditions at any time",
      ],
      extra:
        "Continued use of the platform constitutes acceptance of updated terms.",
    },

    {
      title: "12. Governing Law",
      text:
        "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the appropriate courts in India.",
    },

    {
      title: "13. Contact Us",
      contact: true,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-100 via-white to-yellow-100 pt-52 pb-24 px-6 md:px-24 font-sans text-gray-800">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Terms & Conditions
        </h1>

        <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Welcome to Pixla Gold Network, operated by
          <strong> Tripalive.Me Technology Pvt Ltd</strong>
          (“Pixla”, “Pixla Gold Network”, “we”, “our”, or “us”).
          <br /><br />
          By accessing or using the Pixla Gold Network mobile application,
          website, and related services, you agree to comply with and
          be bound by these Terms & Conditions.
          <br /><br />
          If you do not agree with these terms, please do not use the platform.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6 md:p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {section.title}
            </h2>

            {section.intro && (
              <p className="mb-4 text-gray-700">
                {section.intro}
              </p>
            )}

            {section.text && (
              <p className="text-gray-700 leading-relaxed">
                {section.text}
              </p>
            )}

            {section.content && (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.extra && (
              <p className="mt-4 text-gray-700">
                {section.extra}
              </p>
            )}

            {section.contact && (
              <div className="space-y-2 text-gray-700">
                <p>
                  For support or legal inquiries, contact:
                </p>

                <p>
                  <strong>
                    Tripalive.Me Technology Pvt Ltd
                  </strong>
                </p>

                <p>Pixla Gold Network</p>

                <p>📧 support@pixla.in</p>

                <p>🌐 https://www.pixla.in</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-600 text-sm md:text-base">
        <p>
          © 2026 Tripalive.Me Technology Pvt Ltd.
          All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default TermsConditionsSection;