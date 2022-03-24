import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const MainCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={true}
      swipeable={true}
      centerMode={false}
      showStatus={false}
    >
      <Box>
        {/* <CardMedia
          component='img'
          image='/cure-care-clinic-kamothe-3.jpg'
          sx={{ height: "100%", width: "auto" }}
        /> */}
        <Image
          src={"/cure-care-clinic-kamothe-3.jpg"}
          alt='Sever Pain Management'
          position='relative'
          height={"700px"}
          width={"1200px"}
          objectFit='cover'
        />
        <Typography
          sx={{
            fontFamily: ["Lobster-Regular", "Lobster-Regular"].join(","),
            fontSize: { xs: 28, sm: 34, md: 38, lg: 72 },
            color: "#f72d05",
            mb: 0,
            mt: { xs: "-11.5em", sm: "-9.5em", md: "-12.5em", lg: "-13.5em" },
          }}
        >
          Sever Pain Management
        </Typography>
      </Box>
      <Box>
        {/* <CardMedia
          component='img'
          image='/cure-care-clinic-kamothe-2.jpg'
          sx={{ height: "100%", width: "auto" }}
        /> */}
        <Image
          src={"/cure-care-clinic-kamothe-2.jpg"}
          alt='Sever Pain Management'
          position='relative'
          height={"700px"}
          width={"1200px"}
          objectFit='cover'
        />
        <Typography
          sx={{
            fontFamily: ["Lobster-Regular", "Lobster-Regular"].join(","),
            fontSize: { xs: 28, sm: 34, md: 38, lg: 72 },
            color: "#f72d05",
            mb: 0,
            mt: { xs: "-4.5em", sm: "-9.5em", md: "-8.5em", lg: "-9.5em" },
          }}
        >
          Arthrities
        </Typography>
      </Box>
      <Box>
        {/* <CardMedia
          component='img'
          image='/cure-care-clinic-kamothe-1.jpg'
          sx={{ height: "100%", width: "auto" }}
        /> */}
        <Image
          src={"/cure-care-clinic-kamothe-1.jpg"}
          alt='Sever Pain Management'
          position='relative'
          height={"700px"}
          width={"1200px"}
          objectFit='cover'
        />
        <Typography
          sx={{
            fontFamily: ["Lobster-Regular", "Lobster-Regular"].join(","),
            fontSize: { xs: 28, sm: 34, md: 38, lg: 72 },
            color: "#f72d05",
            mb: 0,
            mt: { lg: "-9.5em" },
          }}
        >
          Diabetes
        </Typography>
      </Box>
    </Carousel>
  );
};

export default MainCarousel;
