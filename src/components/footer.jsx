import React from "react";
import "./footer.css";
import { FiInstagram, FiGithub,FiFacebook } from "react-icons/fi";
const Footer = () => {
  return (
    <div>
      <br/>
      ® Holm Developer- är ett skyddat märke
      <br />
      Holm Developer © 2023. Alla rättigheter förbehållna.
      <br />
      
      <a href="https://www.instagram.com/holmdev/">
        <FiInstagram size={32} className="social"/>
      </a>
      
      <a href="https://www.instagram.com/holmdev/">
        <FiGithub size={32} className="social"/>
        </a>
        <a href="https://www.instagram.com/holmdev/">
        <FiFacebook size={32} className="social"/>
     </a>
     </div>

  );
};
export default Footer;
