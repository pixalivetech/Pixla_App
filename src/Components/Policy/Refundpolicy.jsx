import React from "react";

const RefundPolicySection = () => {
  const sections = [
    {
      title: "1. General Policy",
      intro:
        "Pixla Gold Network provides digital platform services including:",
      content: [
        "Digital gold-related services",
        "Creator ecosystem features",
        "Subscription services",
        "Franchise onboarding",
        "Promotional campaigns",
        "Community and referral programs",
      ],
      extra:
        "All payments made through the platform are subject to this Refund Policy.",
    },

    {
      title: "2. Non-Refundable Payments",
      intro:
        "The following payments may be non-refundable once processed or activated:",
      content: [
        "Subscription charges",
        "Franchise onboarding fees",
        "Promotional or campaign fees",
        "Digital service activation fees",
        "Premium feature access charges",
        "Creator ecosystem participation fees",
        "Platform processing charges",
      ],
    },

    {
      title: "3. Digital Gold Transactions",
      intro:
        "Digital gold purchases may be subject to:",
      content: [
        "Market price fluctuations",
        "Third-party partner policies",
        "Applicable taxes and charges",
      ],
      extra:
        "Completed digital gold transactions may not be cancelled or reversed once successfully processed.",
    },

    {
      title: "4. Failed or Duplicate Transactions",
      intro: "In case of:",
      content: [
        "Failed transactions",
        "Duplicate payments",
        "Technical errors",
        "Incorrect deductions",
      ],
      extra:
        "Users may contact customer support for verification and resolution. Eligible refunds, if approved, will be processed based on internal review and payment provider timelines.",
    },

    {
      title: "5. Refund Processing Time",
      intro:
        "Approved refunds may take several business days depending on:",
      content: [
        "Banking systems",
        "Payment gateway processing",
        "Financial institution timelines",
      ],
      extra:
        "Pixla Gold Network is not responsible for delays caused by third-party payment providers or banks.",
    },

    {
      title: "6. Subscription Cancellation",
      text:
        "Users may discontinue future subscriptions according to platform settings or applicable policies. Subscription cancellation does not automatically guarantee refunds for already processed billing periods.",
    },

    {
      title: "7. Fraud & Policy Violations",
      intro:
        "Refund requests associated with:",
      content: [
        "Fraudulent activity",
        "Abuse of platform systems",
        "Policy violations",
        "Unauthorized manipulation",
      ],
      extra:
        "may be rejected at the sole discretion of Tripalive.Me Technology Pvt Ltd.",
    },

    {
      title: "8. Policy Updates",
      text:
        "Tripalive.Me Technology Pvt Ltd reserves the right to modify or update this Refund Policy at any time without prior notice. Continued use of the platform constitutes acceptance of the updated policy.",
    },

    {
      title: "9. Contact Us",
      contact: true,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-100 via-white to-yellow-100 pt-52 pb-24 px-6 md:px-24 font-sans text-gray-800">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Refund Policy
        </h1>

        <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
          This Refund Policy applies to the mobile application,
          website, and services operated by
          <strong> Tripalive.Me Technology Pvt Ltd </strong>
          under the brand name Pixla Gold Network.

          <br /><br />

          By using the platform, users agree to this Refund Policy.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6 md:p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
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
              <p className="mt-4 text-gray-700 leading-relaxed">
                {section.extra}
              </p>
            )}

            {section.contact && (
              <div className="space-y-2 text-gray-700">
                <p>
                  For refund-related support or queries, contact:
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

export default RefundPolicySection;