import React from 'react'
import './Users.css'
// import User from './User'
import Mentor from './Mentor'
import {useSelector} from "react-redux"
const Mentorslist = () => {
    const mentors=useSelector((state)=>state.mentorsreducer)
    // console.log(users)
  return (
    <div className="user-list-container">
        {mentors.map((mentor)=>(
            <Mentor user={mentor} key={mentor?._id}/>
        ))}
    </div>
  )
}

export default Mentorslist