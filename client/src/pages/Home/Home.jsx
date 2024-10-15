import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar';
import Rightsidebar from '../../Component/Rightsidebar/Rightsidebar';
import Homemainbar from '../../Component/Homemainbar/Homemainbar';
import '../../App.css'

const Home = ({slidein}) => {
  return (
    <div className="home-container-1">
      {/* <Leftsidebar slidein={slidein}/> */}
      <div className="home-container-3">
        <Homemainbar/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Home