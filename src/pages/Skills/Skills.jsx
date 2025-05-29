import React from "react";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: <FaReact className="text-black text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-black text-5xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-800 text-5xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-black text-5xl" /> },
  {
    name: "JavaScript (ES6)",
    icon: <SiJavascript className="text-black text-5xl" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-black text-5xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-black text-5xl" />,
  },
  {
    name: "Git & GitHub",
    icon: <SiGithub className="text-black text-5xl" />,
  },
  {
    name: "RESTful API development",
    icon: <FaServer className="text-black text-5xl" />,
  },
  { name: "Docker", icon: <SiDocker className="text-black text-5xl" /> },
];

const floatAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
  animate: {
    y: [0, -10, 0, 10, 0], // Up-down float loop
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
      repeatType: "loop",
    },
  },
};

const Skills = () => {
  return (
    <section className="w-full mt-12 px-4 sm:px-12 py-12 min-h-screen bg-white font-montserrat">
      <div className="max-w-full mx-auto text-center px-8 sm:px-8">
        <h2 className="text-4xl font-extrabold text-[#004080] mb-12 uppercase">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              animate="animate"
              variants={floatAnimation}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:scale-105 transform transition-all duration-300"
            >
              {skill.icon}
              <p className="mt-3 font-semibold text-lg text-gray-700">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
