import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Register/signup.css"
import { toast } from 'react-toastify'

function Signup() {

const [userFirstName, setUserFirstName] = useState("")
const [userLastName, setUserLastName] = useState("")
const [userEmail, setUserEmail] = useState("")
const [userPassword, setUserPassword] = useState("")

const navigate = useNavigate();

useEffect(() => {
  const auth = localStorage.getItem("user")
  if(auth) {
    navigate("/")
  }
},[])

const collectUserData = async (event)=> {
  event.preventDefault();
  console.log(userFirstName, userLastName, userEmail, userPassword);
  let result = await fetch("http://localhost:5000/api/users/register", {
    method : "Post",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({userFirstName, userLastName, userEmail, userPassword})
  })
 
  result = await result.json()
  // console.log(result)
  toast.success("You have successfully registered.")
  localStorage.setItem( "user" , JSON.stringify(result) )
  if(result) {
    navigate("/")
  }


}

  return (
    <div className="signupcon">
    <div className='signup'>
        <div className="signuppage">
            
<div className="signupleft">
  {/* <h4>UrbanAssist</h4> */}
  {/* <p>Create an account to get started on your journeys with UrbanAssist.</p> */}
<p>Already have an account ?</p>
<button className='signup_signinbtn'><Link to="/signin"> Sign In</Link></button>
</div>
<div className="signupright">
    <form action="" className="signupform">
    <div className="signinupnav">
          <h2>UrbanAssist</h2>
          <h3>Welcome!</h3>
          </div>
                <h1>Sign Up</h1>
    <input type="text" required placeholder='First Name' name='userFirstName' value={userFirstName} onChange={(e)=> setUserFirstName(e.target.value)}/>
    <input type="text" required placeholder='Last Name' name='userLastName' value={userLastName} onChange={(e)=> setUserLastName(e.target.value)}/>
<input type="email" required placeholder='Email' name='userEmail'  value={userEmail} onChange={(e)=> setUserEmail(e.target.value)}/>
<input type="password" required placeholder='Password' minLength={8} maxLength={15} name='userPassword'  value={userPassword} onChange={(e)=> setUserPassword(e.target.value)}/>
<input type="password" required placeholder=' Confirmed Password' minLength={8} maxLength={15}/>
<button className='signupbtn' type='submit' onClick={collectUserData}>Sign Up</button> </form>
</div>
<div className="signupimgcon">
        <img className='signupimg' src="../images/traveller3.jpg" alt="" />

        </div>
</div>
</div>
</div>
  )
}

export default Signup