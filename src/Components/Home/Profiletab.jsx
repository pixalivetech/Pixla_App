import React from "react";
import {
  FaUserCircle,
  FaWallet,
  FaCog,
  FaMedal,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

const ProfileTabSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 font-sans text-black">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT PREMIUM DESIGN */}

        <div className="flex justify-center">

          <div className="relative w-[320px] h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            {/* Blur */}

            <div className="absolute top-8 left-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Profile Card */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center w-[240px]">

                <div className="text-6xl mb-4">
                  👤
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Pixla Profile
                </h3>

                <p className="text-sm text-gray-600 leading-6">
                  Rewards, wallet, badges
                  and profile in one place.
                </p>

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute top-8 right-4 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600">
                Gold Wallet
              </h4>

              <p className="text-xs text-gray-500">
                Track Rewards
              </p>

            </div>

            <div className="absolute bottom-8 left-4 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600">
                Creator Badge
              </h4>

              <p className="text-xs text-gray-500">
                Profile Level
              </p>

            </div>

          </div>

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
            Manage profile, achievements,
            wallet and network in one place.
          </p>

          <div className="space-y-6">

            <div className="flex items-start gap-3">
              <FaUserCircle className="text-yellow-600 text-xl" />

              <p className="text-gray-700 text-sm md:text-base">
                <strong>Profile:</strong>
                Edit details, bio and interests.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaWallet className="text-yellow-600 text-xl" />

              <p className="text-gray-700 text-sm md:text-base">
                <strong>Wallet:</strong>
                Track Gold Dots and transactions.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaCog className="text-yellow-600 text-xl" />

              <p className="text-gray-700 text-sm md:text-base">
                <strong>Settings:</strong>
                Privacy and notification controls.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaMedal className="text-yellow-600 text-xl" />

              <p className="text-gray-700 text-sm md:text-base">
                <strong>Rewards & Badges:</strong>
                Monitor creator levels.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaUsers className="text-yellow-600 text-xl" />

              <p className="text-gray-700 text-sm md:text-base">
                <strong>Referral & Network:</strong>
                Manage invites and earnings.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaHeadset className="text-yellow-600 text-xl" />

              <p className="text-gray-700 text-sm md:text-base">
                <strong>Support:</strong>
                Chat support and FAQs anytime.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProfileTabSection;