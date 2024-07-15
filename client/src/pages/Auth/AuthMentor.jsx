import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./AuthMentor.css"
// import icon from '../../Assets/icon.png'
import Aboutauth from './Aboutauth'
// import { signup, login } from '../../action/auth'
import { Mentorlogin, Mentorsignup } from '../../actions/authmentor'
// import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode'
// import axios from 'axios'

const AuthMentor = () => {
    const [issignup, setissignup] = useState(false)
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!email && !password) {
            alert("Enter email and password")
        }
        if (issignup) {
            if (!name) {
                alert("Enter a name to continue")
            }
            dispatch(Mentorsignup({ name, email, password }, navigate))
            
        } else {
            dispatch(Mentorlogin({ email, password }, navigate))
        
        }
    }
    const handleswitch = () => {
        setissignup(!issignup);
        setname("");
        setemail("");
        setpassword("")

    }

    // const login = useGoogleLogin({
    //     onSuccess: async(response)=>{
    //         try{
    //             const res = await axios.get("https://www.googleapis.com/oauth2/")
    //         }catch(err){

    //         }
    //     }
    // })

    return (
        <section className="auth-section">
            {issignup && <Aboutauth />}
            <div className="auth-container-2">
                <img src={" "} alt="icon" className='login-logo' />
                <form onSubmit={handlesubmit}>
                    {issignup && (
                        <label htmlFor="name">
                            <h4>Display Name</h4>
                            <input type="text" id='name' name='name' value={name} onChange={(e) => {
                                setname(e.target.value);
                            }} />
                        </label>
                    )}
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" id='email' name='email' value={email} onChange={(e) => {
                            setemail(e.target.value);
                        }} />
                    </label>
                    <label htmlFor="password">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4>Password</h4>
                            {!issignup && (
                                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                                    Forgot Password?
                                </p>
                            )}
                        </div>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => {
                            setpassword(e.target.value)
                        }} />
                    </label>
                    <button type='submit' className='auth-btn' >
                        {issignup ? "Sign up" : "Log in"}
                    </button>
                </form>
                OR
                
                <p>
                    {issignup ? "Already have an account?" : "Don't have an account"}
                    <button type='button' className='handle-switch-btn' onClick={handleswitch}>
                        {issignup ? "Log in" : "Sign up"}
                    </button>
                </p>
            </div>
        </section>
    )
}

export default AuthMentor;