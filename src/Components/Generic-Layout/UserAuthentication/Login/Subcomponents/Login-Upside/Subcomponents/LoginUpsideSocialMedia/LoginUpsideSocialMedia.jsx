//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./LoginUpsideSocialMedia.css"

//import local files
import loginGoogle from "../../../../../../../../Assets/Icons/login-Google.svg"
import loginFacebook from "../../../../../../../../Assets/Icons/login-Facebook.svg"



function LoginUpsideSocialMedia() 
{
  return (
    <>
        <div id='Login-Upside-login-social-media'>
            <p>or connect with</p>
            <div>
                <img src={loginGoogle} alt='Google icon' />
                <img src={loginFacebook} alt='Facebook icon' />
            </div>
            <p>By signing in you are agreeing our <a href='/termsAndAgreement'>Term and privacy policy</a></p>
        </div>

    </>
  )
}

export default LoginUpsideSocialMedia