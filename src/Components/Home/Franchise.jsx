import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Referral Income",
    desc: "Earn incentives through referrals, digital gold purchases, and active community growth.",
    image:
      "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Digital Gold Sales Commission",
    desc: "Earn commissions through digital gold purchases, savings plans, and jewellery redemption support.",
    image:
      "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Creator Network Earnings",
    desc: "Onboard creators, influencers, and community promoters to grow your network.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Exclusive Pincode Rights",
    desc: "Get exclusive operational rights and business opportunities within your pincode.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Women Entrepreneur Opportunity",
    desc: "Empowering women entrepreneurs through flexible and community-driven digital business opportunities.",
    image:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Community Network Building",
    desc: "Build women savings groups, creator communities, and strong regional engagement.",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const Franchise = () => {
  return (
    <div className="w-full bg-[#f8f8f8] overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-yellow-500 py-16 px-6 md:px-24 overflow-hidden">
        
        <div className="max-w-4xl z-10">
          
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl mt-20 font-bold leading-tight text-black"
          >
            Pixla Gold Network
            <span className="block text-white mt-4">
              Franchise Opportunity
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-lg md:text-2xl text-black/80 leading-relaxed"
          >
            Build and grow a creator-driven digital gold savings ecosystem
            within your pincode area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-black hover:bg-gray-900 text-white font-semibold mb-10 px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
            >
              Apply for Franchise
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-yellow-400/40 to-transparent"></div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Franchise"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              📍 Introduction
            </h2>

            <p className="text-lg text-gray-700 leading-9">
              Pixla Gold Network is India’s creator-powered social digital gold
              savings ecosystem designed to build a nationwide pincode-based
              franchise network across India.
            </p>

            <p className="text-lg text-gray-700 leading-9 mt-6">
              The franchise model empowers local entrepreneurs, especially women
              entrepreneurs, to build and manage digital gold communities within
              their allocated pincode areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              🌟 Franchise Benefits
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Unlock long-term business growth and community-driven earning opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#fafafa] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Includes */}
      <section className="py-16 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              📱 Franchise Package Includes
            </h2>

            <div className="space-y-5">
              {[
                "Exclusive pincode rights",
                "Partner onboarding support",
                "Training and guidance",
                "Franchise dashboard access",
                "Tablet device",
                "Branding and promotional support",
                "Access to the Pixla Gold Network ecosystem",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-2xl px-6 py-5 flex items-center gap-4"
                >
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>

                  <p className="text-lg text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Package"
              className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fee Policy */}
      <section className="py-16 px-6 md:px-24 bg-white">
        <div className="max-w-5xl mx-auto bg-[#f5f5f5] rounded-3xl p-10 md:p-16 shadow-xl">
          
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            📍 Franchise Fee Policy
          </h2>

          <p className="text-2xl font-semibold text-yellow-600 mb-8">
            ₹24,999 – One-Time Franchise Activation Fee
          </p>

          <div className="space-y-6 text-lg text-gray-700 leading-9">
            
            <p>
              The franchise onboarding fee is a one-time business setup and
              activation fee.
            </p>

            <div>
              <p className="font-semibold mb-4">
                This fee covers:
              </p>

              <ul className="list-disc pl-8 space-y-3">
                <li>Exclusive pincode allocation</li>
                <li>Partner onboarding and training</li>
                <li>Tablet device and starter kit</li>
                <li>Technical and operational support</li>
                <li>Access to the Pixla Gold Network ecosystem</li>
              </ul>
            </div>

            <p>
              Once the franchise is activated and onboarding is completed,
              the fee will be treated as non-refundable.
            </p>

            <p>
              Franchise renewal options will be available after completion
              of the 1-year partnership tenure, subject to company policies
              and partner performance.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-6 md:px-24 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            One-Line Vision
          </h2>

          <p className="mt-10 text-2xl md:text-3xl leading-relaxed text-yellow-400 font-medium">
            “Pixla Gold Network empowers local entrepreneurs to build and grow
            a creator-driven digital gold savings ecosystem within their
            pincode area.”
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-12 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
          >
            Become a Franchise Partner
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Franchise;