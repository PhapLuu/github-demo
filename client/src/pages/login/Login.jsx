import React, { useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate()
  const handleSubmit = async(e, req, res)=> {
    e.preventDefault();
    try {
      const res = await newRequest.post('/auth/login',{
        username,
        password
      })
      localStorage.setItem('currentUser', JSON.stringify(res.data))
      navigate('/');
    } catch (error) {
      setError(error.response.data)
    }

  }

  return (
    <div className='login'>
      <div className='container'>
        <div className='left'>
          <div className='title'>
            <span>Logo.</span>
            <span>Untitled UI</span>
          </div>
          <form onSubmit={handleSubmit}>
            <h1 className='loginLabel'>Login</h1>
            <div className='welcome'>Welcome back! Please enter your details.</div>
            <div className='form-group'>
              <input
                type='text'
                id='usernameInput'
                name='username'
                required 
                placeholder=" "
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor='usernameInput'>Username</label>
              <i className="fa-solid fa-user"></i>
            </div>

            <div className='form-group'>
              <input
                type='password'
                id='passwordInput'
                name='password'
                required 
                placeholder=" "
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor='passwordInput'>Password</label>
              <i className="fa-solid fa-lock"></i>
              
            </div>
            <div className='addition'>
              <div className='remember'>
                <input id='rememberCheckbox' type='checkbox'/>
                <label htmlFor='rememberCheckbox'>Remember me</label>
              </div>
              <div className='forgot'>Forgot password</div>
            </div>

            <button type='submit'>Login</button>
            {error && error}

            <div className='registerLink'>
              <span>Don't have an account?</span>
              {
                <Link className='link' to='/register'>
                  <span className='signUp'>Sign up for free</span>
                </Link>
              }
            </div>
          </form>
        </div>

        <div className='right'>
          <img src='../../imgs/LoginImage.png'/>
        </div>
      </div>
    </div>
  )
}

export default Login