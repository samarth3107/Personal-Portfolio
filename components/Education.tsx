"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBookOpen,
  FaSchool,
} from "react-icons/fa";

const education = [
  {
    icon: <FaGraduationCap className="text-2xl text-blue-400" />,
    title: "Bachelor of Technology",
    subtitle: "Computer Engineering",
    institute: "Pimpri Chinchwad University",
    duration: "2023 - Present",
    score: "CGPA: 7.29 / 10",
    highlights: [
      "Machine Learning",
      "Data Analytics",
      "Software Development",
      "Web Development",
      "Artificial Intelligence",
      "Database Management",
    ],
  },

  {
    icon: <FaBookOpen className="text-2xl text-green-400" />,
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Science",
    institute: "Global Village College of Science",
    duration: "2021 - 2023",
    score: "Percentage: 74.40%",
    highlights: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
    ],
  },

  {
    icon: <FaSchool className="text-2xl text-yellow-400" />,
    title: "Secondary School Certificate (SSC)",
    subtitle: "General Education",
    institute: "St. Joseph High School",
    duration: "2020 - 2021",
    score: "Percentage: 71%",
    highlights: [
      "Secondary Education",
      "Academic Foundation",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#0b0b14] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-green-400 font-semibold mb-2">
          MY BACKGROUND
        </p>

        <h2 className="text-5xl font-bold">
          Education
        </h2>

        <div className="w-20 h-1 bg-blue-500 rounded-full mt-4 mb-14"></div>

        <div className="space-y-8">

          {education.map((item) => (

            <motion.div
              key={item.title}
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.3,
              }}
              className="bg-[#171723] border border-gray-700 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

                {/* Left */}

                <div className="flex gap-5">

                  <div className="w-16 h-16 rounded-xl bg-[#24243a] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>

                    <p className="text-green-400 text-sm font-semibold tracking-wider">
                      {item.duration}
                    </p>

                    <h3 className="text-3xl font-bold mt-2">
                      {item.title}
                    </h3>

                    <h4 className="text-xl text-blue-400 mt-1">
                      {item.subtitle}
                    </h4>

                    <p className="text-gray-400 mt-3">
                      {item.institute}
                    </p>

                  </div>

                </div>

                {/* Right */}

                <div>

                  <span className="bg-[#24243a] border border-blue-700 text-blue-300 px-4 py-2 rounded-lg text-sm">
                    {item.score}
                  </span>

                </div>

              </div>

              <div className="flex flex-wrap gap-3 mt-8">

                {item.highlights.map((skill) => (

                  <span
                    key={skill}
                    className="bg-[#24243a] border border-gray-700 text-gray-300 px-3 py-2 rounded-md text-sm hover:border-blue-500 hover:text-white transition"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}