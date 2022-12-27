import { Grid } from "@mui/material";
import { Container, styled } from "@mui/system";
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
  const GridContainer = styled(Grid)({
    background:
      " linear-gradient(180deg, #165385 20.1%, #165385 20.11%, #0079C1 100%)",
    borderRadius: "50px 50px 0px 0px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "0px",
  });
  const GridStyle = styled(Grid)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid white",
    marginTop: "40px",
  });

  return (
    <Container
      maxWidth="1730px"
      sx={{
        display: "flex",
        justifyContent: "center",
        aligItems: "center",
      }}
    >
      <GridContainer container spacing={0}>
        <Grid
          item
          lg={2}
          md={4}
          sm={4}
          xs={6}
          sx={{
            display: { lg: "flex", md: "none", sm: "none", xs: "none" },
            justifyContent: "center",
            aligItems: "center",
          }}
        >
          <img className="footer_logo" src={footer_logo} alt="" />
        </Grid>
        <GridStyle item lg={2} md={4} sm={4} xs={6}>
          <div className="footer_item">
            <a href="">Home</a>
            <a href="">Idiciduals</a>
            <a href="">AK Business</a>
            <a href="">About us</a>
          </div>
        </GridStyle>

        <GridStyle item lg={2} md={4} sm={4} xs={6}>
          <div className="footer_item">
            <a href="">Public offer</a>
            <a href="">Privacy Policy</a>
            <a href="">Security</a>
            <a href="">FAQ</a>
          </div>
        </GridStyle>

        <GridStyle item lg={2} md={4} sm={4} xs={6}>
          <div className="footer_item">
            <a href="">News</a>
            <a href="">Tarrifs and limits</a>
            <a href="">Discount & Compains</a>
            <a href="">Contacts</a>
          </div>
        </GridStyle>

        <GridStyle item lg={3} md={4} sm={4} xs={6}>
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
              <div className="footer_info_line"></div>
            </div>
          </div>
        </GridStyle>

        <div className="footer_bottom_line"></div>

        <Grid
          item
          lg={12}
          md={8}
          sm={8}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: {
              lg: "flex-end",
              md: "center",
              sm: "center",
              xs: "center",
            },
            alignItems: "center",
            padding: {
              lg: "0px 50px 0px 0px",
              md: "30px 10px 30px 10px",
              xs: "30px 10px 30px 10px",
            },
          }}
        >
          <div className="footer_icons">
            <div className="footer_icons_stores">
              <a href="">
                {" "}
                <img src={appstore} alt="appstore" />
              </a>
              <a href="">
                <img src={googlestore} alt="googlestore" />
              </a>
            </div>
            <div>
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
          </div>
        </Grid>
      </GridContainer>
    </Container>
  );
};

export default Footer;
