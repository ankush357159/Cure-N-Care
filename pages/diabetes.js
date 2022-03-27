import React from "react";
import {
  Box,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Diabetes = () => {
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
        Treatment of Diabetes
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/diabetes.jpg'
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
            Diabetes mellitus, commonly known as diabetes, is a metabolic
            disease that causes high blood sugar. The hormone insulin moves
            sugar from the blood into your cells to be stored or used for
            energy. With diabetes, your body either doesn’t make enough insulin
            or can’t effectively use the insulin it does make.
          </Typography>
          <br />
          <Typography sx={{ textAlign: "justify" }}>
            Untreated high blood sugar from diabetes can damage your nerves,
            eyes, kidneys, and other organs. There are a few different types of
            diabetes:
          </Typography>
          <br />
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Type 1 diabetes is an autoimmune disease. The immune system attacks and destroys cells in the pancreas, where insulin is made. It’s unclear what causes this attack. About 10 percent of people with diabetes have this type.' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Type 2 diabetes occurs when your body becomes resistant to insulin, and sugar builds up in your blood.' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Prediabetes occurs when your blood sugar is higher than normal, but it’s not high enough for a diagnosis of type 2 diabetes.' />
          </ListItem>
          <ListItem>
            <CheckCircleOutlineIcon sx={{ color: "#ff2403", mr: 2 }} />
            <ListItemText primary='Gestational diabetes is high blood sugar during pregnancy. Insulin-blocking hormones produced by the placenta cause this type of diabetes.' />
          </ListItem>

          <br />

          <Typography sx={{ textAlign: "justify", mr: 2 }}>
            A rare condition called diabetes insipidus is not related to
            diabetes mellitus, although it has a similar name. It’s a different
            condition in which your kidneys remove too much fluid from your
            body.
          </Typography>
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default Diabetes;
