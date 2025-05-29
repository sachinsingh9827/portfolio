import React from "react";
import BtnPrimary from "../../components/BtnPrimary";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import LinkIcon from "@mui/icons-material/Link";

const About = () => {
  const [leftRef, leftVisible] = useScrollAnimation();

  return (
    <div className="flex items-center justify-center max-w-full mx-auto px-4 sm:px-8 py-12 min-h-screen bg-white font-montserrat mt-8">
      {/* Left Content */}
      <div
        ref={leftRef}
        className={`md:w-full mb-10 md:mb-0 transition-opacity duration-700 ${
          leftVisible ? "animate-slide-left opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-extrabold text-[#004080] mb-12 uppercase">
          About Me
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed text-base sm:text-lg max-w-xl mx-auto md:mx-0">
          Hi! I'm Sachin Singh, a passionate MERN stack developer with a knack
          for building clean, scalable, and efficient web applications. I enjoy
          working with modern technologies to create seamless user experiences
          and solve real-world problems.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-[#004080] shadow-lg">
          Skills
        </h3>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>JavaScript (ES6)</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>RESTful API development</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-[#004080] shadow-lg">
          Education
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Master of Computer Applications</strong> - AKS University,
          Satna (M.P.) (2021-2023)
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Bachelor of Computer Applications</strong> - Scholars Home
          College, Satna (M.P.) (2019-2021)
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-[#004080] shadow-lg">
          Work Experience
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>MERN Stack Developer</strong> - Conative IT Solutions Pvt.
          Ltd. (February 17, 2023 - Present)
          <br /> Currently working as a MERN Stack Developer, focusing on
          developing and maintaining scalable web applications.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>MERN Stack Developer</strong> - Dollop Info-Tech Pvt. Ltd.,
          Indore (M.P.)
          <br /> Experienced Full Stack developer with 1.6 years of hands-on
          experience in designing, implementing, and maintaining scalable web
          applications.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-[#004080] shadow-lg">
          Projects
        </h3>

        <div className="space-y-4">
          {[
            {
              url: "https://learnandachieve.in/",
              title: "Learn & Achieve | E-Learning Platform",
              description:
                "Developed a comprehensive e-learning platform with features such as admin and web interfaces, mock tests, online classes, and subject-wise study materials.",
            },
            {
              url: "https://orders.newdaydiagnostics.com",
              title: "ColoHealth | Health Screening Platform",
              description:
                "A health screening platform guiding users through a 3-step process: patient history, payment, and blood draw scheduling for colorectal cancer testing.",
            },
            {
              url: "https://conativeitsolutions.com/",
              title: "Conative | IT Solutions",
              description:
                "Ongoing maintenance and feature enhancements for Conative, a cutting-edge platform focused on IT solutions and innovations.",
            },
            {
              url: "https://emailssignature.com/",
              title: "Email Signature | Professional Signatures",
              description:
                "Maintained a user-friendly platform for creating professional email signatures with customization and integration options.",
            },
            {
              url: "https://moneylog-f.vercel.app",
              title: "Moneylog | Expense Tracker",
              description:
                "Smart expense tracking and budgeting app to manage your finances with ease.",
            },
          ].map(({ url, title, description }) => (
            <div key={url}>
              <p className="text-gray-700 mb-2">
                <strong>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004080] hover:underline flex items-center gap-1"
                  >
                    {title} <LinkIcon className="rotate-[45deg]" />
                  </a>
                </strong>
                <br />
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-2 mt-6">
          <BtnPrimary text="Skills" to="/skills" />
          <BtnPrimary text="Resume" to="/SachinSingh.pdf" download />
        </div>
      </div>
    </div>
  );
};

export default About;
