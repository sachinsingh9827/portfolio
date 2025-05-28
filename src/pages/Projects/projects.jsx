import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Button, MobileStepper, Box, Typography, Paper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LinkIcon from "@mui/icons-material/Link";
import learnandachieve from "../../assets/learnandachieve.png";
import coloHealth from "../../assets/coloHealth.png";
import moneylog from "../../assets/moneylog.png";
import conative from "../../assets/conative.png";
import emailSignature from "../../assets/emailSignature.png";
import BtnPrimary from "../../components/BtnPrimary";
const projectData = [
  {
    title: "Learn and Achieve",
    description:
      "Pradnya Learn and Achieve Pvt Ltd. is dedicated to enhancing the educational experience of students across India. We invite you to join us on this remarkable journey to build a brighter future for the next generation.",
    image: learnandachieve,
    link: "https://learnandachieve.in/",
  },
  {
    title: "ColoHealth",
    description:
      "A health screening platform guiding users through a 3-step process: patient history, payment, and blood draw scheduling for colorectal cancer testing.",
    image: coloHealth,
    link: "https://orders.newdaydiagnostics.com",
  },
  {
    title: "Conative",
    description:
      "Ongoing maintenance and feature enhancements for Conative, a cutting-edge platform focused on [brief key feature or purpose of Conative].",
    image: conative, // replace with your actual imported image variable
    link: "https://conativeitsolutions.com/", // replace with actual URL if public
  },
  {
    title: "Email Signature",
    description:
      "Developed and maintained a user-friendly platform for creating professional email signatures with customization and integration options.",
    image: emailSignature, // replace with your actual imported image variable
    link: "https://emailssignature.com/",
  },
  {
    title: "Moneylog",
    description:
      "Smart expense tracking and budgeting app to manage your finances with ease.",
    image: moneylog,
    link: "https://moneylog-f.vercel.app",
  },

  // Add more projects here
];

export default function Projects() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projectData.length;

  // Auto-slide every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxSteps]);

  const handleNext = () =>
    setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
  const handleBack = () =>
    setActiveStep((prev) => (prev === 0 ? maxSteps - 1 : prev - 1));

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
            sx={{
              width: "100%", // full width container
              maxHeight: { xs: 200, sm: 300, md: 400 }, // control max height by breakpoints
              height: "auto", // keep aspect ratio
              display: "block",
              objectFit: "contain", // show entire image without cropping
              borderRadius: 2,
              backgroundColor: "#fff", // optional to avoid transparency issues
              mx: "auto", // center horizontally if smaller than container
            }}
            src={projectData[activeStep].image}
            alt={projectData[activeStep].title}
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
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
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
