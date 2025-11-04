import React, { useState } from "react";
import GoldMockup from "./../../assets/Home/goldtab.png"; // your phone mockup image

const PixlaGoldTabSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Earn & Save",
      content:
        "Earn Gold Dots automatically for your daily activity and build long-term wealth effortlessly.",
    },
    {
      title: "Start Investing from ₹10",
      content:
        "Buy digital gold instantly — choose Daily, Weekly, or Monthly saving plans, fully secured by MMTC-PAMP.",
    },
    {
      title: "Redeem for 22K Jewellery",
      content:
        "Convert your Gold Dots into certified 22K jewellery, delivered securely within 24 hours by trusted partner jewellers.",
    },
    {
      title: "Sell / Exchange Old Gold",
      content:
        "Sell or exchange your old gold for Gold Dots or digital gold balance — with fair value, purity check, and insured pickup.",
    },
    {
      title: "100% Secure & Transparent",
      content:
        "Backed by MMTC-PAMP, with insured vault storage and live gold-rate tracking.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-24 font-sans">
      {/* Top Section: Heading + Paragraph */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-">
        <h2 className="text-xl md:text-3xl font-semibold text-black">
          Pixla Gold
        </h2>
   
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md">
          Turn your everyday actions into real wealth. Every swipe, referral, and purchase earns you Gold Dots — your path to owning pure 22K gold jewellery.
        </p>
      </div>
     {/* Tagline */}
          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mb-6">
            Turn Every Gram into Growth — Wealth for You,<br /> Life for Earth.
          </p>
      {/* Bottom Section: Accordion + Image */}
      <div className="grid md:grid-cols-2 items-start gap-16">
        {/* Left - Accordion */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-3">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-medium text-black text-sm md:text-base">
                  {item.title}
                </span>
                <span className="text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right - Phone Mockup */}
        <div className="flex justify-center md:justify-center">
          <img
            src={GoldMockup}
            alt="Pixla Gold Tab"
            className="w-36 md:w-44 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PixlaGoldTabSection;
