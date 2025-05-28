import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/projects";

// import other components you want to render here

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
      {/* <Contact /> */}
      {/* Add other components here */}
    </div>
  );
};

export default Home;
