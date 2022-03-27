import React from "react";
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const SpinalCordInjury = () => {
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
        Treatment of Spinalcord Injury
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/spinal-chord-injury.jpg'
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
            Spine is made of many bones called vertebrae. Your spinal cord runs
            downward through a canal in the center of these bones. The spinal
            cord is a bundle of nerves that carries messages between the brain
            and the rest of the body for movement and sensation.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Acute spinal cord injury (SCI) is due to a traumatic injury that
            bruises, partially tears, or completely tears the spinal cord. SCI
            is a common cause of permanent disability and death in children and
            adults.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Many things can cause SCI. The more common injuries occur when the
            area of the spine or neck is bent or compressed, as in the
            following:
          </Typography>
          <br />
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Falls' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Motor vehicle accidents' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Sports injuries' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Diving accidents' />
          </ListItem>

          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Trampoline accidents' />
          </ListItem>

          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Violence (gunshot or stab wounds)' />
          </ListItem>

          <br />

          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default SpinalCordInjury;
