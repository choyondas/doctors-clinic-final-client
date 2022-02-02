import React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import chair from "../../../images/images/chair.png";
import { Button, CardMedia, Container, Typography } from "@mui/material";
import bg from "../../../images/images/bg.png";
const Banner = () => {
  const backstyle = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    position: "center",
    height: "400px",
  };

  return (
    <Box style={backstyle}>
      <Container style={{ paddingTop: "100px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="h3" style={{ textAlign: "left" }}>
                Your New Smile Starts Here!
              </Typography>
              <br />
              <Typography style={{ textAlign: "left" }}>
                Our mission is to help you. Stay up to date on the latest
                healthcare news. Get medical tips that you can use everyday.
                Visit Avidity Medical Design Academy. Learn how to use social
                media in healthcare for free. Enroll Online. Browse Courses.
                View Pricing Details.
              </Typography>
              <br />

              <Button variant="contained">Get Appointment</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CardMedia
                component="img"
                height="220"
                image={chair}
                alt="Paella dish"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
