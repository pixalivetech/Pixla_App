import React from "react";

const PrivacyPolicySection = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "Full name",
        "Mobile number",
        "Email address",
        "Profile information",
        "Device information",
        "IP address",
        "Usage activity and engagement data",
        "Transaction and payment-related details",
        "Referral and community activity",
        "Creator engagement metrics",
      ],
      extra:
        "We may also collect information automatically through app usage analytics and system logs.",
    },

    {
      title: "2. How We Use Your Information",
      content: [
        "Account registration and authentication",
        "Providing platform services",
        "Managing digital gold-related activities",
        "Creator engagement and rewards",
        "Referral and community features",
        "Customer support and communication",
        "Security and fraud prevention",
        "Platform improvements and analytics",
        "Notifications, campaigns, and updates",
        "Legal and compliance requirements",
      ],
    },

    {
      title: "3. Creator & Engagement Data",
      content: [
        "Views",
        "Likes",
        "Comments",
        "Shares",
        "Engagement activity",
        "Referral participation",
        "Business growth generated through the platform",
      ],
      extra:
        "Engagement-related activity may be tracked to operate the reward ecosystem effectively.",
    },

    {
      title: "4. Sharing of Information",
      intro:
        "We do not sell users’ personal information to third parties.",
      content: [
        "Payment gateway providers",
        "Technology service providers",
        "Jewellery partners",
        "Franchise support teams",
        "Legal or regulatory authorities where required",
      ],
      extra:
        "All such sharing will be limited to operational, security, compliance, or service-related purposes.",
    },

    {
      title: "5. Data Security",
      text:
        "We implement reasonable technical and organizational measures to protect user information from unauthorized access, misuse, loss, or disclosure. However, no digital platform can guarantee absolute security.",
    },

    {
      title: "6. User Responsibilities",
      content: [
        "Maintaining account confidentiality",
        "Protecting login credentials",
        "Ensuring accurate account information",
        "Using the platform in compliance with applicable laws and platform policies",
      ],
    },

    {
      title: "7. Children’s Privacy",
      text:
        "Pixla Gold Network is not intended for children under the age required by applicable local laws. Users should access the platform only if legally permitted in their jurisdiction.",
    },

    {
      title: "8. Third-Party Services",
      text:
        "Our platform may integrate with third-party services including payment providers, analytics tools, social login systems, or external links. We are not responsible for the privacy practices of third-party services.",
    },

    {
      title: "9. Policy Updates",
      text:
        "Tripalive.Me Technology Pvt Ltd reserves the right to update or modify this Privacy Policy at any time. Updated policies will be posted within the application or official platforms. Continued use of the platform after updates constitutes acceptance of the revised Privacy Policy.",
    },

    {
      title: "10. Contact Us",
      contact: true,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-100 via-white to-yellow-100 pt-52 pb-24 px-6 md:px-24 font-sans text-gray-800">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Tripalive.Me Technology Pvt Ltd (“Pixla Gold Network”, “Pixla”,
          “we”, “our”, or “us”) respects your privacy and is committed
          to protecting the personal information of users who access and
          use our mobile application, website, and related services.
          <br /><br />
          This Privacy Policy explains how we collect, use, store,
          and protect your information when you use Pixla Gold Network.
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
              <p className="mt-4 text-gray-700">
                {section.extra}
              </p>
            )}

            {section.contact && (
              <div className="space-y-2 text-gray-700">
                <p>
                  For privacy-related questions or support,
                  users may contact:
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

export default PrivacyPolicySection;