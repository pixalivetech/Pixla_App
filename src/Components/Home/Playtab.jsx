import React from "react";

const PlaysAndGoldDotsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 font-sans overflow-hidden">

      {/* ================= PIXLA PLAYS ================= */}

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 mb-24">

        {/* CARD FIRST */}
        <div className="order-1 lg:order-1 flex justify-center">

          <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            <div className="absolute top-8 left-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl text-center w-[220px] sm:w-[240px]">

                <div className="text-5xl sm:text-6xl mb-4">
                  ▶️
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Pixla Plays
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-6">
                  Watch, swipe and discover
                  trending creators.
                </p>

              </div>

            </div>

            {/* Top Badge */}
            <div className="absolute top-6 right-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600 text-sm">
                + Gold Dots
              </h4>

              <p className="text-xs text-gray-500">
                Every View
              </p>

            </div>

            {/* Bottom Badge */}
            <div className="absolute bottom-8 left-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600 text-sm">
                Trending
              </h4>

              <p className="text-xs text-gray-500">
                Creator Videos
              </p>

            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="order-2 lg:order-2 text-center lg:text-left">

          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Pixla Plays
          </h2>

          <p className="text-yellow-500 text-base md:text-xl font-semibold mb-6">
            Watch. Swipe. Discover Trending Creators.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">

            Pixla Plays is the entertainment
            hub where users watch engaging
            short videos and discover creators.

            <br /><br />

            Creators earn Gold Dots through
            views, likes, comments, shares
            and audience engagement.

            <br /><br />

            Every interaction helps creators
            grow rewards and influence.

          </p>

        </div>

      </div>

      {/* ================= GOLD DOTS ================= */}

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

        {/* CARD FIRST */}
        <div className="order-1 lg:order-2 flex justify-center">

          <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            <div className="absolute top-8 left-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl text-center w-[220px] sm:w-[240px]">

                <div className="text-5xl sm:text-6xl mb-4">
                  🪙
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Gold Dots
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-6">
                  Earn, manage and grow
                  digital rewards.
                </p>

              </div>

            </div>

            {/* Top Badge */}
            <div className="absolute top-6 right-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600 text-sm">
                1L Dots
              </h4>

              <p className="text-xs text-gray-500">
                = 1 Gram
              </p>

            </div>

            {/* Bottom Badge */}
            <div className="absolute bottom-8 left-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600 text-sm">
                Grow Gold
              </h4>

              <p className="text-xs text-gray-500">
                Partner Benefits
              </p>

            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">

          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Manage Gold Dots
          </h2>

          <p className="text-yellow-500 text-base md:text-xl font-semibold mb-6">
            Earn. Manage. Grow.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">

            Earn and manage Gold Dots
            through creator engagement,
            views, likes, comments,
            referrals and participation.

            <br /><br />

            Track total Gold Dots,
            monitor growth and explore
            jewellery benefits through
            partner networks.

            <br /><br />

            <span className="font-semibold text-black">
              1 gram gold = 1,00,000 Gold Dots
            </span>

            <br /><br />

            Grow participation through
            subscriptions and community
            activities.

          </p>

        </div>

      </div>

    </section>
  );
};

export default PlaysAndGoldDotsSection;