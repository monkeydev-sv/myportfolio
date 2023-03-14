import React from "react";
import "./popup.css";
// Basic
// import CookieConsent from "react-cookie-consent";

// Option
import CookieConsent, { Cookies } from "react-cookie-consent";

const Popup = () => {
  return (
    <div className="popup">
      <CookieConsent
        disableStyles
        location="none"
        buttonText="Acceptera"
        cookieName="CookieMonster"
        overlayClasses="overlayclass"
        expires={150}
      >
        Vi använder cookies och spårningsteknik på våra webbplatser. Genom att
        klicka på "Acceptera" godkänner du att cookies samlar in data åt oss. Du
        kan när som helst återkalla ditt samtycke. Vidare information samt
        möjlighet till invändning finns i vår Sekretessinformation
        
      </CookieConsent>
    </div>
  );
};

export default Popup;
