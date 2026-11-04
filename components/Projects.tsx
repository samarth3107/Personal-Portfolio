"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaChartLine,
  FaHome,
  FaHospital,
  FaUserGraduate,
  FaRobot,
  FaLaptopCode,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaChartLine className="text-2xl text-blue-400" />,
    title: "Retail Sales Forecasting",
    featured: true,
    description:
      "Built an end-to-end machine learning pipeline for retail sales forecasting with anomaly detection, customer segmentation, and an interactive Streamlit dashboard.",
    tech: [
      "Python",
      "XGBoost",
      "SARIMA",
      "Prophet",
      "Streamlit",
    ],
    github: "https://github.com/samarth3107/ML_Project",
  },

  {
    icon: <FaHome className="text-2xl text-green-400" />,
    title: "House Price Prediction",
    featured: true,
    description:
      "Developed a machine learning model using Linear Regression and Random Forest to accurately predict house prices from real estate data.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Random Forest",
    ],
    github:
      "https://github.com/samarth3107/Projects/tree/main/HousePricePrediction_Samarthbirajdar",
  },

  {
    icon: <FaHospital className="text-2xl text-red-400" />,
    title: "Hospital Mortality Prediction",
    featured: true,
    description:
      "Developed a machine learning model to predict hospital mortality using Electronic Health Records and classification algorithms.",
    tech: [
      "Python",
      "Random Forest",
      "SVM",
      "Machine Learning",
    ],
    github: "https://github.com/samarth3107/Hospital-Mortality-Prediction",
  },

  {
    icon: <FaUserGraduate className="text-2xl text-yellow-400" />,
    title: "Student Record Management",
    featured: false,
    description:
      "Designed a CRUD-based student management application with database integration for managing academic records efficiently.",
    tech: [
      "HTML",
      "CSS",
      "MySQL",
    ],
    github: "#",
  },

  {
    icon: <FaRobot className="text-2xl text-cyan-400" />,
    title: "AutomationEdge RPA",
    featured: false,
    description:
      "Automated repetitive business tasks using AutomationEdge RPA to improve efficiency and reduce manual intervention.",
    tech: [
      "AutomationEdge",
      "RPA",
    ],
  },

  {
    icon: <FaLaptopCode className="text-2xl text-purple-400" />,
    title: "Personal Portfolio Website",
    featured: true,
    description:
      "Designed and developed a modern responsive portfolio using Next.js, React, Tailwind CSS, and Framer Motion to showcase projects, skills, certifications, and achievements.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github:"https://github.com/samarth3107/Personal-Portfolio",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0b0b14] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-3">
           Projects
        </h2>

        <div className="w-20 h-1 bg-blue-500 rounded-full mb-14"></div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#171723] border border-gray-700 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Top Section */}
              <div className="flex justify-between items-start">

                <div className="w-16 h-16 rounded-xl bg-[#24243a] flex items-center justify-center">
                  {project.icon}
                </div>

                <div className="flex items-center gap-3">

                  {project.featured && (
                    <span className="text-xs bg-green-900/30 text-green-400 px-3 py-1 rounded-lg">
                      Featured
                    </span>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    <FaGithub size={22} />
                  </a>

                </div>

              </div>

              {/* Content */}
              <div className="mt-8">

                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {project.description}
                </p>

              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-8">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-[#24243a] border border-blue-800 text-blue-300 px-3 py-1 rounded-md"
                  >
                    {tech}
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