import React from 'react';
import './Leftsidebar.css';
import { NavLink } from 'react-router-dom';
import Globe from "../../Assets/Globe.svg";
import { useSelector } from "react-redux";

const Leftsidebar = ({ slidein }) => {
  const slideinstyle = {
    transform: "translateX(0%)",
  };
  const slideoutstyle = {
    transform: "translateX(-100%)",
  };

  const Mentor = useSelector((state) => state.currentmentorReducer);

  return (
    <div className="left-sidebar" style={slidein ? slideinstyle : slideoutstyle}>
      <nav className='side-nav'>
        <button className="nav-btnn">
          <NavLink to='/' className="side-nav-links" activeclassname='active'>
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button className='nav-btnn'>
            <NavLink to='/Batch' className='side-nav-links' activeclassname='active'>
              <img src={Globe} alt="globe" />
              <p style={{ paddingLeft: '10px' }}>Batches</p>
            </NavLink>
          </button>
          <button className='nav-btnn'>
            <NavLink to='/Mentor' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
              <p>Mentors</p>
            </NavLink>
          </button>
          {Mentor && (
            <button className='nav-btnn'>
              <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{ paddingLeft: "40px" }}>
                <p>Users</p>
              </NavLink>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Leftsidebar;
