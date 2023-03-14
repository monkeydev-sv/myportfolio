import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Service from './pages/service/index';
import About from './pages/about/index';
import Case from './pages/case/index';
import Footer from './components/footer';
import Notification from './components/notification';
import { BiCookie } from "react-icons/bi";

import CookieConsent, { Cookies } from "react-cookie-consent";
import './App.css';


function App() {

   return (


<div className='container'>
<Router>
<Notification/>   
<Navbar />
   <Routes>
   <Route path="/" element={<Main />} />
   <Route path="/service" element={<Service />} />
   <Route path="/case" element={<Case />} />
   <Route path="/about" element={<About />} />
  

   </Routes>

<Footer/>
<CookieConsent
      location="bottom"
      buttonText="Okej!"
      cookieName="CookieMonster"
      style={{ background: "#56aee0", color: "#000000", fontSize: "18px" }}
     
      buttonStyle={{
        background: "#000000",
        color: "#56aee0",
        border:"white",
        fontSize: "15px",
      }}
      expires={150}
    >
     
        <div className="columns ">
          <div class="column">
            <div className="cookie">
              <BiCookie size={42} />
            </div>
          </div>
          <div class="column">
            <div className="textCookie">
            <strong>Men först, Cookies</strong><br/>
            Vi använder viktiga cookies för att få Holm Developer att fungera. Vi Vill att din upplevelse ska bli så bra som möjligt!</div>
          </div>
        </div>
  
    </CookieConsent>
   </Router>

   </div>

     
 
);
}

export default App;
