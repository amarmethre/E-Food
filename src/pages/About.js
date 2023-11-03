import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        We are delighted to extend a warm and hearty welcome to you. At my restaurant
As you navigate through our website, you'll discover the beauty, elegance, and exceptional services that await you at our hotel. Whether you're here for business or leisure, our goal is to make your experience unforgettable.

Explore our luxurious accommodations, indulge in exquisite dining, and take advantage of our top-notch facilities. Feel free to reach out to our friendly staff if you have any questions or need assistance in planning your visit.

Thank you for considering [Your Hotel Name] for your stay. We can't wait to welcome you in person and make your time with us truly exceptional.

Your comfort is our commitment
        </p>
        <br />
        <p><center>Thank you</center></p>
      </Box>
    </Layout>
  );
};

export default About;
