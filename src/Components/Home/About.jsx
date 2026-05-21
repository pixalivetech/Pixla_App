import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-white py-12 px-6 md:px-24 font-sans"
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Side - Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-black">
            About Pixla
          </h2>
        </div>

        {/* Right Side - Content */}
        <div className="text-gray-700 leading-relaxed">
          <p className="text-base md:text-lg mb-6">
            Pixla Gold Network is India’s creator-powered social digital gold
            savings ecosystem designed to connect users, creators, jewellery
            partners, and franchise entrepreneurs through one unified platform.
            <br />
            <br />
            Pixla combines social engagement, creator economy, digital gold
            savings, and trusted local jewellery networks to create a
            next-generation community-driven financial ecosystem.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-black mb-4">
            With Pixla, users can:
          </h3>

          <ul className="space-y-4 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>Save digital gold through the ecosystem</span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>Engage with creators and community networks</span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>Earn Gold Dots through platform activities</span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>
                Redeem jewellery through trusted local partners
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>Join referral-driven savings communities</span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>Access creator-led campaigns and rewards</span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>
                Become franchise partners within their pincode areas
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;