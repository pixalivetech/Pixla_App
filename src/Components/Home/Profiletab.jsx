import React from "react";

const ProfileTabSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 font-sans text-black overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT CARD */}
        <div className="order-1 lg:order-1 flex justify-center">

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
                  referrals and profile
                  management.
                </p>

              </div>

            </div>

            {/* Floating Top Card */}
            <div className="absolute top-6 right-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600 text-sm">
                Gold Wallet
              </h4>

              <p className="text-xs text-gray-500">
                Track Dots
              </p>

            </div>

            {/* Floating Bottom Card */}
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

        {/* RIGHT CONTENT */}
        <div className="order-2 lg:order-2 text-center lg:text-left">

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pixla Profile
          </h2>

          <p className="text-yellow-500 text-base md:text-xl font-semibold mb-6">
            Your Profile. Your Growth. Your Rewards.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">

            Manage your profile,
            creator achievements,
            Gold Dots wallet,
            referrals and ecosystem
            activities in one place
            within Pixla Gold Network.

            <br />
            <br />

            Track Gold Dots,
            monitor creator badges,
            engagement growth,
            manage communities,
            customize settings and
            access support features
            anytime.

          </p>

        </div>

      </div>

    </section>
  );
};

export default ProfileTabSection;