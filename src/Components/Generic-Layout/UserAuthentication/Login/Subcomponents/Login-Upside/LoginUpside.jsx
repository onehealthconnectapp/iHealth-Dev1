//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./LoginUpside.css"

//Import Local Components
import LoginUpsideTop from './Subcomponents/LoginUpsideTop/LoginUpsideTop'
import LoginUpsideLoginForm from './Subcomponents/LoginUpsideLoginForm/LoginUpsideLoginForm'
import LoginUpsideSocialMedia from './Subcomponents/LoginUpsideSocialMedia/LoginUpsideSocialMedia'


function LoginUpside() 
{
  return (
    <>
      <div id='Login-Upside'>
        <LoginUpsideTop />
        <LoginUpsideLoginForm />
        <LoginUpsideSocialMedia />
      </div>
    </>
  )
}

export default LoginUpside