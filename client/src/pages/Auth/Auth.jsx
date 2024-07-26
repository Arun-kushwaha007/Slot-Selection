import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Auth.css";
import icon from '../../Assets/icon.png';
import Aboutauth from './Aboutauth';
import { signup } from '../../actions/auth';

const Auth = () => {
  const [issignup, setissignup] = useState(true);  // default to signup mode
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");  // phone number state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Enter email");
      return;
    }
    if (!name) {
      alert("Enter a name to continue");
      return;
    }
    if (!phone) {
      alert("Enter a phone number to continue");
      return;
    }
    dispatch(signup({ name, email, phone }));
    navigate("/payment");
  };

  return (
    <section className="auth-section">
      <Aboutauth />
      <div className="auth-container-2">
        <img src={icon} alt="icon" className='login-logo' />
        <form onSubmit={handlesubmit}>
          <label htmlFor="name">
            <h4>Full name</h4>
            <input
              type="text"
              id='name'
              name='name'
              onChange={(e) => { setname(e.target.value) }}
            />
          </label>
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name='email'
              id='email'
              onChange={(e) => { setemail(e.target.value) }}
            />
          </label>
          <label htmlFor="phone">
            <h4>Phone Number</h4>
            <input
              type="text"
              name='phone'
              id='phone'
              onChange={(e) => { setphone(e.target.value) }}
            />
          </label>
          <button type='submit' className='auth-btn'>Proceed</button>
        </form>
      </div>
    </section>
  );
};

export default Auth;
