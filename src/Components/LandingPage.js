import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import Landscape from "./Landscape";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Typography variant="h4" component="div" gutterBottom>
          Welcome to the GabrielRCE BlogTravel App
        </Typography>
        <Landscape />
      </Box>
    </>
  );
}

export default LandingPage;
