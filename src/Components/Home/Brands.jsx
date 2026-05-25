import React from "react";

const BrandsTabSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 font-sans overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

        {/* RIGHT DESIGN */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">

          <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            {/* Blur Effects */}
            <div className="absolute top-8 left-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl text-center w-[220px] sm:w-[240px]">

                <div className="text-5xl sm:text-6xl mb-4">
                  💎
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Pixla Jewellery
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-6">
                  Try jewellery designs,
                  earn rewards and redeem
                  Gold Dots.
                </p>

              </div>

            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-6 right-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600 text-sm">
                AR Preview
              </h4>

              <p className="text-xs text-gray-500">
                Try Before Buy
              </p>

            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-8 left-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600 text-sm">
                Green Mission
              </h4>

              <p className="text-xs text-gray-500">
                Plant Trees
              </p>

            </div>

          </div>

        </div>

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left order-2 lg:order-1">

          {/* HOW IT WORKS */}
          <div className="mb-10">

            <h3 className="text-2xl md:text-3xl font-bold text-black mb-5">
              How It Works
            </h3>

            <ol className="list-decimal list-inside text-gray-700 space-y-4 text-sm sm:text-base md:text-lg leading-8 text-left mx-auto lg:mx-0">

              <li>
                AR Try-On – Virtually try
                thousands of jewellery designs.
              </li>

              <li>
                Explore Collections –
                Browse digital gold and
                jewellery products.
              </li>

              <li>
                Earn Gold Dots –
                Gain rewards through
                engagement activities.
              </li>

              <li>
                Plant Trees While Growing Wealth –
                Every gram supports the
                green mission initiative.
              </li>

            </ol>

          </div>

          {/* KEY HIGHLIGHTS */}
         
        </div>

      </div>

    </section>
  );
};

export default BrandsTabSection;