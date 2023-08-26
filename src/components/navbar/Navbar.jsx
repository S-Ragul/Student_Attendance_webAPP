import React from 'react';
import './navbar.css';
import {RiMenu3Line, RicloseLine } from 'react-icons/ri';


const Navbar = () => {
  return (


      <div className="Student__list-links">
        <div className="Student__list-links_logo">
         <div className="student__links_container">
           <p><a href='#home'>Home</a> </p>
           <p><a href='#alumini'>Alumini</a> </p>
           <p><a href='#examinations'>Examinations</a> </p>
           <p><a href='#admission'>Admission</a> </p>
         </div>
       </div>
       <div className="student__links_sign">
        <p>Sign In</p>
        <button type='button'> Sign Up</button>
       </div>
      </div>
    

    
  )
}

export default Navbar