import React from "react";
import LoginForm from "../LoginForm";
import "../../components/LoginPage/loginPage.css";
import mainpic from "../../assets/mainpic.png";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__image">
        <img src={mainpic} alt="" />
      </div>

      <div className="login-form__one">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
