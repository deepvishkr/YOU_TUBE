import React, { useState, useEffect } from 'react'
import './video.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function Video() {

    const [message, setMessage] = useState("");
    const [data, setData] = useState(null);
    const [videoUrl, setVideoUrl] = useState("");
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    const fetchVideoById = async () => {
        await axios.get(`http://localhost:3000/getvideobyid/${id}`)
            .then(res => {
                console.log(res.data.videos);
                setData(res.data.videos);
                setVideoUrl(res?.data?.videos?.videoLink);
            }).catch(err => {
                console.log(err);
            })
    }

    const getCommentByVideoId = async () => {
        await axios.get(`http://localhost:3000/comment/${id}`)
            .then(res => {
                console.log(res);
                setComments(res.data.comments)
            }).catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchVideoById();
        getCommentByVideoId();
    }, []);
    
    return (
        <div className="video" >
            <div className="videoPost">
                <div className="video_youtube">
                    <video width="400" controls autoPlay className="video_youtube_video">
                        <source src={videoUrl} type="video/mp4" />
                        <source src={videoUrl} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="video_about">
                    <div className="video_title">{data?.title}</div>
                    <div className="video_Profile">
                        <div className="video_ProfileLeft">
                            <Link to={`/user/${data?.user?._id}`} className="video_ProfileLeftImg">
                                <img className="video_ProfileLeftImage" src={data?.user?.profilePic} />

                            </Link>

                            <div className="video_subsView">
                                <div className=" ">{data?.user?.channelName}</div>
                                <div className="postProfileSubs">{data?.user?.createdAt.slice(0, 10)}</div>
                            </div>
                            <div className="subscribe_btn">Subscribe</div>
                        </div>

                        <div className="youtube_likeBlock">
                            <div className="youtube_like">
                                <ThumbUpOutlinedIcon />
                                <div className="youtube_noOfLike">{data?.like}</div>
                            </div>
                            <div className="youtube_divider"></div>

                            <div className="youtube_like">
                                <ThumbDownOutlinedIcon />
                            </div>
                        </div>
                    </div>

                    <div className="video_info">
                        <div>{data?.createdAt.slice(0, 10)}</div>
                        <div>{data?.description}</div>
                    </div>
                </div>

                <div className="youtubeComment">
                    <div className="comment_title">{comments.length} Comments</div>

                    <div className="selfComment">
                        <img className="commentProfile" src="https://lh3.googleusercontent.com/a/ACg8ocI1inwQdqV4TYLdG94azZiivgK1uDMVAV1Gw-HE7hNPORNnMOqA=s288-c-no" />
                        <div className="addAComment">
                            <input type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} className="addAInput" placeholder="Add a comment" />
                            <div className="cancelSubmitComment">
                                <div className="cancelComment">Cancel</div>
                                <div className="cancelComment">Comment</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="othersComment">


                    {
                        comments.map((item, index) => {
                            return (
                                <div className="selfComment">
                                    <img className="commentProfile" src={item?.user?.profilePic} />
                                    <div className="othersCommentSection">
                                        <div className="commentHeader">
                                            <div className="channelName">{item?.user?.channelName}</div>
                                            <div className="channelTiming">{item.createdAt.slice(0,10)}</div>
                                        </div>
                                        <div className="sectionComment">{item.message}</div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>



            <div className="videoSuggestion">

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://i.ytimg.com/vi/vz1RlUyrc3w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPuqXVkPj7ttWHlhfi9QZ8hFdqug" className="suggestion_thumbnail_img" />
                    </div>
                    <div className=" ">
                        <div className="suggestion_title">React JS Roadmap</div>
                        <div className="suggestion_about">Chai aur Code</div>
                        <div className="suggestion_about">30k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://i.ytimg.com/vi/vz1RlUyrc3w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPuqXVkPj7ttWHlhfi9QZ8hFdqug" className="suggestion_thumbnail_img" />
                    </div>
                    <div className=" ">
                        <div className="suggestion_title">React JS Roadmap</div>
                        <div className="suggestion_about">Chai aur Code</div>
                        <div className="suggestion_about">30k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://i.ytimg.com/vi/vz1RlUyrc3w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPuqXVkPj7ttWHlhfi9QZ8hFdqug" className="suggestion_thumbnail_img" />
                    </div>
                    <div className=" ">
                        <div className="suggestion_title">React JS Roadmap</div>
                        <div className="suggestion_about">Chai aur Code</div>
                        <div className="suggestion_about">30k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://i.ytimg.com/vi/vz1RlUyrc3w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPuqXVkPj7ttWHlhfi9QZ8hFdqug" className="suggestion_thumbnail_img" />
                    </div>
                    <div className=" ">
                        <div className="suggestion_title">React JS Roadmap</div>
                        <div className="suggestion_about">Chai aur Code</div>
                        <div className="suggestion_about">30k views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">
                        <img src="https://i.ytimg.com/vi/vz1RlUyrc3w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPuqXVkPj7ttWHlhfi9QZ8hFdqug" className="suggestion_thumbnail_img" />
                    </div>
                    <div className=" ">
                        <div className="suggestion_title">React JS Roadmap</div>
                        <div className="suggestion_about">Chai aur Code</div>
                        <div className="suggestion_about">30k views . 1 day ago</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Video