import React, { useState } from 'react'
import logo from "./images/logo.svg"
const NavBar=()=>{
    return (
      <nav>
        <div className="navBar">
          <img src={logo} alt="logo-image" />
          <ul className="links">
            <li>
              <a href="#"> Feaures</a>
            </li>
            <li>
              <a href="#"> Team</a>
            </li>
            <li>
              <a href="#"> Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  
}

export default NavBar