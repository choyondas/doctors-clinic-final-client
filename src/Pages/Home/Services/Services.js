import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/images/fluoride.png";
import cavity from "../../../images/images/cavity.png";
import whitening from "../../../images/images/whitening.png";
const services = [
  {
    name: "Fluoride Treatment",
    description: `Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk.`,
    img: fluoride,
  },
  {
    name: "Cavity",
    description: `A cavity is a hole in a tooth that develops from tooth decay. Cavities form when acids in the mouth wear down, or erode, a tooth's hard outer layer (enamel). Anyone can get a cavity.`,
    img: cavity,
  },
  {
    name: "Teath Whitening",
    description: `Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.`,
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box className="mx-auto" spacing={4} sx={{ flexGrow: 1 }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
