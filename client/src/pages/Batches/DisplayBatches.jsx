import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../Component/Rightsidebar/Rightsidebar'
import Batchdetails from './Batchdetails'
const DisplayBatches = ({slidein}) => {
  return (
    <div className="sd">
      {/* <Leftsidebar slidein={slidein}/> */}
      <div className="home">
        <Batchdetails/>
        {/* <Rightsidebar/> */}
      </div>
    </div>
  )
}

export default DisplayBatches