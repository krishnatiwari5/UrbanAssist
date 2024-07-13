import React, { useEffect } from 'react'
import "../Navbar/navbar.css"
import {NavLink, useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom"
import { MdAddBusiness } from "react-icons/md";
import {TfiLocationPin} from "react-icons/tfi"
import { FaCircleUser } from "react-icons/fa6";




function Navbar() {

  const activeLink = "activeLink";
  const normalLink = "";
 
  const [searchParams, setSearchParams] = useSearchParams()

const city = searchParams.get("city");

let searchedLocation = useParams()
  searchedLocation =   JSON.parse(JSON.stringify(searchedLocation)).location

  const auth = localStorage.getItem("user")
  const navigate = useNavigate();
  let loginUserName = localStorage.getItem("user")
{
  if(loginUserName) {
    loginUserName = JSON.parse(loginUserName)
    loginUserName = loginUserName.userFirstName
  }
}

const logout = ()=> {
  localStorage.clear();
  navigate("/")
}

const currentLoc = useLocation().pathname
 console.log("Hello",currentLoc)

//  console.log("namaste", document.URL)

//  let searchedLocation = useParams()
//  searchedLocation =   JSON.parse(JSON.stringify(searchedLocation)).urlParams

//  console.log("Hii", searchedLocation)

 
  return (
    <div className="navbarcon"> 
    <div className='navbar'>
        <div className="nameloc">
        <h3 className='websiteName'><NavLink to="/">UrbanAssist</NavLink><br/>
 </h3>
 {currentLoc && 
 <p> <TfiLocationPin className='locicon'/> Gandhinagar, In</p>
 }
 </div>
        <ul className="navlist">
         
        <>
        <li className={ (auth && currentLoc !== "/") ? "" : "hidden_option"}><NavLink className= {({isActive}) => isActive ? activeLink : normalLink} to="/explore">Explore</NavLink></li>
        <li className={ (auth && currentLoc !== "/") ? "" : "hidden_option"} ><NavLink className= {({isActive}) => isActive ? activeLink : normalLink} to="/top-places">Top Places</NavLink></li>
        <li className={ (auth && currentLoc !== "/") ? "" : "hidden_option"} ><NavLink className= {({isActive}) => isActive ? activeLink : normalLink} to="/blog">Blog</NavLink></li>
        <li className={ (auth && currentLoc !== "/") ? "" : "hidden_option"} ><NavLink className= {({isActive}) => isActive ? activeLink : normalLink} to="/emergency-services">Emergency Services</NavLink></li>
        </>
       
    
      </ul>
      <div className="registration">
        <button><NavLink to="/contactus">Contact Us</NavLink></button>
        {/* <button className='businessbtn'>
        < MdAddBusiness className='businessicon'/>
         Add Business
        </button> */}
        {
          auth ?<> <button><NavLink to="/" onClick={logout}>Logout</NavLink></button> 
          {/* <div className="userLogincon"><FaCircleUser className='userLoginicon'/>
           <h4> { loginUserName }</h4>
            </div>   */}
            </> 
            :
          <>
            <button> <NavLink to="/signin" className='navsigninbtn navbtn'>Sign In</NavLink></button>
            <button> <NavLink to="/register" className='navsignupbtn navbtn'>Sign Up</NavLink></button>
             </>
        }
     
      {/* <h3><NavLink to="/register">Sign Up</NavLink></h3> */}
     
        {
          auth ?<div className="userLogincon"><FaCircleUser className='userLoginicon'/> <h3>
            { loginUserName }</h3> </div> : ""
        }
      </div>
    </div>
    </div>
  )
}

export default Navbar