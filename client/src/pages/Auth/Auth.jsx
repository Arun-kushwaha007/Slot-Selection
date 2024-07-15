import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Auth.css";
import icon from '../../Assets/icon.png';
import Aboutauth from './Aboutauth';
import { signup, login } from '../../actions/auth';

import GoogleLoginButton from '../../Component/GoogleAuth/GoogleLoginButton';

const Auth = () => {
  const [issignup, setissignup] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (issignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  const handleswitch = () => {
    setissignup(!issignup);
    setname("");
    setemail("");
    setpassword("");
  };

  return (
    <section className="auth-section">
      {issignup && <Aboutauth />}
      <div className="auth-container-2">
        <img src={icon} alt="icon" className='login-logo' />
        <form onSubmit={handlesubmit}>
          {issignup && (
            <label htmlFor="name">
              <h4>Display name</h4>
              <input
                type="text"
                id='name'
                name='name'
                onChange={(e) => { setname(e.target.value) }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name='email'
              id='email'
              onChange={(e) => { setemail(e.target.value) }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!issignup && <h4 style={{ color: "#007ac6", fontSize: "13px" }}>forgot password?</h4>}
            </div>
            <input
              type="password"
              name='password'
              id='password'
              onChange={(e) => { setpassword(e.target.value) }}
            />
          </label>
          <button type='submit' className='auth-btn'>{issignup ? 'Sign up' : 'Log in'}</button>
          <GoogleLoginButton />
        </form>
        <p>
          {issignup ? 'Already have an account?' : "Don't have an account"}
          <button type='button' className='handle-switch-btn' onClick={handleswitch}>{issignup ? "Log in" : 'sign up'}</button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
