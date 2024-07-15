import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../Component/Rightsidebar/Rightsidebar'
import Batchdetails from './Batchdetails'
const DisplayBatches = ({slidein}) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}/>
      <div className="home-container-2">
        <Batchdetails/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default DisplayBatches