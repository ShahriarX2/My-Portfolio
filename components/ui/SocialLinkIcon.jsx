import React from "react";

const SocialLinkIcon = ({ socialLink, socialIcon }) => {
  return (
    <a href={socialLink} target="_blank" rel="noopener noreferrer">
      <button className="group relative cursor-pointer p-3">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative scale-125 rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          {socialIcon}
        </div>
      </button>
    </a>
  );
};

export default SocialLinkIcon;
