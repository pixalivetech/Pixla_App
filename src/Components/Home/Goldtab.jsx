import React from "react";

const PixlaGoldTabSection = () => {

  const items = [
    {
      title: "Buy Digital Gold",
      content:
        "Start purchasing digital gold securely from as low as ₹1 through flexible savings plans.",
    },
    {
      title: "Save & Grow",
      content:
        "Build long-term wealth through digital gold participation within the Pixla Gold ecosystem.",
    },
    {
      title: "Creator Engagement Rewards",
      content:
        "Creators earn Gold Dots through views, engagement, audience growth and community participation.",
    },
    {
      title: "Referral & Subscription Benefits",
      content:
        "Users can participate through referrals, subscriptions and ecosystem activities.",
    },
    {
      title: "Jewellery Redemption",
      content:
        "Gold and Gold Dots can be redeemed through trusted partner jewellery stores and Pixla Gold branches.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-24 font-sans overflow-hidden">

      {/* TOP SECTION */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-12">

        <div>

          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Pixla Gold
          </h2>

          <p className="text-yellow-500 text-base md:text-xl font-semibold leading-relaxed">
            Buy. Save. Grow Digital Gold
          </p>

        </div>

        <div>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-8 max-w-2xl">

            Pixla Gold helps users buy, save,
            and grow digital gold securely
            within the Pixla Gold ecosystem.

            <br />
            <br />

            Users can start purchasing digital
            gold from as low as ₹1 through
            flexible savings plans designed
            for long-term wealth creation.

            <br />
            <br />

            Creators can earn Gold Dots through
            engagement and community growth,
            while users participate through
            referrals, subscriptions, and
            ecosystem activities.

          </p>

        </div>

      </div>

      {/* BOTTOM SECTION */}

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

        {/* LEFT CONTENT */}

        <div className="space-y-6">

          {items.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-5"
            >

              <h4 className="font-semibold text-black text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm md:text-base leading-7">
                {item.content}
              </p>

            </div>

          ))}

        </div>

        {/* RIGHT CARD */}

        <div className="flex justify-center lg:justify-end">

          <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            {/* Blur Effects */}

            <div className="absolute top-8 left-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-xl text-center w-[220px] sm:w-[240px]">

                <div className="text-5xl sm:text-6xl mb-4">
                  🪙
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Pixla Gold
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-6">
                  Buy, save and grow
                  digital gold securely.
                </p>

              </div>

            </div>

            {/* Floating Card 1 */}

            <div className="absolute top-6 right-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600 text-sm">
                ₹1 Start
              </h4>

              <p className="text-xs text-gray-500">
                Digital Gold
              </p>

            </div>

            {/* Floating Card 2 */}

            <div className="absolute bottom-8 left-3 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600 text-sm">
                Gold Dots
              </h4>

              <p className="text-xs text-gray-500">
                Redeem Benefits
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PixlaGoldTabSection;