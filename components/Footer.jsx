import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Shahriar Hossen. All rights reserved.</p>
        <p className="mt-2">
          Built with <span className="text-red-500">&hearts;</span> and Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
