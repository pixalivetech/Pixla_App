import React from "react";

const CreatePostTabSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24 font-sans">

      <div className="grid md:grid-cols-2 items-center gap-12 md:gap-20">

        {/* Left Premium Design */}

        <div className="flex justify-center md:justify-start">

          <div className="relative w-[320px] h-[420px] rounded-[35px] bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-500 shadow-2xl overflow-hidden">

            {/* Blur Effects */}

            <div className="absolute top-8 left-8 w-24 h-24 bg-white/40 rounded-full blur-2xl"></div>

            <div className="absolute bottom-10 right-8 w-28 h-28 bg-yellow-300 rounded-full blur-3xl"></div>

            {/* Main Card */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center w-[240px]">

                <div className="text-6xl mb-4">
                  🎥
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Create & Upload
                </h3>

                <p className="text-sm text-gray-600 leading-6">
                  Upload videos, grow audience
                  and earn Gold Dots.
                </p>

              </div>

            </div>

            {/* Floating Card 1 */}

            <div className="absolute top-8 right-4 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-yellow-600">
                Creator Badge
              </h4>

              <p className="text-xs text-gray-500">
                Verified Creator
              </p>

            </div>

            {/* Floating Card 2 */}

            <div className="absolute bottom-8 left-4 bg-white px-4 py-3 rounded-2xl shadow-lg">

              <h4 className="font-semibold text-green-600">
                Gold Rewards
              </h4>

              <p className="text-xs text-gray-500">
                Earn Per Post
              </p>

            </div>

          </div>

        </div>

        {/* Right Content */}

        <div className="text-center md:text-left">

          <h2 className="text-xl md:text-3xl font-semibold text-black mb-2">
            Pixla Create & Upload
          </h2>

          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mb-5">
            Upload videos, go viral and Earn Every Swipe.
          </p>

          <ol className="list-decimal list-inside text-gray-700 space-y-3 text-sm md:text-base leading-relaxed text-left">

            <li>
              Upload or Record – Choose videos
              from gallery or record directly.
            </li>

            <li>
              Add Sounds – Use trending music
              and audio tracks.
            </li>

            <li>
              Creator Badge – Post consistently
              to unlock recognition.
            </li>

            <li>
              Earn Gold Dots – Verified creators
              earn rewards on posts.
            </li>

            <li>
              Grow Audience – More engagement
              gives more visibility and rewards.
            </li>

          </ol>

        </div>

      </div>

    </section>
  );
};

export default CreatePostTabSection;