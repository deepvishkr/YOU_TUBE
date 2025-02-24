import React,{useState} from 'react'
import './signup.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';
function SignUp() {

    const[signUpField, setSignUpField] = useState({"channelName":"", "userName":"", "password":"", "about":"", "profilePic":""})
    const [uploadedImageUrl,setUploadedImageUrl] = useState("https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_640.jpg")
const navigate = useNavigate();

    const handleInputField= (event,name)=>{
        setSignUpField({
            ...signUpField,[name]:event.target.value
        })
    }
    console.log(signUpField)


    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the uploaded file
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setUploadedImageUrl(reader.result); // Display image preview
            setSignUpField({
              ...signUpField,
              profilePic: reader.result // Store image base64 URL in state
            });
          };
          reader.readAsDataURL(file); // Convert image to base64
        }
      };

    const handleSignUp = async()=>{
        axios.post('http://localhost:3000/signup', signUpField)
        .then((res)=> {
            
            toast.success(res.data.message);
            navigate('/');
        }).catch(err => {
            
            toast.error(err)
        }) 
    }
    return (
        <div className="signup">
            <div className="signup_card">
                <div className="signup_title">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className="signUp_img" />
                    SignUp
                </div>


                <div className="signup_inputs">
                    <input type='text' className="signup_input" value={signUpField.channelName} onChange={(e) => handleInputField(e, "channelName")} placeholder='Channel Name' />
                    <input type='text' className="signup_input" value={signUpField.userName} onChange={(e) => handleInputField(e, "userName")} placeholder='User Name' />
                    <input type='password' className="signup_input" value={signUpField.password} onChange={(e) => handleInputField(e, "password")} placeholder='Password' />
                    <input type='text' className="signup_input" value={signUpField.about} onChange={(e) => handleInputField(e, "about")} placeholder='About Your Channel' />

                    <div className="signup_img">
                        <input type='file' onChange={handleImageUpload}/>
                        <div className="img_upload">
                            <img className="img_default" src={uploadedImageUrl} />
                        </div>
                    </div>

                    <div className="signup_btns">
                        <div className="signup_Btn" onClick={handleSignUp}>SignUp</div>
                        <Link to={'/'} className="signup_Btn">Home Page</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUp