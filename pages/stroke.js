import React from "react";
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Stroke = () => {
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
        Treatment of Stroke
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/stroke-rehab.png'
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
            A stroke occurs when blood clots or broken blood vessels cut off the
            blood supply to your brain. Nearly 1 in 4 strokes occur in someone
            who has had a previous stroke.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Strokes can cause significant impairment in language, cognition,
            motor, and sensory skills. This is why it’s considered to be a
            leading cause of serious long-term disability.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Recovering from a stroke can be a lengthy process that requires
            patience, hard work, and commitment. It may take years to recover.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Rehab medicine is designed to meet each person&apos;s specific
            needs. So, each program is different. Some general treatment
            components for stroke rehab programs include:
          </Typography>
          <br />
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Treating the basic disease and preventing complications' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Treating the disability and improving function' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Providing adaptive tools and altering the environment' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Teaching the patient and family and helping them adapt to lifestyle changes' />
          </ListItem>

          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default Stroke;
