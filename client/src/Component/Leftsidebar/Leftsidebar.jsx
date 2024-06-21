import React from 'react';
import { NavLink } from 'react-router-dom';
import './Leftsidebar.css'
import Globe from "../../Assets/Globe.svg";

const Leftsidebar = ({slideIn}) => {
    const slideinstyle = {
        transform: "translateX(0%)",
    };
    const slideoutstyle ={
        transform: "translateX(-100%)",
    };

  return (
    <div className="left-sidebar" style={slideIn ? slideinstyle : slideoutstyle}>
        <nav className="side-nav">
            <button className="nav-btnn">
                <NavLink to='/' className="side-nav-links" activeclassname='active'>
                    <p>Home</p>

                </NavLink>
            </button>
            <div className="side-nav-div">
                <div>
                    <p>PUBLIC</p>
                    
                </div>
                <button className="nav-btnn">
                <NavLink to='/Questions' className="side-nav-links" activeclassname='active'>
                    <img src={Globe} alt="" />
                    <p style={{paddingLeft:'10px'}}>Questions</p>
                </NavLink>
                </button>
                <button className="nav-btnn">
                <NavLink to='/Tags' className="side-nav-links" activeclassname='active' style={{paddingLeft:"40px"}}>
                
                    <p >Tags</p>
                </NavLink>
                </button>
                <button className="nav-btnn">
                <NavLink to='/Users' className="side-nav-links" activeclassname='active' style={{paddingLeft:"40px"}} >
                    
                    <p>Users</p>
                </NavLink>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Leftsidebar