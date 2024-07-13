import React from 'react'
import "../Navigation/navigation.css"
import Navbar from '../Navbar/Navbar'

function Navigation() {
  return (
    <div className='navigation'>
        <Navbar/>
        <div className="mapcon">
            <img src="../images/map1.png" alt="" />
        </div>
    </div>
  )
}

export default Navigation