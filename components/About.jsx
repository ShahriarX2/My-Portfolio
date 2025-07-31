"use client";

import { motion } from "framer-motion";

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
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Hello, I'm <strong>Shahriar Hossen</strong> passionate about
            building smart and scalable web & mobile applications. I've
            completed a full-stack development course and constantly explore new
            technologies to refine my skills. Focused on continuous learning, I
            aim to transition into the IT industry by 2027 and eventually move
            towards AI and data science.
          </p>
        </div>
      </section>
    </motion.section>
  );
};

export default About;
