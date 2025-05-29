import React, { useEffect, useState } from "react";
import BtnPrimary from "../../components/BtnPrimary";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Experience = () => {
  const [ref, visible] = useScrollAnimation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(visible);
  }, [visible]);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-8 py-12 min-h-screen bg-white font-montserrat mt-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-[#004080] shadow-lg">
        Work Experience
      </h2>

      <div
        ref={ref}
        className={`transition-opacity duration-700 w-full max-w-5xl ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Current Position */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-[#004080] shadow-lg">
            MERN Stack Developer
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>Conative IT Solutions Pvt. Ltd.</strong> (February 17, 2023
            - Present)
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              Developing and maintaining scalable web applications using the
              MERN stack.
            </li>
            <li>
              Collaborating with cross-functional teams to define, design, and
              ship new features.
            </li>
            <li>
              Implementing responsive design principles to ensure seamless user
              experience across devices.
            </li>
            <li>
              Participating in code reviews and providing constructive feedback
              to peers.
            </li>
            <li>
              Utilizing version control systems (Git) for project management and
              collaboration.
            </li>
          </ul>
        </section>

        {/* Previous Position */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-[#004080] shadow-lg">
            MERN Stack Developer
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>Dollop Info-Tech Pvt. Ltd.</strong> (2021 - February 2023)
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              Designed, implemented, and maintained scalable web applications.
            </li>
            <li>
              Worked closely with clients to gather requirements and deliver
              tailored solutions.
            </li>
            <li>
              Utilized React.js for front-end development and Node.js for
              back-end services.
            </li>
            <li>
              Ensured high performance and responsiveness of applications by
              optimizing components.
            </li>
            <li>
              Mentored interns and junior developers, fostering a collaborative
              learning environment.
            </li>
          </ul>
        </section>

        {/* Internship Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2 text-[#004080] shadow-lg">
            MERN Stack Intern
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>Dollop Info-Tech Pvt. Ltd.</strong> (Internship Duration)
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              Gained hands-on experience in developing full-stack web
              applications using the MERN stack.
            </li>
            <li>
              Collaborated with experienced developers on real-world projects.
            </li>
            <li>Learned best practices in coding, testing, and deployment.</li>
            <li>
              Assisted in debugging and troubleshooting issues in existing
              applications.
            </li>
          </ul>
        </section>

        <div className="flex flex-col sm:flex-row justify-center gap-2 mx-auto">
          <BtnPrimary text="Skills" to="/skills" />
          <BtnPrimary text="Resume" to="/SachinSingh.pdf" download />
        </div>
      </div>
    </div>
  );
};

export default Experience;
