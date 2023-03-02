import React from "react";
import "./main.css";
import code from "../../assets/images/code.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="cont">
        <div class="columns">
          <div class="column is-half">
            <div className="text1">
              <h2 class="title">Syns du inte , Finns du inte!</h2>
              Holm Developer är ett företag som ser vikten att du som företag
              syns på nätet! Med många års erfarenhet av att utveckla sidor så
              ser Holm Developer nu att det blir vikigare att synas och höras på
              nätet.
              <br />
              <br /> Holm Developer gör det enkelt för dig som företag , vi
              sköter allt från förhandsarbete till slutproduktion.
            </div>
            <div className="cont">
              <div className="text1">
                <div className="read">
                  <Link className="button" to="/service">
                    Våra tjänster
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={code} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
