import React from "react";
import "../PopularServices/popular.css";
import { Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { data } from "../ServicesComponent/Servicesdata";

const Popular = () => {
  return (
    <Container maxWidth="1730px">
      {/* <div className="popular"> */}
      <Grid
        container
        direction="column"
        spacing={1}
        justifyContent="space-between"
        backgroundColor="#e5e5e5"
        sx={{ padding: "40px" }}
      >
        <Grid item sx={{ mb: "40px", alignSelf: "flex-start" }}>
          <h2 className="popular_title">Popular Services</h2>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={1}
          sx={{
            display: "flex",
            gap: "20px",
            backgroundColor: "white",
            padding: "20px",
            width: "100%",
            borderRadius: "25px",
            // paddingLeft: "20px",
          }}
        >
          {data.slice(0, 3).map((item) => (
            <Grid item md={2.2}>
              <Link to={item.link}>
                <button className="popular-btn">
                  <img src={item.image} alt="" />
                  <span>{item.text}</span>
                </button>
              </Link>
            </Grid>
          ))}
          <Grid item md={2}>
            <Link to="">
              <button className="popular-btn">
                <span>+</span>
              </button>
            </Link>
          </Grid>
          <Grid item md={2}>
            <Link to="">
              <button className="popular-btn">
                <span>+</span>
              </button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      {/* </div> */}
    </Container>
  );
};

export default Popular;
