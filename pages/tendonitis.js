import React from "react";
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Tendonitis = () => {
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
        Treatment of Tendonitis
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/tendonitis.jpg'
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
            Tendinitis is a condition where the connective tissues between your
            muscles and bones (tendons) become inflamed. Often caused by
            repetitive activities, tendinitis can be painful. It commonly
            happens in the elbow, knee, shoulder, hip, Achilles tendon and base
            of the thumb. Tendinitis is also called tendonitis.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Anyone can get tendinitis. However, it&apos;s more common in those
            who do repetitive activities. Some of these activities include:
          </Typography>
          <br />
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Injury' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Aging' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Certain diseases, such as diabetes or rheumatoid arthritis' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Certain antibiotics (quinolones such as Levaquin)' />
          </ListItem>

          <br />

          <Typography sx={{ textAlign: "justify", mr: 2 }}>
            Athletes who participate in certain sports, such as tennis, golf,
            bowling, or basketball, are at a higher risk of tendinitis. You may
            also be at a higher risk if your job requires physical exertion,
            overhead lifting, or repetitive motions or tasks.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify", mr: 2 }}>
            The pain from tendinitis is typically a dull ache concentrated
            around the affected area or joint. It increases when you move the
            injured area. The area will be tender, and you’ll feel increased
            pain if someone touches it.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Tendonitis;
