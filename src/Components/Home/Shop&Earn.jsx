import React from "react";
import {
  FaGem,
  FaCoins,
  FaStore,
  FaEye,
} from "react-icons/fa";

const ShopAndEarnSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-24 font-sans">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Pixla Jewellery
          </h2>

          <p className="text-yellow-500 text-base md:text-xl font-semibold mt-4">
            Explore, Preview & Redeem with Confidence
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-yellow-50 rounded-3xl p-6 shadow-md">

              <FaEye className="text-yellow-500 text-3xl mb-4" />

              <h3 className="text-lg font-bold mb-2">
                AR Preview
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Preview jewellery using AR before making decisions.
              </p>

            </div>

            <div className="bg-white border rounded-3xl p-6 shadow-md">

              <FaCoins className="text-green-500 text-3xl mb-4" />

              <h3 className="text-lg font-bold mb-2">
                Gold Dots
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Earn rewards through engagement and activities.
              </p>

            </div>

            <div className="bg-white border rounded-3xl p-6 shadow-md">

              <FaGem className="text-yellow-500 text-3xl mb-4" />

              <h3 className="text-lg font-bold mb-2">
                Jewellery Collection
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Explore digital jewellery and premium designs.
              </p>

            </div>

            <div className="bg-yellow-50 rounded-3xl p-6 shadow-md">

              <FaStore className="text-blue-500 text-3xl mb-4" />

              <h3 className="text-lg font-bold mb-2">
                Redeem Network
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Redeem Gold Dots at partner stores and branches.
              </p>

            </div>

          </div>

          {/* Right Content */}
          <div>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-8">

              Explore and preview jewellery designs using advanced AR technology before making purchase or redemption decisions through the Pixla Gold ecosystem.

              <br />
              <br />

              Creators can earn Gold Dots through views, likes, comments, shares, engagement, and community growth, while users can buy Gold Dots directly within the platform.

              <br />
              <br />

              Gold Dots can be redeemed through trusted partner jewellery stores and Pixla Gold Network branches.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ShopAndEarnSection;