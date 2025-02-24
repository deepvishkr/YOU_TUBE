import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar({sideNavbar}) {
  return ( 
    <div className={sideNavbar? "sideNavbar": "sideNavbarHide"}>
      <div className="sideNavbarTop">
        <Link to={'/'} className="sideNavbarOptionTitle" >Home</Link>
        <div className="sideNavbarOptionTitle" >Shorts</div>
        <div className="sideNavbarOptionTitle" >Subscription</div>
      </div>

     
        <div className="sideNavbarMiddle">
        <div className="sideNavbarOptionTitle">Your Channel</div> 
        <div className="sideNavbarOptionTitle">History</div>
        <div className="sideNavbarOptionTitle">Playlists</div>
        <div className="sideNavbarOptionTitle">Trending</div> 
        <div className="sideNavbarOptionTitle">Music</div>
        <div className="sideNavbarOptionTitle">Sports</div>
        <div className="sideNavbarOptionTitle">Comedy</div> 
        <div className="sideNavbarOptionTitle">Movies</div>
        <div className="sideNavbarOptionTitle">Stocks</div>
        <div className="sideNavbarOptionTitle">News</div> 
        <div className="sideNavbarOptionTitle">Parliament</div>
        <div className="sideNavbarOptionTitle">Cricket</div>
        <div className="sideNavbarOptionTitle">Election</div>
        
      </div>
      </div>

  )
}

export default Sidebar;