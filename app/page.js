"use client";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaFileDownload,
  FaArrowRight
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/Surajshaw08" },
    { icon: IoIosMail, url: "mailto:surajshaw17082004@gmail.com" },
    { icon: FaInstagram, url: "https://www.instagram.com/ig_suraj08/" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/surajkrshaw08/" },
    { icon: FaPhoneAlt, url: "tel:+6290315511" },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="relative bg-[#0f172a] text-white min-h-screen md:h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 pt-28 pb-10 md:py-0 overflow-hidden">
      {/* Left Section */}
      <motion.div 
        className="w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left"
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <div className="bg-[#0f172a] bg-opacity-5 backdrop-blur-lg p-4 sm:p-6 w-full">
          <motion.h2 variants={fadeUp} className="text-lg sm:text-xl font-medium mt-2">Hello, It's Me</motion.h2>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl md:text-7xl font-bold mt-3 tracking-tight">
            Suraj Kr Shaw
          </motion.h1>

          <motion.h3 variants={fadeUp} className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 bg-gradient-to-r from-[#01d3e2] via-[#0ea5e9] to-[#01d3e2] bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React.js Specialist",
                2000,
                "Backend Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h3>

          <motion.p variants={fadeUp} className="mt-5 text-gray-400/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            A passionate MERN Stack Developer who builds full-stack web apps
            that are fast, responsive, and clean. From frontends with React &
            Tailwind CSS to powerful backends with Node.js & Express — I love
            crafting seamless digital experiences.
          </motion.p>

          {/* Social Icons */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#01d3e2] border-2 border-[#01d3e2] p-2 rounded-full hover:bg-[#01d3e2] hover:text-black hover:shadow-[0_0_20px_#01d3e2] transition duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <a
              href="/resume.pdf"
              download
              className="group relative bg-[#01d3e2] text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition overflow-hidden flex items-center gap-2 shadow-[0_0_20px_rgba(1,211,226,0.3)]"
            >
              <div className="relative z-10 flex items-center gap-2">
                <FaFileDownload />
                <span>Download CV</span>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <Link href="/projects">
              <button className="group relative border-2 border-[#01d3e2] text-[#01d3e2] px-6 py-3 rounded-full font-bold hover:scale-105 transition hover:shadow-[0_0_15px_rgba(1,211,226,0.2)] flex items-center gap-2">
                <span>View My Work</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div 
        className="w-full md:w-[40%] mb-10 md:mb-0 flex justify-center items-center drop-shadow-[0_0_40px_#01d3e2]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-3xl p-1 relative overflow-hidden group">
          <img
            src="/p1.png"
            alt="profile"
            className="w-44 sm:w-56 md:w-64 lg:w-[320px] rounded-3xl object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#01d3e2]/10 blur-3xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </motion.div>


    </div>
  );
}
