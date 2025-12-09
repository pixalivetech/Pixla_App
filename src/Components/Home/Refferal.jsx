import React from "react";
import SignupMockup from "./../../assets/Home/signupmockup.png";
import LoginMockup from "./../../assets/Home/loginmockup.png";

const ReferralSection = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-24 font-sans">
      <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
        
        {/* Right Mockups (show on top for mobile) */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center sm:gap-16 order-1 md:order-2">
          <img
            src={SignupMockup}
            alt="Signup Screen"
            className="w-40 sm:w-44 md:w-48 object-contain mb-6 sm:mb-0"
          />
          <img
            src={LoginMockup}
            alt="Login Screen"
            className="w-40 sm:w-44 md:w-48 object-contain sm:mt-16 md:mt-52"
          />
        </div>

        {/* Left Content (below on mobile) */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-black mb-6 leading-snug">
            Referral Code Access – Enter a valid referral code to unlock your Pixla account.
          </h2>

          <ol className="list-decimal list-inside text-gray-700 space-y-3 text-sm sm:text-base leading-relaxed">
            <li>
              <strong>Referral Code Access</strong> – Enter a valid referral code to unlock your Pixla account.

            </li>
            <li>
              <strong>Referral Rewards</strong> – Earn a share from your network’s subscriptions, jewellery redemptions, and digital gold savings.

            </li>
            <li>
              <strong>Welcome Bonus</strong> – Get free Gold Dots when you join through a referral.

            </li>
            <li>
              <strong>Priority Access</strong> –  Enjoy early access to new offers, updates, and premium features.

            </li>
            <li>
              <strong>Community Growth</strong> – Invite more users to increase your earnings and rewards.

            </li>
            <li>
              <strong>Exclusive Ecosystem</strong> –  Only verified referral users can join, ensuring trust and high-quality members.
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
};

export default ReferralSection;
