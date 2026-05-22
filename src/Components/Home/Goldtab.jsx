import React from "react";

const PixlaGoldTabSection = () => {

  const items = [
    {
      title: "Earn & Save",
      content:
        "Earn Gold Dots automatically for daily activity and build long-term wealth.",
    },
    {
      title: "Start Investing from ₹10",
      content:
        "Buy digital gold instantly with Daily, Weekly or Monthly plans.",
    },
    {
      title: "Redeem for 22K Jewellery",
      content:
        "Convert Gold Dots into certified jewellery securely.",
    },
    {
      title: "Sell / Exchange Old Gold",
      content:
        "Exchange old gold for Gold Dots or digital balance.",
    },
    {
      title: "100% Secure & Transparent",
      content:
        "Insured storage with transparent tracking.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-24 font-sans">

      {/* Top Section */}

      <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-10">

        <div>

          <h2 className="text-xl md:text-3xl font-semibold text-black mb-2">
            Pixla Gold
          </h2>

          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mb-4">
            Turn Every Gram into Growth
            <br />
            Wealth for You, Life for Earth.
          </p>

        </div>

        <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-md">
          Turn everyday actions into wealth.
          Every swipe, referral and purchase
          earns Gold Dots toward real gold.
        </p>

      </div>

      {/* Bottom Section */}

      <div className="grid md:grid-cols-2 items-start gap-16">

        {/* Left Content */}

        <div className="space-y-5">

          {items.map((item, index) => (

            <div key={index} className="p-4">

              <h4 className="font-semibold text-black text-base md:text-lg mb-1">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.content}
              </p>

            </div>

          ))}

        </div>

        {/* Right Premium Card */}

        <div className="flex justify-center md:justify-end">

          <div className="relative w-[320px] h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            {/* Blur */}

            <div className="absolute top-8 left-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center w-[240px]">

                <div className="text-6xl mb-4">
                  🪙
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Pixla Gold
                </h3>

                <p className="text-sm text-gray-600 leading-6">
                  Earn, save and convert
                  digital gold rewards.
                </p>

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute top-8 right-4 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600">
                ₹10 Start
              </h4>

              <p className="text-xs text-gray-500">
                Digital Saving
              </p>

            </div>

            <div className="absolute bottom-8 left-4 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600">
                22K Gold
              </h4>

              <p className="text-xs text-gray-500">
                Redeem Anytime
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PixlaGoldTabSection;