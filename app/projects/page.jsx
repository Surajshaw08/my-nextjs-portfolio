"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: 'Easy-dev-dark-mode',
    image: '/npm.png', // Updated with relevant image from public
    description: 'Published 1 TypeScript-based npm package with 255+ installs in 7 days for React & Next.js dark mode automation. Built 3+ core features including DOM tracking via MutationObserver and CSS variable theming.',
    github: 'https://github.com/Surajshaw08/easy-dark-mode',
    demo: 'https://www.npmjs.com/package/easy-dev-dark-mode',
    tags: ["NPM", "TypeScript", "React", "Next.js"]
  },
  {
    title: 'One1 Theme',
    image: '/one one theme.png', // Updated with relevant image from public
    description: 'A sleek dark Visual Studio Code theme that improved code readability by 80% and reduced eye strain for developers. Designed with a focus on developer comfort and productivity.',
    github: 'https://github.com/Surajshaw08', // General github as specific not provided
    demo: 'https://marketplace.visualstudio.com/items?itemName=Suraj08.one1-theme',
    tags: ["VS Code", "Theme", "UI/UX"]
  },
  {
    title: 'Krishi Bazar – Direct Market Access Platform for Farmers',
    image: '/krishi.png',
    description: 'Built a scalable MERN stack platform connecting farmers with buyers, increasing profit margins by 20% by eliminating middlemen.',
    github: 'https://krishi-bazar-ten.vercel.app/',
    demo: 'https://krishi-bazar-ten.vercel.app/',
    tags: ["MERN", "Tailwind", "Vercel"]
  },
  {
    title: 'Password Manager App',
    image: '/passone.png',
    description: 'Developed PassOne, a secure and responsive MERN-based Password Manager using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Built a secure platform that allows users to store, retrieve, and manage passwords with 100% data encryption.',
    github: 'https://github.com/Surajshaw08/PassOne_password-_manager-',
    demo: 'https://pass-one-password-manager.vercel.app/',
    tags: ["Security", "MERN", "React"]
  },
  {
    title: 'Hungry buddy',
    image: '/hungry.png',
    description: 'Food ordering webapp made with React and Tailwind CSS. Features smooth navigation, categorized menu, and a responsive shopping cart experience.',
    github: 'https://github.com/Surajshaw08/Hungry-buddy',
    demo: 'https://hungry-buddy.vercel.app/',
    tags: ["React", "UI/UX", "Tailwind"]
  },
  {
    title: 'One 1 joke',
    image: '/extension.png',
    description: 'Chrome extension that fetches jokes from an API with an interactive UI and next button. Designed for quick laughs and minimal browser footprint.',
    github: 'https://github.com/yourname/blog-app',
    demo: 'https://yourblogapp.netlify.app',
    tags: ["Chrome Ext", "API", "JS"]
  },
  {
    title: 'AI-Landing Page',
    image: '/AI.png',
    description: 'Modern, responsive website showcasing AI services, built in React. Features glassmorphism effects and smooth scrolling animations.',
    github: 'https://github.com/Surajshaw08/AI-landing-page',
    demo: 'https://ai-landing-page-eta-seven.vercel.app/',
    tags: ["AI", "Landing Page", "Motion"]
  },
  {
    title: 'Tic-Tac-Toe Chrome Extension',
    image: '/tic.png',
    description: 'A Tic-Tac-Toe Chrome Extension with an AI opponent using Minimax algorithm for an unbeatable gaming experience in your browser.',
    github: 'https://github.com/Surajshaw08/Tic-Tac-Toe-Chrome-Extension-',
    demo: 'https://github.com/Surajshaw08/Tic-Tac-Toe-Chrome-Extension-',
    tags: ["Game Dev", "AI", "Logic"]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 pt-28 pb-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#01d3e2]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              My <span className="bg-gradient-to-r from-[#01d3e2] to-[#0ea5e9] bg-clip-text text-transparent">Digital Creations</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#01d3e2] to-[#0ea5e9] mx-auto rounded-full mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore a collection of my recent work, ranging from complex full-stack applications to focused developer tools.
            </p>
          </motion.div>
        </header>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="group bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-[#01d3e2]/40 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(1,211,226,0.3)] flex flex-col h-full"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]/20 flex items-center justify-center">
                    <div className="text-[#01d3e2] opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <FaExternalLinkAlt size={48} />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-[#0f172a]/80 backdrop-blur-md text-[#01d3e2] rounded-full border border-[#01d3e2]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#01d3e2] transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-3 font-light">
                  {project.description}
                </p>

                {/* Buttons Container */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-white/10 text-white/70 px-4 py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-all text-sm font-medium"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#01d3e2] to-[#0ea5e9] text-[#0f172a] px-4 py-2.5 rounded-xl hover:brightness-110 transition-all text-sm font-bold shadow-[0_5px_15px_-5px_rgba(1,211,226,0.4)]"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
