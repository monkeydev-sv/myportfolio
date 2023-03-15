import React from "react";
import logostor from "../assets/logostor.png";
import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import "./navbar.css";
const Navbar = () => {
  const [isActive, setisActive] = React.useState(false);
  
  return (
    
    <nav className="navbar" role="navigation" aria-label="main navigation">
     

      <a
        onClick={() => {
          setisActive(!isActive);
        }}
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
        
      >
        <div
          class="menu"
          onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
          aria-label="Main Menu"
        >
          {isActive ? (
           <AiOutlineClose className="close"/>
          ) : (
           <RiMenu5Line className="bar"/>
          )}
        </div>
      </a>
      <a href="/">
        <img src={logostor} />
      </a>
     
      <div
        id="navbarBar"
        class="navbar-menu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
       >
       
          <div class="navbar-start">
            <div className="navbar-item">
              <Link class="nav" to="/service">
                Tjänster
              </Link>
            </div>

            <div className="navbar-item">
              <Link class="nav" to="/case">
                Kundcase
              </Link>
            </div>

            <div className="navbar-item">
              <Link class="nav" to="/about">
                Om oss
              </Link>
            </div>
          </div>
        

          <div class="navbar-end">
            <div className="navbar-item">
            
            </div>
          </div>
        </div>
     
      
    </nav>
   
  );
};

export default Navbar;
