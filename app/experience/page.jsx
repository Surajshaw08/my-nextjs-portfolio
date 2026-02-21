"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Globe, Sparkles } from "lucide-react";

const ExperienceSection = ({ title, company, location, duration, type, description, achievements, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-16 last:pb-0 group"
  >
    {/* Timeline Line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#01d3e2] via-gray-800 to-transparent group-last:bg-gradient-to-b group-last:from-[#01d3e2] group-last:to-transparent"></div>
    
    {/* Timeline Dot */}
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#0a0f1d] border-2 border-[#01d3e2] shadow-[0_0_10px_rgba(1,211,226,0.5)] group-hover:scale-150 transition-transform"></div>

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#01d3e2]/40 transition-all duration-500 shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#01d3e2]/5 blur-[80px] rounded-full group-hover:bg-[#01d3e2]/10 transition-colors"></div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#01d3e2]/10 border border-[#01d3e2]/20 text-[#01d3e2] text-[10px] font-bold uppercase tracking-widest">
              {type}
            </span>
            <span className="text-gray-500 text-xs flex items-center gap-1">
              <Calendar size={12} /> {duration}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight group-hover:text-[#01d3e2] transition-colors">
            {title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-gray-400 font-medium">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <Building2 size={16} className="text-[#01d3e2]" /> {company}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-gray-600" /> {location}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light italic border-l-2 border-white/5 pl-4">
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((item, i) => (
          <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group/item">
            <div className="mt-1">
              <CheckCircle2 size={18} className="text-[#01d3e2] group-hover/item:scale-110 transition-transform" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Sedulus Ventures",
      location: "Kolkata, India – On-site",
      duration: "July 2025 – Present",
      type: "Full-Time",
      description: "Leading the architectural evolution of high-performance web applications with a focus on cutting-edge frontend technologies and automated backend systems.",
      achievements: [
        "Lead development of the production UI using Next.js, TypeScript, and Tailwind CSS, improving page load performance by 35%.",
        "Built a FastAPI scraping API with PostgreSQL, automating IPO data ingestion and cutting manual processing by 70%.",
        "Improved deployment efficiency and environment consistency by 40% using Docker for frontend and backend services.",
        "Engineered fully responsive interfaces ensuring 100% compatibility across all device sizes and browser variants."
      ]
    },
    {
      title: "Backend Intern",
      company: "Music World Project",
      location: "Remote",
      duration: "Feb 2024 – Apr 2024",
      type: "Internship",
      description: "Focused on optimizing database performance and building scalable backend services for a music streaming platform.",
      achievements: [
        "Collaborated with senior professors to build and optimize SQL backend systems.",
        "Refactored complex database queries, resulting in a 30% measurable improvement in DB performance.",
        "Implemented robust API endpoints for seamless data flow between frontend and database layers."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Freelance Projects",
      location: "Global",
      duration: "2023 – 2024",
      type: "Freelance",
      description: "Successfully delivered diverse web solutions for international clients, ranging from AI tools to secure financial managers.",
      achievements: [
        "Built Pass-One: A MERN-based secure password manager with AES encryption and optimized UX.",
        "Developed high-performance AI Landing pages using React and Vite with seamless third-party integrations.",
        "Created specialized Chrome extensions and food-ordering apps with location-based suggestions."
      ]
    }
  ];

  return (
    <div className="bg-[#0a0f1d] text-white min-h-screen">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#01d3e210,transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#01d3e2]/10 border border-[#01d3e2]/20 text-[#01d3e2] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} /> My Professional Path
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01d3e2] via-cyan-400 to-blue-500">History.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            A chronicle of my journey through software engineering, from building robust backends to leading production-grade frontend architectures.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <ExperienceSection key={idx} {...exp} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
