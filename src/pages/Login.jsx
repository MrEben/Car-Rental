// SignUpPage.jsx
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="left-panel">
          <div className="logo">
            <img
              src="/api/placeholder/100/40"
              alt="Renturride Logo"
              className="logo-image"
            />
          </div>
          <button className="back-button">Back to home →</button>
          <div className="hero-content-sign-up-page">
            <h2>
              Capturing Moments,
              <br />
              Creating Memories
            </h2>
            <div className="slider-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot active"></span>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="form-container">
            <h1>Login to your account</h1>
            <p className="login-link">
              Don't have an account? <a href="signup">Sign up</a>
            </p>

            <form className="signup-form">
              {/* <div className="name-fields">
                <div className="input-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div> */}

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁
                </button>
              </div>

              <div className="terms-group">
                <label>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                  />
                  <span> Remember Password? </span>
                  {/* <a href="#">Terms & Conditions</a> */}
                </label>
              </div>

              <button type="submit" className="create-account-btn">
                Login
              </button>

              <div className="divider">
                <span>Or login with</span>
              </div>

              <div className="social-buttons">
                <button type="button" className="social-btn google">
                  <FaGoogle />
                  Google
                </button>
                <button type="button" className="social-btn apple">
                  <FaFacebook />
                  Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
