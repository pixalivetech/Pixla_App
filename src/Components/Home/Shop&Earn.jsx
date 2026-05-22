import React from "react";

const ShopAndEarnSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-24 font-sans">

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

        {/* Left Side */}
        <div className="lg:w-1/2">

          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Pixla Jewellery
          </h2>

          <p className="text-yellow-500 text-base md:text-xl font-semibold mt-3">
            Explore, Preview & Redeem with Confidence
          </p>

        </div>

        {/* Right Side */}
        <div className="lg:w-1/2">

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-8">

            Explore and preview jewellery designs
            using advanced AR technology before
            making purchase or redemption decisions
            through the Pixla Gold ecosystem.

            <br />
            <br />

            Creators can earn Gold Dots through
            views, likes, comments, shares,
            engagement, and community growth,
            while users can buy Gold Dots directly
            within the platform.

            <br />
            <br />

            Gold Dots can be redeemed through
            trusted partner jewellery stores and
            Pixla Gold Network branches, creating
            a connected digital gold and jewellery
            ecosystem.

          </p>

        </div>

      </div>

    </section>
  );
};

export default ShopAndEarnSection;  