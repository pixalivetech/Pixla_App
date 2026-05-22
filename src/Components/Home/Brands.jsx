import React from "react";

const BrandsTabSection = () => {
  return (
    <section className="bg-white py-14 px-6 md:px-24 font-sans">

      <div className="grid md:grid-cols-2 items-start gap-10 md:gap-20">

        {/* Right Design */}

        <div className="relative flex justify-center md:justify-end order-1 md:order-2">

          <div className="relative w-[320px] h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            {/* Blur Effects */}

            <div className="absolute top-8 left-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center w-[240px]">

                <div className="text-6xl mb-4">
                  💎
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Pixla Jewellery
                </h3>

                <p className="text-sm text-gray-600 leading-6">
                  Try jewellery designs,
                  earn rewards and redeem
                  Gold Dots.
                </p>

              </div>

            </div>

            {/* Floating Card 1 */}

            <div className="absolute top-8 right-4 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600">
                AR Preview
              </h4>

              <p className="text-xs text-gray-500">
                Try Before Buy
              </p>

            </div>

            {/* Floating Card 2 */}

            <div className="absolute bottom-8 left-4 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600">
                Green Mission
              </h4>

              <p className="text-xs text-gray-500">
                Plant Trees
              </p>

            </div>

          </div>

        </div>

        {/* Left Content */}

        <div className="text-center md:text-left order-2 md:order-1">

          {/* How It Works */}

          <div className="mb-10">

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4">
              How It Works
            </h3>

            <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">

              <li>
                AR Try-On – Virtually try thousands
                of jewellery designs.
              </li>

              <li>
                Explore Collections – Browse
                digital gold and jewellery.
              </li>

              <li>
                Earn Gold Dots – Collect rewards
                through engagement.
              </li>

              <li>
                Plant Trees While Growing Wealth –
                Every gram supports green mission.
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
                AR Jewellery Preview –
                Try thousands of designs.
              </li>

              <li>
                Exclusive Gold & Jewellery –
                Build real wealth.
              </li>

              <li>
                Earn Rewards –
                Gain Gold Dots.
              </li>

              <li>
                Fast Redemption –
                Convert into jewellery.
              </li>

              <li>
                Green Mission –
                Tree plantation support.
              </li>

            </ol>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BrandsTabSection;