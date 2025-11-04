import React from "react";

const MissionVisionSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Side - Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            Our Mission & <br /> Vision
          </h2>
        </div>

        {/* Right Side - Mission & Vision Box */}
        <div className="border-l border-gray-700 pl-6 md:pl-8 text-gray-700">
          {/* Mission */}
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
              Mission
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              To empower every Indian to build wealth through digital engagement — 
              turning every swipe, share, and purchase into real financial growth 
              backed by gold.
            </p>
            <hr className="border-gray-700" />
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
              Vision
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              To become India’s most trusted digital wealth and media ecosystem — 
              where entertainment, shopping, and savings come together for a 
              financially stronger nation.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div className="max-w-7xl mx-auto mb-2 mt-8 md:mb-15">
        <p className="text-xl text-gray-500">
          Powered by <span className="font-medium text-gray-700">Pixla Group</span> — Innovating India’s Digital Future.
        </p>
      </div>
    </section>
  );
};

export default MissionVisionSection;
