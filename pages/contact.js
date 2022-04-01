import { CardMedia, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextSeo } from "next-seo";
import React from "react";
import GoogleMaps from "../src/components/util/GoogleMaps";
import { map } from "../src/components/util/mapboxGl";

const Contact = () => {
  return (
    <Box>
      <NextSeo
        title='Contact Cure & Care Clinic'
        description='Contact Cure & Care Clinic'
      />
      <Box sx={{ mx: 5 }}>
        <CardMedia
          component='img'
          image='/contact-us.jpg'
          sx={{
            height: "175px",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
            mt: -15,
            fontFamily: ["Oleo Script", "sans-serif"].join(","),
            fontSize: { sm: 30, lg: 40 },
          }}
        >
          Contact Us
        </Typography>
      </Box>

      <Box>
        <Box sx={{ mt: 15, mx: { xs: 3, sm: 5, md: 5, lg: 5, xl: 10 } }}>
          <Typography>Contact Us</Typography>
          <Divider />
        </Box>
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
            mt: 2,
          }}
        >
          <Box
            sx={{
              mx: { xs: 3, sm: 5, md: 5, lg: 5, xl: 10 },
              border: "1px solid #c2c2c2",
              borderRadius: 3,
            }}
          >
            <Box sx={{ mx: 2, my: 3 }}>
              <Typography sx={{ color: "#ed4545" }}>Address</Typography>
              <Box>
                <Typography>
                  Shop No.36, Moreshwar Complex, Plot No. 66, 67, 71, 72,
                </Typography>
                <Typography>Sector- 18 Kamothe, Maharashtra</Typography>
                <Typography>Pincode - 410209</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#ed4545", mt: 2 }}>
                  Contact
                </Typography>
                <Typography>+91 7506541231</Typography>
              </Box>

              <Box>
                <Typography sx={{ color: "#ed4545", mt: 2 }}>Email</Typography>
                <Typography>drmanisha.shambharkar@gmail.com</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: "40%",
                height: "40%",
                mx: { xs: "25%", sm: "25%", md: 0, lg: 0, xl: 0 },
              }}
            >
              <GoogleMaps />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
