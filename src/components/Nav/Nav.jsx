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
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <img src={nav_logo} alt="logo" />
        </Grid>
        <Grid item xs={1}>
          <Link to="/home">Home</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/nearby">Near By</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/contactus">Contact Us</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/history">History</Link>
        </Grid>
        <Grid item xs={2}>
          <img src={gps_icon} alt="map" />
          <img src={translate_icon} alt="translate" />
          <img src={search_icon} alt="search" />
        </Grid>
        <Grid item xs={1}>
          <p>Hello, user.name</p>
          <p>user.number</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nav;
