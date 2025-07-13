import React from "react";

const Footer: React.FC = () => {
  try {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <footer className="bg-black border-t border-gray-800" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-4">Alex Johnson</div>
              <p className="text-gray-400 mb-4">
                Full Stack Developer passionate about creating scalable web applications 
                with modern technologies.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  <div className="icon-github text-xl"></div>
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  <div className="icon-linkedin text-xl"></div>
                </a>
                <a href="mailto:alex@email.com" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  <div className="icon-mail text-xl"></div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  About
                </button>
                <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  Skills
                </button>
                <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  Projects
                </button>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge text-xs">React</span>
                <span className="skill-badge text-xs">Angular</span>
                <span className="skill-badge text-xs">.NET</span>
                <span className="skill-badge text-xs">C#</span>
                <span className="skill-badge text-xs">SQL</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Alex Johnson. All rights reserved.
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300"
            >
              <span className="mr-2">Back to top</span>
              <div className="icon-arrow-up text-lg"></div>
            </button>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error("Footer component error:", error);
    return null;
  }
};

export default Footer;