import React from "react";
import "./case.css";
import annelieng from "../../assets/images/bloggannlie.png";
import bondeform from "../../assets/images/bondeform.png";
import { Link } from "react-router-dom";

function Case() {
  return (
    <>
      <div className="cont">
        <div class="columns">
          <div class="column is-half">
            <div className="text1">
              <h2 class="title">Annelie Eng Konsult AB</h2>
              Aktiebolaget ska bedriva ledarskap ledarskapsutveckling samt
              produktförsäljning och konsultation inom hudvård och kosmetik.
              
              <br />
              <br />
              Uppdraget här var att göra den mobilbar, samt göra den SEO
              anpassad. Här ingår det även fortlöpande uppdateringar.
              <br/>
            </div>
            <div className="cont">
              <div className="text1">
                <div className="read">
                  <Link className="button" to="https://blogg.annelieeng.se">
                    https://blogg.annelieeng.se
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={annelieng} />
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <div className="text1">
              <h2 class="title">Bondeform</h2>
              Bondeform- mellan hjärta och hand, Ett lokalt företag som
              tillverkar unika former i lera till försäljning. Hennes produkter
              finnas för tillfället i två konsthantverksbutiker i Skåne.
              <br />
              <br />
              Uppdraget här var att göra den mobilbar,bygga en webbutik samt göra den SEO
              anpassad. Nu är bara fas 1 klar, själva webbbutiken är ej klar just nu.  
            </div>
            <div className="cont">
              <div className="text1">
                <div className="read">
                  <Link className="button" to="https://bondeform.se">
                    https://bondeform.se
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <img src={bondeform} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Case;
