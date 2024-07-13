import React from 'react'
import "./footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='footer'>
<div className="footercon">
    <div className="footersec cdetail">
        <h1 className="ftitle">UrbanAssist</h1>
        <p className="fabout">Acting as a personalized city guide, 
this app provides essential information about various locations within a city, making it easy for users to 
locate hospitals, colleges, hotels, markets, and other necessary places.</p>
    </div>
    <div className="footersec fcontact">
        <h2>Contact us</h2>
        <div className="fadd fcs">
            <LocationOnIcon className='fcsl'/>
       <p> 
Sector-28, Gandhinagar
Gujarat, India -382028</p>
       </div>
       <div className="fmobile fcs">
        <CallIcon className='fcsl'/>
        <p>+91 9999999999</p>
       </div>
       <div className="femail fcs">
        <EmailIcon className='fcsl'/>
        <p>contact@urbanassist.com</p>
       </div>
    </div>
    <div className="footersec fconnect">
        <div className="sec1">
            <h2>Download App</h2>
            <div className="appimg">
                <img src="https://www.yulu.bike/wp-content/themes/redbaton/redbaton/images/Home/Footer/g-play.svg" alt="" />
                <img src="https://www.yulu.bike/wp-content/themes/redbaton/redbaton/images/Home/Footer/app-store.svg" alt="" />
            </div>
        </div>
        <div className="sec2">
        <h2>Get in touch</h2>
                <div className="flinklogo">
                    <WhatsAppIcon className='fllogo'/>
                    <InstagramIcon className='fllogo'/>
                    <FacebookIcon className='fllogo'/>
                    <LinkedInIcon className='fllogo'/>
                </div>
        </div>
   
    </div>
    <div className="footersec fnewsletter">
    <h2 >Newsletter</h2>
                <input type="text" placeholder='Your email id here' required/>
                <button>Subscribe</button>
    </div>
</div>
<div className="copyright">
        <p>Copyright © 2024 UrbanAssist. All Rights Reserved</p> 

        </div>
    </div>
  )
}

export default Footer