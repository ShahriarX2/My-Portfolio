"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleSetActive = (to) => {
    setActiveLink(to.charAt(0).toUpperCase() + to.slice(1));
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 shadow-sm transition-all duration-300 ${
        scrolled ? "bg-white/20 dark:bg-black/20 backdrop-blur-lg" : ""
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 cursor-pointer">
          Shahriar Hossen
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:block">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={handleSetActive}
              className={`cursor-pointer transition-all duration-300 ${
                activeLink === item
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 underline"
                  : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
