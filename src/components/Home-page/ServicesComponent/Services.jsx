import React, { useState } from "react";
import "./services.css";
import search_icon from "../../../assets/icons/search_icon.png";
import { Grid, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { data, dataGroupItems } from "../Servicesdata";
import arrowright from "../../../assets/icons/arrowright.png";

const Services = () => {
  const [currentCategory, setCurrentCategory] = useState("");

  const handleCategory = (e) => {
    e.preventDefault();
    setCurrentCategory(e.target.id);
  };

  console.log(currentCategory);

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
            <Grid
              item
              lg={2.4}
              md={4}
              id={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="services_items__main__card"
                id={item.category}
                onClick={(e) => handleCategory(e)}
              >
                <img src={item.image} alt="" />
                <span style={{ fontSize: "22px" }}>{item.text}</span>
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          direction="column"
          sx={{ width: "25%" }}
          spacing={4}
          justifyContent="flex-start"
          alignItems="center"
        >
          {dataGroupItems.map((group) =>
            group.category == currentCategory ? (
              <Grid item>
                <Link to={group.link}>
                  <div className="services_group_items">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        padding: "10px",
                      }}
                    >
                      <img src={group.pic} alt="home_icon" />
                      <span
                        style={{
                          color: "#188AC8",
                          fontFamily: "NeoSansArabic",
                        }}
                      >
                        {group.name}
                      </span>
                    </Box>
                    <Grid item>
                      <img
                        style={{ paddingRight: "20px" }}
                        src={arrowright}
                        alt="arrowright"
                      />
                    </Grid>
                  </div>
                </Link>
              </Grid>
            ) : (
              ""
            )
          )}
        </Grid>
      </Grid>
      {/* </div> */}
    </Container>
  );
};

export default Services;
