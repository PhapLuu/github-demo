import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <img src="https://i.pinimg.com/564x/bd/79/4c/bd794cf63915bfec60e4e036457239dd.jpg" />
        </div>
        <div className="right">
          <h1>Register</h1>
          <div className="lightInfo">
            <div className="form-group">
              <label htmlFor="fullnameInput">Full name</label>
              <input type="text" id="fullnameInput" name="fullname" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumberInput">Contact Number</label>
              <input
                type="text"
                id="phoneNumberInput"
                name="phoneNumber"
                placeholder="754774140"
                required
              />
            </div>
          </div>
          <div className="importantInfo">
            <div className="form-group">
              <label htmlFor="emailInput">Email Address</label>
              <input type="text" id="emailInput" name="email" required placeholder="johnd@gmail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="usernameInput">Username</label>
              <input type="text" id="usernameInput" name="username" required placeholder="JohnD123" />
            </div>
          </div>
          <div className="password">
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                id="passwordInput"
                name="password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPasswordInput">Confirm Password</label>
              <input
                type="password"
                id="confirmPasswordInput"
                name="confirmPassword"
                required
              />
            </div>

            <div className="notice">
              <input type="checkbox"/>
              <span>I agree to the </span>
              <span className="services">
                Terms of Services & Policies
              </span>
            </div>

            <button type="submit">Register</button>

            <div className="addition">
              <span>Already have an account?</span>
              <Link className="link" to='/login'>
                <span className="loginLink">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
