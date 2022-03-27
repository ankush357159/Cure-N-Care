import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CardMedia } from "@mui/material";
import { Box } from "@mui/system";

const MainCarousel = () => {
  return (
    <Box>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        swipeable={true}
        centerMode={false}
        showStatus={false}
        stopOnHover={false}
      >
        <Box>
          <CardMedia
            component='img'
            image='/cure-care-clinic-kamothe-3-3.jpg'
            alt='New Clinic'
            sx={{
              height: "435px",
              width: "100vw",
              objectFit: "fill",
              position: "relative",
            }}
          />
        </Box>
        <Box>
          <CardMedia
            component='img'
            image='/cure-care-clinic-kamothe-2-2.jpg'
            alt='New Clinic'
            sx={{
              height: "435px",
              width: "100vw",
              objectFit: "fill",
              position: "relative",
            }}
          />
        </Box>
        <Box>
          <CardMedia
            component='img'
            image='/cure-care-clinic-kamothe-1-1.jpg'
            alt='New Clinic'
            sx={{
              height: "435px",
              width: "100vw",
              objectFit: "fill",
              position: "relative",
            }}
          />
        </Box>
      </Carousel>
    </Box>
  );
};

export default MainCarousel;
