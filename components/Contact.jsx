"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section id="contact" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm currently open to freelance and full-time opportunities. Feel
            free to reach out!
          </p>
          <a href="mailto:your@email.com">
            <button className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:scale-105 transition-transform">
              Say Hello
            </button>
          </a>
        </div>
      </section>
    </motion.section>
  );
};

export default Contact;
