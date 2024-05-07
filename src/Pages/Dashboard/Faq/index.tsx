import { Box, useTheme } from "@mui/material";
import Header from "./components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme01";
import React from "react";
import DashboardLayout from "../layout";

const FaqPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <DashboardLayout>
      <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
            What is SkillUp?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            SkillUp is a web app designed to help you navigate your career journey. Whether you're searching for a new job, looking to upskill in a specific area, or just getting started, SkillUp provides the tools and resources you need to succeed.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
            What can I do on SkillUp?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Find Jobs: Search for open positions based on your skills, interests, and location. <br />
              Upskill for a New Career: Explore a variety of learning paths and courses to develop in-demand skills. <br />
              Skill Assessment: Take our comprehensive assessment to identify your strengths and areas for development. <br />
              Personalized Recommendations: Get matched with jobs and courses tailored to your unique profile.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
            Are the courses on SkillUp free?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            SkillUp offers a mix of free and paid courses. You'll find a wide selection of free courses to get you started, along with premium options for in-depth learning and certifications.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
            Is SkillUp secure?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes, SkillUp takes your privacy seriously. We use industry-standard security measures to protect your personal information.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
            I have another question that's not answered here.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            No problem!  Feel free to contact our support team at <a href="mailto:Skillup24@outlook.com">
              Skillup24@outlook.com </a> and we'll be happy to help.

            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </DashboardLayout>
  );
};

export default FaqPage;
