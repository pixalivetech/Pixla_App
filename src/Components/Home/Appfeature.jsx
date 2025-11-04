import React from "react";

const AppFeatures = () => {
  return (
    <section id="features" className="bg-white py-20 px-6 md:px-24 font-sans">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-black mb-16">
        App Features
      </h2>

      {/* Features */}
      <div className="flex flex-col gap-20 md:gap-24">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 items-start gap-10">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold text-black leading-snug">
              Pixla – India’s First <br /> Financial Improvement App
            </h3>
          </div>
          <div>
            <p className="text-gray-600 text-sm md:text-xl leading-relaxed">
              Pixla combines entertainment, shopping, and wealth-building into
              one powerful ecosystem. Every swipe, share, and purchase you make
              adds real value — in the form of Gold Dots, rewards, and
              opportunities.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 items-start gap-10">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold text-black leading-snug">
              Pixla Invite-Only Accessd
            </h3>
                     {/* Tagline */}
          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mt-2">
            Welcome to the new era of community <br />  powered by Pixla.
          </p>
          </div>
          <div>
            <p className="text-gray-600 text-sm md:text-xl leading-relaxed">
              Pixla is an invite-only app — every new user must enter a Referral
              Code to join our premium community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
