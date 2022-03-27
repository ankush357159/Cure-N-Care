import { Button, CardMedia, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Safety = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "space-around",
          lg: "space-around",
        },
        mx: 5,
        my: 10,
        backgroundImage:
          "linear-gradient(to right top, #e2e7f0, #deedf3, #def2f1, #e5f5eb, #f2f7e6)",
      }}
    >
      <Box sx={{ ml: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 24, md: 30, lg: 46, fontWeight: 600 },
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
          }}
        >
          We are Ready to Safely Care for you{" "}
        </Typography>
        <Divider light={false} sx={{ color: "#000000", mr: "75%" }} />
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16, md: 20, lg: 24 },
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
          }}
        >
          At Cure & Care Clinic, your health and safety are our highest
          priority. We are ready to care for you and your family in our clinic
          with highest standards of Covid protection.
        </Typography>
        <Button
          variant='contained'
          sx={{
            background: "#fa9e00",
            mt: {xs:4, sm: 4, md: 6, lg: 6 },
            fontSize: { md: 15, lg: 20 },
            ml: { xs: "16%", sm: "25%", md: "auto", lg: "auto" },
          }}
        >
          Learn How We are keeping you safe
        </Button>
      </Box>
      <Box>
        <CardMedia
          component='img'
          image='/Safety.png'
          alt='New Clinic'
          sx={{
            height: { xs: "180px", sm: "200px", md: "250px", lg: "300px" },
            width: { xs: "240px", sm: "250px", md: "225px", lg: "275px" },
            objectFit: "fill",

            ml: { xs: "25%", sm: "32%", md: 4, lg: 5, xl: 5 },
            mr: { xs: "25%", sm: "32%", md: 4, lg: 5, xl: 5 },
            my: { xs: 2, sm: 2, lg: 2, xl: 5 },
          }}
        />
      </Box>
    </Box>
  );
};

export default Safety;
