import React from "react";
import PhoneImg from "./../../assets/Home/Pixla-phone.png";

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

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-7xl mx-auto">

        {/* Left Side */}
        <div className="flex flex-col text-left gap-10 w-full md:w-1/3">

          {/* Feature 1 */}
          <div>
            <img
              src={EarnIcon}
              alt="Creator Engagement"
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Earn Through Creator Engagement
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Creators earn Gold Dots based on views, likes, comments,
              shares, engagement, and business growth generated through
              their content.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <img
              src={ShopIcon}
              alt="Digital Gold"
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Save, Redeem & Grow Gold
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Users can buy, save, and redeem digital gold securely
              through the Pixla Gold ecosystem.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <img
              src={ReferralIcon}
              alt="Community Growth"
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Build Communities & Grow Influence
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Creators can build strong communities, increase engagement,
              and unlock long-term growth opportunities.
            </p>
          </div>

        </div>

        {/* Phone Image */}
        <div className="flex justify-center w-full md:w-1/3">
          <img
            src={PhoneImg}
            alt="Pixla App"
            className="w-[220px] md:w-[300px] object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col text-left gap-10 w-full md:w-1/3">

          {/* Feature 4 */}
          <div>
            <img
              src={GoldIcon}
              alt="Pixla Gold"
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Unlock the Power of Pixla Gold
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Access premium features, enhanced rewards, exclusive
              benefits, and a smarter social gold experience.
            </p>
          </div>

          {/* Feature 5 */}
          <div>
            <img
              src={SavingsIcon}
              alt="Digital Ecosystem"
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              India’s Creator-Powered Digital Gold Ecosystem
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Connecting creators, users, jewellery partners, and
              franchise entrepreneurs through one unified platform.
            </p>
          </div>

          {/* Feature 6 */}
          <div>
            <img
              src={TreeIcon}
              alt="Green Mission"
              className="w-12 h-12 mb-3"
            />

            <h3 className="text-lg font-semibold mb-2">
              Wealth Creation with Green Impact
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Every gram of gold sold and every subscription supports
              the Pixla Green Mission through tree plantation and
              sustainability initiatives.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoosePixla;