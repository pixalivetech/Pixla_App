import React from "react";

const ShopAndEarnSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-24 font-sans">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-2">
        
        {/* Left Side - Heading + Tagline */}
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-3xl font-semibold text-black leading-snug">
           Pixla Jewellery

          </h2>
          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mt-2">
            Try, Choose & Redeem with Confidence

          </p>
        </div>

        {/* Right Side - Description */}
        <p className="text-gray-700 text-sm md:text-lg leading-relaxed md:w-1/2">
          
Experience Pixla Jewellery like never before — with our AR Try-On, you can preview thousands of designs before making a purchase. Every swipe, every view, and every interaction earns Gold Dots, which can be redeemed for real gold and premium jewellery.
        </p>
      </div>
    </section>
  );
};

export default ShopAndEarnSection;
