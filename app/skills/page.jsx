"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Send, ExternalLink, Code2, Database, Brain, Terminal } from "lucide-react";

const TechBadge = ({ children }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-sm">
    {children}
  </span>
);

const ContentBlock = ({ icon: Icon, title, children, badges }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex items-center gap-3 mb-3 text-[#01d3e2]">
      <div className="p-2 rounded-lg bg-[#01d3e2]/10">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 opacity-80 italic">
      {children}
    </p>
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <TechBadge key={badge}>{badge}</TechBadge>
      ))}
    </div>
  </div>
);

const SkillBar = ({ name, percent, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 * index }}
    className="group"
  >
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-300 font-medium group-hover:text-[#01d3e2] transition-colors">{name}</span>
      <span className="text-[#01d3e2] font-semibold">{percent}%</span>
    </div>
    <div className="w-full h-2.5 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 relative">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1, delay: 0.2 + (0.1 * index) }}
        className="h-full bg-gradient-to-r from-[#01d3e2]/60 to-[#01d3e2] rounded-full relative shadow-[0_0_15px_rgba(1,211,226,0.5)]"
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
      </motion.div>
    </div>
  </motion.div>
);

const ExperienceCard = ({ title, company, year, points, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 + (0.1 * index) }}
    className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#01d3e2]/30 hover:bg-white/10 transition-all duration-300 group shadow-sm w-full"
  >
    <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-2">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-[#01d3e2] transition-colors">{title}</h3>
        <p className="text-[#01d3e2] font-semibold tracking-wide uppercase text-xs mt-1">{company}</p>
      </div>
      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-[#01d3e2] font-bold">
        {year}
      </span>
    </div>
    
    <div className="space-y-3">
      {points.map((point, i) => (
        <div key={i} className="flex gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
          <span className="text-[#01d3e2] font-bold mt-0.5">•</span>
          <p>{point}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function SkillsPage() {
  const skills = [
    { name: "Front-end", percent: 90 },
    { name: "Back-end", percent: 80 },
    { name: "ReactJS", percent: 85 },
    { name: "MongoDB", percent: 75 },
    { name: "GitHub", percent: 80 },
  ];

  return (
    <div className="bg-[#0a0f1d] text-white min-h-screen selection:bg-[#01d3e2]/30">
      {/* Subtle Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#01d3e2]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Content & Hierarchy */}
          <div className="lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#01d3e2] to-cyan-400">
                Technical Mastery
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#01d3e2] to-transparent rounded-full mb-8"></div>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                A comprehensive overview of my technical stack and proficiency across different domains of software development.
              </p>
            </motion.div>

            <div className="space-y-10">
              <ContentBlock 
                icon={Code2}
                title="Frontend Development"
                badges={["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]}
              >
                Crafting pixel-perfect, responsive user interfaces with a focus on performance and seamless user experiences.
              </ContentBlock>

              <ContentBlock 
                icon={Database}
                title="Backend & Databases"
                badges={["Node.js", "Express.js", "MongoDB", "SQL", "MySQL"]}
              >
                Building scalable server-side systems and architecting efficient database schemas for robust applications.
              </ContentBlock>

              <ContentBlock 
                icon={Brain}
                title="Fundamentals"
                badges={["C++", "DSA", "DBMS", "Operating Systems", "OOPs"]}
              >
                Strong foundation in computer science core concepts, enabling efficient problem-solving and clean code.
              </ContentBlock>

              <ContentBlock 
                icon={Terminal}
                title="Tools & Environment"
                badges={["Git", "GitHub", "VS Code", "Postman", "Vercel"]}
              >
                Fluent in modern developer workflows, version control, and cloud deployment platforms.
              </ContentBlock>
            </div>
          </div>

          {/* Right Column - Skills Visualization */}
          <div className="lg:w-[55%] flex flex-col gap-12 lg:pt-32">
            
            {/* Skills Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Proficiency Levels</span>
                <div className="flex-1 h-px bg-white/5"></div>
              </div>
              <div className="space-y-6">
                {skills.map((skill, idx) => (
                  <SkillBar key={skill.name} name={skill.name} percent={skill.percent} index={idx} />
                ))}
              </div>
            </div>

            </div>
          </div>
      </div>
    </div>
  );
}
