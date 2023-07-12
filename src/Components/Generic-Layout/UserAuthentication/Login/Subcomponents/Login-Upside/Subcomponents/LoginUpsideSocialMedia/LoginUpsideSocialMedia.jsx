//Import Libraries/Packages
import React from 'react'
import { createPortal } from 'react-dom'

//Import Styles
import "./LoginUpsideSocialMedia.css"

//import local files
import loginGoogle from "../../../../../../../../Assets/Icons/login-Google.svg"
import loginFacebook from "../../../../../../../../Assets/Icons/login-Facebook.svg"
import TermPolicyOnlyView from 'src/Components/Generic-Layout/UserAuthentication/TermsPolicy/TermPolicyOnlyView/TermPolicyOnlyView'



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
            <p>By signing in you are agreeing our <TermPolicyOnlyView /></p>
            
        </div>

    </>
  )
}

export default LoginUpsideSocialMedia