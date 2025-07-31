"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A markdown-based blog built with Next.js and Tailwind CSS.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-10">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {proj.description}
                </p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 mt-4 inline-block"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Projects;
