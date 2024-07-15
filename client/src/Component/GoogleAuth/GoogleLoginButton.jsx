import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { googleLogin } from "../../actions/auth";
import './GoogleLoginButton.css';

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    const token = response.credential;
    dispatch(googleLogin(token, navigate));
  };

  const handleError = () => {
    console.log('Google Login Failed');
  };

  console.log("Google Client ID: ", process.env.REACT_APP_GOOGLE_CLIENT_ID); // Debug log

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
