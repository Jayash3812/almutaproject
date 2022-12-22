import React from "react";
import home from "../../../assets/icons/home_icon.png";
import arrowright from "../../../assets/icons/arrowright.png";

export const Billpayment = () => {
  return (
    <div>
      <h1>Hello Bill Payment</h1>
      <a href="">
        <div className="items_settings">
          <img src={home} alt="home_icon" />
          <span>Internet</span>
        </div>

        <img src={arrowright} alt="arrowright" />
      </a>
      <a>
        <div className="items_settings">
          <img src={home} alt="home_icon" />
          <span>Landline</span>
        </div>

        <img src={arrowright} alt="arrowright" />
      </a>
      <a href="">
        <div className="items_settings">
          <img src={home} alt="home_icon" />
          <span>Electricity</span>
        </div>

        <img src={arrowright} alt="arrowright" />
      </a>
      <a href="">
        <div className="items_settings">
          <img src={home} alt="home_icon" />
          <span>Water</span>
        </div>

        <img src={arrowright} alt="arrowright" />
      </a>
      <a href="">
        <div className="items_settings">
          <img src={home} alt="home_icon" />
          <span>Utility</span>
        </div>

        <img src={arrowright} alt="arrowright" />
      </a>
    </div>
  );
};
