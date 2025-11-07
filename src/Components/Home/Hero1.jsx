import React from "react";
import { FaApple } from "react-icons/fa";
import PhoneImg from "./../../assets/Home/Handphone.png";
import Mandala from "./../../assets/Home/mandala.png"; // 🌼 your mandala image
import User1 from "./../../assets/Home/user1.png";
import User2 from "./../../assets/Home/user2.png";
import User3 from "./../../assets/Home/user3.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-yellow-500 px-6 md:px-24 font-sans"
    >
      {/* Hero Content */}
      <div className="pt-38 md:pt-56 flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-semibold text-black mb-4">
          Turn Every Swipe into Gold
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 max-w-3xl text-sm md:text-lg leading-relaxed mb-6">
          India’s first app that rewards your social media time with real digital gold.
          Swipe, earn, and grow your gold every day — because your time has real value.
        </p>

        {/* Trusted by section */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="flex -space-x-2">
            <img src={User1} alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={User2} alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src={User3} alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <p className="text-sm md:text-base text-gray-800">
            Trusted By <span className="font-semibold">4,00,000 +</span> people
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center space-x-4 mb-10">
          <a
            href="#"
            className="hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12 w-auto md:h-12"
            />
          </a>

          {/* Apple Store Button */}
          <button className="flex items-center gap-2 bg-white border border-gray-300 text-black px-4 py-2 md:px-6 md:py-3 text-sm font-medium hover:bg-gray-100 transition rounded-lg">
            <FaApple className="text-lg" />
            Download App
          </button>
        </div>

        {/* Phone Image with Mandala background */}
        <div className="relative mt-6 flex justify-center items-center">
          {/* Mandala background (behind phone) */}
          <img
            src={Mandala}
            alt="Mandala Background"
             className="absolute mb-10 md:mb-12 w-[12rem] md:w-[600rem]  opacity-40 animate-spin-slow drop-shadow-[0_0_60px_rgba(255,215,0,0.4)]"
          />

          {/* Phone Image */}
          <img
            src={PhoneImg}
            alt="Pixla App"
            className="relative w-62 md:w-74 object-contain drop-shadow-lg z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
