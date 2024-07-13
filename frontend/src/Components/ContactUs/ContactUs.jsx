import React, { useState } from "react";
import "./contactus.css";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const collectContactUsData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/api/contactus", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    result = await result.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="contactus-parent-con">
      <div className="contactus-con">
        <div className="contactus">
          <h1 className="contactus-header comtitle">Contact Us</h1>
          <form action="" className="contactus-form">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
             required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Your Contact number"
              required
              size={10}
              minLength={10}
              maxLength={15}
              name="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              name="message"
              id=""
              cols="20"
              rows="5"
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={collectContactUsData}>Send Message</button>
          </form>
        </div>
        <div className="contactus-imgpart">
          <div className="contactus-imgcon">
            <img src="../images/contactus.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
