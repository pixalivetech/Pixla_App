import React from "react";
import {
  FaUserFriends,
  FaGift,
  FaCoins,
  FaCrown,
} from "react-icons/fa";

const ReferralSection = () => {
  return (
    <section className=" py-16 px-6 md:px-24 font-sans overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

        {/* RIGHT DESIGN */}
        <div className="relative flex justify-center order-1 lg:order-2">

          <div className="
            relative
            w-[280px]
            sm:w-[320px]
            md:w-[340px]
            h-[380px]
            sm:h-[420px]
            md:h-[450px]
            rounded-[35px]
            bg-gradient-to-b
            from-yellow-100
            via-yellow-200
            to-yellow-500
            shadow-2xl
            overflow-hidden
          ">

            {/* Blur Effects */}
            <div className="absolute top-8 left-6 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}
            <div className="
              absolute
              top-20
              left-1/2
              -translate-x-1/2
              bg-white/90
              backdrop-blur-lg
              p-5 sm:p-8
              rounded-3xl
              shadow-xl
              text-center
              w-[220px]
              sm:w-[240px]
            ">

              <div className="flex justify-center mb-4">
                <FaUserFriends className="text-4xl sm:text-5xl text-yellow-600" />
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-2">
                Referral Network
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-6">
                Unlock access and grow through
                the Pixla Gold ecosystem.
              </p>

            </div>

            {/* Welcome Bonus */}
            <div className="
              absolute
              top-6
              right-2
              bg-white
              px-3
              py-2
              rounded-2xl
              shadow-lg
              flex
              items-center
              gap-2
            ">

              <FaGift className="text-yellow-500" />

              <div>
                <h4 className="font-semibold text-xs sm:text-sm">
                  Welcome Bonus
                </h4>

                <p className="text-[10px] sm:text-xs text-gray-500">
                  Free Gold Dots
                </p>
              </div>

            </div>

            {/* Rewards */}
            <div className="
              absolute
              bottom-8
              left-2
              bg-white
              px-3
              py-2
              rounded-2xl
              shadow-lg
              flex
              items-center
              gap-2
            ">

              <FaCoins className="text-yellow-600" />

              <div>
                <h4 className="font-semibold text-xs sm:text-sm">
                  Rewards
                </h4>

                <p className="text-[10px] sm:text-xs text-gray-500">
                  Referral Earnings
                </p>
              </div>

            </div>

            {/* Priority Access */}
            <div className="
              absolute
              bottom-24
              right-4
              bg-black
              text-white
              px-3
              py-2
              rounded-full
              flex
              items-center
              gap-2
            ">

              <FaCrown className="text-yellow-400 text-sm" />

              <span className="text-[10px] sm:text-xs">
                Priority Access
              </span>

            </div>

          </div>

        </div>

        {/* LEFT CONTENT */}
        <div className="
          order-2
          lg:order-1
          text-center
          lg:text-left
        ">

          <h2 className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
            text-black
            mb-6
            leading-tight
          ">
            Referral Code Access
          </h2>

          <p className="
            text-sm
            sm:text-base
            md:text-lg
            text-gray-800
            leading-8
            max-w-2xl
            mx-auto
            lg:mx-0
          ">

            Referral Code Access helps users unlock
            and join the trusted Pixla Gold ecosystem
            through community-based onboarding.

            <br />
            <br />

            Users can earn rewards through
            subscriptions, digital gold savings,
            jewellery redemptions, referrals, and
            engagement while accessing exclusive
            offers and ecosystem benefits.

          </p>

        </div>

      </div>

    </section>
  );
};

export default ReferralSection;