import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateComponent() {

    
    const auth = localStorage.getItem("user")


  return (


  auth?<Outlet/> : <Navigate to="/signin"/>
  )
    // <div>PrivateComponent</div>
  
}
 
export default PrivateComponent