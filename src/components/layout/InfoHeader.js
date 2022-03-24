import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

const InfoHeader = () => {
  return (
    <Box component={motion.div}>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right top, #233274, #1e2f71, #182c6d, #12296a, #0a2667);",
          color: "#FFFFFF",
          py: 1,
        }}
      >
        <Typography
          component={motion.div}
          initial={{ x: "100vw" }}
          animate={{
            x: 0,
            transition: { delay: 1, duration: 10, ease: "easeInOut" },
          }}
          sx={{ pl: 3 }}
        >
          Best Pain Management Clinic In Kamothe
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoHeader;
