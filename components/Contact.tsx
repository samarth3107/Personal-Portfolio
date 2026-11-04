"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-blue-500" size={28} />
              <div>
                <h3>Email</h3>
                <p className="text-gray-400">
                  samarth.birajdar31@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-blue-500" size={28} />
              <div>
                <h3>Phone</h3>
                <p className="text-gray-400">
                  +91 9922508908
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaGithub className="text-blue-500" size={28} />
              <div>
                <h3>GitHub</h3>

                <a
                  href="https://github.com/samarth3107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/samarth3107
                </a>

              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-blue-500" size={28} />
              <div>
                <h3>LinkedIn</h3>

                <a
                  href="YOUR_LINKEDIN_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn Profile
                </a>

              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-blue-500" size={28} />
              <div>
                <h3>Location</h3>
                <p className="text-gray-400">
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 p-4 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 p-4 rounded-lg outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-gray-900 p-4 rounded-lg outline-none"
            ></textarea>

            <button
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}