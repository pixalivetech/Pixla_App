import React from "react";
import PlaysMockup from "./../../assets/Home/playsmockup.png";
import Playmandala from "./../../assets/Home/mandala.png";

const PlaysTabSection = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-24  font-sans">
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-20">
        {/* Left: Phone with Mandala Background */}
        <div className="relative flex justify-center md:justify-start">
          {/* Mandala Background */}
          <img
            src={Playmandala}
            alt="Mandala Background"
            className="absolute w-62 sm:w-70 md:w-[420px] opacity-20 top-30 left-30 transform -translate-x-1/2 -translate-y-1/2 filter brightness-0 invert-[70%] sepia-[100%] hue-rotate-[10deg] saturate-[500%]"
          />
          {/* Phone Mockup */}
          <img
            src={PlaysMockup}
            alt="Pixla Plays Tab"
            className="w-40 sm:w-48 md:w-56 object-contain relative z-10"
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black mb-2">
            Pixla Plays
          </h2>
          {/* Tagline */}
          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mb-5">
            Watch. Swipe. Earn Every Swipe.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Welcome to the heart of Pixla! In the Plays Tab, users can watch and swipe short videos — 
            every swipe earns Gold Dots, Pixla’s unique digital gold reward.
          </p>

          <ol className="list-decimal list-inside text-gray-700 space-y-3 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            <li>
              <strong>Earn while you scroll</strong> — The more you swipe and watch, the more Gold Dots you earn.

            </li>
            <li>
              <strong>Discover</strong> Explore trending creators and engaging content.

            </li>
            <li>
              <strong>Build your digital wealth</strong> Turn everyday entertainment into digital gold savings, redeemable as pure gold or Pixla Jewellery.

            </li>
          </ol>

          <p className="text-black font-medium text-sm sm:text-base md:text-lg">
         On Pixla, every swipe builds your wealth — literally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlaysTabSection;
