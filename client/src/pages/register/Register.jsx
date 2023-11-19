import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import axios from "axios";

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async(e)=> {
    e.preventDefault();
    try {
      const res = await newRequest.post('/auth/register', {
        fullname,
        username,
        password,
        email,
        phoneNumber
      })
      navigate('/login')
    } catch (error) {
      setError(error.response.data);
    }
  }

  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <img src="https://i.pinimg.com/564x/bd/79/4c/bd794cf63915bfec60e4e036457239dd.jpg" />
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="right">
            <h1>Register</h1>
            <div className="lightInfo">
              <div className="form-group">
                <input 
                  type="text" 
                  id="fullnameInput" 
                  name="fullname" 
                  required 
                  placeholder=" " 
                  onChange={(e) => setFullname(e.target.value)}
                />
                <label htmlFor="fullnameInput">Full name</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="phoneNumberInput"
                  name="phoneNumber"
                  placeholder=" "
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label htmlFor="phoneNumberInput">Contact Number</label>
              </div>
            </div>
            <div className="importantInfo">
              <div className="form-group">
                <input 
                  type="text" 
                  id="emailInput" 
                  name="email" 
                  required 
                  placeholder=" " 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="emailInput">Email Address</label>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  id="usernameInput" 
                  name="username" 
                  required 
                  placeholder=" " 
                  onChange={(e) => setUsername(e.target.value)}
                />
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

        </form>
      </div>
    </div>
  );
};

export default Register;
