import { useState,useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import './App.css'
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import {Route,Routes} from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import SignUp from './pages/SignUp/Signup';
import axios from 'axios';
function App() {
  const [sideNavbar,setSideNavbar] = useState(true);
  
// const [data,setData] = useState([]);
//   useEffect(()=>{
//     axios.get('http://localhost:3000/allvideo')
//     .then(res => {
//        console.log(res.data.videos);
//       setData(res.data.videos);
//     }).catch(err =>{
//       console.log(err);
//     })
//   },[]); 

  const setSideNavbarFunc=(value)=> {
    setSideNavbar(value)
  }

  return (
    <> 
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar}  />
      <Routes>
      <Route path='/' element={<Home sideNavbar={sideNavbar}/>} />
      <Route path='/watch/:id' element={<Video />} />
      <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar}/>} />
      <Route path='/:id/upload' element={<VideoUpload/>} />
      <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </>
  )
}

export default App
