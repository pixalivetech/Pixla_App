import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Pixla?",
    answer:
      "Pixla is an innovative short video and shopping platform where users can swipe, shop, and earn digital gold. Every action — from watching videos to making purchases — helps you grow your gold savings while contributing to a greener planet.",
  },
  {
    question: "Who owns Pixla?",
    answer:
      "Pixla is a product of Tripalive.Me Technology Pvt Ltd, headquartered in Bengaluru, India",
  },
  {
    question: "What are Gold Dots?",
    answer:
      "Gold Dots are Pixla’s digital rewards. 10,00,000 Gold Dots = 1 gram of 24K Gold, and the value of each Gold Dot changes according to live gold prices.(tracked live in the app).",
  },
  {
    question: "How can I earn Gold Dots?",
    answer:
      "You can earn Gold Dots by: Swiping short videos on Pixla Plays, Inviting friends through referral codes, Purchasing products on Pixla Brands, Subscribing to Pixla Gold",
  },
  {
    question: "How can I use my Gold Dots?",
    answer:
      "Gold Dots can be: Converted to digital gold (stored securely with MMTC-PAMP), Redeemed for 22K jewellery, Used to buy products in the Pixla store, Exchanged or sold anytime through the Gold tab",
  },
  {
    question: "What is Pixla Gold Subscription?",
    answer:
      "Pixla Gold is an exclusive membership that unlocks 10x rewards, referral income, ad-free experience, and special discounts. Subscription Fee: ₹10,000 / year",
  },
  {
    question: "What is the minimum investment amount for Digital Gold?",
    answer: "You can start investing in digital gold from just ₹10 using the Pixla Gold Tab.",
  },
  {
    question: "How secure is my digital gold?",
    answer:
      "Your digital gold is vaulted and insured by MMTC-PAMP, one of India’s most trusted gold custodians. You can view purity certificates and live prices anytime.",
  },
  {
    question: "How does the referral program work?",
    answer:
      "When you invite friends using your referral code: You earn Gold Dots for every successful signup. If you are a Pixla Gold subscriber, you also earn a percentage of their subscription, shopping, and gold purchase revenue.",
  },
  {
    question: "What is Pixla’s Green Promise?",
    answer:
      "For every order above ₹1000 or every Pixla Gold subscription, a tree is planted under the Pixla Kalam Foundation initiative — connecting your digital actions to real environmental impact.",
  },
  {
    question: "Can I withdraw my gold anytime?",
    answer:
      "Yes. You can sell, redeem, or exchange your digital gold anytime within the app — with instant value credit or 24-hour jewellery delivery.",
  },
  {
    question: "Is Pixla available for everyone?",
    answer:
      "Pixla is an invite-based platform. You can join using a referral code from an existing user or apply through the website for early access.",
  },
  {
    question: "What if I face a technical or payment issue?",
    answer:
      "Please reach our support team at 📧 info@pixla.in.We respond within 3–5 business days.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "No. Subscriptions are non-refundable and non-cancellable once activated. Please read all details before subscribing.",
  },
  {
    question: "How can I contact Pixla?",
    answer:
      "📍 Tripalive.Me Technology Pvt Ltd Bengaluru, India, 📧 info@pixla.in, www.pixla.in",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 px-6 md:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-semibold mb-6 text-gray-900">
          Frequently Asked Questions <br /> (FAQ)
        </h2>
        <br />
        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 transition-all duration-200"
            >
              {/* Question Row */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-base md:text-lg font-medium text-gray-900 max-w-[90%]">
                  {index + 1}. {faq.question}
                </p>

                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Toggle FAQ"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
