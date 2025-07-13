"use client"; // Required if you plan to use animations/hooks here later

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-6">
          About <span className="text-[#01d3e2]">Me</span>
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Who I am, what I do, and why I love it.
        </p>

        <div className="md:flex items-center gap-10">
          {/* Left - Image */}
          <div className="flex justify-center md:w-1/3 mb-10 md:mb-0">
            <img
              src="/vxt266.jpg" // ✅ Make sure this image exists in /public
              alt="Suraj Kumar"
              className="w-60 h-60 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right - About Text */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-[#01d3e2]">I'm Suraj Kumar</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate <span className="text-white font-medium">Full Stack Developer</span> with a focus on the MERN stack — MongoDB, Express.js, React, and Node.js. I specialize in building clean, elegant, and fully responsive web applications that don’t just look great but also perform seamlessly.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From crafting dynamic, user-friendly interfaces with React and Tailwind CSS, to building powerful backends and APIs using Node.js and Express, I love turning ideas into full-fledged digital products. I write clean, maintainable code and aim to deliver optimized, scalable solutions that provide real value to users.
              <br /><br />
              Whether it's a simple frontend or a complex full-stack application, I bring a creative mindset, strong technical skills, and a constant hunger to learn and grow as a developer.
            </p>
            <div className="mt-6">
              <a
                href="/mynew2.pdf"
                download
                className="bg-[#01d3e2] text-black px-8 py-2 rounded-full font-semibold hover:scale-105 transition inline-block"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
