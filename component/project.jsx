import React from "react";
import restaurant from "../assets/restaurant.png";
import ecommerce from "../assets/e-commerce.png";
import gym from "../assets/gym.png";
// import { Button } from "react-scroll";

const Project = () => {
 return (
  <div id="Main">
   <div className="project">
    <h1>project</h1>


    <section class="articles">
     <article>
      <div class="article-wrapper">
       <figure>
       
        <img src={restaurant} alt="" className="restaurant"></img>
       </figure>
       <div class="article-body">
        <h2>Restaurant Page</h2>
        <p>
       
         "Inviting restaurant page: vibrant images, easy menus, and simple navigation for a delightful online dining
         experience. Explore and enjoy!"<br />.Technology Used : Javascript , React.js
{/* 
         < div className =<"Button">
          <a href={"https://restaurant-4tk4chj4d-satyamwats-projects.vercel.app/"} target='new'>View Live App
         
         </Button> */}

         <button className="Btn">
          
          <a href="https://restaurant-4tk4chj4d-satyamwats-projects.vercel.app/" target="_blank">View</a>
         </button> 

        </p>

       </div>
      </div>
     </article>
     <article>

      <div class="article-wrapper">
       <figure>
      
        <img src={ecommerce} alt="" className="ecommerce"></img>
       </figure>
       <div class="article-body">
        <h2>E-Commerce</h2>
        <p>
         Restaurant Landing App
         "Inviting restaurant page: vibrant images, easy menus, and simple navigation for a delightful online dining
         experience. Explore and enjoy!"

         <br />
         
         .Technology Used : HTML , CSS , Javascript.

         <button className="Btn">

          <a href="https://e-commerce-app-seven-lime.vercel.app/" target="_blank">View</a>
         </button> 
        </p>

       </div>
      </div>
     </article>
     <article>

      <div class="article-wrapper">
       <figure>
        
        <img src={gym} alt="" className="gym"></img>
       </figure>
       <div class="article-body">
        <h2>Gym App</h2>
        <p>

         
         A gym is a fitness facility equipped with various exercise equipment and amenities, providing a space for
         individuals to engage in physical workouts, strength training, and cardiovascular exercises to improve health
         and well-being.
        <br/>
        . Technology Used: Javascript , React.js
        </p>


        
       </div>
      </div>
     </article>
    </section>
   </div>
  </div>
 )
}
export default Project;