import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  try {
    const currentYear: number = new Date().getFullYear();

    return (
      <footer className="bg-black border-t border-gray-800" data-name="footer" data-file="components/Footer.tsx">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">Anil Asari</h3>
              <p className="text-gray-400 leading-relaxed">
                Full-Stack Developer passionate about building scalable enterprise applications 
                with modern technologies and best practices.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-green-400 transition-colors">About</a>
                <a href="#skills" className="block text-gray-400 hover:text-green-400 transition-colors">Skills</a>
                <a href="#projects" className="block text-gray-400 hover:text-green-400 transition-colors">Projects</a>
                <a href="#contact" className="block text-gray-400 hover:text-green-400 transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/anilaasari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {FiLinkedin({ className: "text-xl" })}
                </a>
                <a
                  href="https://github.com/anilaasari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <div className="icon-github text-xl"></div>
                   {FiGithub({ className: "text-xl" })}
                </a>
                <a
                  href="mailto:anil.asari666@gmail.com"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <div className="icon-mail text-xl"></div>
                  {FiMail({ className: "text-xl" })}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © {currentYear} Anil Asari. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
};

export default Footer;
