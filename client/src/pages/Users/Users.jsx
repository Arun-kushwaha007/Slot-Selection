import React from 'react';
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar';
import './Users.css'
import Userslist from './Userslist';

const Users = ({slideIn}) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slideIn={slideIn}/>
      <div className="home-container-2">
        <h1 style={{fontWeight:"400"}}>Users</h1>
        <Userslist/>
      </div>
    </div>
  )
}

export default Users