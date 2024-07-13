import React from "react";
import "../Tripbar/tripbar.css";
import { ImLocation2 } from "react-icons/im";
import { AiFillCalendar } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSolidSearchAlt2 } from "react-icons/bi";

function Tripbar() {
  return (
    <div className="tripbarcon">
      <h3>Plan a Trip</h3>
      <div className="tripbar">
        <div className="tripbarblock">
          <ImLocation2 className="tripbaricon"/> 
          <b>Starting</b>
          <input type="text" />
        </div>
        <div className="tripbarblock">
          <ImLocation2 className="tripbaricon"/> 
          <b>Destination</b>
          <input type="text" />
        </div>
        <div className="tripbarblock">
          <AiFillCalendar className="tripbaricon"/> <b>Date</b> <br />
          From
          <input type="date" />
        </div>
        <div className="tripbarblock">
          <AiFillCalendar className="tripbaricon"/> <b>Date</b> <br />
          To
          <input type="date" />
        </div>
        <div className="tripbarblock">
          <BsFillPeopleFill className="tripbaricon"/> <b>People</b>
          <input type="number" min={1} />
        </div>
        <div className="tripbarblock tripsearchblock">
          <BiSolidSearchAlt2 className="tripbaricon tripsearchicon"/>   <b>Search</b>
        </div>
      </div>
    </div>
  );
}

export default Tripbar;
