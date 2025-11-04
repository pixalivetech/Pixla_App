import React from "react";

const RefundPolicySection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-yellow-100 pt-52 pb-24 px-6 md:px-24 font-sans text-gray-800">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Refund Policy
        </h1>
    <br />
        <div className="mt-4 text-gray-600 text-sm md:text-base">
          <p>Company: <strong>Tripalive.Me Technology Pvt Ltd</strong></p>
          <p>Product: <strong>Pixla</strong></p>
          <p>Email: <a href="mailto:info@pixla.in" className="text-blue-600 hover:underline">info@pixla.in</a></p>
          <p>Headquarters: Bengaluru, India</p>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {[
          {
            title: "1. General Policy",
            content: (
              <>
                <p>
                  At <strong>Pixla</strong>, we aim to ensure complete satisfaction with every product, subscription, and service.
                  However, due to the nature of digital transactions and reward-based systems, certain services are
                  non-refundable once activated.
                </p>
              </>
            ),
          },
          {
            title: "2. Subscription Refunds",
            content: (
              <>
                <p>
                  The <strong>Pixla Gold Subscription</strong> and any other premium membership fees are non-refundable
                  after successful activation or payment.
                </p>
                <p className="mt-3">
                  Users are encouraged to review all details before subscribing.
                </p>
                <p className="mt-3">
                  In case of accidental duplicate payments, please contact{" "}
                  <a href="mailto:info@pixla.in" className="text-blue-600 hover:underline">
                    info@pixla.in
                  </a>{" "}
                  within 7 days for verification and resolution.
                </p>
              </>
            ),
          },
          {
            title: "3. Digital Gold Purchases",
            content: (
              <>
                <p>
                  All purchases of digital gold are final and cannot be canceled or refunded once processed.
                </p>
                <p className="mt-3">
                  Pixla facilitates transactions through trusted partners like{" "}
                  <strong>MMTC-PAMP</strong>, ensuring secure vaulting and real-time valuation.
                </p>
                <p className="mt-3">
                  Refunds will only be applicable if a transaction fails but the amount is debited from the user’s account
                  without receiving gold credit.
                </p>
              </>
            ),
          },
          {
            title: "4. Product Purchases",
            content: (
              <>
                <p>
                  For physical product orders placed through Pixla, refund or replacement is subject to the seller’s policy.
                </p>
                <p className="mt-3">
                  Users must raise any issue within 48 hours of delivery with valid proof (photo/video evidence)
                  to initiate a return or refund request.
                </p>
                <p className="mt-3">Shipping and handling charges are non-refundable.</p>
              </>
            ),
          },
          {
            title: "5. Referral Rewards and Earnings",
            content: (
              <>
                <p>
                  Referral earnings, Gold Dots, or reward points once credited cannot be reversed or refunded.
                </p>
                <p className="mt-3">
                  Fraudulent or policy-violating referrals will result in forfeiture of the rewards.
                </p>
              </>
            ),
          },
          {
            title: "6. Technical Errors or Failed Transactions",
            content: (
              <>
                <p>
                  In case of a failed payment or transaction error, the deducted amount (if any) will be automatically refunded
                  to the original payment method within 7–10 working days, depending on the payment gateway and bank policies.
                </p>
                <p className="mt-3">Users must retain proof of transaction for faster resolution.</p>
              </>
            ),
          },
          {
            title: "7. Cancellation Policy",
            content: (
              <>
                <p>Subscription or investment plans cannot be canceled once initiated.</p>
                <p className="mt-3">
                  Automatic renewals (if applicable) can be disabled anytime before the renewal date from the user’s account settings.
                </p>
              </>
            ),
          },
          {
            title: "8. Contact for Refund Queries",
            content: (
              <>
                <p>For any payment or refund-related assistance, please contact our support team:</p>
                <div className="mt-3 space-y-1">
                  <p>📧 <a href="mailto:info@pixla.in" className="text-blue-600 hover:underline">info@pixla.in</a></p>
                  <p>🕐 Response Time: Within 3–5 business days</p>
                </div>
                <p className="mt-3">
                  Pixla and Tripalive.Me Technology Pvt Ltd reserve the right to amend or update this Refund Policy at any time.
                  Updates will be posted on the official website and app.
                </p>
              </>
            ),
          },
        ].map((section, index) => (
          <div
            key={index}
            className="p-6 md:p-8 hover:shadow-lg hover:bg-white transition-all duration-300"
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
        <p>Headquarters: Bengaluru, India</p>
      </div>
    </section>
  );
};

export default RefundPolicySection;
