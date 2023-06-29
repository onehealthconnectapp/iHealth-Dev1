//Import Libraries/Packages
import React from 'react'

//Import Stylesn
import "./Login.css"

//Import local components
import LoginUpside from './Subcomponents/Login-Upside/LoginUpside'
import LoginDownside from './Subcomponents/Login-Downside/LoginDownside'




function Login() 
{
  return (
    <>
        <section id='Login-Main-Container'>

            <div id='Login-Main-wrapper'>
                <button id='Login-Main-Container-close-button' onClick={() => {document.querySelector("#Login-Main-Container").style.display = "None";}}>X</button>
                <LoginUpside />
                <LoginDownside />
            </div>

        </section>
    </>
  )
}

export default Login