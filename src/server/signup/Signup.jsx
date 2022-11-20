import React from 'react'
import Logo from '../../assets/logo.png'
import './Signup.css'

function Signup() {
  return(
    <body>
    <div className="login-box">
      <img src={Logo} height={80} width={80} id="img" alt="prop" />
      <h1 id="h1">Sign Up to Argon</h1>
      <form id="form">
        <input type="text" placeholder="Username" id="login-input" />
        <input type="password" placeholder="Password" id="login-input"/>
        <input type="password" placeholder="Confirm Password" id="login-input"/>
        <button type="submit" id="login-button">Signup</button>
      </form>
    </div>
    </body>
  )
}

export default Signup;