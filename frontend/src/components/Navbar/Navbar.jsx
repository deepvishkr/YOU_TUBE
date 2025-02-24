import React, { useState, useEffect } from "react";
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Login from "../Login/Login";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";


function Navbar({ setSideNavbarFunc, sideNavbar }) {
    const [userPic, setUserPic] = useState("https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg");
    const [navbarModel, setNavbarModel] = useState(false);
    const [login, setLogin] = useState(false);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const navigate = useNavigate();


    const handleClickModel = () => {
        setNavbarModel(prev => !prev);
    }

    const sideNavbarFunc = () => {
        setSideNavbarFunc(!sideNavbar)
    }

    const handleProfile = () => {
        let userId = localStorage.getItem("userId");
        navigate(`/user/${userId}`);
        setNavbarModel(false);
    }


    const onclickPopUp = (button) => {
        setNavbarModel(false);
        if (button === "login") {
            setLogin(true);
        } else {
            localStorage.clear();
            getLogoutFun();
            setTimeout(() => {
                navigate('/')
                window.location.reload();
            },1000);
        }
    }

    const getLogoutFun = async() =>{
        axios.post("http://localhost:3000/auth/logout", {}, { withCredentials: true})
        .then((res) => {
            console.log("Logout");
        }).catch(err =>{
            console.log(err)
        })
    }


    useEffect(() => {
        let userProfilePic = localStorage.getItem("userProfilePic");
        setIsLogedIn(localStorage.getItem("userId") !== null ? true : false);
        if (userProfilePic !== null) {
            setUserPic(userProfilePic);
        }
    })
    const setLoginModel = () => {
        setLogin(false);
    }

    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbarSidebar" onClick={sideNavbarFunc}>
                    <MenuIcon />
                </div>
                <Link to={'/'} className="navbar-youtube">
                    <YouTubeIcon sx={{ fontSize: "40px" }} className="navbar-youtubeImg" />
                    <div className="navbar-title">YouTube</div>
                </Link>
            </div>

            <div className="navbar-middle">
                <div className="navbar-search">
                    <input type="text" placeholder="Search..." className="navbar-searchBox" />
                    <div className="navbar-searchIcon"><SearchIcon sx={{ fontSize: "28px", color: "white" }} /></div>
                </div>
            </div>

            <div className="navbar-right">
                <Link to={'/763/upload'}>
                    <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
                </Link>

                <img onClick={handleClickModel} src={userPic} className="navbar-logo" alt="Logo" />

                {navbarModel &&
                    <div className="navbar-model">
                        <div className="navbar-model-option" onClick={handleProfile}>Profile</div>
                        <div className="navbar-model-option" onClick={() => onclickPopUp("login")}>SignIn</div>
                        <div className="navbar-model-option" onClick={() => onclickPopUp("logout")}>SignOut</div>
                    </div>
                }


            </div>

            {
                login && <Login setLoginModel={setLoginModel} />
            }
        </div>
    )
}
export default Navbar;


