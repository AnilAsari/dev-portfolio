import React from "react";
import {
  FiLinkedin,
  FiGithub,
  FiChevronDown,
  FiArrowRight,
  FiDownload,
  FiMail,
} from "react-icons/fi";

const Hero: React.FC = () => {
  try {
    const scrollToProjects = (): void => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const downloadResume = (): void => {
      alert("Resume download feature would be implemented with actual resume file");
    };

    return (
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        data-name="hero"
        data-file="components/Hero.tsx"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
           
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient">Anil Asari</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
              Full-Stack Developer
            </h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting scalable enterprise applications with .NET Core & Angular. 
              5+ years of corporate experience building robust systems that power business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={scrollToProjects} className="btn-primary btn-glow-effect">
              <span className="flex items-center gap-2">
                Explore Projects
                {FiArrowRight({ className: "text-lg" })}
              </span>
            </button>

            <button onClick={downloadResume} className="btn-secondary btn-glow-effect">
              <span className="flex items-center gap-2">
                {FiDownload({ className: "text-lg mr-2" })}
                Download Resume
              </span>
            </button>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/anilaasari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {FiLinkedin({ className: "text-2xl" })}
            </a>
            <a
              href="https://github.com/anilaasari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {FiGithub({ className: "text-2xl" })}
            </a>
            <a
              href="mailto:anil.asari666@gmail.com"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {FiMail({ className: "text-2xl" })}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          {FiChevronDown({ className: "text-2xl text-gray-400" })}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Hero component error:", error);
    return null;
  }
};

export default Hero;
