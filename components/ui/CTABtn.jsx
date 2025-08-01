import React from "react";
import { BackgroundGradient } from "./background-gradient";

const CTABtn = ({ BtnText, BtnIcon }) => {
  return (
    <a href="#Portofolio" className="relative group w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center gap-2 text-sm text-gray-200 font-medium overflow-hidden transition-all duration-300">
        <span className="group-hover:gap-3 transition-all duration-300">
          {BtnText}
        </span>
        {BtnIcon}
      </div>
    </a>
  );
};

export default CTABtn;
