import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Pixla Gold Network?",
    answer:
      "Pixla Gold Network is a creator-powered social digital gold savings ecosystem connecting users, creators, jewellery partners, and franchise entrepreneurs through one platform.",
  },

  {
    question: "How does Pixla Gold Network work?",
    answer:
      "Users can save digital gold, engage with creators, participate in referral communities, and access jewellery redemption through trusted partners.",
  },

  {
    question: "What are Gold Dots?",
    answer:
      "Gold Dots are ecosystem rewards earned by creators through engagement, referrals, business growth, and community participation.",
  },

  {
    question: "How do creators earn on Pixla Gold Network?",
    answer:
      "Creators can earn Gold Dots based on views, likes, comments, shares, audience engagement, referrals, and business contributions generated through their content.",
  },

  {
    question: "Can users buy digital gold on the platform?",
    answer:
      "Yes. Users can securely buy, save, grow, and redeem digital gold through the Pixla Gold ecosystem.",
  },

  {
    question: "Is jewellery redemption available?",
    answer:
      "Yes. Users can redeem jewellery benefits through trusted local jewellery partners connected to the Pixla Gold Network.",
  },

  {
    question: "What is the franchise model?",
    answer:
      "Pixla Gold Network offers exclusive pincode-based franchise opportunities to build local communities and expand the ecosystem regionally.",
  },

  {
    question: "Who can become a franchise partner?",
    answer:
      "Entrepreneurs, business owners, creators, and community leaders interested in building local digital gold communities can apply for franchise opportunities.",
  },

  {
    question: "What are the benefits of becoming a franchise partner?",
    answer:
      "Franchise partners receive exclusive pincode rights, onboarding support, referral opportunities, branding support, and ecosystem growth benefits.",
  },

  {
    question: "Is Pixla Gold Network only for creators?",
    answer:
      "No. The platform is designed for users, creators, jewellery partners, and franchise entrepreneurs.",
  },

  {
    question: "How does the referral system work?",
    answer:
      "Users and creators can build referral communities, invite new users, and participate in ecosystem growth activities.",
  },

  {
    question: "What is the Pixla Green Mission?",
    answer:
      "Every gram of gold sold and every subscription contributes towards sustainability initiatives and tree plantation programs.",
  },

  {
    question: "Is the platform secure?",
    answer:
      "Pixla Gold Network focuses on secure transactions, transparent digital gold systems, and trusted ecosystem partnerships.",
  },

  {
    question: "What is the purpose of the jewellery partner network?",
    answer:
      "The jewellery partner network helps build trust, supports jewellery redemption, and strengthens the online + offline ecosystem experience.",
  },

  {
    question: "What is the vision of Pixla Gold Network?",
    answer:
      "To build India’s largest creator-driven social digital gold savings network connecting users, creators, jewellery partners, and franchise entrepreneurs through one unified ecosystem.",
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
