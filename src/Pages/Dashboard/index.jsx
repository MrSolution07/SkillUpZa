import React from "react";
import DashboardLayout from "./layout";
import { tokens } from "../theme01";
import { Box, Button, useTheme, Card, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const companyImage = 'public/assets/images/dashlogo.png';

function DashboardPage({ children }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <DashboardLayout>
      <Box m="20px">
        {/* HEADER */}
        <Box mb={4}>
          <Typography variant="h2" component="h2" sx={{textAlign:"left",fontSize: "50px", fontWeight: "bolder", fontFamily: "sans-serif", mb: 2, marginBottom:"80px" }}>
            Welcome, Skill UpZA
          </Typography>
         
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" >
          <Box width="60%">
            {/* COMPANY DETAILS CARD */}
            <Card sx={{ position: 'relative', height: "70vh", width: "100%", mb: 4, overflow: "hidden" }}>
              <img src="public/assets/images/logo.png" alt="Company Banner" style={{ width: '100%', objectFit: 'cover' }} />
              <Box sx={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', padding: '20px' }}>
                <Typography variant="h3" component="div" textAlign="center" sx={{ mb: 2 }}>
                  Company Name
                </Typography>
                <Typography variant="h6" component="div" textAlign="center">
                  Email: skillupZA@outlook.com
                </Typography>
                <Typography variant="h6" component="div" textAlign="center">
                  Phone: (+27) 84 998 0630
                </Typography>
              </Box>
            </Card>
          </Box>
          <Box width="35%" display="flex" flexDirection="column" justifyContent="flex-start" ml={4}>
            {/* DOWNLOAD REPORTS BUTTON */}
            <Card
  sx={{
    backgroundColor: colors.blueAccent[700],
    color: colors.grey[100],
    fontSize: "14px",
    fontWeight: "bold",
    padding: "10px 20px",
    mb: 4,
    textAlign: "center",
  }}
>
  <Button
    sx={{
      backgroundColor: colors.blueAccent[700],
      color: colors.grey[100],
      fontSize: "14px",
      fontWeight: "bold",
      padding: "10px 20px",
    }}
  >
    <DownloadOutlinedIcon sx={{ mr: "10px" }} />
    Download Reports
  </Button>
</Card>

            {/* CALENDAR COMPONENT */}
            <Card sx={{ padding: "20px" }}>
              <Calendar />
            </Card>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
}

export default DashboardPage;
