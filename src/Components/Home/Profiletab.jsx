import React from "react";
import { FaUserCircle, FaWallet, FaCog, FaMedal, FaUsers, FaHeadset } from "react-icons/fa";
import ProfileMockup from "./../../assets/Home/profiletab.png";

const ProfileTabSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 font-sans text-black">

      {/* MAIN ROW - IMAGE LEFT, CONTENT RIGHT */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={ProfileMockup}
            alt="Pixla Profile Tab"
            className="w-60 md:w-80 object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h3 className="text-sm md:text-3xl font-semibold mb-2">
            Pixla Profile – Your Pixla Identity
          </h3>

          <p className="text-yellow-500 text-sm md:text-lg font-semibold mb-4">
            Your Journey. Your Rewards. Your Identity.
          </p>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-8">
            Manage everything in one place — profile, achievements, wallet, and network.
          </p>

          {/* FULL LIST CONTENT */}
          <div className="space-y-6">

            {/* Profile */}
            <div className="flex items-start gap-3">
              <FaUserCircle className="text-yellow-600 text-xl" />
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Profile:</strong> Edit personal details, bio, and interest tags.
              </p>
            </div>

            {/* Wallet */}
            <div className="flex items-start gap-3">
              <FaWallet className="text-yellow-600 text-xl" />
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Wallet:</strong> Track Gold Dots balance, transactions, and redeem options.
              </p>
            </div>

            {/* Settings (remaining point added) */}
            <div className="flex items-start gap-3">
              <FaCog className="text-yellow-600 text-xl" />
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Settings:</strong> Manage privacy, notifications & app preferences easily.
              </p>
            </div>

            {/* Rewards */}
            <div className="flex items-start gap-3">
              <FaMedal className="text-yellow-600 text-xl" />
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Rewards & Badges:</strong> Monitor Creator Badges and referral levels.
              </p>
            </div>

            {/* Network */}
            <div className="flex items-start gap-3">
              <FaUsers className="text-yellow-600 text-xl" />
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Referral & Network:</strong> View invited users and earnings, share your code instantly.
              </p>
            </div>

            {/* Support */}
            <div className="flex items-start gap-3">
              <FaHeadset className="text-yellow-600 text-xl" />
              <p className="text-gray-700 text-sm md:text-base">
                <strong>Support:</strong> Chat, raise queries, and access FAQs anytime.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfileTabSection;
