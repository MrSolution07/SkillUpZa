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
        <Header title="Frequently Asked Questions" />

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
            How can SkillUp benefit my business?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Find Top Talent</b>: Search for candidates based on specific skills, experience, and assessment results.<br />
              <b>Reduce Recruiting Costs</b>: Target qualified candidates and streamline your hiring process. <br />
              <b>Improve Candidate Quality</b>: Identify candidates with the right skills and the drive to learn and grow within your company. <br />
              <b>Build a Talent Pipeline</b>: Connect with potential candidates even when you're not actively hiring. 
              
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
            How does SkillUp work for businesses?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <b>Create a Free Employer Account</b>: Sign up for a free employer account to access SkillUp's talent pool and features. <br />
            <b>Post Job Openings</b>: Easily post job openings with detailed descriptions and requirements. <br />
            <b>Search and Filter Candidates</b>: Utilize our search filters to find candidates who perfectly match your needs. <br />
            <b>Review Skills</b>: View the results of a candidate's skills to gain deeper insights into their strengths and weaknesses. <br />
            <b>Connect with Candidates</b>: Contact top candidates directly through the SkillUp social page.
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
            No problem!  Feel free to contact our support team at <a href="mailto:skillupZA@outlook.com">
            skillupZA@outlook.com </a> and we'll be happy to help.

            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </DashboardLayout>
  );
};

export default FaqPage;
