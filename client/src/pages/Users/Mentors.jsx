import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import './Users.css'
import Userslist from './Userslist'
const Mentors = ({slidein}) => {
  return (
    <div className="home-container-1">
    <Leftsidebar slidein={slidein}/>
    <div className="home-container-2" style={{marginTop:"30px"}}>
        <h1 style={{fontWeight:"400"}}>Mentors</h1>
        <Userslist/>
        </div>
        </div>
  )
}

export default Mentors