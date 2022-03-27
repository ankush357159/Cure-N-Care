import React from "react";
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const NeckPain = () => {
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
        Treatment of Neck Pain
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/Neckpain.jpg'
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
          <Typography sx={{ textAlign: "justify", mr:2 }}>
            Neck pain is a common complaint. Neck muscles can be strained from
            poor posture — whether it&apos;s leaning over your computer or
            hunching over your workbench. Osteoarthritis also is a common cause
            of neck pain.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Rarely, neck pain can be a symptom of a more serious problem. Seek
            medical care if your neck pain is accompanied by numbness or loss of
            strength in your arms or hands or if you have shooting pain into
            your shoulder or down your arm.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Seek immediate care if severe neck pain results from an injury, such
            as a motor vehicle accident, diving accident or fall. Most neck pain
            is associated with poor posture combined with age-related wear and
            tear. To help prevent neck pain, keep your head centered over your
            spine. Some simple changes in your daily routine may help. Contact a
            doctor if your neck pain:
          </Typography>
          <br />
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Is severe' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Persists for several days without relief' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Spreads down arms or legs' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Is accompanied by headache, numbness, weakness or tingling' />
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

export default NeckPain;
