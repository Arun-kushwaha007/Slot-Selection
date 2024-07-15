import React from 'react'
import { Link } from 'react-router-dom'
const Mentor = ({mentor}) => {
  return (
   <Link to ={`/Mentors/${mentor._id}`} className='user-profile-link'>
    <h3>{mentor.name.charAt(0).toUpperCase()}</h3>
    <h5>{mentor.name}</h5>
   </Link>
  )
}

export default Mentor