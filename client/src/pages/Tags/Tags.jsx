import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import Taglist from './Taglist'
import './Tags.css'
import {tagsList} from './tagslist'
const Tags = ({slidein}) => {
  return (
   <div className="home-container-1">
    <Leftsidebar slidein={slidein}/>
    <div className="home-container-2">
        <h1 className="tags-h1">
            Mentors
        </h1>
        <p className="tags-p">Lorem isphon aodkfj adf iao dfisodif jfoai d f</p>
        <p className="tags-p">
            kakdf jafj af j ljfdjfald fa; fds kfdjf
        </p>
        {/* <div className="tags-list-container">
            {tagsList.map((tag,index)=>(
                <Taglist tag={tag} key={index}/>
            ))}
        </div> */}
    </div>
   </div>
  )
}

export default Tags