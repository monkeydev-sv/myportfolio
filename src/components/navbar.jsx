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
      
      <svg width="48" height="48  " viewBox="0 0 100 100">
      <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
      <path class="line line2" d="M 20,50 H 80" />
      <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
    </svg>
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
