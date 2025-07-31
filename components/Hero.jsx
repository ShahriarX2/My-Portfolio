"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../public/animation.json";
import { Spotlight } from "./ui/Spotlight";
import MiniBtn from "./ui/MiniBtn";
import CTABtn from "./ui/CTABtn";
import {
  HiMiniArrowTopRightOnSquare,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import {
  PiGithubLogoBold,
  PiFacebookLogoBold,
  PiLinkedinLogoBold,
} from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import SocialLinkIcon from "./ui/SocialLinkIcon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen min-w-screen flex items-center justify-center overflow-hidden"
    >
      <Spotlight />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10 z-20"
      >
        {/* Left: Text */}
        <div className="text-center md:text-left space-y-6 flex-1">
          <div className="inline-block">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
                  <BsStars className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
                  Ready to Innovate
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight">
              <span className="relative inline-block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Full Stack
              </span>
              <span className="relative inline-block mt-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
          </div>

          <h2 className="text-2xl font-medium text-gray-800 dark:text-gray-200">
            <Typewriter
              words={[
                "I build accessible web applications",
                "I develop full-stack apps",
                "I love clean UI",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p
            className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Enhancing digital experiences that are smooth, scalable, and made to
            impress.
          </p>

          <div className="flex flex-wrap gap-3 justify-start">
            <MiniBtn text="Next.js" />
            <MiniBtn text="React" />
            <MiniBtn text="Node.js" />
            <MiniBtn text="MongoDB" />
            <MiniBtn text="PostgreSQL" />
          </div>

          <div className="flex flex-row gap-3 w-full justify-start">
            <CTABtn
              BtnText="Projects"
              BtnIcon={<HiMiniArrowTopRightOnSquare />}
            />
            <CTABtn BtnText="Contact" BtnIcon={<HiOutlineEnvelope />} />
          </div>
          <div className="hidden sm:flex gap-4 cursor-pointer justify-start">
            <SocialLinkIcon
              socialLink="https://github.com/ShahriarX2"
              socialIcon={<PiGithubLogoBold />}
            />
            <SocialLinkIcon
              socialLink="https://linkedin.com"
              socialIcon={<PiLinkedinLogoBold />}
            />
            <SocialLinkIcon
              socialLink="https://www.facebook.com/shahriar.hosen.75"
              socialIcon={<PiFacebookLogoBold />}
            />
          </div>
        </div>

        {/* Right: Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 scale-75"
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
