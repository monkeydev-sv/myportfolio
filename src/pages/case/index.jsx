import React from "react";
  import "./case.css";
import annelieng from "../../assets/images/bloggannlie.png";
import bondeform from "../../assets/images/bondeform.png";
import { Link } from "react-router-dom";

class Case extends React.Component {
  state = {
    isModal: false,
    isModalB: false,
  };

  handleClick = () => {
    this.setState({ isModal: !this.state.isModal });
    const active = this.state.isModal ? "is-active" : "";
  };
  bondeklick = () => {
    this.setState({ isModalB: !this.state.isModalB });
    const active1 = this.state.isModalB ? "is-active" : "";
  };
  render() {
    const active = this.state.isModal ? "is-active" : "";
    const active1 = this.state.isModalB ? "is-active" : "";
    return (
      <div className="cont">
        <div class="columns">
          <div class="column is-half">
            <div className={`modal ${active}`}>
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Annelie Eng Konsult AB</p>
                  <button
                    onClick={this.handleClick}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section class="modal-card-body">
                  <h2 class="title">Annelie Eng Konsult AB</h2>
                  Aktiebolaget ska bedriva ledarskap ledarskapsutveckling samt
                  produktförsäljning och konsultation inom hudvård och kosmetik.
                  <br />
                  <br />
                  Uppdraget här var att göra den mobilbar, samt göra den SEO
                  anpassad. Här ingår det även fortlöpande uppdateringar.
                  <div className="cont">
                    <div className="read">
                      <Link className="button" to="https://blogg.annelieeng.se">
                        blogg.annelieeng.se
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <img src={annelieng} />
            <div className="cont">
              <div className="read">
                <Link className="button" onClick={this.handleClick}>
                  Information
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className={`modal ${active1}`}>
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Bondeform</p>
                  <button
                    onClick={this.bondeklick}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section class="modal-card-body">
                  <h2 class="title">Bondeform</h2>
                  Bondeform- mellan hjärta och hand, Ett lokalt företag som
                  tillverkar unika former i lera till försäljning. Hennes
                  produkter finnas för tillfället i två konsthantverksbutiker i
                  Skåne.
                  <br />
                  <br />
                  Uppdraget här var att göra den mobilbar,bygga en webbutik samt
                  göra den SEO anpassad. Nu är bara fas 1 klar, själva
                  webbbutiken är ej klar just nu.
                  <div className="cont">
                    <div className="read">
                      <Link className="button" to="https://bondeform.se">
                        bondeform.se
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <img src={bondeform} />
            <div className="cont">
              <div className="read">
                <Link className="button" onClick={this.bondeklick}>
                  Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Case;
