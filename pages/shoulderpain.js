import React from "react";
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ShoulderPain = () => {
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
        Treatment of Shoulder Pain
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/shoulder-pain.jpg'
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
            The shoulder is the most movable joint in the human body. A group of
            four muscles and their tendons, called the rotator cuff, give the
            shoulder its wide range of motion.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Swelling, damage, or bone changes around the rotator cuff can cause
            shoulder pain. You may have pain when lifting the arm above your
            head or moving it forward or behind your back.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            The most common cause of shoulder pain occurs when rotator cuff
            tendons become trapped under the bony area in the shoulder. The
            tendons become inflamed or damaged. This condition is called rotator
            cuff tendinitis or bursitis.Shoulder pain may also be caused by:
          </Typography>

          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Arthritis in the shoulder joint' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Bone spurs in the shoulder area' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Bursitis, which is inflammation of a fluid-filled sac (bursa) that normally protects the joint and helps it move smoothly' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Broken shoulder bone' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Dislocation of the shoulder' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Shoulder separation' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Tears of the rotator cuff tendons' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Poor shoulder posture and mechanics' />
          </ListItem>
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default ShoulderPain;
