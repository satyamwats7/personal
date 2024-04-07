import React from "react";
import '../App.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
// import contactImg from "../assets/contact.png"
// import '../navbar.css'

const Navbar = () => {
 return (
  <nav className="navbar">
   <img src={logo} alt="Logo" className='logo' />


     <div className='destopMenu'>
       <Link to="intro" spy={true} smooth={true} duration={500} className='MenuItems'>Intro</Link>
       <Link to="skills" spy={true} smooth={true} duration={500} className='MenuItems'>Skills</Link>
       <Link to="project" spy={true} smooth={true} duration={500} className='MenuItems'>Project</Link>
       <Link to="contact" spy={true} smooth={true} duration={500} className='MenuItems'>Contact</Link>
     </div>


     <button className="MenuImg">
       {/* <img src={contactImg} alt="" className="MenuImg" /> Resume</button> */}
       <a href=" https://drive.google.com/file/d/1ihtYb9B1NpnIxGtbKaIMc2Yc2x4PCXsi/view" target="_blank">Resume</a>
     </button> 

  </nav>

 
 );
}

export default Navbar;