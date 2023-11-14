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
              <input type="text" id="fullnameInput" name="fullname" required placeholder=" " />
              <label htmlFor="fullnameInput">Full name</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="phoneNumberInput"
                name="phoneNumber"
                placeholder=" "
                required
              />
              <label htmlFor="phoneNumberInput">Contact Number</label>
            </div>
          </div>
          <div className="importantInfo">
            <div className="form-group">
              <input type="text" id="emailInput" name="email" required placeholder=" " />
              <label htmlFor="emailInput">Email Address</label>
            </div>
            <div className="form-group">
              <input type="text" id="usernameInput" name="username" required placeholder=" " />
              <label htmlFor="usernameInput">Username</label>
            </div>
          </div>
          <div className="password">
            <div className="form-group">
              <input
                type="password"
                id="passwordInput"
                name="password"
                placeholder=" "
                required
              />
              <label htmlFor="passwordInput">Password</label>
            </div>
            <div className="form-group">
              <input
                type="password"
                id="confirmPasswordInput"
                name="confirmPassword"
                required
                placeholder=" "
              />
              <label htmlFor="confirmPasswordInput">Confirm Password</label>
            </div>

            <div className="notice">
              <input id="serviceCheckbox" type="checkbox"/>
              <label htmlFor="serviceCheckbox">I agree to the </label>
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
