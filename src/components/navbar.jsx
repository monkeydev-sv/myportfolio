import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import icons from '../assets/icons.png'
import logostor from '../assets/logostor.png'
import './navbar.css';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const hide = () => setShowNavbar(false);
  const show = () => setShowNavbar(true);
 

  return(
    <nav className="navbar">
    <div className="container">
      <div className="logo">
      
  
      <img  alt ="logo"src={logostor} width="{spx" height="48px" />
      

          </div>
      <div className="menu-icon" onClick={handleShowNavbar } onBlur={hide} onFocus={show}>  
      {showNavbar ? (
    <MdClose style={{ color: "red", width: "42px", height: "42px" }} />
  ) : (
    <FiMenu style={{ color: "black", width: "42px", height: "42px" }} />
  )}
      </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/stack" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Stack</NavLink>
          </li>
          <li>
            <NavLink to="/archives" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Archives</NavLink>
          </li>
          <li>
            <NavLink to="/education" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Education</NavLink>
          </li>
          <li>
            <NavLink to="/download" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Download</NavLink>
          </li>
    <li>
            <NavLink to="/About" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
}
  
export default Navbar;