import React from "react";

const ShopAndEarnSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-24 font-sans">

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">

        {/* LEFT SIDE CARD */}
        <div className="lg:w-1/2 flex justify-center">

          <div className="relative w-[280px] sm:w-[320px] h-[360px] rounded-[30px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            {/* Blur Effects */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-8 right-8 w-24 h-24 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-xl text-center w-[220px]">

                <div className="text-5xl mb-4">
                  💎
                </div>

                <h3 className="text-xl font-bold mb-2">
                  Pixla Jewellery
                </h3>

                <p className="text-sm text-gray-600 leading-6">
                  Preview jewellery,
                  earn rewards and
                  redeem Gold Dots.
                </p>

              </div>

            </div>

            {/* Top Card */}
            <div className="absolute top-5 right-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600 text-sm">
                AR Preview
              </h4>

              <p className="text-xs text-gray-500">
                Try Before Buy
              </p>

            </div>

            {/* Bottom Card */}
            <div className="absolute bottom-6 left-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600 text-sm">
                Gold Dots
              </h4>

              <p className="text-xs text-gray-500">
                Rewards
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="lg:w-1/2">

          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Pixla Jewellery
          </h2>

          <p className="text-yellow-500 text-base md:text-xl font-semibold mt-3 mb-8">
            Explore, Preview & Redeem with Confidence
          </p>

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
            Pixla Gold Network branches.

          </p>

        </div>

      </div>

    </section>
  );
};

export default ShopAndEarnSection;