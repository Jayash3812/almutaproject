import React from "react";
import logo from "../assets/logo.png";
import { TextField } from "@mui/material";
import "../components/LoginPage/loginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="login-form__image">
        <img src={logo} alt="" />
      </div>
      <div className="login-form__title">
        <h2>Login / Registration</h2>
      </div>

      <div className="login-form__inputs">
        <div className="login-form__inputs__first">
          <TextField
            id="standard-basic"
            label="Wallet number"
            type="tel"
            variant="standard"
            InputLabelProps={{
              style: { color: "#00457C" },
            }}
            sx={{
              width: { sm: 250, md: 330 },
              "& .MuiInputBase-root": {
                height: 40,
              },
            }}
            InputProps={{
              style: {
                color: "#00457C",
              },
            }}
          />
        </div>
        <div className="login-form__inputs__second">
          <TextField
            id="standard-basic"
            label="PIN"
            variant="standard"
            type="password"
            InputLabelProps={{
              style: { color: "#00457C" },
            }}
            sx={{
              width: { sm: 250, md: 330 },
              "& .MuiInputBase-root": {
                height: 40,
              },
            }}
            InputProps={{
              style: {
                color: "#00457C",
              },
            }}
          />
        </div>

        <div className="login-form__inputs__pin">
          <a href="">Forgot PIN</a>
        </div>
      </div>

      <button className="login-form__btn">Continue</button>

      <div className="login-form__links">
        <div className="login-form__links__first">
          <a href="">Terms and conditions</a>
        </div>

        <ul className="login-form__links__down">
          <li>
            <a href="">Public offer</a>
          </li>
          <li>
            <a href="">frequently asked Questions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginForm;
