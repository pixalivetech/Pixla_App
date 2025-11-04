import React from "react";
import PhoneImg from "./../../assets/Home/Pixla-phone.png"; // your phone mockup
import EarnIcon from "./../../assets/Home/Earn.png";
import ShopIcon from "./../../assets/Home/shop.png";
import ReferralIcon from "./../../assets/Home/referal.png";
import GoldIcon from "./../../assets/Home/gold.png";
import SavingsIcon from "./../../assets/Home/saving.png";
import TreeIcon from "./../../assets/Home/tree.png";

const WhyChoosePixla = () => {
  return (
    <section id="why-pixla" className="bg-white py-12 px-6 md:px-24 font-sans">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-black text-left mb-16">
        Why Choose Pixla?
      </h2>

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-7xl mx-auto">
        {/* Left Features */}
        <div className="flex flex-col items-left text-left gap-10 w-full md:w-1/3">
          <div>
            <img
              src={EarnIcon}
              alt="Earn While You Swipe"
              className="w-12 h-12  mb-2"
            />
            <h3 className="text-lg font-semibold">Earn While You Swipe</h3>
            <p className="text-gray-600 text-sm">
              Get Gold Dots for every post and swipe.
            </p>
          </div>

          <div>
            <img
              src={ShopIcon}
              alt="Shop & Redeem"
              className="w-12 h-12  mb-2"
            />
            <h3 className="text-lg font-semibold">Shop & Redeem</h3>
            <p className="text-gray-600 text-sm">
              Use Gold Dots to buy FMCG & lifestyle products via Pixla Brands.
            </p>
          </div>

          <div>
            <img
              src={ReferralIcon}
              alt="Referral Income"
              className="w-12 h-12   mb-2"
            />
            <h3 className="text-lg font-semibold">Referral Income</h3>
            <p className="text-gray-600 text-sm">
              Earn commission from every referral who joins with your code.
            </p>
          </div>
        </div>

        {/* Center Phone Image */}
        <div className="flex justify-center w-full md:w-1/3">
          <img
            src={PhoneImg}
            alt="Pixla App"
            className="w-[220px] md:w-[280px] object-contain"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col items-start text-left gap-10 w-full md:w-1/3">
          <div>
            <img
              src={GoldIcon}
              alt="Pixla Gold Subscription"
              className="w-12 h-12 mb-2"
            />
            <h3 className="text-lg font-semibold">Pixla Gold Subscription</h3>
            <p className="text-gray-600 text-sm">
              Earn 10× more rewards & enjoy ad-free browsing.
            </p>
          </div>

          <div>
            <img
              src={SavingsIcon}
              alt="Digital Gold Savings"
              className="w-12 h-12 mb-2"
            />
            <h3 className="text-lg font-semibold">Digital Gold Savings</h3>
            <p className="text-gray-600 text-sm">
              Save, buy, or redeem gold securely via MMTC-PAMP.
            </p>
          </div>

          <div>
            <img
              src={TreeIcon}
              alt="Tree for Every Subscriber"
              className="w-12 h-12 mb-2"
            />
            <h3 className="text-lg font-semibold">Tree for Every Subscriber</h3>
            <p className="text-gray-600 text-sm">
              1 tree planted under Pixla Green Mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePixla;
