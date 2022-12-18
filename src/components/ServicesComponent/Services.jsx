import React from "react";
import "../../components/ServicesComponent/services.css";
import search_icon from "../../assets/icons/search_icon.png";
import { Box, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { data, dataGroup } from "./Servicesdata";
import home from "../../assets/icons/home_icon.png";
import arrowright from "../../assets/icons/arrowright.png";

const Services = () => {
  return (
    <Container maxWidth="1730px">
      {/* <div className="services"> */}
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent="space-between"
        backgroundColor="#e5e5e5"
        sx={{ padding: "40px" }}
      >
        <Grid item sx={{ mb: "20px" }}>
          <h2 className="services_title">Services</h2>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          sx={{ paddingLeft: "8px", width: "97.2%", mb: "20px" }}
        >
          <h4>Search services</h4>
          <a href="" style={{ backgroundColor: "white" }}>
            <img src={search_icon} alt="search_icon" />
          </a>
        </Grid>

        <Grid
          container
          spacing={1}
          direction="row"
          // alignItems="center"
          sx={{ width: "75%" }}
        >
          {data.map((item) => (
            <Grid item md={2.4} sx={{}}>
              <a className="services_items__main__card" href="">
                <Link to={item.link}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "172px",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "30px",
                      fontFamily: "NeoSansArabic",
                    }}
                  >
                    <img src={item.image} alt="" />
                    <span>{item.text}</span>
                  </Box>
                </Link>
              </a>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          direction="column"
          sx={{ width: "25%" }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {/* {dataGroup.map((group) => (
              <Grid item>
                <Link>
                  <div className="services_group_items">
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        padding: "10px",
                      }}
                    >
                      <img src={home} alt="home_icon" />
                      <span
                        style={{
                          color: "#188AC8",
                          fontFamily: "NeoSansArabic",
                        }}
                      >
                        {group.name}
                      </span>
                    </Grid>
                    <Grid item>
                      <img src={arrowright} alt="arrowright" />
                    </Grid>
                  </div>
                </Link>
              </Grid>
            ))} */}
        </Grid>
      </Grid>
      {/* </div> */}
    </Container>
  );
};

export default Services;
