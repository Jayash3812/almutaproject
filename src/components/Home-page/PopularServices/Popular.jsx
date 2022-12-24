import React from "react";
import "./popular.css";
import { Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { data } from "../Servicesdata";

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
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{
            display: "flex",
            // gap: "20px",
            backgroundColor: "white",
            padding: "10px",
            width: "100%",
            borderRadius: "25px",
            // paddingLeft: "20px",
          }}
        >
          {data.slice(0, 4).map((item) => (
            <Grid
              item
              lg={2}
              md={4}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={item.link}>
                <button className="popular-btn">
                  <img src={item.image} alt="" />
                  <span>{item.text}</span>
                </button>
              </Link>
            </Grid>
          ))}
          <Grid
            item
            lg={2}
            md={4}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="">
              <button className="popular-btn">
                <span style={{ fontSize: "30px" }}>+</span>
              </button>
            </Link>
          </Grid>
          <Grid
            item
            lg={2}
            md={4}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="">
              <button className="popular-btn">
                <span style={{ fontSize: "30px" }}>+</span>
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
