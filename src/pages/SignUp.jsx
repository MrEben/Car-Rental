import React from "react";
import { SignUpUI } from "../components/Header/Header";
import "../components/Header/header.css";
const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="wrapper">
        <SignUpUI />
      </div>
    </div>
  );
};

export default SignUp;
