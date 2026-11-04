"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-14"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl p-10 shadow-lg"
        >

          <p className="text-lg leading-9 text-gray-300">
            I am <span className="text-blue-400 font-semibold">Samarth Birajdar</span>,
            a Final-Year Computer Science Engineering student at
            Pimpri Chinchwad University.

            I enjoy solving real-world problems through Machine Learning,
            Artificial Intelligence and Software Development.

            My interests include Time-Series Forecasting,
            Natural Language Processing,
            Data Analytics and Full Stack Development.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-300">
            During my academic journey, I have developed projects like
            <span className="text-white font-semibold">
              {" "}Sales Forecasting & Demand Intelligence
            </span>,
            <span className="text-white font-semibold">
              {" "}Hospital Mortality Prediction
            </span>,
            and
            <span className="text-white font-semibold">
              {" "}House Price Prediction
            </span>,
            where I applied Machine Learning models to solve practical business
            and healthcare challenges.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-300">
            I am currently looking for opportunities in
            Software Development,
            Machine Learning,
            Artificial Intelligence and
            Data Engineering where I can contribute,
            learn and grow professionally.
          </p>

        </motion.div>

      </div>
    </section>
  );
}