import React from "react";
import GoldMockup from "./../../assets/Home/goldtab.png";

const PixlaGoldTabSection = () => {
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
    <section className="bg-white py-16 px-6 md:px-24 font-sans">
      {/* Top Section: Heading + Paragraph */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-10">
        {/* Left Heading and Tagline */}
        <div>
          <h2 className="text-xl md:text-3xl font-semibold text-black mb-2">
            Pixla Gold
          </h2>

          {/* Tagline below heading */}
          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mb-4">
            Turn Every Gram into Growth — <br /> Wealth for You, Life for Earth.
          </p>
        </div>

        {/* Right Paragraph */}
        <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-md">
          Turn your everyday actions into real wealth. Every swipe, referral, and
          purchase earns you Gold Dots — your path to owning pure 22K gold jewellery.
        </p>
      </div>

      {/* Bottom Section: Points + Image */}
      <div className="grid md:grid-cols-2 items-start gap-16">
        
        {/* Left - Points */}
        <div className="space-y-5">
          {items.map((item, index) => (
            <div key={index} className=" p-4 ">
              <h4 className="font-semibold text-black text-base md:text-lg mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Right - Phone Mockup */}
        <div className="flex justify-center md:justify-center">
          <img
            src={GoldMockup}
            alt="Pixla Gold Tab"
            className=" object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PixlaGoldTabSection;
