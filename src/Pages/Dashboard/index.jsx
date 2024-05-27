import React from "react";
import DashboardLayout from "./layout";
import { tokens } from "../theme01";
import { Box, Button, useTheme, Card, Typography, Grid } from "@mui/material";
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
        <Typography variant="h2" component="h2" sx={{ textAlign:"left",fontSize: "50px", fontWeight: "bolder", fontFamily: "sans-serif", mb: 2 }}>
          Welcome, <span style={{
            backgroundImage: 'linear-gradient(to right, darkblue, darkcyan)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}>Skill UpZA</span>
        </Typography>
        
        <Grid container spacing={2}>
          {/* COMPANY DETAILS CARD */}
          <Grid item xs={12} md={7}>
            <Card sx={{ position: 'relative', height: "70vh", mb: 4, overflow: "hidden" }}>
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
          </Grid>
          
          {/* DOWNLOAD REPORTS BUTTON */}
          <Grid item xs={12} md={5}>
            <Card sx={{
              backgroundImage: 'linear-gradient(to right, #13547a, #80d0c7, darkcyan)',
              color: colors.blueAccent[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              mb: 4,
              textAlign: "center",
            }}>
              <Button
                sx={{
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                {/* <DownloadOutlinedIcon sx={{ mr: "10px" }} /> */}
                CALENDAR
              </Button>
            </Card>
            
            {/* CALENDAR COMPONENT */}
            <Card sx={{ padding: "20px" }}>
              <Calendar />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}

export default DashboardPage;
