import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import Item from "./Item";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lahu Gunjal",
      testimoial:
        "Very trustworthy and really experienced doctors.You could visit without any doubt to hospital for any disease.For covid, normal symptoms, related to arthritis....etc.Checking and caring of patients very carefully.Very less number of doctors we found such knowledge...caring and curing patients with very reasonable charge.",
      rating: 5,
    },

    {
      id: 2,
      name: "Pawan Tambe",
      testimoial:
        "I strongly recomend to refer to dr. Manisha mam. She is the best for back pain.I had backace and neck pain since 2015. I did many treatments, but were of no use.   I took appointment of dr manisha, and within a month there is 80% of pain releif.  Im happy with the treatment. Strongly recommend this dr.",
      rating: 5,
    },

    {
      id: 3,
      name: "Umesh Morkar",
      testimoial:
        "Very pleasant person and careful attitude towards Patient.I am very happy with this care. I would be suggest as Family doctor forever. Thank you Doctor Manisha Madam.",
      rating: 5,
    },
    {
      id: 4,
      name: "_A_Mayur Mejari",
      testimoial:
        "Service is excellent, well experienced doctor and especially 100% guarantee of result. It's my personal opinion bcoz i personally experienced the result of treatment.Actually A year ago , my father got affected by the paralysis stroke ( right ) , and now a month ago I started a treatment to cure and care clinic and trust me it's going to be my 100% right decision  bcoz from a 1st week my father experiencing a improvement in their right side. The doctor is so helpful to their patient. I strongly recommend that choose cure n care clinic for any medical help",
      rating: 5,
    },
  ];
  return (
    <Box sx={{ mx: { xs: 3, sm: 5, md: 7, lg: 10, xl: 10 } }}>
      <Typography
        sx={{
          fontSize: { xs: 24, sm: 26, md: 28, lg: 30, xl: 36 },
          fontWeight: 600,
        }}
      >
        Cure & Care Clinic Reviews
      </Typography>

      <Carousel
        height={200}
        autoPlay={true}
        animation='fade'
        indicators={false}
        interval={3000}
        navButtonsAlwaysInvisible={true}
        sx={{
          backgroundColor: "#aae6d4",
          mb:3
        }}
      >
        {testimonials.map((testimonial) => (
          <Item
            key={testimonial.id}
            name={testimonial.name}
            testimonial={testimonial.testimoial}
            rating={testimonial.rating}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
