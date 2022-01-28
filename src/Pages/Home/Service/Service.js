import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Service = (props) => {
  const service = props.service;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <img src={service.img} alt="" />
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {service.name}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
