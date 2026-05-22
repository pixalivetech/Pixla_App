import React from "react";

import EarnIcon from "./../../assets/Home/Earn.png";
import ShopIcon from "./../../assets/Home/shop.png";
import ReferralIcon from "./../../assets/Home/referal.png";

import GoldIcon from "./../../assets/Home/gold.png";
import SavingsIcon from "./../../assets/Home/saving.png";
import TreeIcon from "./../../assets/Home/tree.png";

const WhyChoosePixla = () => {
  return (
    <section
      id="why-pixla"
      className="bg-white py-16 px-6 md:px-24 font-sans"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-black mb-16">
        Why Choose Pixla?
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div className="flex flex-col text-left gap-10 w-full md:w-1/3">

          <div>
            <img
              src={EarnIcon}
              alt=""
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Earn Through Creator Engagement
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Creators earn Gold Dots based on views,
              likes, comments, shares, engagement,
              and business growth.
            </p>
          </div>

          <div>
            <img
              src={ShopIcon}
              alt=""
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Save, Redeem & Grow Gold
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Users can buy, save and redeem
              digital gold securely through
              Pixla Gold ecosystem.
            </p>
          </div>

          <div>
            <img
              src={ReferralIcon}
              alt=""
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Build Communities & Grow Influence
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Grow communities, improve engagement
              and unlock long-term opportunities.
            </p>
          </div>

        </div>

        {/* CENTER DESIGN */}
        <div className="relative w-full md:w-1/3 flex justify-center">

          <div className="relative w-[300px] h-[420px] rounded-[40px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl flex items-center justify-center overflow-hidden">

            {/* Blur circles */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>

            <div className="absolute bottom-10 right-8 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>

            {/* Main Card */}
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center">

              <div className="text-6xl mb-4">
                🪙
              </div>

              <h3 className="text-2xl font-bold mb-2">
                Pixla Gold
              </h3>

              <p className="text-sm text-gray-700 leading-6">
                Creator Economy + Digital Gold +
                Community Growth Platform
              </p>

            </div>

            {/* Floating card top */}
            <div className="absolute top-10 -right-5 bg-white shadow-lg px-5 py-3 rounded-2xl">

              <h4 className="font-bold text-yellow-600">
                +5000
              </h4>

              <p className="text-xs text-gray-500">
                Gold Rewards
              </p>

            </div>

            {/* Floating card bottom */}
            <div className="absolute bottom-10 -left-5 bg-white shadow-lg px-5 py-3 rounded-2xl">

              <h4 className="font-bold text-green-600">
                🌱 Green Mission
              </h4>

              <p className="text-xs text-gray-500">
                Tree Plantation
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col text-left gap-10 w-full md:w-1/3">

          <div>
            <img
              src={GoldIcon}
              alt=""
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Unlock the Power of Pixla Gold
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Premium access, rewards and
              smarter social gold experience.
            </p>
          </div>

          <div>
            <img
              src={SavingsIcon}
              alt=""
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              India’s Creator-Powered Digital Gold Ecosystem
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Connecting creators, users,
              jewellery partners and franchises.
            </p>
          </div>

          <div>
            <img
              src={TreeIcon}
              alt=""
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Wealth Creation with Green Impact
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Supporting sustainability and
              tree plantation initiatives.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoosePixla;