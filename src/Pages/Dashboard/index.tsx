import React from "react";
import DashboardLayout from "./layout";
import { tokens } from "../theme01";
import { Box, Button, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

function DashboardPage({ children }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <DashboardLayout>
      <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
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
        </Box>
      </Box>
    </Box>
    </DashboardLayout>
  );
}

export default DashboardPage;
