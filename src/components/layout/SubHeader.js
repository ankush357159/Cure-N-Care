import React from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Link from "next/link";

const SubHeader = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right top, #38d6ec, #75dbf0, #9ddff2, #bee4f2, #dae9f0);",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5 },
              borderRadius: 0,
              ml: { xs: "0.25em", sm: "0.375em", md: "0.5em", lg: "0.3em" },
            }}
          >
            <Link href='/' passHref={true}>
              <CardMedia
                component='img'
                image={"/Cure&CareClinicLogo.png"}
                sx={{
                  objectFit: "scale-down",
                  cursor: "pointer",
                  height: { xs: "3em", sm: "4em", md: "4em", lg: "5.75em" },
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: "3em",
              cursor: "pointer",
            }}
          >
            <Link href='/' passHref={true}>
              <Typography
                sx={{
                  fontFamily: ["Anton-Regular", "OleoScript-Regular"].join(","),
                  fontSize: { xs: 28, sm: 34, md: 38, lg: 46 },
                  color: "#100259",
                  mb: 0,
                  ml: 0,
                }}
              >
                CURE & CARE
              </Typography>
            </Link>
            <Link href='/' passHref={true}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.7em",
                    sm: "0.9em",
                    md: "1em",
                    lg: "1.2em",
                  },
                  fontWeight: 600,
                  color: "#FFF",
                  backgroundColor: "#100259",
                  pl: { xs: "1.5em", sm: "1em", md: 2.5, lg: 3 },
                  pr: 0,
                  mt: -1,
                  mx: "auto",
                  pt: 0,
                  cursor: "pointer",
                  letterSpacing: "2em",
                }}
              >
                CLINIC
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: { xs: 0.5, sm: 1, md: 1, lg: 1.8 },
            }}
          >
            <PhoneAndroidIcon
              sx={{
                color: "#292da3",
                ml: 2,
                mt: { xs: 1.5, sm: 2, md: 1, lg: 2 },
                display: "block",
                fontSize: 30,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // display: "block",
                ml: 0.5,
              }}
            >
              <Typography
                sx={{
                  pt: 1,
                  color: "#0a0021",
                  fontSize: {
                    xs: "0.8em",
                    sm: "0.8em",
                    md: "0.8em",
                    lg: "1.2em",
                  },
                }}
              >
                Call Us
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    xs: "0.5em",
                    sm: "0.8em",
                    md: "0.9em",
                    lg: "1.2em",
                  },
                  fontWeight: 600,
                  color: "#0a0021",
                }}
              >
                7506541231
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: { sm: 2, md: 1, lg: 1 },
              ml: { sm: 5, md: 2, lg: 3 },
              mr: 2,
              display: "block",
            }}
          >
            <Button
              variant='filled'
              sx={{
                backgroundColor: "#fa9e00",
                color: "#FFF",
                mt: { xs: "1em", sm: "-0.5em", md: "-0.1em", lg: "1em" },
                mb: { xs: 0, sm: "0.5em", md: "0.5em", lg: 0 },
                fontSize: {
                  xs: "0.5em",
                  sm: "0.8em",
                  md: "1em",
                  lg: "1.2em",
                },
                maxWidth: { xs: "10em", sm: "12em", md: "14em", lg: "14em" },
              }}
            >
              Request Appointment
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubHeader;
