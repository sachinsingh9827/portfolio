import React, { useEffect, useRef, useState } from "react";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LinkIcon from "@mui/icons-material/Link";
import BtnPrimary from "../../components/BtnPrimary";

// Import optimized images (consider converting them to WebP or compressing them)
import learnandachieve from "../../assets/learnandachieve.png";
import coloHealth from "../../assets/coloHealth.png";
import moneylog from "../../assets/moneylog.png";
import conative from "../../assets/conative.png";
import emailSignature from "../../assets/emailSignature.png";

const projectData = [
  {
    title: "Learn and Achieve",
    description:
      "Pradnya Learn and Achieve Pvt Ltd. is dedicated to enhancing the educational experience of students across India.",
    image: learnandachieve,
    link: "https://learnandachieve.in/",
  },
  {
    title: "ColoHealth",
    description:
      "A health screening platform guiding users through a 3-step process.",
    image: coloHealth,
    link: "https://orders.newdaydiagnostics.com",
  },
  {
    title: "Conative",
    description: "Ongoing maintenance and feature enhancements for Conative.",
    image: conative,
    link: "https://conativeitsolutions.com/",
  },
  {
    title: "Email Signature",
    description:
      "Developed a user-friendly platform for creating professional email signatures.",
    image: emailSignature,
    link: "https://emailssignature.com/",
  },
  {
    title: "Moneylog",
    description: "Smart expense tracking and budgeting app.",
    image: moneylog,
    link: "https://moneylog-f.vercel.app",
  },
];

export default function Projects() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projectData.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [maxSteps]);

  const handleNext = () => {
    setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
    clearInterval(intervalRef.current);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev === 0 ? maxSteps - 1 : prev - 1));
    clearInterval(intervalRef.current);
  };

  return (
    <div className="font-montserrat mt-10">
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          p: 2,
          bgcolor: "#f9f9f9",
          marginTop: "80px",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#004080" }}
          className="uppercase"
        >
          My Projects
        </Typography>

        <Paper
          elevation={3}
          sx={{ p: 2, textAlign: "center", borderRadius: 3 }}
        >
          <Box
            component="img"
            loading="lazy"
            src={projectData[activeStep].image}
            alt={projectData[activeStep].title}
            sx={{
              width: "100%",
              maxHeight: { xs: 200, sm: 300, md: 400 },
              height: "auto",
              display: "block",
              objectFit: "contain",
              borderRadius: 2,
              backgroundColor: "#fff",
              mx: "auto",
            }}
          />

          <Typography
            variant="h6"
            sx={{ mt: 2, fontWeight: 600, color: "#004080" }}
          >
            {projectData[activeStep].title}
          </Typography>

          <Typography
            variant="body1"
            align="left"
            sx={{ mt: 1, color: "#004080" }}
          >
            {projectData[activeStep].description}
          </Typography>

          <BtnPrimary
            text="View"
            to={projectData[activeStep].link}
            Icon={LinkIcon}
          />
        </Paper>

        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={maxSteps === 1}>
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={maxSteps === 1}>
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
          sx={{ mt: 4, justifyContent: "center" }}
        />
      </Box>
    </div>
  );
}
