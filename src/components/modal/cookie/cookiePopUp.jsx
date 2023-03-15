import React from "react";
import "./popup.css";

import CookieConsent, { Cookies } from "react-cookie-consent";

const Popup = () => {
  return (
    <div className="popup">
      <CookieConsent
        disableStyles
        location="none"
        buttonText="Acceptera"
        buttonStyle={{ background: "white", color:"black",fontSize: "18px" }}
        cookieName="CookieMonster"
        overlayClasses="overlayclass"
        expires={150}
      >
        Vi använder cookies och spårningsteknik på våra webbplatser. Genom att
        klicka på "Acceptera" godkänner du att cookies samlar in data åt oss.
        
      </CookieConsent>
    </div>
  );
};

export default Popup;
