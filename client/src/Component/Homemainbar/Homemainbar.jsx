import React from 'react'
import './Homemainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Questionlist from './Questionlist';

function Homemainbar() {
    const user = 1;
    const location = useLocation();
    const questionlist = null
  return (
    <div className="main-bar">
        <div className="main-bar-header">
            {location.pathname=== "/" ?(
                <h1>Top Questions</h1>

            ):(
                <h1>All Questions</h1>

            )}
            <button className="ask-btn">Ask Questions</button>
        </div>
        <div>
            {
                questionlist === null ? (
                    <h1>Loading...</h1>
                ):(
                    <>
                    <p>{questionlist.data.length} questions </p>
                    <Questionlist questionlist={questionlist.data}/>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Homemainbar 