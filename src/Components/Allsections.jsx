// Pages/AllSections.jsx
import React from 'react';
import Home from '../Pages/Home';
import AboutMe from '../Pages/About';
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

const AllSections = () => {
  return (
    <div className="relative w-full h-full">
      

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default AllSections;
