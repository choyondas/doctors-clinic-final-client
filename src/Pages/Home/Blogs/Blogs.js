import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import people1 from "../../../images/images/people-1.png";
import people2 from "../../../images/images/people-2.png";
import people3 from "../../../images/images/people-3.png";
import { Container, Typography } from "@mui/material";

//CARD_MEDIA
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import {  CardActions } from "@mui/material";

const Blogs = () => {
  const blogs = [
    {
      name: "Dr. Caudi",
      date: "23 April 2021",
      topic: "2 times of brush in a day can keep you healthy",
      description:
        "Gently move the brush back and forth in short (tooth-wide) strokes. Brush the outer surfaces, the inner surfaces, and the chewing surfaces of the teeth. To clean the inside surfaces of the front teeth, tilt the brush vertically and make several up-and-down strokes. ",
      img: people1,
    },
    {
      name: "Dr. John Mitchel",
      date: "23 May 2021",
      topic: "The Tooth cancer is taking a challeng",
      description:
        "The ability to spot mouth cancer undoubtedly continues as one of the most critical roles a dental professional has. Early diagnosis identified by practitioners can save a person's life. While being an enormous responsibility, being able to transform a person's quality of life remains a great honour and allows us to form a connection to a patient which is truly special and that will last forever.",
      img: people2,
    },
    {
      name: "Dr. Caudi",
      date: "23 April 2021",
      topic: "Risk assessment of oral cancer",
      description:
        "Oral cancer is a common malignancy, ranking first among all cancers in Western and Asian countries. Use of tobacco is regarded as a major risk factor, along with age and gender. Oral cancer is preceded by some benign lesions or conditions, which are termed pre-cancerous. Only one-third of people at the pre-cancerous stage of disease succumb to cancer.",
      img: people3,
    },
  ];

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 4,
            color: "#1976d2",
          }}
        >
          OUR BLOG
        </Typography>
        <Grid container spacing={2}>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{ padding: "30px" }}
                sx={{ Width: 245, height: 200 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",

                    textAlign: "left",
                  }}
                >
                  <CardMedia
                    component="img"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                    image={blog.img}
                    alt="green iguana"
                  />
                  <div style={{ textAlign: "left", marginLeft: "20px" }}>
                    <Typography>{blog.name}</Typography>
                    <Typography>{blog.date}</Typography>
                  </div>
                </div>

                <CardContent style={{ padding:'20px 0px' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "left" }}
                  >
                    {blog.topic}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ textAlign: "left" }}
                  >
                    {blog.description.slice(0, 150)}
                  </Typography>
                </CardContent>

                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blogs;
