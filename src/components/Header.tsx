import React, { useState } from "react";
import { FiMenu,FiX } from "react-icons/fi";

const Header: React.FC = () => {
  try {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const isMobile = window.innerWidth < 768; // Tailwind 'md' breakpoint

  const headerOffset = isMobile ? 236 : 60; // Offset only for mobile
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  setIsMenuOpen(false);
};


    return (
      <header className="sticky top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800" data-name="header" data-file="components/Header.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gradient">
              Anil Asari
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Contact</button>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-emerald-400"
            >
                <div className={`${isMenuOpen ? 'hidden' : 'block'}`}>
                {FiMenu({ className: "text-xl" })}
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'}`}>
                {FiX({ className: "text-xl" })}
                </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-left">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-left">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-left">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-left">Contact</button>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error("Header component error:", error);
    return null;
  }
};

export default Header;