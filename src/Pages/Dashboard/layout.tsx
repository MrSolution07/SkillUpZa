import { useState } from "react";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "../theme01";
import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";


interface ColorMode {
  toggleColorMode: () => void; 
}

function DashboardLayout({children}) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode as ColorMode}>
    {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex" height="100vh">
            {/* @ts-ignore */}
          <Sidebar isSidebar={isSidebar} />
          <Box flexGrow={1} display="flex" flexDirection="column">
            {/* @ts-ignore */}
            <Topbar setIsSidebar={setIsSidebar} />
            <main className="content" style={{ overflowY: "auto" }}>

              {children}
              
            </main>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default DashboardLayout;
