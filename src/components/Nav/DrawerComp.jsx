import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/Nav/nav.css";
import gps_icon from "../../assets/icons/gps_icon.png";
import search_icon from "../../assets/icons/search_icon.png";
import translate_icon from "../../assets/icons/translate_icon.png";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton>
            <Box
              sx={{
                fontFamily: "NeoSansArabic",
                display: "flex",
                gap: "5px",
                flexDirection: "column",
              }}
            >
              <div className="drawer_user">
                <span>Welcome, user.name</span>
                <span>user.number</span>
              </div>

              <Link to="/home">
                <p className="drawer_item">Home</p>
              </Link>
              <Link to="/nearby">
                <p className="drawer_item">Near by</p>
              </Link>
              <Link to="/contactus">
                <p className="drawer_item">Contact us</p>
              </Link>
              <Link to="/history">
                <p className="drawer_item">History</p>
              </Link>
              <a href="">
                <img src={gps_icon} alt="" />
              </a>
              <a href="">
                <img src={search_icon} alt="" />
              </a>
              <a href="">
                <img src={translate_icon} alt="" />
              </a>
            </Box>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{
          color: "00457c",
          marginLeft: "auto",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
