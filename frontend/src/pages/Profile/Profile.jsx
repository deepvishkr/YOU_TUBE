import React, { useState, useEffect } from 'react'
import './profile.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Profile({ sideNavbar }) {


    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const { id } = useParams();

    const fetchProfileData = async () => {
        await axios.get(`http://localhost:3000/${id}/channel`)
            .then(res => {
                console.log(res);
                setData(res.data.videos);
                setUser(res.data.videos[0]?.user);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchProfileData();
    }, []);


    return (
        <div className="profile">
            <Sidebar sideNavbar={sideNavbar} />

            <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>

                <div className="profile_section">
                    <div className="profile_section_top">
                        <img className="profile_img" src={user?.profilePic} alt="" />
                    </div>
                    <div className="profile_about">
                        <div className="profile_about_name">{user?.channelName}</div>
                        <div className="profile_about_info">{user?.userName} . {data.length}</div>
                        <div className="profile_about_info">{user?.about}</div>
                    </div>
                </div>

                <div className="profile_videos">
                    <div className="videos_title">Videos</div>

                    <div className="profileVideo">

                        {
                            data.map((item, key) => {
                                return (
                                    <Link to={`/watch/${item._id}`} className="profileVideo_block">
                                        <div className="profile_block_thumbnail">
                                            <img className="profile_block_img" src={item?.thumbnail} alt="" />
                                        </div>

                                        <div className="prfile_block_detail">
                                            <div className="prfile_block_detail_name">{item?.title}</div>
                                            <div className="prfile_block_detail_about">Created at {item?.createdAt.slice(0,10)}</div>
                                        </div>
                                    </Link>
                                )
                            })
                        }




                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;