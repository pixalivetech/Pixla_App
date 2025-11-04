import React from "react";


const ShopAndEarnSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-24 font-sans">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-2">
        {/* Left Side - Heading */}
        <h2 className="text-xl md:text-3xl font-semibold text-black leading-snug md:w-1/2">
          Pixla Brands – Discover, <br /> Shop & Earn with Purpose
        </h2>
        
        {/* Right Side - Subtext */}
        <p className="text-gray-700 text-sm md:text-lg leading-relaxed md:w-1/2">
          The Pixla Brands Tab lets you explore trusted Indian lifestyle and grocery brands — 
          from daily essentials to fashion and wellness — where every swipe and purchase 
          earns Pixla Gold Dots and supports a greener future.
        </p>
      </div>
    </section>
  );
};

export default ShopAndEarnSection;
