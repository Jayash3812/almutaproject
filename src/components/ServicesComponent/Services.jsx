import React from "react";
import "../../components/ServicesComponent/services.css";
import topup from "../../assets/icons/topup.png";
import cashout from "../../assets/icons/cashout.png";
import billpayments from "../../assets/icons/billpayments.png";
import transfer from "../../assets/icons/arrowsdownup.png";
import p2g from "../../assets/icons/p2g.png";
import qr from "../../assets/icons/qr.png";
import shopping from "../../assets/icons/shopping.png";
import sendmoney from "../../assets/icons/sendmoney.png";
import services from "../../assets/icons/services.png";
import myfavorite from "../../assets/icons/myfavorite.png";
import search_icon from "../../assets/icons/search_icon.png";
import { Grid } from "@mui/material";

import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Grid container direction="column">
        <h2>Services</h2>
        <Grid container direction="row">
          <h4>Search services</h4>
          <a href="">
            <img src={search_icon} alt="search_icon" />
          </a>
        </Grid>
        {/* <div className="services_search"> */}

        {/* </div> */}
        <div className="services_items">
          <div className="services_items__left">
            <div className="services_items__main">
              <a className="services_items__main__card" href="">
                <img src={topup} alt="topup_pic" />
                <span>Top Up</span>
              </a>
              <a className="services_items__main__card" href="">
                <Link to="/cashout">
                  <img src={cashout} alt="cashout" />
                  <span>Cash Out</span>
                </Link>
              </a>

              <a className="services_items__main__card" href="">
                <Link to="/billpayment">
                  <img src={billpayments} alt="billpayments" />{" "}
                  <span>Bill payments</span>
                </Link>
              </a>
              <a className="services_items__main__card" href="">
                <Link to="/transfer">
                  <img src={transfer} alt="" /> <span>Transfers</span>
                </Link>
              </a>
              <a className="services_items__main__card" href="">
                <img src={p2g} alt="" /> <span>P2G</span>
              </a>
            </div>
            <div className="services_items__main">
              <a className="services_items__main__card" href="">
                <img src={qr} alt="qr" />
                <span>QR/Bar code</span>
              </a>
              <a className="services_items__main__card" href="">
                <img src={shopping} alt="shopping" />
                <span>Shopping</span>
              </a>
              <a className="services_items__main__card" href="">
                <img src={sendmoney} alt="sendmoney" />
                <span>Send money</span>
              </a>
              <a className="services_items__main__card" href="">
                <img src={services} alt="services" />
                <span>Services</span>
              </a>
              <a className="services_items__main__card" href="">
                <img src={myfavorite} alt="myfavorite" />
                <span>My Favorite</span>
              </a>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Services;
