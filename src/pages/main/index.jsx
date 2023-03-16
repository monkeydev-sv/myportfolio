import React, { useState } from "react";
import "./main.css";

import { Link } from "react-router-dom";
import ContactForm from "../../components/modal/contactModal/contactForm";
import Service from "../service";
function Main() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="cont">
        <div class="columns">
          <div className="column">
            <div className="text1">
              <h2 class="title">Syns du inte , Finns du inte!</h2>
              Holm Developer är ett företag som ser vikten att du som företag
              syns på nätet! Med många års erfarenhet av att utveckla sidor så
              ser Holm Developer nu att det blir vikigare att synas och höras på
              nätet.
              <br />
              <br /> Holm Developer gör det enkelt för dig som företag , vi
              sköter allt från förhandsarbete till slutproduktion.
              <br />
              <Link className="button" onClick={() => setOpenModal(true)}>
                Kontakta oss
              </Link>
              <ContactForm
                open={openModal}
                onClose={() => setOpenModal(false)}
              />
            </div>
          </div>
        </div>
      </div>

      <Service />
    </>
  );
}

export default Main;
