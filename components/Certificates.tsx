"use client";

import { motion } from "framer-motion";
import {
  FaCertificate,
  FaAward,
  FaLaptopCode,
  FaRobot,
  FaJava,
  FaCloud,
} from "react-icons/fa";

const certificates = [
  {
    title: "Meta - Introduction to Databases",
    issuer: "Coursera",
    year: "2025",
    icon: <FaCertificate className="text-blue-400 text-xl" />,
  },
  {
    title: "AutomationEdge Foundation",
    issuer: "AutomationEdge",
    year: "2025",
    icon: <FaRobot className="text-green-400 text-xl" />,
  },
  {
    title: "Samsung Innovation Campus",
    issuer: "Samsung",
    year: "2025",
    icon: <FaAward className="text-yellow-400 text-xl" />,
  },
  {
    title: "Red Hat AD183",
    issuer: "Red Hat",
    year: "2024",
    icon: <FaJava className="text-red-400 text-xl" />,
  },
  {
    title: "Red Hat CL110",
    issuer: "Red Hat",
    year: "2024",
    icon: <FaCloud className="text-cyan-400 text-xl" />,
  },
  {
    title: "Software Engineering",
    issuer: "Coursera",
    year: "2025",
    icon: <FaLaptopCode className="text-purple-400 text-xl" />,
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#0b0b14] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-green-400 font-semibold mb-2">
          ACHIEVEMENTS
        </p>

        <h2 className="text-5xl font-bold">
          Certifications
        </h2>

        <div className="w-20 h-1 bg-blue-500 rounded-full mt-4 mb-14"></div>

        <div className="grid lg:grid-cols-2 gap-6">

          {certificates.map((certificate) => (
            <motion.div
              key={certificate.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#171723] border border-gray-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-lg bg-[#24243a] flex items-center justify-center">
                    {certificate.icon}
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {certificate.title}
                    </h3>

                    <p className="text-gray-400">
                      {certificate.issuer}
                    </p>

                  </div>

                </div>

                <span className="text-green-400 font-semibold">
                  {certificate.year}
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}