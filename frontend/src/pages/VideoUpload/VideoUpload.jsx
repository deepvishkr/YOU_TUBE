import React,{ useState} from 'react'
import './VideoUpload.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';


function VideoUpload() {
    const [inputField,setInputField] = useState({"title":"", "description":"", "videoLink":"", "thumbnail":"", "videoType":""});

    const handleOnChangeInput= (event,name)=>{
        setInputField({
            ...inputField,[name]:event.target.value
        })
    }
    console.log(inputField)
    return (
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadVideo_title">
                    <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" value={inputField.title} onChange={(e) => handleOnChangeInput(e, "title")} placeholder='Title of Video' className="uploadFormInputs" />
                    <input type="text" value={inputField.description} onChange={(e) => handleOnChangeInput(e, "description")} placeholder='Description' className="uploadFormInputs" />
                    <input type="text" value={inputField.videoType} onChange={(e) => handleOnChangeInput(e, "videoLink")} placeholder='Category' className="uploadFormInputs" />
                    <div>Thumbnail <input type="file" accept="image/*" /> </div>
                    <div>Video <input type="file" accept="video/mp4, video/webm, video/*" /> </div>
                </div>

                <div className="uploadBtns">
                    <div className="btn_form">Upload</div>
                    <Link to={'/'} className="btn_form">Home</Link>
                </div>

            </div>

        </div>
    )
}

export default VideoUpload