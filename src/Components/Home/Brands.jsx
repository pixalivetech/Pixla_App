import React from "react";
import BrandsMockup from "./../../assets/Home/brandsmockup.png";
import Playmandala from "./../../assets/Home/mandala.png"; // reuse same mandala background

const BrandsTabSection = () => {
  return (
    <section className="bg-white py-14 px-6 md:px-24 font-sans">
      <div className="grid md:grid-cols-2 items-start gap-10 md:gap-20">
        {/* Left Side Content */}
        <div className="text-center md:text-left">
          {/* How It Works */}
          <div className="mb-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
              How It Works
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
              <li>
                Choose a main category – Grocery, Fashion, Food, Health, and more.
              </li>
              <li>
                Explore sub-categories curated for your needs.
              </li>
              <li>
                Tap a brand to view products, offers, and details.
              </li>
              <li>
                Shop and earn Pixla Gold Dots with every interaction and order.
              </li>
            </ol>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
              Key Highlights
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
              <li>
                Explore top Indian brands across lifestyle and grocery categories.
              </li>
              <li>Earn Pixla Gold Dots for every purchase.</li>
              <li>100% verified and quality-checked brands.</li>
              <li>Fast, secure, and rewarding shopping.</li>
              <li>
                Green Mission: Every order above ₹1,000 leads to one tree planted in your name.
              </li>
              <li>
                Proudly promoting Make in India and sustainable shopping.
              </li>
            </ol>
          </div>
        </div>

        {/* Right Side: Phone Mockup with Mandala */}
        <div className="relative flex justify-center md:justify-end">
          {/* Mandala Background */}
          <img
            src={Playmandala}
            alt="Mandala Background"
            className="absolute w-72 sm:w-80 md:w-[460px] opacity-25 top-30 right-32 transform translate-x-1/2 -translate-y-1/2 filter brightness-0 invert-[70%] sepia-[100%] hue-rotate-[10deg] saturate-[500%]"
          />
          {/* Phone Mockup */}
          <img
            src={BrandsMockup}
            alt="Pixla Brands Tab"
            className="w-40 sm:w-52 md:w-64 object-contain relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandsTabSection;
