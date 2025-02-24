import React, { useState } from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Login({ setLoginModel }) {

    const [loginField, setLoginField] = useState({ "userName": "", "password": "" });
    console.log(loginField)
    const handleOnChangeInput = (event, name) => {
        setLoginField({
            ...loginField, [name]: event.target.value
        })
    }

    const handleLoginFunc = async () => {
        axios.post(`http://localhost:3000/login`, loginField)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userId", res.data.user._id)
                localStorage.setItem("userProfilePic", res.data.user.profilePic)
                window.location.reload();
            }).catch(err => {
                toast.error('Invalid Credentials')
                console.log(err);
            })
    }

    return (
        <div className="login">
            <div className="login_card">
                <div className="login_title">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className="login_img" />
                    LogIn
                </div>

                <div className="loginCredentials">
                    <div className="username_login">
                        <input type="text" placeholder='UserName' value={loginField.userName} onChange={(e) => handleOnChangeInput(e, "userName")} className="login_username" />
                    </div>
                    <div className="username_login">
                        <input type="password" placeholder='Password' value={loginField.password} onChange={(e) => handleOnChangeInput(e, "password")} className="login_username" />
                    </div>
                </div>

                <div className="login_buttons">
                    <div className="login_btn" onClick={handleLoginFunc}>LogIn</div>
                    <Link to={'/signup'} onClick={() => setLoginModel()} className="login_btn">SignUp</Link>
                    <div className="login_btn" onClick={() => setLoginModel()}>Cancel</div>
                </div>
            </div>
            <ToastContainer /> 
        </div>
    )
}

export default Login