import React from "react";
import nav_logo from "../../assets/nav_logo.png";
import gps_icon from "../../assets/icons/gps_icon.png";
import search_icon from "../../assets/icons/search_icon.png";
import translate_icon from "../../assets/icons/translate_icon.png";
import "../../components/Nav/nav.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={16}
        sx={{ backgroundColor: "#E5E5E5" }}
      >
        <Grid item xs={2}>
          <img src={nav_logo} alt="logo" />
        </Grid>

        <Grid item xs={1}>
          <Link to="/home">
            <button className="grid-buttons">Home</button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/nearby">
            <button className="grid-buttons"> Near By</button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/contactus">
            <button className="grid-buttons"> Contact us</button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/history">
            <button className="grid-buttons">Hisory</button>
          </Link>
        </Grid>
        <Grid item xs={3} direction="row">
          <img src={gps_icon} alt="map" />
          <img src={translate_icon} alt="translate" />
          <img src={search_icon} alt="search" />
        </Grid>
        <Grid item xs={2}>
          <p>Hello, user.name</p>
          <p>user.number</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nav;
