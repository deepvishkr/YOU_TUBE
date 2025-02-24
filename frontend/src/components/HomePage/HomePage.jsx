import React,{useEffect,useState} from 'react';
import './homepage.css';
import { Link} from 'react-router-dom';
import axios from 'axios';
function HomePage({sideNavbar}) {
    const [data,setData] = useState([]);

    useEffect(()=>{
        console.log('HomePage component is mounting');
        axios.get('http://localhost:3000/allvideo')
        .then(res => {
          console.log(res.data.videos);
          setData(res.data.videos);
        }).catch(err =>{
          console.log(err);
        })
      },[]);

    const options = ["All", "Cricket", "Music", "Movie", "News", "Games", "Trailers", "Comedy"]
  return (
    <div className={sideNavbar? "homePage": "fullHomePage"}>
        <div className="filterOptions">
            {
                options.map((item,index) => {
                    return (
                        <div key={index} className="filterButtonOption">
                            {item}
                            </div>
                    )
                })
            }
            
        </div>

        <div className={
            sideNavbar?"home_mainPage": "home_mainPageWithoutSidebar"}>

            {
                data?.map((item,ind) =>{
                    return (
                        <Link to={`/watch/${item._id}`} className="youtube_Video">

                        <div className="youtube_Box">
                            <img src={item.thumbnail} alt="Thumbnail" className="youtube_Img" />
                            <div className="youtube_Timing">28:05</div>
                        </div>
        
                        <div className="youtube_TitleBox">
                            <div className="youtube_titleImg">
                                <img src={item?.user?.profilePic} alt="Profile" className="youtube_thumbnail" />
                            </div>
        
                            <div className="youtube_Title">
                            <div className="video_title">{item?.title}</div>
                            <div className="channel_name">{item?.user?.channelName}</div>
                            <div className="video_likes">{item?.like}</div>
                                 
                            </div>
                        </div>
                    </Link>  
                    )
                })
            }

        </div>
    </div>
  )
}

export default HomePage;