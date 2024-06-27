import React, { useState } from 'react';
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar';
import { useParams } from 'react-router-dom';
// import './Userprofile.css';
import moment from 'moment';
import Avatar from '../../Component/Avatar/Avatar';
import Editprofileform from './Editprofileform';
import Profilebio from './Profilebio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBirthdayCake, faPen} from '@fortawesome/free-solid-svg-icons'

const Userprofile = ({slideIn}) => {
    const {id} = useParams();
    const [Switch , setSwitch] = useState(false);
    const users = [{
        "_id":"u3242",
        "name":"user1",
        "email":"user1",
        "password":"123",
        "about": "dfkal kialkdoia ",
        "tags": ["js", "python"],
        "answered": 10,
        "joinedon": "2024-05-10T08:00:00Z"
    }]
    const currentprofile = users.filter((user)=>user._id === id)[0];

    const currentuser = {
        "_id":"u3242",
        "name":"user1",
        "email":"user1",
        "password":"123",
        "about": "dfkal kialkdoia ",
        "tags": ["js", "python"],
        "answered": 10,
        "joinedon": "2024-05-10T08:00:00Z"
    }

  return (
    <div className="home-container-1">
      <Leftsidebar slideIn={slideIn}/>
      <div className="home-container-2">
        <section>
            <div className="user-details-container">
                <div className="user-details">
                    <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">{currentprofile.name.charAt(0).toUpperCase()}</Avatar>
                    <div className="user-name">
                        <h1>{currentprofile?.name}</h1>
                        <p>
                            <FontAwesomeIcon icon={faBirthdayCake} />
                            Joined{" "}{moment(currentprofile?.joinedon).fromNow()}
                        </p>
                    </div>
                </div>
                {currentuser?._id === id && (
                    <button className="edit-profile-btn" type='button' onClick={()=>setSwitch(true)}><FontAwesomeIcon icon={faPen}/> Edit Profile</button>
                )}
            </div>
            <>
            {Switch ? (
                <Editprofileform currentuser={currentuser} setSwitch={setSwitch} />
            ):(
                <Profilebio currentprofile={currentprofile} />
            )}
            </>
        </section>
      </div>
    </div>
  )
}

export default Userprofile