"use client"; // Only needed if you add hooks later (optional for this page)

import Link from "next/link";

const SkillBar = ({ name, percent }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>{name}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full h-2 bg-gray-700 rounded-full">
      <div
        className="h-full bg-[#01d3e2] rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const ExperienceCard = ({ title, company, year, description }) => (
  <div className="bg-[#1e293b] p-4 rounded-lg shadow-md border border-gray-600">
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-400">
      {company} | {year}
    </p>
    <p className="text-sm mt-2 text-gray-300">{description}</p>
  </div>
);

export default function SkillsPage() {
  return (
    <div className="bg-[#0f172a] text-white px-4 sm:px-6 md:px-16 py-12 min-h-screen overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#01d3e2] mb-4">
            Skills <span className="text-white">& Experience</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            I specialize in <span className="text-white font-semibold">Frontend development</span> using technologies like React.js, JavaScript, HTML, CSS, and Tailwind CSS. I also have solid experience in <span className="text-white font-semibold">backend development</span> with Node.js, Express.js, MongoDB, SQL, and MySQL.
            <br /><br />
            I'm proficient in <span className="text-white font-semibold">programming languages</span> such as C++, JavaScript, and Java, and I’ve built projects that demonstrate strong fundamentals in Data Structures, Algorithms, DBMS, Operating Systems, and Object-Oriented Programming.
            <br /><br />
            <span className="text-white font-semibold">Projects:</span>
            <br />
            <span className="text-[#01d3e2]">•</span> <span className="font-semibold text-white">Pass-One Password Manager:</span> MERN-based secure password manager with encrypted storage and optimized UI/UX.
            <br />
            <span className="text-[#01d3e2]">•</span> <span className="font-semibold text-white">Hungry Buddy:</span> A food-ordering app with search, location-based suggestions, and responsive UI.
            <br />
            <span className="text-[#01d3e2]">•</span> <span className="font-semibold text-white">AI Landing Page:</span> High-performance website built with React and Vite, showcasing AI services.
            <br />
            <span className="text-[#01d3e2]">•</span> <span className="font-semibold text-white">ONE 1 Joke’s Chrome Extension:</span> Lightweight joke extension built using HTML, CSS, and JavaScript.
            <br /><br />
            I'm confident with tools like Git and GitHub, and fluent in both English and Hindi.
            <br /><br />
            Visit my <a href="https://www.linkedin.com/in/surajkrshaw08/" target="_blank" rel="noopener noreferrer" className="text-[#01d3e2] underline">LinkedIn</a> or <Link href="/contact" className="text-[#01d3e2] underline">contact me</Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Skill Bars */}
          <div className="space-y-4">
            <SkillBar name="Front-end" percent={90} />
            <SkillBar name="Back-end" percent={80} />
            <SkillBar name="ReactJS" percent={85} />
            <SkillBar name="MongoDB" percent={75} />
            <SkillBar name="GitHub" percent={80} />
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <ExperienceCard
              title="Backend Developer"
              company="Music World Project"
              year="Feb 2024 – Apr 2024"
              description="Collaborated with a professor to build an optimized SQL backend system, improving DB performance by 30%."
            />
            <ExperienceCard
              title="Full Stack Developer"
              company="Freelance Projects"
              year="2023 – Present"
              description="Built multiple full-stack applications including a password manager, AI website, and Chrome extension."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
