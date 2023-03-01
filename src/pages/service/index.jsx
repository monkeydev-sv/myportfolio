import React from "react";
import "./service.css";
import code from "../../assets/images/code.png";
import {
  DiAngularSimple,
  DiCss3,
  DiDatabase,
  DiDocker,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiPhp,
  DiWordpress,
} from "react-icons/di";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="section">
              <div className="columns">
                <div className="column">
                  <div className="text">
                    Jag vet att en goda relationer är en vikigt grunden för ett
                    hållbart samarbeten.Jag vet även att om vi ska uppnå goda
                    relationer krävs det ett angemang från båda parter. Jag
                    kommer alldrig att påstå att jag är bästa på det jag gör,
                    men jag kommer alltid att strävar efter att bli bättre.För mig
                    handlar det om att utveckla snygga och funktionella
                    webblösningar efter era behov.
                  </div>
                </div>

                <div className="column">
                  <div className="text1">
                    <h1 className="title">
                      Jag utvecklar efter ert behov.
                    </h1>
                    <div className="text">
                      När ni väljer mig så kan ni räkna med en god relation,en
                      engagerad utvecklar som alltid sträva efter den bästa lösningen för
                      er som företag!
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                
                  <div className="columns">
                    <div className="column">
                      <div className="text1">
                        <div className="text">
                          {" "}
                          <DiAngularSimple size={52} /> <DiJava size={52} />
                          <DiJavascript1 size={52} />
                          <DiHtml5 size={52} />
                        </div>
                        <div>
                          {" "}
                          <DiCss3 size={52} />
                          <DiWordpress size={52} />
                          <DiPhp size={52} />
                          <DiDatabase size={52} />
                        </div>

                        <div className="text">
                          {" "}
                        <DiMongodb size={52} />
                        <DiMysql size={52} />
                        <DiDocker size={52} />
                        <DiNodejsSmall size={52} />
                        </div>
                      </div>
                    </div>

                    <div className="column">
                    <img src={code} alt="code"/>

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

export default Service;
