import React from "react";
import "./moreinfo.css";
import { FaDirections } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaEarthAfrica } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { useLocation } from "react-router-dom";



function MoreInfo() {
  const currHotel = useLocation();
  const currHotelData = currHotel.state.data;

  
  console.log(currHotel)
  console.log(currHotelData)

  return (
    <div className="moreinfocon">
      <div className="imginfocon">
        <div className="imgcon">
          <img className="moreinfoimg" src={`../../../public/${currHotelData.image}`} alt="" />
        </div>
        <div className="infocon">
          <h1 className="moreinfohead">{currHotelData.name}</h1>
          <p className="moreinfodes"> {currHotelData.description} </p>
          <div className="infoconlogo">
            <p>
              <IoLocationSharp className="moreinfologo" />{" "}
              {currHotelData.address}
            </p>
            <p>
              <IoCall className="moreinfologo" /> {currHotelData.phone}
            </p>
            <p>
              <FaEarthAfrica className="moreinfologo" /> {currHotelData.website}
            </p>
            <p>
              <FaDirections className="moreinfologo" /> {currHotelData.away} Km
              from your location
            </p>
            <p>
              <MdRateReview className="moreinfologo" />{" "}
              <input type="text" placeholder="Write a Review..." />
            </p>
            <div className="reviewBoxCon">
              {currHotelData.reviews.map((review) => {
                return (
                  <div className="reviewBox">
                    <p className="ratingBox">

               {Math.floor(review.rating)} &#9733; 
              
                    </p>
                  <p> {review.comment}</p> 
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
