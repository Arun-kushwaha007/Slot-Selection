import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../../actions/auth';

const AuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      dispatch(googleLogin(token, navigate));
    } else {
      navigate('/');
    }
  }, [location, dispatch, navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;
