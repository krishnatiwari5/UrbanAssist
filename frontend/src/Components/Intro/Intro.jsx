import React, { useEffect, useState } from "react";
import "../Intro/intro.css";
import StatisticBar from "../Statisticbar/StatisticBar";
import Tripbar from "../Tripbar/Tripbar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Main from "../Main/Main";

function Intro() {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchParams, setSearchParams] = useSearchParams()


const navigate = useNavigate();

 
const handleSearchLoaction = (e) => {
  e.preventDefault()

  let result = fetch(`http://localhost:5000/api/search/${searchLocation}`,{
    method : "Post",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({searchLocation})
  })

  if(searchLocation) {
navigate(`/search/${searchLocation}`)
  } else {
    alert("Please Enter a City Name to Explore")
  }

}


  return (
    <div className="intro">
      {/* <div className="bgimgcon"></div> */}
      {/* <IntroNav/> */}
      <div className="mainBody">
        <div className="nametagimg">
          <img className="trav1" src="../images/traveller1.jpg" alt="" />
          <div className="nametag">
            <h2>
              Welcome To <br />
              <span className="websitename">UrbanAssist</span>
            </h2>
            <p>Navigate, Explore and Uncover your Destination </p>
          </div>
          {/* <img className='trav2' src="../images/traveller2.jpg" alt="" /> */}
        </div>
        <div className="searchbarcon">
          <input
          required
            className="searchbar"
            type="text"
            name="searchbar"
            id="mainSearchInput"
            placeholder=" Search for a place to explore."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value) }
          />
          <button id="introSearchBtn" type="button"
          //  onClick= {(e) => setSearchParams( {city:searchLocation}) }
            > 
            <Link to={`/search/${searchLocation}`} state={{"city" : searchLocation}} >
              <svg
                className="searchicon"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </Link>
          </button>
        </div>
        {/* <Tripbar /> */}
        {/* <StatisticBar /> */}
      </div>
    </div>
  );
}

export default Intro;
