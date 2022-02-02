import React from "react";
import Box from "@mui/material/Box";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import doctor1 from "../../../images/images/doctor-small.png";
import { Container } from "@mui/material";
const Doctors = () => {
  const doctors = [
    {
      name: "Dr.Caudi",
      phone: "+8698794938",
      img: doctor1,
    },
    {
      name: "Dr.Caudi",
      phone: "+8698794938",
      img: doctor1,
    },
    {
      name: "Dr.Caudi",
      phone: "+8698794938",
      img: doctor1,
    },
  ];

  return (
    <div>
      <h2>Our Doctors</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Grid item xs={12} sm={6} md={4} style={{ padding: "20px" }}>
              <Container sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <img style={{ width: "200px" }} src={doctor.img} alt="" />
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2">
                    <i class="fas fa-phone-alt"></i> {doctor.phone}
                  </Typography>
                </CardContent>
              </Container>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Doctors;
