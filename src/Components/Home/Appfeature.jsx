import React from "react";

const features = [
  {
    icon: "🎥",
    title: "Creator-Powered Gold Earnings",
    description:
      "Creators earn Gold Dots through views, likes, comments, shares, audience engagement, referrals, and business growth generated through their content.",
  },
  {
    icon: "🪙",
    title: "Smart Digital Gold Savings",
    description:
      "Users can securely buy, save, grow, and redeem digital gold anytime through a trusted and transparent ecosystem.",
  },
  {
    icon: "🏪",
    title: "Trusted Jewellery Redemption Network",
    description:
      "Redeem digital gold and access exclusive benefits through verified local jewellery partners across India.",
  },
  {
    icon: "📺",
    title: "Live Streaming & Real-Time Engagement",
    description:
      "Creators can go live, connect with audiences instantly, increase engagement, and grow powerful creator communities.",
  },
  {
    icon: "🤝",
    title: "Referral & Community Growth Engine",
    description:
      "Build referral networks, expand communities, and unlock ecosystem rewards through engagement-driven participation.",
  },
  {
    icon: "🌍",
    title: "Exclusive Pincode Franchise Network",
    description:
      "Franchise partners receive exclusive pincode operational rights to build and scale local Pixla Gold communities and business ecosystems.",
  },
  {
    icon: "✨",
    title: "Gold Dots Rewards Ecosystem",
    description:
      "A next-generation creator reward system designed to encourage content creation, engagement, referrals, and ecosystem growth.",
  },
  {
    icon: "🔐",
    title: "Secure Digital Gold Wallet",
    description:
      "Safely manage, track, monitor, and grow digital gold savings and rewards within a secure platform environment.",
  },
  {
    icon: "💎",
    title: "Premium Subscription Experience",
    description:
      "Unlock enhanced rewards, premium tools, exclusive features, advanced earning opportunities, and elevated ecosystem access.",
  },
  {
    icon: "🎁",
    title: "Campaigns, Offers & Festival Rewards",
    description:
      "Participate in exciting campaigns, seasonal offers, festival savings programs, and exclusive community reward activities.",
  },
  {
    icon: "🌱",
    title: "Pixla Green Mission",
    description:
      "Every gram of gold sold and every subscription contributes towards tree plantation initiatives and sustainability-driven impact programs.",
  },
  {
    icon: "🚀",
    title: "India’s Creator-Driven Social Gold Ecosystem",
    description:
      "Pixla Gold Network combines creator economy, social engagement, digital gold savings, jewellery partnerships, and franchise expansion into one powerful scalable ecosystem.",
  },
];

const AppFeatures = () => {
  return (
    <section
      id="features"
      className="bg-white py-16 px-6 md:px-24 font-sans"
    >
      {/* Heading */}
      <div className="mb-14">
        <h2 className="text-3xl md:text-5xl font-semibold text-black mb-4">
          App Features
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
          Discover the complete Pixla ecosystem designed around creators,
          digital gold savings, community engagement, rewards, and
          sustainable growth.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-white to-yellow-50 border border-yellow-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-4xl mb-6">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-black mb-4 leading-snug">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-4xl font-semibold text-black mb-4">
          India’s Creator-Powered Gold Ecosystem
        </h3>

        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Pixla Gold Network brings creators, digital gold savings,
          jewellery partnerships, referral communities, rewards,
          subscriptions, franchise opportunities, and sustainability
          initiatives together in one scalable ecosystem.
        </p>
      </div>
    </section>
  );
};

export default AppFeatures;