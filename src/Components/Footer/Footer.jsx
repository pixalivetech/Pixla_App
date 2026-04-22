import React from "react";
import { Link } from "react-router-dom";
import { FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="bg-black text-white px-6 md:px-24 py-12 font-sans"
    >
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-b border-gray-700 pb-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4">Pixla</h2>

          <p className="text-sm md:text-md text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
            Pixla – Empowering India to Save, Earn, and Grow with Gold.
            Simple, secure, and rewarding – invest digitally, redeem physically,
            and grow sustainably.
          </p>
        </div>

        {/* Middle Section */}
        <div className="text-left md:ml-20">
          <h3 className="text-xl md:text-2xl mb-4 font-medium">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm md:text-base text-gray-300">
            <li>
              <Link
                to="/privacy"
                onClick={scrollTop}
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/terms"
                onClick={scrollTop}
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                to="/refund"
                onClick={scrollTop}
                className="hover:text-white transition"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-left">
          <h3 className="text-xl md:text-2xl mb-4 font-medium">
            Our Locations
          </h3>

          <ul className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <li>
              <span className="font-medium text-white">
                1. Bengaluru (HQ)
              </span>
              <br />
              Electronic City,
              <br />
              Karnataka – 560100
            </li>

            <li>
              <span className="font-medium text-white">
                2. Chennai (Campus)
              </span>
              <br />
              Siruseri,
              <br />
              Tamil Nadu – 603103
            </li>

            <li>
              <span className="font-medium text-white">
                3. Krishnagiri (Campus)
              </span>
              <br />
              Periyapanamutlu,
              <br />
              Tamil Nadu – 635001
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 border-t border-gray-700 mt-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-6 gap-4">
          {/* Contact */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl mb-2">Contact us:</p>

            <p className="text-sm text-gray-400">
              <span className="font-medium text-white">Email:</span>{" "}
              support@pixla.in
            </p>
          </div>

          {/* Social */}
          <div className="flex space-x-5 text-gray-400">
            <a
              href="https://www.linkedin.com/company/pixla-gold-network"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FiLinkedin size={22} />
            </a>

            <a
              href="https://www.instagram.com/pixla_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FiInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-sm md:text-lg text-gray-500">
            Copyright © 2025 Tripalive Technology Private Limited.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;