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
    <section className="bg-white py-16 px-6 md:px-24 font-sans text-black overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* RIGHT CONTENT - FIRST IN MOBILE */}
        <div className="order-1 lg:order-2 text-center lg:text-left">

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pixla Profile
          </h2>

          <p className="text-yellow-500 text-base md:text-xl font-semibold mb-6">
            Your Profile. Your Growth. Your Rewards.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-8 mb-10 max-w-2xl mx-auto lg:mx-0">

            Manage your profile, creator
            achievements, Gold Dots wallet,
            referrals, and ecosystem activities
            in one place within the Pixla Gold
            Network.

            <br />
            <br />

            Track Gold Dots, monitor creator
            badges and engagement growth,
            manage referrals and community
            networks, customize privacy
            settings, and access support
            features anytime through your
            personalized Pixla profile.

          </p>

          <div className="space-y-6">

            <div className="flex items-start gap-4 text-left">

              <FaUserCircle className="text-yellow-600 text-xl mt-1" />

              <div>
                <h4 className="font-semibold">
                  Profile Management
                </h4>

                <p className="text-gray-600 text-sm md:text-base">
                  Edit profile details,
                  creator information and
                  preferences.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4 text-left">

              <FaWallet className="text-yellow-600 text-xl mt-1" />

              <div>
                <h4 className="font-semibold">
                  Gold Dots Wallet
                </h4>

                <p className="text-gray-600 text-sm md:text-base">
                  Track Gold Dots,
                  rewards and activity
                  history.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4 text-left">

              <FaMedal className="text-yellow-600 text-xl mt-1" />

              <div>
                <h4 className="font-semibold">
                  Creator Achievements
                </h4>

                <p className="text-gray-600 text-sm md:text-base">
                  Monitor badges,
                  engagement growth
                  and creator levels.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4 text-left">

              <FaUsers className="text-yellow-600 text-xl mt-1" />

              <div>
                <h4 className="font-semibold">
                  Referrals & Community
                </h4>

                <p className="text-gray-600 text-sm md:text-base">
                  Manage referrals,
                  community growth
                  and participation.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4 text-left">

              <FaCog className="text-yellow-600 text-xl mt-1" />

              <div>
                <h4 className="font-semibold">
                  Privacy Settings
                </h4>

                <p className="text-gray-600 text-sm md:text-base">
                  Control notifications,
                  privacy and account
                  settings.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4 text-left">

              <FaHeadset className="text-yellow-600 text-xl mt-1" />

              <div>
                <h4 className="font-semibold">
                  Support Access
                </h4>

                <p className="text-gray-600 text-sm md:text-base">
                  Access FAQs,
                  support and help
                  anytime.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* LEFT CARD - SECOND IN MOBILE */}
        <div className="order-2 lg:order-1 flex justify-center">

          <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            {/* Blur Effects */}
            <div className="absolute top-8 left-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl text-center w-[220px] sm:w-[240px]">

                <div className="text-5xl sm:text-6xl mb-4">
                  👤
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Pixla Profile
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-6">
                  Wallet, rewards,
                  referrals and
                  profile management.
                </p>

              </div>

            </div>

            {/* Floating Card */}
            <div className="absolute top-6 right-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600 text-sm">
                Gold Wallet
              </h4>

              <p className="text-xs text-gray-500">
                Track Dots
              </p>

            </div>

            <div className="absolute bottom-8 left-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600 text-sm">
                Creator Badge
              </h4>

              <p className="text-xs text-gray-500">
                Growth Level
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProfileTabSection;