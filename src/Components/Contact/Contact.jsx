import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
};

export default function ContactSection() {

  const formRef = useRef();

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    subMessage: "",
    success: true,
  });

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_m1z7c4l",
        "template_x24hxvq",
        formRef.current,
        "Nd39EiR0JFpU46o8O"
      )

      .then(() => {

        setPopup({
          show: true,
          message: "Message Sent Successfully 🎉",

          subMessage:
            "Our team will contact you shortly.",

          success: true,
        });

        formRef.current.reset();

      })

      .catch(() => {

        setPopup({
          show: true,
          message: "Failed To Send ❌",

          subMessage:
            "Please try again later.",

          success: false,
        });

      });

  };

  return (

    <>
    
      <section
        id="contact"
        className="
        bg-white
        py-14
        md:py-20
        mt-5
        text-black
        "
      >

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">

          {/* Heading */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-14"
          >

            <p className="
            text-yellow-500
            tracking-[4px]
            mt-10
            mb-4
            text-md
            "
            >
              CONTACT US
            </p>

            <h2 className="
            text-3xl
            md:text-4xl
            font-semibold
            "
            >
              Connect With

              <span className="text-yellow-500">
                {" "}
                Pixla Gold
              </span>

            </h2>

          </motion.div>

          <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-10
          items-start
          ">

            {/* LEFT */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="
              space-y-10
              order-2
              lg:order-1
              "
            >

              <div>

                <h3 className="
                font-semibold
                text-xl
                mb-5
                "
                >
                  Office Details
                </h3>

                <div className="
                space-y-5
                text-gray-700
                "
                >

                  <div className="flex gap-3">

                    <FiMapPin className="
                    text-yellow-500
                    mt-1
                    "
                    />

                    <span>
                      Pixla Gold Corp Pvt Ltd, India
                    </span>

                  </div>

                  <div className="flex gap-3">

                    <FiPhone className="
                    text-yellow-500
                    mt-1
                    "
                    />

                    <span>
                      +91 87785 84566
                    </span>

                  </div>

                  <div className="flex gap-3">

                    <FiMail className="
                    text-yellow-500
                    mt-1
                    "
                    />

                    <span>
                      pixlagroup@gmail.com
                    </span>

                  </div>

                </div>

              </div>

              <div>

                <h3 className="
                font-semibold
                text-xl
                mb-5
                "
                >
                  Office Hours
                </h3>

                <div className="
                space-y-4
                text-gray-700
                "
                >

                  <div className="flex gap-3">

                    <FiClock className="
                    text-yellow-500
                    mt-1
                    "
                    />

                    <span>
                      Monday - Friday :
                      9 AM - 6 PM
                    </span>

                  </div>

                  <div className="flex gap-3">

                    <FiClock className="
                    text-yellow-500
                    mt-1
                    "
                    />

                    <span>
                      Saturday :
                      10 AM - 2 PM
                    </span>

                  </div>

                  <div className="flex gap-3">

                    <FiClock className="
                    text-yellow-500
                    mt-1
                    "
                    />

                    <span>
                      Sunday Closed
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* FORM */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="
              lg:col-span-2
              bg-white
              rounded-2xl
              p-6
              md:p-8
              shadow-xl
              border
              border-gray-200
              order-1
              lg:order-2
              "
            >

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-6"
              >

                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Full Name"
                  className="
                  w-full
                  p-3
                  bg-gray-50
                  border
                  border-gray-300
                  rounded-lg
                  outline-none
                  focus:border-yellow-500
                  "
                />

                <div className="
                grid
                md:grid-cols-2
                gap-5
                "
                >

                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="Email"
                    className="
                    p-3
                    bg-gray-50
                    border
                    border-gray-300
                    rounded-lg
                    "
                  />

                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Phone"
                    className="
                    p-3
                    bg-gray-50
                    border
                    border-gray-300
                    rounded-lg
                    "
                  />

                </div>

                <select
                  name="enquiry"
                  required
                  className="
                  w-full
                  p-3
                  bg-gray-50
                  border
                  border-gray-300
                  rounded-lg
                  "
                >

                  <option value="">
                    Select Enquiry
                  </option>

                  <option>
                    General
                  </option>

                  <option>
                    Franchise
                  </option>

                  <option>
                    Investment
                  </option>

                </select>

                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Your Message"
                  className="
                  w-full
                  p-3
                  bg-gray-50
                  border
                  border-gray-300
                  rounded-lg
                  resize-none
                  "
                />

                <button
                  className="
                  w-full
                  bg-yellow-500
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  hover:bg-yellow-600
                  duration-300
                  "
                >
                  Submit Enquiry
                </button>

              </form>

            </motion.div>

          </div>

        </div>

      </section>

      {/* POPUP */}

      {popup.show && (

        <div className="
        fixed
        inset-0
        bg-black/60
        flex
        items-center
        justify-center
        z-50
        px-4
        ">

          <div className="
          bg-white
          rounded-2xl
          p-8
          max-w-sm
          w-full
          text-center
          "
          >

            <div className="text-5xl mb-4">

              {popup.success
                ? "✅"
                : "❌"}

            </div>

            <h3 className="
            text-xl
            font-semibold
            mb-3
            "
            >
              {popup.message}
            </h3>

            <p className="text-gray-600">
              {popup.subMessage}
            </p>

            <button
              onClick={() =>
                setPopup({
                  ...popup,
                  show: false,
                })
              }
              className="
              mt-6
              bg-yellow-500
              text-white
              px-6
              py-2
              rounded-lg
              "
            >
              OK
            </button>

          </div>

        </div>

      )}

    </>

  );

}