import React from "react";
import "./service.css";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <div className="cont">
        <div class="columns">
          <div class="column is-on-third">
            <div className="text1">
              <h2 class="title">Enkel</h2>
              Vi skapar en enkel sida med valfritt ramverk som du väljer!
              <li>Wordpress React.js, Node.js</li>
              <li>Mobilanpassad</li>
              <li>SEO optimerad</li>
              <li>Upp till 5 sidor</li>
              <li>Gratis uppdateringar 1 månad efter lansering</li>
              <li>Fri support</li>
              <strong>Tid för att bli klar 2 till 3 v</strong>
              <br />
              <div className="read">
                <Link className="button" to="/case">
                  Kundcase
                </Link>
                <div className="cont">
                  Pris 5000 kr exl moms
                  <div className="read">
                    <Link to="/small">Beställ</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="text1">
              <h2 class="title">Medium</h2>
              Vi skapar en mer avancerad sida med valfritt ramverk som du
              väljer!
              <li>Wordpress React.js, Node.js</li>
              <li>Mobilanpassad</li>
              <li>SEO optimerad</li>
              <li>Upp till 10 sidor</li>
              <li>Gratis uppdateringar 1 månad efter lansering</li>
              <li>Fri support</li>
              <strong>Tid för att bli klar 3 till 4 v</strong>
              <br />
              <div className="read">
                <Link className="button" to="/case">
                  Kundcase
                </Link>
                <div className="cont">
                  Pris 10000 kr ex moms
                  <div className="read">
                    <Link to="/medium">Beställ</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="text1">
              <h2 class="title">Large</h2>
              Vi skapar en fullskalig sida med valfritt ramverk som du väljer!
              <li>Wordpress React.js, Node.js</li>
              <li>E-handel eller blogg, ditt val</li>
              <li>SEO optimerad</li>
              <li>Upp till 20 sidor </li>
              <li>Gratis uppdateringar 1 månad efter lansering</li>
              <li>Fri support</li>
              <strong>Tid för att bli klar 4 till 6 v</strong>
              <br />
              <div className="read">
                <Link className="button" to="/large">
                  Kundcase
                </Link>
                <div className="cont">
                  Pris 15000 kr ex moms
                  <div className="read">
                    <Link to="/service">Beställ</Link>
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

export default Service;
