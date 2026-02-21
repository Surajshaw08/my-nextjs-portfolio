"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 pt-28 pb-16 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#01d3e2]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#01d3e2] mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A deep dive into my journey, my craft, and what drives me to build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
          {/* Left - Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-5/12 lg:w-4/12 flex justify-center sticky top-24"
          >
            <div className="relative group">
              {/* Animated Glow Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#01d3e2] to-[#0ea5e9] rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Image Container */}
              <div className="relative bg-[#1e293b] p-2 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/vxt266.jpg" 
                  alt="Suraj Kumar"
                  className="w-full aspect-square object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#01d3e2]/10 blur-2xl rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0ea5e9]/10 blur-2xl rounded-full -z-10"></div>
            </div>
          </motion.div>

          {/* Right - About Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-7/12 lg:w-8/12"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                  I'm <span className="bg-gradient-to-r from-[#01d3e2] to-white bg-clip-text text-transparent">Suraj Kumar</span>
                </h3>
                <div className="w-12 h-0.5 bg-[#01d3e2]/50 mb-8"></div>
              </div>
              
              <div className="space-y-6 text-gray-400/90 text-base md:text-md lg:text-lg leading-relaxed max-w-[700px]">
                <p>
                  I am a driven <span className="text-white font-medium">Full Stack Developer</span> specializing in the modern web ecosystem. My core expertise lies in the <span className="text-[#01d3e2]">MERN stack</span> (MongoDB, Express, React, Node.js), where I focus on architecting applications that are as performant as they are visually compelling.
                </p>
                
                <p>
                  My approach to development is centered on <span className="text-white">clean code</span> and <span className="text-white">user-centric design</span>. I don't just build features; I craft seamless digital journeys. Whether it's building robust APIs with Node.js or high-fidelity interfaces with React and Tailwind CSS, I bridge the gap between complex logic and refined aesthetics.
                </p>
                
                <p>
                  Constantly evolving with the tech landscape, I bring a mix of technical precision and creative problem-solving to every project. I thrive in environments that challenge me to push the boundaries of what's possible on the web.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
