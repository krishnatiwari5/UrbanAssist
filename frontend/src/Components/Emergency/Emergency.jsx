import React from "react";
import "./emergency.css";

function Emergency() {
  return (
    <div className="emergency">
      <div className="section">
        <div className="title">
          <h1>Emergency Services</h1>
        </div>
        <div className="services">
          <div className="card">
            <div className="icon">
              <i className="i1" />
            </div>
            <h2>Police</h2>
            <div>
              <p className="symbol"> &#128110;</p>
            </div>
            <p className="emerDes" >Police-Stations <br /> (Gandhinagar)</p>
            <button className="emersersearchbtn">
            <a
              href="https://www.gandhinagarpolice.com/police-stations"
              type="button"
              target="_blank"
            >
              search
            </a>
            </button>
          </div>
          {/* ----------------------- */}
          <div className="card">
            <div className="icon">
              <i className="i2" />
            </div>
            <h2>Medical</h2>
            <p className="symbol">&#127973;</p>
            <p className="emerDes" >Hospitals <br /> (Gandhinagar)</p>
            <button className="emersersearchbtn">
            <a
              href="https://gandhinagar.nic.in/public-utility-category/hospitals/"
              type="button"
              target="_blank"
            >
              search{" "}
            </a>
            </button>
          </div>
          {/* ------------- */}
          <div className="card">
            <div className="icon">
              <i className="i3" />
            </div>
            <h2>Fire</h2>
            <p className='symbol'>&#128658;</p>
            <p className="emerDes">Fire station <br /> (Gandhinagar)</p>
            <button className="emersersearchbtn">
            <a
              href="https://www.gandhinagaronline.in/city-guide/fire-stations-in-gandhinagar"
              type="button"
              target="_blank"
            >
              search
            </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emergency;
