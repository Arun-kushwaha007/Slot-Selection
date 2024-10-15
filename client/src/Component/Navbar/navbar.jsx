import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import bars from '../../Assets/bars-solid.svg';
import logo from '../../Assets/logo.png';
import search from '../../Assets/search-solid.svg';
import Avatar from '../Avatar/Avatar';
import './navbar.css';
import { setcurrentuser, setcurrentmentor } from '../../actions/currentuser';
import {jwtDecode} from 'jwt-decode';
// import GoogleLoginButton from '../GoogleAuth/GoogleLoginButton';
import { GoogleLogin } from '@react-oauth/google';

function Navbar({ handleslidein }) {
    const User = useSelector((state) => state.currentuserreducer);
    const Mentor = useSelector((state) => state.currentmentorreducer);
    // console.log("User:", User);
    // console.log("Mentor:", Mentor);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("Profile");
        localStorage.removeItem("ProfileMentor");
        dispatch({ type: "LOGOUT" });
        navigate("/");
        dispatch(setcurrentuser(null));
        dispatch(setcurrentmentor(null));
    };

    useEffect(() => {
        const token = User?.token || Mentor?.token;
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout();
            }
        }
        const profile = localStorage.getItem("Profile");
        const mentorProfile = localStorage.getItem("ProfileMentor");

        // console.log("LocalStorage Profile:", profile);
        // console.log("LocalStorage MentorProfile:", mentorProfile);

        if (profile) {
            dispatch(setcurrentuser(JSON.parse(profile)));
        }
        if (mentorProfile) {
            dispatch(setcurrentmentor(JSON.parse(mentorProfile)));
        }
    }, [User?.token, Mentor?.token, dispatch]);

    const closeDropdown = () => setIsOpen(false);

    return (
        <nav className="main-nav">
            <div className="navbar">
                <button className="slide-in-icon" onClick={handleslidein}>
                    <img src={bars} alt="bars" width='15' />
                </button>
                <div className="navbar-1">
                    <Link to='/' className='nav-item nav-logo'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <NavLink to="/" className="nav-item nav-btn res-nav" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/Batch" className="nav-item nav-btn res-nav" activeClassName="active">
                        Booking
                    </NavLink>
                    <NavLink to="/Resources" className="nav-item nav-btn res-nav" activeClassName="active">
                        Resources
                    </NavLink>
                    <NavLink to="/Mentors" className="nav-item nav-btn res-nav" activeClassName="active">
                        Mentor
                    </NavLink>
                    <NavLink to="/Contact" className="nav-item nav-btn res-nav" activeClassName="active">
                        Contact Us
                    </NavLink>
                    {/* <GoogleLoginButton /> */}
                    {/* <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>; */}
                    <form>
                        <input type="text" placeholder='Search...' />
                        <img src={search} alt="search" width='18' className='search-icon' />
                    </form>
                </div>
                <div className="navbar-2">
                    {User === null && Mentor === null ? (
                        <div className='dropdown'>
                            <button className="dropbtn" ><Link to='/AuthMentor' className='mentor-text' >Be a Mentor</Link></button>
                            {/* <div className={`dropdown-content ${isOpen ? 'show' : ''}`}> */}
                                {/* <Link to='/Auth' onClick={closeDropdown}>As Student</Link> */}
                                
                            {/* </div> */}
                        </div>
                    ) : (
                        <>
                            <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color="white">
                                <Link to={Mentor ? `/Mentor/${Mentor?.result?._id}` : `/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>
                                    {(Mentor || User)?.result?.name?.charAt(0).toUpperCase()}
                                </Link>
                            </Avatar>
                            <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
                        </>
                    )}
                </div>
                {/* <div className="navbar-2">
                    {User === null && Mentor === null ? (
                        <div className='dropdown'>
                            <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>Login</button>
                            <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                                <Link to='/Auth' onClick={closeDropdown}>As Student</Link>
                                <Link to='/AuthMentor' onClick={closeDropdown}>As Mentor</Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color="white">
                                <Link to={Mentor ? `/Mentor/${Mentor?.result?._id}` : `/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>
                                    {(Mentor || User)?.result?.name?.charAt(0).toUpperCase()}
                                </Link>
                            </Avatar>
                            <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
                        </>
                    )}
                </div> */}
            </div>
        </nav>
    );
}

export default Navbar;
