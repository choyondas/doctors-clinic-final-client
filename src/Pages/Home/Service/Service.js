import React from "react";
import "./Service.css";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <Card style={{ margin: "50px auto" }} sx={{ maxWidth: 275,boxShadow: 0  }}>
      <CardContent>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={img}
          alt=""
        />
        <br/>
        <Typography sx={{ fontSize: 16, fontWeight:"bold" }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <br />

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description.slice(0, 200)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
