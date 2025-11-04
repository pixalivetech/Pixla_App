import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-white py-12 px-6 md:px-24 font-sans">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-black">
            About Pixla
          </h2>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-gray-700 leading-relaxed">
          <p className="text-base md:text-lg mb-6">
            Pixla is India’s first financial improvement app that lets users
            earn digital gold for every swipe. Developed by Tripalive.Me
            Technology Pvt Ltd, Pixla brings together entertainment, social
            engagement, and wealth creation — all in one platform.
          </p>

          <br />

          <h3 className="text-lg md:text-xl font-semibold text-black mb-4">
            With Pixla, users can:
          </h3>

          <ul className="space-y-3 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>Earn Gold Dots by swiping posts.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>Redeem them for products or digital gold.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-black mt-1 text-xl flex-shrink-0" />
              <span>
                Subscribe to Pixla Gold for 10× rewards, no ads, and premium
                benefits.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
