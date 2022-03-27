import { CardMedia, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
          mx: { xs: 3, sm: 4, md: 5, lg: 10 },
          textAlign: "justify",
          mt: { xs: 3, sm: 4, md: 5, lg: 10 },
        }}
      >
        Cure & Care Clinic at Kamothe, Navi Mumbai provides integrated care in
        wide range of disease conditions ranging from musculoskeletal &
        neurological conditions, joint, neck and back pain caused by Arthritis,
        various orthopedic conditions to spasticity following a stroke. Main
        focus is to alleviate pain, improve function and maximise quality of
        life of patients afflicted with myriad disease conditions.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <CardMedia
          component='img'
          image='/DrManisha.jpeg'
          alt='New Clinic'
          sx={{
            height: { xs: 250, sm: 300, md: 250, lg: 300 },
            width: { xs: 250, sm: 300, md: 250, lg: 300 },
            objectFit: "fill",
            mx: { xs: "auto", sm: "auto", md: 5, lg: 10 },
            my: { xs: 3, sm: 4, md: 5, lg: 5 },
          }}
        />
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
              mx: { xs: 3, sm: 4, md: 5, lg: 10 },
              textAlign: "justify",
              mt: { xs: 3, sm: 4, md: 5, lg: 10 },
            }}
          >
            Dr.Manisha Shambharkar earned her medical degree from Government
            Medical College & Hospital, Nagpur and MD PMR from All India
            Institute of Physical Medicine and Rehabilitation, Mumbai. She has
            also received certification in Diabetes and Thyoroid disorders from
            Public Health Foundation of India. She is well trained with over 10
            years of experience and is associated with various leading hospitals
            in Navi Mumbai.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
