"use client";

const projects = [
  {
    title: 'Krishi Bazar – Direct Market Access Platform for Farmers',
    image: '/krishi.png',
    description: 'Built a scalable MERN stack platform connecting farmers with buyers, increasing profit margins by 20% by eliminating middlemen.',
    github: 'https://krishi-bazar-ten.vercel.app/',
    demo: 'https://krishi-bazar-ten.vercel.app/',
  },
  {
    title: 'Password Manager App',
    image: '/passone.png',
    description: 'Developed PassOne, a secure and responsive MERN-based Password Manager using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Built a secure platform that allows users to store, retrieve, and manage passwords with 100% data encryption and 95% faster UI rendering using optimized state management and API handling.',
    github: 'https://github.com/Surajshaw08/PassOne_password-_manager-',
    demo: 'https://pass-one-password-manager.vercel.app/',
  },
  {
    title: 'Hungry buddy',
    image: '/hungry.png',
    description: 'Food ordering webapp made with React and Tailwind CSS.',
    github: 'https://github.com/Surajshaw08/Hungry-buddy',
    demo: 'https://hungry-buddy.vercel.app/',
  },
  {
    title: 'One 1 joke',
    image: '/extension.png',
    description: 'Chrome extension that fetches jokes from an API with an interactive UI and next button.',
    github: 'https://github.com/yourname/blog-app',
    demo: 'https://yourblogapp.netlify.app',
  },
  {
    title: 'AI-Landing Page',
    image: '/AI.png',
    description: 'Modern, responsive website showcasing AI services, built in React.',
    github: 'https://github.com/Surajshaw08/AI-landing-page',
    demo: 'https://ai-landing-page-eta-seven.vercel.app/',
  },
  {
    title: 'Tic-Tac-Toe Chrome Extension',
    image: '/tic.png',
    description: 'A Tic-Tac-Toe Chrome Extension with an AI opponent using Minimax algorithm.',
    github: 'https://github.com/Surajshaw08/Tic-Tac-Toe-Chrome-Extension-',
    demo: 'https://github.com/Surajshaw08/Tic-Tac-Toe-Chrome-Extension-',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-[#01d3e2]">Projects</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Here are some of the cool things I've built recently!
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition flex flex-col h-[500px] pt-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-[#01d3e2] mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-4">{project.description}</p>
                </div>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black px-4 py-1 rounded hover:bg-[#01d3e2] hover:text-black transition"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#01d3e2] text-black px-4 py-1 rounded hover:opacity-80 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
