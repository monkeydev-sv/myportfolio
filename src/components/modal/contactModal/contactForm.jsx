import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CgCloseO } from "react-icons/cg";
import { RiMailSendLine } from "react-icons/ri";

import "./contact.css";
const Result = () => {
  
  return <div className="text">
    <RiMailSendLine  size={42}/><br/>
    Ditt meddelande har skickats!</div>;
};

const contactForm = ({ open, onClose }) => {
  if (!open) return null;
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendMyEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "holmDev",
        "template_2h270qu",
        form.current,
        "HpnnmZkstrLfkmNV6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
 
      
    <div className="modalContainer">
      <form ref={form} onSubmit={sendMyEmail} className="box">
        
          <label className="label">Namn</label>

          <input
            className="input"
            type="text"
            name="name"
            placeholder="Ditt namn"
            size={200}
          />
       

        <div>
          <label className="label">E-mail:</label>
          <input
             className="input"
            type="email"
            name="email"
            placeholder="Din e-mail"
            size={200}
          />
        </div>
        <div>
          <label className="label">Meddelande</label>
          <textarea
             className="textarea"
            name="message"
            size={200}
           
            placeholder="Beskriv ditt ärende..."
          />
        </div>
        <div className="button_text">
          <input className="button" type="submit" value="Skicka" />
          <div>{result ? <Result /> : null}</div>
        </div>

        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            <CgCloseO />
          </p>
        </div>
      </form>
    </div>
    
   
  );
};

export default contactForm;
