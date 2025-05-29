import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import BtnPrimary from "../../components/BtnPrimary";
import sachin from "../../assets/sachin.png";

const triangleCount = 150;

const generateGrayWhiteColor = () => {
  const gray = Math.floor(150 + Math.random() * 105);
  return `rgb(${gray}, ${gray}, ${gray})`;
};

const Hero = () => {
  const triangles = useMemo(() => {
    return Array.from({ length: triangleCount }, (_, i) => {
      const style = {
        "--x": Math.random(),
        "--y": Math.random(),
        animationDelay: `${-Math.random() * 10}s`,
        borderBottomColor: generateGrayWhiteColor(),
      };
      return <div key={i} className="triangle" style={style} />;
    });
  }, []);

  return (
    <section className="hero-wrapper" aria-label="Hero Section">
      <div className="background-triangles" aria-hidden="true">
        {triangles}
      </div>

      <Link
        to="/skills"
        className="hero-content flex flex-col items-center border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-7xl hover:bg-gray-100 relative z-10"
        aria-label="Go to Skills Page"
      >
        <div className="w-64 h-64 flex justify-center items-center bg-white">
          <img
            src={sachin}
            alt="Sachin Singh portrait"
            className="max-w-full max-h-full object-contain rounded-lg"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-between p-10 leading-normal text-center md:text-left md:flex-1">
          <h1 className="text-2xl font-semibold mb-3 text-[#004080]">
            Hello, I’m Sachin Singh,
          </h1>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-[#004080] mb-6 leading-tight">
            MERN Stack <br /> Developer
          </h2>
          <p className="mb-8 font-medium text-[#004080] text-lg">
            Based in Indore, India.
          </p>
          <BtnPrimary text="Skills" to="/skills" />
        </div>
      </Link>
    </section>
  );
};

export default Hero;
