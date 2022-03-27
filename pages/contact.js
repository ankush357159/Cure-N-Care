import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContactForm from "../src/components/ContactForm";

const Contact = () => {
  return (
    <Box>
      <Typography>Contact Us</Typography>
      <Box>
        <Box>
          <Typography>hello</Typography>
        </Box>
        <Box>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
