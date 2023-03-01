import React from "react";
import "./main.css";

import { Link } from "react-router-dom";
import connect from "../../assets/images/connect.png";
import seo from "../../assets/images/seo.png";

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
                    Holm Developer är ett litet företag som ser vikten i att
                    synas på nätet,vi lever idag i en värld där man bör synas och
                    höras, syns du inte , finns du inte. Vikten som företag att
                    synas digitalt är A och O, med mina tjänster så kommer
                    ni lyckas.
                    <div className="text1">
                      <div className="read">
                        <Link className="button" to="">
                          Mina tjänster
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="text1">
                    Jag hjälper dig med professionella medel att nå dina mål,
                    vill du synas då är jag rätt webbyrå för er, jag är en 
                    specialist på att bygga hemsidor med smarta lösningar,
                    det kommer kvitta om ni väljer en färdig plattform eller om ni vill
                    att jag ska bygga en från start, jag löser det åt er!
                    Så tveka inte boka in ett möte med mig.
                    <div className="text">
                      <div className="read">
                        <Link
                          className="button"
                          to=""
                        >
                          Boka ett möte
                        </Link>
                      </div>
                    </div>
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
                        <Link className="button" to="">
                          Begär en offert
                        </Link>
                      </div>
                    </div>

                    <div className="column">
                      <img src={seo} />
                      <div>Webblösningar</div>
                      <div className="read">
                        <Link className="button" to="/webb">
                          Webblösningar
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
