import React from "react";
import { pictureItems } from "../Servicesdata";
import "../Offers/offer.css";
import { Container, Grid } from "@mui/material";

const Offers = () => {
  return (
    <Container
      maxWidth="1730px"
      sx={{ margin: "35px 0 150px 0", display: "flex" }}
    >
      <Grid
        container
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          alignItems: "center",
          //   border: "1px solid red",
        }}
      >
        {pictureItems.map((item) => (
          <Grid item lg={3} md={3}>
            <div className="offers_images">
              <img src={item.picture} alt="" />
              <h2 className="offers_titles">{item.title}</h2>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Offers;
