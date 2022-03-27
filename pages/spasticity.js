import React from "react";
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Spasticity = () => {
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
        Treatment of Spasticity
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/spasticity.jpg'
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
            Spasticity is a condition in which muscles stiffen or tighten,
            preventing normal fluid movement. The muscles remain contracted and
            resist being stretched, thus affecting movement, speech and gait.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Spasticity is generally caused by damage or disruption to the area
            of the brain and spinal cord that are responsible for controlling
            muscle and stretch reflexes. These disruptions can be due to an
            imbalance in the inhibitory and excitatory signals sent to the
            muscles, causing them to lock in place. Spasticity can be harmful to
            growing children as it can affect muscles and joints. People with
            brain injury, spinal cord injury, cerebral palsy or multiple
            sclerosis can have varying degrees of spasticity.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Symptoms of spasticity can vary from being mild stiffness or
            tightening of muscles to painful and uncontrollable spasms. Pain or
            tightness in joints is also common in spasticity.
          </Typography>
          <br />

          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Muscle stiffness, causing movements to be less precise and making certain tasks difficult to perform' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Muscle spasms, causing uncontrollable and often painful muscle contractions' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Involuntary crossing of the legs' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Muscle and joint deformities' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Muscle fatigue' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Inhibition of longitudinal muscle growth' />
          </ListItem>

          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default Spasticity;
