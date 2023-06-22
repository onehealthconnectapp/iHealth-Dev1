//Import Libraries/Packages
import React from 'react'

//Import Styles
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
                <LoginUpside />
                <LoginDownside />
            </div>

        </section>
    </>
  )
}

export default Login