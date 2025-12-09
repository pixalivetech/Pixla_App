import React from "react";
import BrandsMockup from "./../../assets/Home/brandsmockup.png";
import Playmandala from "./../../assets/Home/mandala.png";

const BrandsTabSection = () => {
  return (
    <section className="bg-white py-14 px-6 md:px-24 font-sans">
      <div className="grid md:grid-cols-2 items-start gap-10 md:gap-20">

        {/* Right Side: Phone Mockup */}
        <div className="relative flex justify-center md:justify-end order-1 md:order-2">
          <img
            src={Playmandala}
            alt="Mandala Background"
            className="absolute w-62 sm:w-70 md:w-[420px] opacity-25 top-30 right-32 transform translate-x-1/2 -translate-y-1/2 filter brightness-0 invert-[70%] sepia-[100%] hue-rotate-[10deg] saturate-[500%]"
          />
          <img
            src={BrandsMockup}
            alt="Pixla Brands Tab"
            className="w-40 sm:w-52 md:w-64 object-contain relative z-10"
          />
        </div>

        {/* Left Side Content */}
        <div className="text-center md:text-left order-2 md:order-1">

          {/* How It Works */}
          <div className="mb-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
              How It Works
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
              <li>AR Try-On – Virtually try thousands of jewellery designs before you buy.</li>
              <li>Explore Collections – Browse digital gold, gold coins, and curated jewellery options.</li>
              <li>Earn Gold Dots – Collect rewards while engaging with the app.</li>
              
              <li>Plant Trees While You Grow Wealth – Every gram of gold purchased plants a tree sapling.</li>
            </ol>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
              Key Highlights
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
              <li>AR Jewellery Preview – Try thousands of designs virtually before purchase.</li>
              <li>Exclusive Gold & Jewellery – Build real, tangible wealth.</li>
              <li>Earn Rewards – Every interaction adds Gold Dots.</li>
              <li>Fast & Secure Redemption – Seamlessly convert rewards into gold or jewellery.</li>
              <li>Green Mission – Every gram of gold purchased plants a tree sapling.</li>
              
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandsTabSection;
