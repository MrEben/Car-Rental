import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [userEmail, setUserEmail] = useState("");
  const handleChange = (e) => {
    // would do input validatdion
    setUserEmail(e.target.value);
  };

  const addEmail = async () => {
    await fetch("https://http://localhost:5173/get-started", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmail(); //sends input data to the backend
    console.log(userEmail);
    setUserEmail("");
  };

  //a prompt has to come after user submits email
  return (
    <section className="details-container">
      <div className="wrapper">
        <div className="title">Get Started</div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              value={userEmail}
              name="email"
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>
          {/* <div className="field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div> */}
          <div className="field">
            <input type="submit" value="Submit" />
          </div>
          <div className="signup-link">
            Not a member? <a href="#">Signup now</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
