import React from 'react'
import "../Main/main.css"
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

function Main() {

const [searchParams ]  =  useSearchParams();

  let searchedLocation = useParams()
  searchedLocation =   JSON.parse(JSON.stringify(searchedLocation)).location

  const currentLoc = useLocation();
  const currentLocCity = JSON.parse(JSON.stringify(currentLoc.state)).city
  console.log(currentLocCity)

  return (
    <>
      {/* <Navbar/> */}
    <div className='main'>
        <div className="leftlocdetail">
         <div className="locimgcon">
            <img src="../images/traveller2.jpg" alt="" />
           
            <div className="">
        <h3>Welcome To </h3>
        {/* <h2>{searchParams.get("city")}</h2> */}
        <h2>{currentLocCity}</h2>
        <p>Find Everything related to your Destination.<br/>
        Visit, Dine, Shop, and Stay anywhere with your own <b>UrbanAssit</b>.
        </p>
        </div>
        </div>
        </div>
        <div className="rightlocdetail">
            <div className="gallery">
            <img className='gridImg gridImg1' src="../images/Akshardham Temple.jpg" alt="" />
            <img className='gridImg gridImg2' src="../images/Mahatma Mandir.jpg" alt="" />
            <img className='gridImg gridImg3' src="../images/Indroda Park.jpg" alt="" />
            </div>
            
        </div>
       
    </div>
    </>
  )
}

export default Main