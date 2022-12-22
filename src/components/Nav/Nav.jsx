import React from "react";
import nav_logo from "../../assets/nav_logo.png";
import gps_icon from "../../assets/icons/gps_icon.png";
import search_icon from "../../assets/icons/search_icon.png";
import translate_icon from "../../assets/icons/translate_icon.png";
import "../../components/Nav/nav.css";
import {
  AppBar,
  Grid,
  Toolbar,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComp from "./DrawerComp";

const Nav = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  console.log(isMatch);
  return (
    <Container maxWidth="1730px">
      <AppBar
        sx={{
          backgroundColor: "#E5E5E5",
          paddingTop: "20px",
          width: "100.2%",
          ml: "-5px",
        }}
        position="static"
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={10}
          >
            <Grid item lg={2} md={1} sm={1}>
              <img src={nav_logo} alt="logo" />
            </Grid>
            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <Grid item lg={1} md={1} sm={1}>
                  <Link to="/home">
                    <button className="grid-buttons">Home</button>
                  </Link>
                </Grid>
                <Grid item lg={1} md={1} sm={1}>
                  <Link to="/nearby">
                    <button className="grid-buttons"> Near By</button>
                  </Link>
                </Grid>
                <Grid item lg={1} md={1} sm={1}>
                  <Link to="/contactus">
                    <button className="grid-buttons"> Contact us</button>
                  </Link>
                </Grid>
                <Grid item lg={1} md={1} sm={1}>
                  <Link to="/history">
                    <button className="grid-buttons">Hisory</button>
                  </Link>
                </Grid>
                <Grid item lg={2} md={3} sm={1} xs={1} direction="row">
                  <img src={gps_icon} alt="map" />
                  <img src={translate_icon} alt="translate" />
                  <img src={search_icon} alt="search" />
                </Grid>
                <Grid item lg={2} md={2.4} sm={2} sx={{ whiteSpace: "nowrap" }}>
                  <p>Hello, user.name</p>
                  <p>user.number</p>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Nav;
