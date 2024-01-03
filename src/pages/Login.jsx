import React from "react";
import { LoginUI } from "../components/Header/Header";
import "../components/Header/header.css";
const Login = () => {
  return (
    <div className="login-page">
      <div className="wrapper">
        <LoginUI />
      </div>
    </div>
  );
};

export default Login;
