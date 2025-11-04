import React from "react";
import { FaUserCircle, FaWallet, FaCog, FaMedal, FaUsers, FaHeadset } from "react-icons/fa";
import ProfileMockup from "./../../assets/Home/profiletab.png"; // phone mockup image

const ProfileTabSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 font-sans text-black">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        <div>
          <h3 className="text-sm md:text-2xl font-semibold mb-2">
           Pixla Profile – Your Pixla Identity
          </h3>
          {/* Tagline */}
          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mb-5">
            Your World. Your Identity. Your Pixla.
          </p>
        </div>
        <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-lg">
          Manage everything about your Pixla journey in one place — your profile, achievements,
          rewards, and wallet.
        </p>
      </div>
<br /><br />
      {/* Center Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-5xl font-semibold mb-2">
          Your Digital Identity, Simplified
        </h2>
        <p className="text-gray-700 text-sm md:text-base italic">
          “Your Journey, Your Rewards, Your Identity — All in One Place.”
        </p>
      </div>
<br />
      {/* Bottom Section */}
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          {/* My Profile */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaUserCircle className="text-yellow-600 text-lg" />
              <h4 className="font-semibold text-sm md:text-base">My Profile</h4>
            </div>
            <ol className="list-decimal list-inside text-gray-700 text-sm md:text-base space-y-1">
              <li>Profile Picture, Username, Bio, and Interest Tags.</li>
              <li>View and edit your personal details.</li>
              <li>Linked Phone Number, Email, and KYC status.</li>
              <li>Invite Code display for easy sharing.</li>
            </ol>
          </div>

          {/* Wallet Summary */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaWallet className="text-yellow-600 text-lg" />
              <h4 className="font-semibold text-sm md:text-base">Wallet Summary</h4>
            </div>
            <ol className="list-decimal list-inside text-gray-700 text-sm md:text-base space-y-1">
              <li>Total Gold Dots balance (₹ / grams view).</li>
              <li>Transaction history (Earned / Spent / Redeemed).</li>
              <li>Quick access to Buy Gold and Redeem Options.</li>
            </ol>
          </div>

          {/* Settings */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaCog className="text-yellow-600 text-lg" />
              <h4 className="font-semibold text-sm md:text-base">Settings</h4>
            </div>
            <ol className="list-decimal list-inside text-gray-700 text-sm md:text-base space-y-1">
              <li>Manage Notifications, Privacy, and App Preferences.</li>
              <li>Enable 2FA for secure transactions.</li>
              <li>Connect or disconnect linked social accounts.</li>
            </ol>
          </div>
        </div>

        {/* Center Phone Mockup */}
        <div className="flex justify-center">
          <img
            src={ProfileMockup}
            alt="Pixla Profile Tab"
            className="w-56 md:w-72 object-contain"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* My Rewards & Badges */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaMedal className="text-yellow-600 text-lg" />
              <h4 className="font-semibold text-sm md:text-base">My Rewards & Badges</h4>
            </div>
            <ol className="list-decimal list-inside text-gray-700 text-sm md:text-base space-y-1">
              <li>Track Creator Badges, Gold Dots, and Referral Levels.</li>
              <li>View and edit your personal details.</li>
              <li>Linked Phone Number, Email, and KYC status.</li>
              <li>Invite Code display for easy sharing.</li>
            </ol>
          </div>

          {/* Referral & Network */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaUsers className="text-yellow-600 text-lg" />
              <h4 className="font-semibold text-sm md:text-base">Referral & Network</h4>
            </div>
            <ol className="list-decimal list-inside text-gray-700 text-sm md:text-base space-y-1">
              <li>See your invited users and total earnings from your network.</li>
              <li>Track subscription revenue share, product purchases, and digital gold rewards.</li>
              <li>Copy or share your Referral Code instantly.</li>
            </ol>
          </div>

          {/* Support & Help */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaHeadset className="text-yellow-600 text-lg" />
              <h4 className="font-semibold text-sm md:text-base">Support & Help</h4>
            </div>
            <ol className="list-decimal list-inside text-gray-700 text-sm md:text-base space-y-1">
              <li>Chat with support directly inside the app.</li>
              <li>Raise queries, view FAQs, and check ticket history.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileTabSection;
