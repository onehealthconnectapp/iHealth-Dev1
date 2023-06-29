//Import Libraries/Packages
import React, { useRef } from 'react'

//Import Styles
import "./LoginUpsideLoginForm.css"

function LoginUpsideLoginForm() 
{
  /* React Referans Hook  */
  const inputEl = useRef(null)

  /* This Function is for toggle show/hide password */
  const ShowPassword = () => {if(inputEl.current.type == "password"){ return inputEl.current.type = "text"};inputEl.current.type = "password"}




  /* -------------------------------- These functions will be updated in the future regarding the user authentication logic -------------------------------- */
  const validateForm = () => 
  {
    //const { username, password } = values;
    //if (username === "") { show error for username; return false;} 
    //else if (password === "") {toast.error("Email and Password is required.", toastOptions);return false;}
    return true;
  };


  const handleSubmit = async (event) => 
  {
    event.preventDefault();

    if (validateForm()) {
      //const { username, password } = values;
      //const { data } = await axios.post(loginRoute, {username,password,});


      //if (data.status === false) {}
      //if (data.status === true) {navigate("/");}

      console.log(event) //will be deleted
    }
  };
  /* -------------------------------- These functions will be updated in the future regarding the user authentication logic -------------------------------- */





  return (
    <>
        <div id='Login-Upside-login-form'>
            <form action=""  onSubmit={(event) => handleSubmit(event)}>
              <label for="email"></label><input type='text' id='email' placeholder='Email Address'/>
              <label for="password"></label><input type='password' id='password' placeholder='Password' ref={inputEl} /><i id="togglePassword" onClick={ShowPassword}></i>
              <div id='Login-Upside-login-form-rmpswrd-forget'>
                <div>
                  <input type='checkbox' name='rememberPassword' />
                  <label for="rememberPassword">Remember password</label>
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