import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import mail from "../../assets/icons/mail.png";
import gps from "../../assets/icons/gps.png";
import phone from "../../assets/icons/phone.png";
import footer_logo from "../../assets/footer_logo.png";
import fb from "../../assets/fb.png";
import instagram from "../../assets/instagram_footer.png";
import youtube from "../../assets/youtube_footer.png";
import appstore from "../../assets/social_icon1.png";
import googlestore from "../../assets/social_icon2.png";
import linkdin from "../../assets/linkdin.png";

import "../Footer/footer.css";

const Footer = () => {
  return (
    <Container maxWidth="1730px">
      <Grid
        container
        spacing={5}
        sx={{
          background:
            " linear-gradient(180deg, #165385 20.1%, #165385 20.11%, #0079C1 100%)",
          borderRadius: "50px 50px 0px 0px",
          justifyContent: "space-evenly",
          padding: "40px",
          alignItems: "center",
          marginLeft: "-20px",
        }}
      >
        <Grid item>
          <img src={footer_logo} alt="" />
        </Grid>
        <Grid item>
          <div className="footer_item">
            <a href="">Home</a>
            <a href="">Idiciduals</a>
            <a href="">AK Business</a>
            <a href="">About us</a>
          </div>
        </Grid>
        <Grid item>
          <div className="footer_vline"></div>
        </Grid>
        <Grid item>
          <div className="footer_item">
            <a href="">Public offer</a>
            <a href="">Privacy Policy</a>
            <a href="">Security</a>
            <a href="">FAQ</a>
          </div>
        </Grid>
        <Grid item>
          <div className="footer_vline"></div>
        </Grid>
        <Grid item>
          <div className="footer_item">
            <a href="">News</a>
            <a href="">Tarrifs and limits</a>
            <a href="">Discount & Compains</a>
            <a href="">Contacts</a>
          </div>
        </Grid>
        <Grid item>
          <div className="footer_vline"></div>
        </Grid>

        <Grid item>
          <div className="footer_info">
            <div className="footer_info__item">
              <div className="footer_info__text">
                <img src={mail} alt="mail" /> <span>info@almutakamila.com</span>
              </div>
              <div className="footer_info_line"></div>
            </div>

            <div className="footer_info__item">
              <div className="footer_info__text">
                <img src={gps} alt="gps" style={{ marginRight: "12px" }} />{" "}
                <span>Branches</span>
              </div>
              <div className="footer_info_line"></div>
            </div>

            <div className="footer_info__item">
              <div className="footer_info__text">
                <img src={phone} alt="phone" /> <span>0700 700 55</span>
              </div>
            </div>
          </div>
        </Grid>

        <div className="footer_bottom_line"></div>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Grid item sx={{ padding: "20px 0px" }}>
            <div className="footer_icons">
              <a href="">
                {" "}
                <img src={appstore} alt="appstore" />
              </a>
              <a href="">
                <img src={googlestore} alt="googlestore" />
              </a>
              <a href="">
                <img src={fb} alt="fb" />
              </a>
              <a href="">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="">
                {" "}
                <img src={youtube} alt="youtube" />
              </a>
              <a href="">
                <img src={linkdin} alt="linkdin" />
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
