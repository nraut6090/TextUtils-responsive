import React from 'react'
import {useNavigate } from 'react-router-dom'

export default function About() {
  const navigate=useNavigate()
  return (
    <div style={{"display":"flex","flexDirection":"columns","justifyContent":"center","alignItems":"center","width":"100vw","height":"100vh","background":"#55B4B0"}}>
        <div className='contextContainer' style={{"borderRadius":"8px","paddingLeft":"20px","width":"60vw","height":"60vh","background":"#7FCDCD" , "display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","gap":"4px"}}>
          <p style={{"color":"white","fontFamily":"monospace","fontSize":"20px"}}>This project is basic text transformation project which mainly emphasize on 
            State management of an application and use of props .
          </p>
          <button style={{"background":"#45B8AC","borderRadius":"4px"}} onClick={()=>navigate('/home')} >
            Go Back
          </button>
        </div>
    </div>
  )
}
