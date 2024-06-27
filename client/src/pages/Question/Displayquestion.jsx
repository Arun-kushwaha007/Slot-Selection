import React from 'react';
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../Component/Rightsidebar/Rightsidebar'
import Questiondetails from './Questiondetails'
const Displayquestion = ({slideIn}) => {
  return (
    <div className="home-container-1">
        <Leftsidebar slideIn={slideIn} />
        <div className="home-container-1">
            <Questiondetails/>
            <Rightsidebar/>
        </div>
    </div>
  )
}

export default Displayquestion