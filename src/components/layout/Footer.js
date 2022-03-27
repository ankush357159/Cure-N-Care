import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#091723",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        justifyContent: "center",
        py: { md: 4, lg: 3 },
        alignItems: "center",
        position: "relative",
        mt: 5,
        height: "200px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: { xs: 16, sm: 24, md: 30, lg: 40 } }}>
          Clinic Address
        </Typography>
        <Typography sx={{ fontSize: { xs: 12, sm: 16, md: 20, lg: 24 } }}>
          Shop No.36, Moreshwar Complex, Plot No. 66, 67, 71, 72, Sector- 18
          Kamothe, Maharashtra 410209 India
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
