"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-gray-900 text-white flex items-center pt-24 pb-12 relative overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-400 text-lg font-medium mb-3">
            👋 Hello, I&apos
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Samarth
            <span className="text-blue-500"> Birajdar</span>
          </h1>

          {/* Animated Profession */}
          <div className="text-xl sm:text-2xl text-gray-300 mt-5">
            <TypeAnimation
              sequence={[
                "Computer Engineering Student",
                2000,
                "Machine Learning Enthusiast",
                2000,
                "Software Developer",
                2000,
                "Data Analyst",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Introduction */}
          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            A passionate Final-Year Computer Engineering student specializing
            in Machine Learning, Artificial Intelligence, Data Analytics and
            Software Development. I enjoy transforming real-world problems
            into intelligent, data-driven solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Samarth_Birajdar_Resume.pdf"
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg flex items-center gap-2 font-medium"
            >
              <FaDownload />
              Download Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/samarth3107"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaGithub />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/samarth-ravikiran-birajdar-076324292/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-all duration-300"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>

          {/* Statistics */}
          <div className="flex gap-10 mt-12 flex-wrap">

            <div>
              <h2 className="text-4xl font-bold text-blue-500">6+</h2>
              <p className="text-gray-400 mt-1">Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-500">10+</h2>
              <p className="text-gray-400 mt-1">Certifications</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-500">2+</h2>
              <p className="text-gray-400 mt-1">ML Projects</p>
            </div>

          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 animate-bounce">
            <p className="text-gray-500 text-sm">Scroll Down</p>
            <div className="text-3xl text-blue-500">↓</div>
          </div>
        </div>

        {/* RIGHT SIDE - PROFILE PHOTO */}
        <div className="flex justify-center items-center">
          <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[420px] lg:w-[400px] lg:h-[480px]">

            {/* Blue Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

            {/* Profile Image */}
            <Image
              src="/images/profile.jpg"
              alt="Samarth Birajdar"
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 400px"
              className="relative z-10 rounded-full border-4 border-blue-500 object-cover object-center shadow-2xl shadow-blue-500/20"
            />

          </div>
        </div>

      </div>
    </section>
  );
}