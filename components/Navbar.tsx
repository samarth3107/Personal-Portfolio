"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-500 cursor-pointer">
            Samarth.code
          </h1>
        </Link>

        <div className="hidden md:flex gap-8">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              {item.name}
            </a>
          ))}

        </div>

      </div>
    </nav>
  );
}