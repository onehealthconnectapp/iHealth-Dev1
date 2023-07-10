//Import Libraries/Packages
import React, { useRef, useState } from 'react'

//Import Styles
import "./LoginUpsideLoginForm.css"


//Import local files/Utilities etc..
import { ShowPassword, handleSubmit, validateEmail, validatePassword } from './UtilityFunctions'




function LoginUpsideLoginForm() 
{

  /* React State Hook */
  const [UserCrd, setUserCrd] = useState(new Map())

  /* React Reference Hook  */
  const inputEmail = useRef("") //This reference is for email input element
  const inputPassword = useRef(null) //This reference is for password input element





  return (
    <>
        <div id='Login-Upside-login-form'>
            <form action=""  onSubmit={(event) => handleSubmit(event,UserCrd)}>
              <label htmlFor="email"></label><input type='text' id='email' placeholder='Email Address' ref={inputEmail} onBlur={()=>{validateEmail(inputEmail,UserCrd, setUserCrd)}} />
              <label htmlFor="password"></label><input type='password' id='password' placeholder='Password' ref={inputPassword} onBlur={()=>{validatePassword(inputPassword,inputEmail,UserCrd, setUserCrd)}} /><i id="togglePassword" onClick={()=>{ShowPassword(inputPassword)}}></i>
              <div id='Login-Upside-login-form-rmpswrd-forget'>
                <div>
                  <input type='checkbox' name='rememberPassword' />
                  <label htmlFor="rememberPassword">Remember password</label>
                </div>
                  <a href='/forget'>Forget Password</a>
              </div>
              <button type="submit">Login</button>
            </form>
        </div>

    </>
  )
}

export default LoginUpsideLoginForm