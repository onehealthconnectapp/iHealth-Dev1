//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./LoginUpsideTop.css"

//Import local files
import loginLogo from "../../../../../../../../Assets/Icons/Login-logo.png"


function LoginUpsideTop() 
{
  return (
    <>
        <div id='Login-Upside-Top'>
            <img src={loginLogo} height='89px' alt='Logo image'/>
            <h2>Welcome</h2>
            <div>
                <p>Login</p>
                <a href='/register'>Register</a>
            </div>
        </div>
    </>
  )
}

export default LoginUpsideTop