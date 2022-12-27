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
        sx={{ padding: { lg: "40px", md: "40px", sm: "20px", xs: "20px" } }}
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
          // direction="row"
          // alignItems="center"
          sx={{
            width: { lg: "65%", md: "60%", sm: "65%", xs: "100%" },
            mb: "30px",
          }}
        >
          {data.map((item) => (
            <Grid
              item
              lg={2.4}
              md={4}
              sm={4}
              xs={4}
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
                <span>{item.text}</span>
              </div>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          // direction="row"
          sx={{
            width: { lg: "35%", md: "40%", sm: "35%", xs: "100%" },
            flexDirection: {
              lg: "column",
              md: "column",
              sm: "column",
              xs: "row",
            },
            gap: { sm: "5px", md: "7px" },
          }}
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
        >
          {dataGroupItems.map((group) =>
            group.category == currentCategory ? (
              <Grid
                item
                lg={1}
                md={1}
                sm={1}
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to={group.link}>
                  <div className="services_group_items">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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

                    <img
                      style={{ paddingRight: "20px" }}
                      src={arrowright}
                      alt="arrowright"
                    />
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
