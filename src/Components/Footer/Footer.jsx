import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const navigate = useNavigate();

  // Function to navigate and scroll to top
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 scroll to top
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
            Pixla Gold – Empowering India to Save, Earn, and Grow with Gold.
            Simple, secure, and rewarding – invest digitally, redeem physically,
            and grow sustainably.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="text-left md:text-left md:ml-20">
          <h3 className="text-xl md:text-2xl mb-4 font-medium">Quick Links</h3>
          <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
            <li>
              <button
                onClick={() => handleLinkClick("/privacy")}
                className="hover:text-white transition bg-transparent border-none outline-none cursor-pointer"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/terms")}
                className="hover:text-white transition bg-transparent border-none outline-none cursor-pointer"
              >
                Terms & Conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/refund")}
                className="hover:text-white transition bg-transparent border-none outline-none cursor-pointer"
              >
                Refund Policy
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section - Our Locations */}
        <div className="text-left md:text-left">
          <h3 className="text-xl md:text-2xl mb-4 font-medium">
            Our Locations
          </h3>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
            <li>
              <span className="font-medium">1. Bengaluru (HQ)</span> –<br />
              Electronic City,<br /> Karnataka – 560100
            </li>
            <li>
              <span className="font-medium">2. Chennai (Campus)</span> –<br />
              Siruseri, Tamil Nadu – 603103
            </li>
            <li>
              <span className="font-medium">3. Krishnagiri (Campus)</span> –<br />
              Periyapanamutlu, Tamil Nadu – 635001
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 border-t border-gray-700 mt-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-6 space-y-4 md:space-y-0">
          {/* Contact Left */}
          <div className="text-center md:text-left">
            <p className="text-2xl md:text-3xl mb-2">Contact us:</p>
            <p className="text-sm text-gray-400">
              <span className="font-medium text-white">Email:</span>{" "}
              support@pixla.in
            </p>
          </div>

          {/* Social Icons Right */}
          <div className="flex justify-center md:justify-end space-x-5 text-gray-400 mt-6">
            <a
              href="https://www.linkedin.com/company/pixla-gold-network"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/pixla_group/"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Copyright Centered */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-sm md:text-lg text-gray-500">
            Copyright © 2025 Tripalive Technology Private Limited. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
