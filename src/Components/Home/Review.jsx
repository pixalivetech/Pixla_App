import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { FaApple } from "react-icons/fa";

const reviews = [
  {
    text: "Pixla Gold Network gives creators a completely new opportunity to earn through engagement, referrals, and community growth. The ecosystem feels innovative and future-ready.",
    name: "Arjun K.",
  },

  {
    text: "I really liked the combination of creator engagement and digital gold savings. The jewellery partner ecosystem adds trust and long-term value.",
    name: "Priya M.",
  },

  {
    text: "The exclusive pincode franchise concept looks powerful. It creates strong opportunities for local business expansion and community building.",
    name: "Naveen R.",
  },

  {
    text: "Creators earning Gold Dots through views, likes, comments, shares, and referrals makes Pixla very different from traditional platforms.",
    name: "Deepika S.",
  },

  {
    text: "Pixla Gold Network combines creator economy, social engagement, digital gold, and rewards into one impressive ecosystem.",
    name: "Santhosh V.",
  },

  {
    text: "The jewellery redemption support through trusted partners gives confidence to users who want to build digital gold savings regularly.",
    name: "Kavitha P.",
  },

  {
    text: "Building wealth through engagement while supporting sustainability initiatives makes Pixla Gold Network stand out from other platforms.",
    name: "Rahul D.",
  },
];
const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change reviews every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F9C900] py-16 px-6 md:px-20 text-center font-sans transition-all">
      {/* Ratings Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-32 mb-12">
        {/* Play Store Rating */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-black">
            <p className="text-7xl font-semibold">5.0</p>
            <Star className="w-15 h-15 stroke-black" />
          </div> <br />
          <p className="text-black mt-2 font-medium text-xl">Play Store</p><br />
          <a
            href="#"
            className="mt-4 hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* App Store Rating */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-black">
            <p className="text-7xl font-semibold">4.9</p>
            <Star className="w-15 h-15 stroke-black" />
          </div><br />
          <p className="text-black mt-2 font-medium text-xl">App Store</p><br />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-300 text-black px-4 py-2 mt-4 rounded-lg hover:bg-gray-100 transition-all"
          >
            <FaApple className="text-xl" />
            <span className="font-medium text-sm md:text-base">
              Download App
            </span>
          </a>
        </div>
      </div>

      {/* Review Text Section */}
      <div className="max-w-2xl mx-auto transition-all duration-700 ease-in-out">
        <p className="text-black text-base md:text-lg italic leading-relaxed min-h-[100px]">
          “{reviews[currentIndex].text}”
        </p>
        <p className="text-black font-semibold mt-4">
          {reviews[currentIndex].name}
        </p>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-black scale-125" : "bg-black/30"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
