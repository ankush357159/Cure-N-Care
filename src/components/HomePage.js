import { Box } from "@mui/material";
import React from "react";
import MainCarousel from "./layout/MainCarousel";

const HomePage = () => {
  return (
    <Box sx={{ position: "absolute" }}>
      <MainCarousel />
    </Box>
  );
};

export default HomePage;
