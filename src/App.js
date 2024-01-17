import React from 'react'
import useLocalStorage from 'use-local-storage'

import './index.css'


function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className='app' data-theme={theme}>
      <div className='login'>
          <h1> Login</h1>
          <div className='container'>
            <div className='top'>
              <i className='fab fa-google'></i>
              <i className='fab fa-facebook-square'></i>
              <i className='fab fa-github'></i>
              <i className='fab fa-apple'></i>
              <i className='fab fa-linkedin'></i>              
            </div>
            <p className='divider'><span>or</span></p>
            <form>
              <label>Email</label>
              <input type='email' placeholder='Enter your name'></input>
              <label>Password</label>
              <input type='password' placeholder='Enter your password'></input>
              <div className='remember'>
                <input type='checkbox' checked='checked'></input>
                <p> Remember me</p>
              </div>
              <button>Login</button>
            </form>
            <div className='bottom'>
              <p>Forgot your oassword</p>
              <a href='#' >Reset your password</a>
            </div>
            <p className='create'>Create Account</p>            
          </div>
          <div className='theme-toggle'>
              <h2>Light Theme</h2>
              <i onClick={switchTheme} className='fas fa-toggle-on'></i>
            </div>
      </div>
    </div>
  );
}

export default App;
