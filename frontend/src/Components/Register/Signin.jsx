import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../Register/signin.css"

function Signin() {

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem("user")
    if(auth) {
      navigator("/")
    }
  },[])  

  const handleLogin = async (e) => { 
    e.preventDefault();
    let result = await fetch("http://localhost:5000/api/users/signin", {
      method : "Post",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({userEmail, userPassword})
    })

    result = await result.json();
    console.log(result)
    toast.success("Your login was successful.")
    if(result.userEmail) {
      localStorage.setItem("user", JSON.stringify(result))
      navigate("/")
    }  else {
      toast.error("Please enter correct details")
    }
  }

    return (
      <div className="signincon">
      
      <div className="signin">
        <div className="">
        </div>
      <div className='signinpage'>
        <div className="signinimgcon">
        <img className='signinimg' src="../images/traveller6.jpg" alt="" />

        </div>
       <div className="signinleft">
          <form action="" className="signinform">
          <div className="signinupnav">
          <h2>UrbanAssist</h2>
          <h3>Welcome!</h3>
          </div>
              <h1>Sign In</h1>
      <input type="email" required placeholder='Your Email' name='userEmail' value={userEmail} onChange={(e)=> setUserEmail(e.target.value)}/>
      <input type="password" required placeholder='password' minLength={8} maxLength={15} name='userPassword' value={userPassword} onChange={(e)=> setUserPassword(e.target.value)} />
      <button className='signinbtn' onClick={handleLogin}>Sign In</button>
      </form>
      </div>
      <div className="signinright">
      <p>Don't have an account ?</p>
<button className='signin_signupbtn' ><Link to="/register"> Sign Up</Link></button>
      </div>
    
      </div>
      </div>

      </div>
    )
  }
  
  export default Signin