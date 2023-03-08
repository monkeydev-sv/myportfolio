import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
  import "bulma/css/bulma.css";
import { BiCookie } from "react-icons/bi";

import CookieConsent, { Cookies } from "react-cookie-consent";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookieConsent
      location="bottom"
      buttonText="Okej!"
      cookieName="CookieMonster"
      style={{ background: "#56aee0", color: "#000000", fontSize: "18px" }}
      buttonStyle={{
        background: "#000000",
        color: "#56aee0",
        border:"white",
        fontSize: "15px",
      }}
      expires={150}
    >
      <div className="container">
        <div className="columns ">
          <div class="column">
            <div className="cookie">
              <BiCookie size={48} />
            </div>
          </div>
          <div class="column">
            <div className="textCookie">
              Denna sidan använder kakor för att du ska få den bästa
              upplevelsen!{" "}
            </div>
          </div>
        </div>
      </div>
    </CookieConsent>
    <App />
  </React.StrictMode>
);
