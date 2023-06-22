//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./LoginDownside.css"

//Import local files
import Loginfprint from "../../../../../../Assets/Icons/Login-fprint.png"

function LoginDownside() 
{
  return (
    <>
        <div id='Login-downside'>
            <img src={Loginfprint} alt='finger-print icon'/>
            <p>Login with touch ID</p>
        </div>
    </>
  )
}

export default LoginDownside