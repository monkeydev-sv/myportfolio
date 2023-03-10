import React, { useState} from "react";
import "./main.css";
import code from "../../assets/images/code.png";
import idee from "../../assets/images/idee.png";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contactForm";

function Main() {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <>

    
      <div className="cont">
        <div class="columns">
          <div class="column is-half">
          
            <img src={code} />
            
            </div>
         

          <div className="column">
          <div className="text1">
          <h2 class="title">Syns du inte , Finns du inte!</h2>
              Holm Developer är ett företag som ser vikten att du som företag
              syns på nätet! Med många års erfarenhet av att utveckla sidor så
              ser Holm Developer nu att det blir vikigare att synas och höras på
              nätet.
              <br />
              <br /> Holm Developer gör det enkelt för dig som företag , vi
              sköter allt från förhandsarbete till slutproduktion.
              <div className="navbar">
                <div className="navbar-start">
                  <div className="navbar-item">
                  <div className="button is-fullwidth">
                  <Link className="kontakt" onClick={() => setOpenModal(true)}>
                    Kontakta oss
                  </Link>
                  </div>
                </div>
                </div>
                
                <div className="navbar-end">
                <div className="navbar-item">
                 <div className="button is-fullwidth">
                  <Link className="service" to="/service">
                    Våra tjänster
                  </Link>
                  </div>
                  </div>
                  <ContactForm open={openModal} onClose={() => setOpenModal(false)} /> 
          </div>
          
                </div>
                <div className="columns">
                <div className="column">
                <img src={idee} alt="idee"/>
                </div>
                <div className="column">
                <div>Har du en idé som du vill förverkliga?<br/>
                <Link onClick={() => setOpenModal(true)}>
                    Kontakta oss</Link>, så åter kommer vi till er!
                  
                </div>
                </div>
                </div>
              </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Main;
