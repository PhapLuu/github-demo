import React from 'react'
import "./Login.scss"

const Login = () => {
  return (
    <div className='login'>
      <div className='container'>
        <div className='left'>
          <div className='title'>
            <span>Logo.</span>
            <span>Untitled UI</span>
          </div>
          <form>
            <h1 className='loginLabel'>Login</h1>
            <div className='welcome'>Welcome back! Please enter your details</div>
            <div className='form-group'>
              <input
                type='text'
                id='usernameInput'
                name='username'
                required 
                placeholder=" "
              />
              <label htmlFor='usernameInput'>Username</label>
            </div>

            <div className='form-group'>
              <input
                type='password'
                id='passwordInput'
                name='password'
                required 
                placeholder=" "
              />
              <label htmlFor='passwordInput'>Password</label>
            </div>
            <div className='addition'>
              <div className='remember'>
                <input type='checkbox'/>
                <span>Remember me</span>
              </div>
              <div className='forgot'>Forgot password</div>
            </div>

            <button type='submit'>Login</button>

            <div className='register'>
              <span>Don't have an account?</span>
              <span className='signUp'>Sign up for free</span>
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