import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import HomePage from '../../components/HomePage/HomePage'
import './home.css';


function Home({sideNavbar}) {
  
  return (
    <div className="home">
        <Sidebar sideNavbar={sideNavbar}/>
        <HomePage sideNavbar={sideNavbar}/>
        </div>
  )
}

export default Home