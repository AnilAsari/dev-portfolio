import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

// import Hero from './components/Hero'; // Use the updated Hero component



const App: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
    <div className="min-h-screen main-content" data-name="app" data-file="app.js">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default App;
