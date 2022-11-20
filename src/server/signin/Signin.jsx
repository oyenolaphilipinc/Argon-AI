import React from 'react'
import './Signin.css'
import Logo from '../../assets/logo.png'

function Signin(){
    return(
        <body>
        <div className="login-box">
          <img src={Logo} height={80} width={80} id="img" />
          <h1 id="h1">Sign In to Argon</h1>
          <form id="form">
            <input type="text" placeholder="Username" id="login-input" />
            <input type="password" placeholder="Password" id="login-input"/>
            <button type="submit" id="login-button">Login</button>
          </form>
        </div>
        </body>
        
    )
}

export default Signin;