import React from "react";
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const JointPain = () => {
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
        Treatment of Joint Pain
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/Joint-Pain.jpg'
          alt='New Clinic'
          sx={{
            height: { xs: 250, sm: 300, md: 250, lg: 300 },
            width: { xs: 250, sm: 300, md: 250, lg: 300 },
            objectFit: "fill",
            mx: { xs: "auto", sm: "auto", md: 0, lg: 0 },
            mb: 3,
          }}
        />
        <Box sx={{ mx: 5 }}>
          <Typography sx={{ textAlign: "justify", mr: 2 }}>
            Joints form the connections between bones. They provide support and
            help you move. Any damage to the joints from disease or injury can
            interfere with your movement and cause a lot of pain.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Joint pain is extremely common, especially as you age. Knee pain was
            the most common complaint, followed by shoulder and hip pain. But
            joint pain can affect any part of your body, from your ankles and
            feet to your shoulders and hands.A wide range of conditions can lead
            to painful joints:
          </Typography>
          <br />

          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Osteoarthritis, a “wear and tear” disease, is the most common type of arthritis.' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Rheumatoid arthritis is an autoimmune disorder that happens when your body attacks its own tissues.' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Bursitis is when sacs of fluid that help cushion your joints get inflamed.' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Gout is a form of arthritis that most often affects your big toe joint.' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Strains, sprains, and other injuries.' />
          </ListItem>
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default JointPain;
