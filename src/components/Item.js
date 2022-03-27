import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Item = ({ name, testimonial, rating }) => {
  return (
    <Box>
      <Box sx={{ mx: { xs: 3, sm: 5, md: 7, lg: 10, xl: 10 }, mt: 3 }}>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16, md: 18, lg: 20, xl: 22 },
            fontWeight: 600,
          }}
        >
          {name}
        </Typography>
        <Typography sx={{fontStyle:"italic"}}>{testimonial}</Typography>
        <Rating name='read-only' value={rating} readOnly />
      </Box>
    </Box>
  );
};

export default Item;
