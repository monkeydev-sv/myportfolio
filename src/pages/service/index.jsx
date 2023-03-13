import React from "react";
import "./service.css";
import { Link } from "react-router-dom";
import planing from "../../assets/images/planing.png";
import planing1 from "../../assets/images/planing1.png";
import planing2 from "../../assets/images/planing2.png";
import ReactGA from 'react-ga';

ReactGA.pageview(window.location.pathname);



function Service() {
  return (
    <>
      <div className="cont">
        <div class="columns">
          <div class="column is-on-third">
            <div className="text1">
              <img src={planing}></img>
              <h2 class="title">Enkel</h2>
              Vi skapar en enkel sida med valfritt ramverk som du väljer!
              <li>Wordpress, React.js, Node.js</li>
              <li>Mobilanpassad</li>
              <li>SEO optimerad</li>
              <li>Upp till 5 sidor</li>
              <li>Gratis uppdateringar 1 månad efter lansering</li>
              <li>Fri support</li>
              <li>Passa bra för mindre företag</li>
              <strong>Tilläggstjänster</strong>
              <li>Domän</li>
              <li>Webbhotell</li>
              <strong>Tid för att bli klar 2 till 3 v</strong>
              <br />
              <div className="read">
                <Link className="button" to="/case">
                  Kundcase
                </Link>
                <div className="cont">
                  Pris 5000 kr exl moms
                  <div className="read"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="text1">
              <img src={planing1}></img>
              <h2 class="title">Medel</h2>
              Vi skapar en mer avancerad sida med valfritt ramverk som du
              väljer!
              <li>Wordpress, React.js, Node.js</li>
              <li>Mobilanpassad</li>
              <li>SEO optimerad</li>
              <li>Upp till 10 sidor</li>
              <li>Gratis uppdateringar 1 månad efter lansering</li>
              <li>Fri support</li>
              <li>Passa bra för medelföretag</li>
              <strong>Tilläggstjänster</strong>
              <li>Domän</li>
              <li>Webbhotell</li>
              <strong>Tid för att bli klar 3 till 4 v</strong>
              <br />
              <div className="read">
                <Link className="button" to="/case">
                  Kundcase
                </Link>
                <div className="cont">
                  Pris 10000 kr ex moms
                  <div className="read"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="text1">
              <img src={planing2}></img>
              <h2 class="title">Stor</h2>
              Vi skapar en fullskalig sida med valfritt ramverk som du väljer!
              <li>Wordpress, React.js, Node.js</li>
              <li>Mobilanpassad</li>
              <li>SEO optimerad</li>
              <li>Upp till 20 sidor </li>
              <li>Gratis uppdateringar 1 månad efter lansering</li>
              <li>Fri support</li>
              <li>Passa bra för E-handel eller blogg</li>
              <strong>Tilläggstjänster</strong>
              
              <li>Domän</li>
              <li>Webbhotell</li>
              <strong>Tid för att bli klar 5 till 6 v</strong>
              <br />  
              <div className="read">
                <Link className="button" to="/case">
                  Kundcase
                </Link>
                <div className="cont">
                  Pris 15000 kr ex moms
                  <div className="read"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
