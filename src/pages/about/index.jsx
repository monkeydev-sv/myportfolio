import React from "react";
import "./about.css";
import me from "../../assets/images/me.png";

function About() {
  return (
    <>
      <div className="cont">
        <div class="columns">
          <div class="column is-half">
            <div className="text1">
              <img src={me} />
            </div>
          </div>

          <div className="column">
            <div className="text1">
              <h2 class="title">Om Holm Developer</h2>
              
              Holm Developer är ett företag med servicetag inom webbutvecklare.
              Företaget har många år inom utveckling och service, där dina idéer
              och intresse blir till verklighet. <br /> <br />Holm Developer har en EC Utbildning
              med inriktning javautveckling, som kan arbetar både nationellt och
              internationellt.
              <br /> <br />
              Kontakta:info@holmdeveloper.se
              <br /> 
              Tele: 0736550614
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
