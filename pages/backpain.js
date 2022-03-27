import React from "react";
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const BackPain = () => {
  return (
    <Box
      sx={{
        mt: { xs: 3, sm: 4, md: 5, lg: 10 },
        mx: { xs: 3, sm: 4, md: 5, lg: 10 },
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: 24, sm: 28, md: 30, lg: 34 },
          fontWeight: "bold",
          mb: 3,
        }}
      >
        Treatment of Back Pain
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/back-pain.png'
          alt='New Clinic'
          sx={{
            height: { xs: 250, sm: 300, md: 250, lg: 300 },
            width: { xs: 250, sm: 300, md: 250, lg: 300 },
            objectFit: "fill",
            mx: { xs: "auto", sm: "auto", md: 0, lg: 0 },
            mb:3
          }}
        />
        <Box sx={{ mx: 5 }}>
          <Typography sx={{ textAlign: "justify" }}>
            Back pain includes lower back pain, middle back pain, upper back
            pain or low back pain with sciatica. Nerve and muscular problems,
            degenerative disc disease, and arthritis can result in back pain.{" "}
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            At Cure & Care Clinic, you will get detailed overview of your back
            pain and the role your vertebrae, discs, muscles, nerves and more
            play in helping you to twist, turn, bend, stand, walk, run, and
            lift. Knowing this information makes it easier for you to understand
            your back pain. Comprehensive report will be made of your back pain
            and will help you to get the right treatment.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Back pain commonly stems from strain, tension, or injury. Frequent
            causes of back pain are:
          </Typography>
          <br />
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Strained muscles or ligaments' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='A muscle spasm' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Muscle tension' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Damaged disc' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Injuries, fractures, or falls' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Injuries due to incorrect pose during work' />
          </ListItem>
        </Box>
      </Box>
    </Box>
  );
};

export default BackPain;
