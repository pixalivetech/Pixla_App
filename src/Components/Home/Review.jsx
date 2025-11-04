import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { FaApple } from "react-icons/fa";

const reviews = [
  {
    text: "I love this app! It’s so easy to earn and grow with every swipe on Pixla. Highly recommend it to everyone who wants to build wealth and make an impact.",
    name: "Murali S.",
  },
  {
    text: "“Pixla Gold made investing simple and purposeful. I started with just ₹10 — now I’m earning rewards every day!”",
    name: "Priya S.",
  },
  {
    text: "“The app is smooth, transparent, and beautifully designed. I love the idea that every gram of gold helps plant a tree.”",
    name: "Arun V.",
  },
  {
    text: "“Pixla is not just an app — it’s a movement. I feel proud to be part of India’s first eco-fintech platform.”",
    name: "Sneha R.",
  },
  {
    text: "“Gold Dots are a game changer! I enjoy swiping, creating content, and earning real value.”",
    name: "Karthik M.",
  },
  {
    text: "“I gifted Pixla Gold to my wife — the subscription benefits are amazing and socially meaningful.”",
    name: "Divya P.",
  },
  {
    text: "“This is the future of digital savings. Easy, safe, and rewarding.”",
    name: "Manoj L.",
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
