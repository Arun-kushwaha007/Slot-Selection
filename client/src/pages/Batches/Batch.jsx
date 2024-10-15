import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../Component/Rightsidebar/Rightsidebar'
import Homemainbar from '../../Component/Homemainbar/Homemainbar'
import '../../App.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import BatchList from '../../Component/Homemainbar/Batchlist'
const Batch = ({slidein}) => {
  const user = useSelector((state) => state.currentuserreducer);
  const mentor = useSelector((state) => state.currentmentorreducer); // Added mentor selector
  const location = useLocation();
  const navigate = useNavigate();
  const batchlist = useSelector((state) => state.batchreducer);

  const checkauth = () => {
    if (mentor === null) {
      alert("Login as a mentor to add a batch");
      navigate("/AuthMentor"); // Navigate to mentor auth page
    } else {
      navigate("/Addbatch");
    }
  };
  return (
    <div className="home-container-1">
      {/* <Leftsidebar slidein={slidein}/> */}
      <div className="home-container-2">
        {/* <Homemainbar/> */}
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Batches</h1>
        ) : (
          <h1>All Batches</h1>
        )}
        {mentor && ( // Check if mentor is logged in
          <button className="ask-btn" onClick={checkauth}>Add batch</button>
        )}
      </div>
      <div>
        {batchlist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{batchlist.data.length} batches</p>
            <BatchList batchlist={batchlist.data} />
          </>
        )}
      </div>
    </div>

        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Batch