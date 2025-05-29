import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
    </div>
  );
};

export default Home;
