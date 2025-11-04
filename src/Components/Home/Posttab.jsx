import React from "react";
import PostMockup1 from "./../../assets/Home/posttab1.png"; // left phone
import PostMockup2 from "./../../assets/Home/posttab2.png"; // right phone

const CreatePostTabSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24 font-sans">
      <div className="grid md:grid-cols-2 items-center gap-12 md:gap-20">
        {/* Left Side - Two Phone Mockups */}
        <div className="flex justify-center md:justify-start gap-6">
          <img
            src={PostMockup1}
            alt="Pixla Create Post Screen 1"
            className="w-44 md:w-52 object-contain"
          />
          <img
            src={PostMockup2}
            alt="Pixla Create Post Screen 2"
            className="w-44 md:w-52 object-contain"
          />
        </div>

        {/* Right Side - Text Content */}
        <div>
          <h2 className="text-xl md:text-3xl font-semibold text-black mb-2">
           Pixla Create & Upload
          </h2>
          {/* Tagline */}
          <p className="text-yellow-500 text-sm sm:text-base md:text-lg font-semibold mb-5">
            Upload videos, go viral, and Earn Every Swipe.
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-3 text-sm md:text-base leading-relaxed">
            <li>
              Upload or Record – Choose videos from your gallery or record directly within the app.
            </li>
            <li>
              Add Sounds – Enhance your videos with trending music and audio tracks.
            </li>
            <li>
              Creator Badge – Post consistently to earn the Pixla Creator Badge — a mark of talent and recognition.
            </li>
            <li>
              Earn Gold Dots – Once you’re a verified Creator, you’ll start earning Gold Dots for every post you share.
            </li>
            <li>
              Grow Your Audience – The more engagement your posts receive, the higher your rewards and visibility.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CreatePostTabSection;
