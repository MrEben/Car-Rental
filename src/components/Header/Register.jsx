import React, { useState } from "react";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleFormView = () => {
    setIsSignup(!isSignup);
  };
  return (
    <section className={`container forms ${isSignup ? "show-signup" : ""}`}>
      <div className={`form ${isSignup ? "signup" : "login"}`}>
        <div className="form-content">
          <header>{isSignup ? "Signup" : "Login"}</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="field input-field">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder={isSignup ? "Create password" : "Password"}
                className="password"
              />
              <i
                className={`bx ${
                  passwordVisible ? "bx-show" : "bx-hide"
                } eye-icon`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            {isSignup && (
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="password"
                />
                <i
                  className="bx bx-hide eye-icon"
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            )}

            {isSignup ? (
              <div className="field button-field">
                <button>Signup</button>
              </div>
            ) : (
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>
            )}
          </form>

          <div className="form-link">
            <span>
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <a href="#" className="link signup-link" onClick={toggleFormView}>
                {isSignup ? "Login" : "Signup"}
              </a>
            </span>
          </div>
        </div>

        <div className="line"></div>

        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>{`Login with Facebook`}</span>
          </a>
        </div>

        <div className="media-options">
          <a href="#" className="field google">
            <img src="#" alt="" className="google-img" />
            <span>{`Login with Google`}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Register;
