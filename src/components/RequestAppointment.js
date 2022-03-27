import React from "react";
import { Box } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { CardMedia, Typography } from "@mui/material";

const RequestAppointment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mt: { xs: 6, sm: 10, md: 12, lg: 15, xl: 25 },
        mx: { xs: 2, sm: 3, md: 4, lg: 5, xl: 5 },
        border: "5px solid #fa9e00",
      }}
    >
      <CardMedia
        component='img'
        image='/appointment.png'
        alt='New Clinic'
        sx={{
          height: { xs: "180px", sm: "200px", md: "250px", lg: "300px" },
          width: { xs: "170px", sm: "180px", md: "225px", lg: "275px" },
          objectFit: "fill",

          ml: { xs: 2, sm: 1, md: 4, lg: 5, xl: 5 },
          my: "auto",
        }}
      />
      <Box sx={{ textAlign: "center" }}>
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
            justifyContent: "center",
            mt: { xs: 2, sm: 3, md: 4, lg: 5, xl: 5 },
          }}
        >
          <CalendarMonthIcon
            sx={{
              color: "#042eba",
              mx: { xs: "auto", sm: "auto", md: 3, lg: 5, xl: 5 },
              fontSize: { xs: 16, sm: 20, md: 30, lg: 40, xl: 46 },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 20, md: 24, lg: 30, xl: 30 },
              fontWeight: 600,
            }}
          >
            Request An Appointment
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: { xs: 5, sm: 5, md: 7, lg: 10, xl: 10 },
          }}
        >
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
              justifyContent: "center",
            }}
          >
            <LocalPhoneIcon
              sx={{
                color: "#042eba",
                mx: { xs: "auto", sm: "auto", md: 0, lg: 0, xl: 0 },
                fontSize: { xs: 16, sm: 20, md: 30, lg: 40, xl: 46 },
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 20, md: 24, lg: 30, xl: 30 },
                fontWeight: 600,
              }}
            >
              7506541231
            </Typography>
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
              justifyContent: "center",
              mb: { xs: 2, sm: 3, md: 4, lg: 5, xl: 5 },
              mr: { xs: 5, sm: 1, md: 4, lg: 5, xl: 5 },
              mt: { xs: 5, sm: 5, md: 7, lg: 10, xl: 10 },
            }}
          >
            <EmailIcon
              sx={{
                color: "#042eba",
                mx: { xs: "auto", sm: "auto", md: 3, lg: 5, xl: 5 },
                fontSize: { xs: 16, sm: 20, md: 30, lg: 40, xl: 46 },
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 20, md: 24, lg: 30, xl: 30 },
                fontWeight: 600,
              }}
            >
              drmanisha.shambharkar@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestAppointment;
