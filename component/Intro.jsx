import React from "react";
import bg from "../assets/DSC_0040.jpg";
import { Link } from 'react-scroll';


const Intro = () => {
 return (
 
  
  <section id="intro">
   <div className="introcontent">
    <span className="hello">Hello</span>
    <span className="introText">I'm <span className="introName">satyam kumar</span> <br />Website Developer</span>
    <p className="intropara"> "I am a motivated and versatile individual,<br/> always eager to take on new challenges. <br/> With a passion for learning .<br/>I am dedicated to delivering high-quality results.<br/> With a positive attitude and a growth mindset</p>
  

    

    <div class="button-container">
     <a href="https://github.com/satyamwats7" class="btn">Github</a>
     <a href="tel:+917667440730" class="call">Call</a>
    </div>



   </div>
   <img src={bg} alt="profile" className="bg"></img>

  </section>

 )
}

export default Intro;