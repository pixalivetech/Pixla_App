import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-white py-16 px-6 md:px-24 font-sans"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            About Pixla
          </h2>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <p className="text-gray-700 text-base md:text-lg leading-8 mb-8">

            Pixla Gold Network is India’s creator-powered
            social digital gold savings ecosystem connecting
            users, creators, jewellery partners and franchise
            entrepreneurs through one platform.

            <br />
            <br />

            Pixla combines social engagement,
            creator economy, digital gold savings
            and trusted jewellery networks into a
            community-driven ecosystem.

          </p>

          {/* Features */}
          <div className="space-y-4 border-l-2 border-yellow-500 pl-5">

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-500 mt-1" />
              <span>Save digital gold through the ecosystem</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-500 mt-1" />
              <span>Engage with creators and communities</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-500 mt-1" />
              <span>Earn Gold Dots and rewards</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-500 mt-1" />
              <span>Redeem jewellery through partners</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-500 mt-1" />
              <span>Join referral savings communities</span>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-yellow-500 mt-1" />
              <span>Become franchise partners</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;