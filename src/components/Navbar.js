import React from "react";
import {NavLink} from 'react-router-dom'
const Navbar = () => { 
  return(
    <nav className="nav-wrapper red darken-5">
      <div className="container">
        <h5 className="brand-logo"> React Tutorial</h5>
        <ul className="right"> 
          <li> <NavLink to="/" >Home</NavLink></li>
          <li> <NavLink to="/about" >About</NavLink></li>
          <li> <NavLink to="/contact" >Contact</NavLink></li>
          <li> <NavLink to="/posts" >Posts</NavLink></li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar; 