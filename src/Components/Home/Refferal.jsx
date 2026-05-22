import React from "react";
import {
  FaUserFriends,
  FaGift,
  FaCoins,
  FaCrown,
} from "react-icons/fa";

const ReferralSection = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-24 font-sans">

      <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">

        {/* RIGHT DESIGN */}
        <div className="relative flex justify-center order-1 md:order-2">

          <div className="relative w-[320px] h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            {/* Blur Effect */}
            <div className="absolute top-8 left-6 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Referral Card */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center w-[240px]">

              <div className="flex justify-center mb-4">
                <FaUserFriends className="text-5xl text-yellow-600" />
              </div>

              <h3 className="text-xl font-bold mb-2">
                Referral Network
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                Grow community, invite users and
                unlock rewards through Pixla.
              </p>

            </div>

            {/* Floating Reward */}
            <div className="absolute top-8 right-2 bg-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2">

              <FaGift className="text-yellow-500" />

              <div>
                <h4 className="font-semibold text-sm">
                  Welcome Bonus
                </h4>

                <p className="text-xs text-gray-500">
                  Free Gold Dots
                </p>
              </div>

            </div>

            {/* Floating Earnings */}
            <div className="absolute bottom-8 left-2 bg-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2">

              <FaCoins className="text-yellow-600" />

              <div>
                <h4 className="font-semibold text-sm">
                  Rewards
                </h4>

                <p className="text-xs text-gray-500">
                  Referral Income
                </p>
              </div>

            </div>

            {/* Premium Tag */}
            <div className="absolute bottom-24 right-5 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2">

              <FaCrown className="text-yellow-400" />

              <span className="text-xs">
                Priority Access
              </span>

            </div>

          </div>

        </div>

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left order-2 md:order-1">

          <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-black mb-6 leading-snug">
            Referral Code Access – Enter a valid
            referral code to unlock your Pixla
            account.
          </h2>

          <ol className="list-decimal list-inside text-gray-700 space-y-3 text-sm sm:text-base leading-relaxed">

            <li>
              <strong>Referral Code Access</strong> –
              Enter a valid referral code to unlock
              your account.
            </li>

            <li>
              <strong>Referral Rewards</strong> –
              Earn from subscriptions, jewellery
              redemptions and digital gold savings.
            </li>

            <li>
              <strong>Welcome Bonus</strong> –
              Receive free Gold Dots on joining.
            </li>

            <li>
              <strong>Priority Access</strong> –
              Get early access to offers and features.
            </li>

            <li>
              <strong>Community Growth</strong> –
              Increase network and rewards.
            </li>

            <li>
              <strong>Exclusive Ecosystem</strong> –
              Verified users ensure trusted members.
            </li>

          </ol>

        </div>

      </div>

    </section>
  );
};

export default ReferralSection;