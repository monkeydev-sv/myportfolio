import React from "react";
import "./about.css";
import me from "../../assets/images/me.png";
import { Link } from "react-router-dom";

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
            <h2 class="title">Christer Holm</h2>
            Software Developer
            <br />
            Året 1993 började jag programmera i Basic på en Comandore64. Gjorde
            klon av Nibbles och idag äter och andas jag kod. 2022 blev jag klar
            som junior java utvecklare .Innan jag började läsa denna
            yrkesutbildningen så arbetade jag främst med Wordpress och
            WooCommerce, där det mesta skrevs i PHP. Vill utvecklas och började
            då läsa till Java utvecklare och fann mitt kall kan man säga. Alla
            bitar föll på plats och jag kände mig hemma, det var ju det här jag
            skulle syssla med. Vissa saker blev med en gång väldigt självklara
            för mig och jag började redan tidigt i utbildningen utveckla mina
            egna appar och program.
             
            <br/>
            Kontakta: christer@holmdeveloper.se 
            <br/>0736550614

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
