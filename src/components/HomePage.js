import { Box } from "@mui/material";
import { NextSeo } from "next-seo";
import React from "react";
import MainCarousel from "./layout/MainCarousel";
import RequestAppointment from "./RequestAppointment";
import Safety from "./Safety";
import Services from "./Services";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <Box>
      <NextSeo
        title='Cure & Care Clinic in Kamothe'
        description='Cure & Care Clinic is a pain management clinic in Kamothe, Navi Mumbai that provide service to  the community.'
      />
      <MainCarousel />
      <Services />
      <RequestAppointment />
      <Safety />
      <Testimonials />
    </Box>
  );
};

export default HomePage;
