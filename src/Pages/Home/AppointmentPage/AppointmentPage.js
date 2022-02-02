import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import doctor from "../../../images/images/doctor.png";
import { Button, Typography } from "@mui/material";
import "./AppointmentPage.css";
import bg from "../../../images/images/appointment-bg.png";
const appointment = {
  background: `url(${bg})`,
  backgroundColor: "rgba(20, 21, 49, 0.7)",
  backgroundBlendMode: " darken, luminosity",
};

const AppointmentPage = () => {
  return (
    <Box style={appointment} sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <img
            style={{
              width: "401px",
              marginTop: "-110px",
              marginBottom: "-3px",
            }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          style={{
            textAlign: "left",
            paddingLeft: "40px",
            paddingRight: "10px",
          }}
        >
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#2ae1d0",
              padding: "20px 0px",
            }}
          >
            APPOINTMENT
          </Typography>
          <Typography style={{ fontSize: "24px", color: "white" }}>
            Make an appointment Today
          </Typography>
          <Typography
            style={{ fontSize: "11px", color: "white", padding: "20px 0px" }}
          >
            It is a long established fact that a reader will be distractedby the
            readable content of a page when looking at its.
          </Typography>
          <Button variant="contained" style={{ backgroundColor: "#6ff3f3 " }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentPage;
