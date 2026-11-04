"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#09090F]">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}

          <p className="text-gray-400 text-sm">
            Designed & built by{" "}
            <span className="text-blue-400 font-semibold">
              Samarth Birajdar
            </span>
          </p>

          {/* Center */}

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} • Crafted with passion and code.
          </p>

          {/* Right */}

          <div className="flex items-center gap-8">

            <a
              href="https://github.com/samarth3107"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/samarth-ravikiran-birajdar-076324292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="text-gray-400 hover:text-green-400 transition duration-300"
            >
              Email
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}