"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    link: "#",
    thumbnail: "/projects/portfolio.jpg",
  },
  {
    title: "Blog Platform",
    description: "A markdown-based blog built with Next.js and Tailwind CSS.",
    link: "#",
    thumbnail: "/projects/blog.jpg",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="py-5 text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-start">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow dark:border-gray-700 bg-white/5 backdrop-blur-sm transition-colors duration-300 ease-in-out hover:bg-white/10 dark:hover:bg-gray-700"
            >
              <Image
                src={proj.thumbnail}
                alt={proj.title}
                width={400}
                height={200}
                className="rounded-md mb-4 w-full h-auto object-cover"
              />
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
    </motion.section>
  );
};

export default Projects;
