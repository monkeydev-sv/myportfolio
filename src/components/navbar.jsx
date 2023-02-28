import React from 'react'
import logostor from "../assets/logostor.png";


const Navbar = () => {
  const [isActive, setisActive] = React.useState(false);
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
         <img src={logostor} height="48px"width="239px" />
     
       

        <a
        onClick={() => {
          setisActive(!isActive);
        }}
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
       <div class="menu" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
     {isActive ?(
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
     ):(
      
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/> </svg>
     )}
    </div>



        </a>
     

      <div id="navbarBasicExample" class="navbar-menu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div class="navbar-start">
          <a class="navbar-item">Home</a>

          <a class="navbar-item">Stack</a>

          <a class="navbar-item">Archives</a>

          <a class="navbar-item">Education</a>
          <a class="navbar-item">Download</a>
          <a class="navbar-item">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
