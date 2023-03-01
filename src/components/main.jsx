import React from "react";
import "./main.css";
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";
import connect from "../assets/images/connect.png";
import seo from "../assets/images/seo.png";
import code from "../assets/images/code.png";

function Main() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="section">
              <div className="columns">
                <div className="column">
                  <div className="text">
                    Vi är ett litet företag som ser vikten i att synas på
                    nätet,vi lever idag en värld där man bör synas och höras,
                    syns du inte finns du inte. Vikten som företag att synas
                    digitalt är A och O idag, med våra tjänster så kommer ni
                    lyckas. Så kolla vad vi kan erbjuda er!
                  </div>
                  <div className="read">
                    <Link className="button" to="">
                      Våra tjänster
                    </Link>
                  </div>
                </div>

                <div className="column">
                  <div className="text1">
                    Vi hjälper dig med professionella medel att nå dina mål,
                    vill du synas då är vi rätt webbyrå för er, vi är
                    specialiserade på att bygga hemsidor med smarta lösningar,
                    det kvittar om du väljer en färdig plattform eller ni vill
                    att vi ska bygga en från start, vi löser det!
                  </div>
                  <div className="read">
                    <Link
                      className="button"
                      to="https://calendly.com/holmdeveloper/30min"
                    >
                      Boka ett möte
                    </Link>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="columns">
                  <div className="columns">
                    <div className="column">
                      <img src={connect} />
                      <div>Kontakat oss gärna för en offert</div>
                      <div className="read">
                        <Link
                          className="button"
                          to=""
                        >
                          Begär en offert
                        </Link>
                      </div>
                    </div>

                    <div className="column">
                      <img src={seo} />
                      <div>Vi hjälper dig att SEO anpassa din sida</div>
                      <div className="read">
                        <Link className="button" to="">
                          Vad är SEO
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
