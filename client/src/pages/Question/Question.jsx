import React from 'react';
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../Component/Rightsidebar/Rightsidebar'
import Homemainbar from '../../Component/Homemainbar/Homemainbar'   
import '../../App.css'

const Question = ({slideIn}) => {
  return (
    <div className="home-container-1">
        <Leftsidebar slideIn={slideIn} />
        <div className="home-container-1">
            <Homemainbar/>
            <Rightsidebar/>
        </div>
    </div>
  )
}

export default Question