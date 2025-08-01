"use client";

import { motion } from "framer-motion";
import { TiDocumentText } from "react-icons/ti";
import { LuCode } from "react-icons/lu";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm a self-taught developer with a passion for building clean,
            functional, and user-focused web experiences. I don't have a formal
            degree — just an internet connection, countless late nights, and the
            curiosity to keep learning. Every project I build is another step
            forward, and I love turning ideas into interactive, real-world
            products.
          </p>
          <div className="flex gap-3 mt-3 items-center justify-center">
            <button
              type="button"
              className="flex gap-2 justify-center items-center text-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              <TiDocumentText className="scale-175" /> Download CV
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="flex gap-2 justify-center items-center text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                <LuCode className="scale-150" /> Projects
              </span>
            </button>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default About;
