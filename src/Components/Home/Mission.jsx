import React from "react";

const MissionVisionSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-24 font-sans">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>

          <p className="text-yellow-500 font-medium mb-3">
            Pixla Foundation
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            Our Mission & <br />
            Vision
          </h2>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* Mission */}
          <div className="pl-6 border-l-4 border-yellow-500">

            <h3 className="text-2xl font-semibold text-black mb-3">
              Mission
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-8">
              To create a trusted digital gold ecosystem
              that helps users save gold, supports creators,
              empowers entrepreneurs and connects communities
              through social engagement and technology.
            </p>

          </div>

          {/* Vision */}
          <div className="pl-6 border-l-4 border-black">

            <h3 className="text-2xl font-semibold text-black mb-3">
              Vision
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-8">
              To build India’s largest creator-driven
              social digital gold savings ecosystem
              connecting users, creators, jewellery
              partners and franchise entrepreneurs.
            </p>

          </div>

        </div>

      </div>

      {/* PIXLA GROUP BOX */}
      <div className="max-w-7xl mx-auto mt-14">

        <div className="bg-gradient-to-r from-yellow-50 to-white border border-yellow-100 rounded-3xl p-8">

          <p className="text-yellow-500 font-semibold mb-3">
            Powered By Pixla Group
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Building Digital Ecosystems for Future Growth
          </h3>

          <p className="text-gray-600 text-base md:text-lg leading-8 mb-6">

            Pixla Group focuses on building
            technology-driven platforms connecting
            digital gold, creator economy,
            communities, local businesses and
            growth ecosystems across India.

            <br />
            <br />

            Through innovation and trusted
            partnerships, Pixla Group aims
            to create long-term value for
            users, creators and entrepreneurs.

          </p>

          <a
            href="https://www.pixlagroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition"
          >
            Visit Pixla Group
          </a>

        </div>

      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-200">

        <p className="text-gray-500 text-lg">

          Powered by{" "}

          <span className="font-semibold text-black">
            Pixla Group
          </span>

          {" "}— Gold for Every Home.
          Growth for Every Indian.

        </p>

      </div>

    </section>
  );
};

export default MissionVisionSection;