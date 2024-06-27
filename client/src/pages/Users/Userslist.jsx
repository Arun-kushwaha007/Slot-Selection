import React from 'react';
import './Users.css'
import User from './User';

const Userslist = () => {
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
  return (
    <div className="users-list-container">
        {users.map((user)=>(
            <User user={user} key={user?._id} />

        ))}
    </div>
  )
}

export default Userslist