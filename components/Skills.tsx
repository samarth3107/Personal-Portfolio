"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaBrain,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaReact className="text-2xl text-purple-400" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    title: "Backend",
    icon: <FaServer className="text-2xl text-cyan-400" />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MySQL",
      "SQL Queries",
      "Database Design",
    ],
  },

  {
    title: "Programming & AI",
    icon: <FaBrain className="text-2xl text-yellow-400" />,
    skills: [
      "Python",
      "C",
      "C++",
      "Java",
      "Machine Learning",
      "Data Analytics",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "XGBoost",
      "Prophet",
      "SARIMA",
      "Data Structures",
      "Algorithms",
    ],
  },

  {
    title: "Tools & Platforms",
    icon: <FaTools className="text-2xl text-blue-400" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "AutomationEdge",
      "JIRA",
      "Streamlit",
      "Vercel",
      "Problem Solving",
      "SDLC",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0b0b14] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[4px] text-green-400 font-semibold mb-2">
          WHAT I KNOW
        </p>

        <h2 className="text-5xl font-bold">
          Skills & Technologies
        </h2>

        <div className="w-20 h-1 bg-blue-500 rounded-full mt-4 mb-14"></div>

        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#171723] border border-gray-700 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="w-14 h-14 rounded-xl bg-[#24243a] flex items-center justify-center mb-6">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-md text-sm bg-[#24243a] border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-white transition"
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