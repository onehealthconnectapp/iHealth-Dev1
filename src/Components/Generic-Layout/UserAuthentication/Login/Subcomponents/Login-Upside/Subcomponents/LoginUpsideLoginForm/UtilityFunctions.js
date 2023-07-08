/* This Function is for toggle show/hide password */
export const ShowPassword = (inputPassword) => {if(inputPassword.current.type == "password"){ return inputPassword.current.type = "text"};inputPassword.current.type = "password"}


/* -------------------------------- These functions will be updated in the future regarding the user authentication logic -------------------------------- */
  

export  const validateEmail = (inputEmail,UserCrd, setUserCrd) => 
  {
    const usiv = inputEmail.current?.value

    switch (true) 
    {
      case !usiv.includes('@'):
        console.log("Email should have '@' special character")
        break;
      case usiv === "":
        console.log('Email input is empty')
        break;
      case usiv.length < 3 || usiv.length > 254:
        console.log('Please enter your email between 3 and 254 chracters')
        break;
      case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usiv): //This one is a simple email template requires only some characters before,after '@' and '.'
        console.log('Please enter a valid email adress')
        break;
    
      default: setUserCrd(UserCrd.set('email',{'isValid':true,'value':usiv}))
        break;
    }

  }



export  const validatePassword = (inputPassword,inputEmail,UserCrd, setUserCrd) => 
  {
    const usivpassword = inputPassword.current?.value
    const usivemail = inputEmail.current?.value

    switch (true) 
    {
      case usivpassword.includes(usivemail):
        console.log("Password can not be same with email")
        break;
      case usivpassword === "" || usivpassword === null :
        console.log('Password input is empty')
        break;
      case usivpassword.length < 8 || usivpassword.length > 128:
        console.log('Please enter your password between 8 and 128 chracters')
        break;
      case !/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,128}$/.test(usivpassword): //requires numbers, at least 1 lowercase letter, at least one uppercase Letter, at least 1 special Char and  between 8 to 128 characters
          console.log('Please enter a valid Password using numbers, at least 1 lowercase letter, at least one uppercase Letter, at least 1 special Char')
      break;
    
      default: setUserCrd(UserCrd.set('password',{'isValid':true,'value':usivpassword}))
        break;
    }

  }




export  const handleSubmit = async (event,UserCrd) => 
  {
    event.preventDefault();

    const userEmail= UserCrd.get('email'); const userPassword= UserCrd.get('password')

    if (userEmail.isValid && userPassword.isValid) 
    {
      const userCredentials = {'email':userEmail.value,'password':userPassword.value}
      //const { data } = await axios.post(loginRoute, {username,password,});


      //if (data.status === false) {}
      //if (data.status === true) {navigate("/");}

      console.log('good to send data',userCredentials,userPassword) //will be deleted
    }
  };

/* -------------------------------- These functions will be updated in the future regarding the user authentication logic -------------------------------- */
