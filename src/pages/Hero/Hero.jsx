import React from "react";
import "./Hero.css";
import BtnPrimary from "../../components/BtnPrimary";
import sachin from "../../assets/sachin.png";
const Hero = () => {
  const triangleCount = 150;

  const generateGrayWhiteColor = () => {
    const gray = Math.floor(150 + Math.random() * 105);
    return `rgb(${gray}, ${gray}, ${gray})`;
  };

  const generateTriangles = () => {
    return Array.from({ length: triangleCount }, (_, i) => {
      const style = {
        "--x": Math.random(),
        "--y": Math.random(),
        animationDelay: `${-Math.random() * 10}s`,
        borderBottomColor: generateGrayWhiteColor(),
      };
      return <div key={i} className="triangle" style={style} />;
    });
  };

  return (
    <div className="hero-wrapper">
      <div className="background-triangles">{generateTriangles()}</div>
      <div className="hero-content">
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-7xl hover:bg-gray-100 relative z-10"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src={sachin}
            alt="Sachin Singh"
          />
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
        </a>
      </div>
    </div>
  );
};

export default Hero;
