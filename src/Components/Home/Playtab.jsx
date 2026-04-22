import React from "react";
import PlaysMockup from "./../../assets/Home/playsmockup.png";
import Playmandala from "./../../assets/Home/mandala.png";
import GoldDots from "./../../assets/new.png";

const PlaysAndGoldDotsSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-24 font-sans">
      {/* ================= Pixla Plays Section ================= */}
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-20 mb-20">
        {/* Left Image */}
        <div className="relative flex justify-center md:justify-start">
          <img
            src={Playmandala}
            alt="Mandala Background"
            className="absolute w-62 sm:w-70 md:w-[420px] opacity-20 top-30 left-30 transform -translate-x-1/2 -translate-y-1/2 filter brightness-0 invert-[70%] sepia-[100%] hue-rotate-[10deg] saturate-[500%]"
          />

          <img
            src={PlaysMockup}
            alt="Pixla Plays Tab"
            className="w-40 sm:w-48 md:w-56 object-contain relative z-10"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black mb-2">
            Pixla Plays
          </h2>

          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mb-5">
            Watch. Swipe. Earn Every Swipe.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Welcome to the heart of Pixla! In the Plays Tab, users can watch and
            swipe short videos — every swipe earns Gold Dots, Pixla’s unique
            digital gold reward.
          </p>

          <ol className="list-decimal list-inside text-gray-700 space-y-3 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            <li>
              <strong>Earn while you scroll</strong> — The more you swipe and
              watch, the more Gold Dots you earn.
            </li>

            <li>
              <strong>Discover</strong> Explore trending creators and engaging
              content.
            </li>

            <li>
              <strong>Build your digital wealth</strong> Turn everyday
              entertainment into digital gold savings, redeemable as pure gold
              or Pixla Jewellery.
            </li>
          </ol>

          <p className="text-black font-medium text-sm sm:text-base md:text-lg">
            On Pixla, every swipe builds your wealth — literally.
          </p>
        </div>
      </div>

      {/* ================= Gold Dots Section ================= */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black mb-3">
            Manage Gold Dots
          </h2>

          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mb-6">
            Earn. Track. Convert. Grow.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            Turn your time and engagement into real value with Pixla Gold Dots.
            Earn, track, and convert your Gold Dots seamlessly — all in one
            place.
          </p>

          <div className="space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <div>
              <h3 className="text-black font-semibold mb-1">
                Your Digital Gold Wallet
              </h3>
              <p>
                View your total Gold Dots and their real-time value. Watch your
                rewards grow as you engage on the platform.
              </p>
            </div>

            <div>
              <h3 className="text-black font-semibold mb-1">
                Convert to Jewellery
              </h3>
              <p>
                Easily convert your Gold Dots into real gold jewellery through
                our Pixla Gold Network Branches.
              </p>
            </div>

            <div>
              <h3 className="text-black font-semibold mb-1">
                Transparent Conversion
              </h3>
              <p>
                1 gram of gold = 1,00,000 Gold Dots. Simple, clear, and
                consistent value for every user.
              </p>
            </div>

            <div>
              <h3 className="text-black font-semibold mb-1">Grow Your Gold</h3>
              <p>Buy additional Gold Dots to accelerate your savings.</p>
              <p>Convert your balance into jewellery anytime.</p>
              <p>Access verified Pixla Gold Network Branches near you.</p>
            </div>

            <div>
              <h3 className="text-black font-semibold mb-1">
                Partner & Earn More
              </h3>
              <p>
                Become a subscription partner and unlock exclusive benefits,
                higher rewards, and premium features.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={GoldDots}
             alt="Gold Dots"
            className="w-72 sm:w-80 md:w-[420px] rounded-2xl  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PlaysAndGoldDotsSection;