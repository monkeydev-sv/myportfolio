import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import email from ".././assets/images/email.png";
import "./contact.css";
const Result = () => {
  return <div className="text1">Ditt meddelande har skickats!</div>;
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
       <div className="text1">
        <form ref={form} onSubmit={sendMyEmail}>
          <div>
            <label className="label">Namn</label>
            <input className="input" type="text" name="user_name" />
          </div>

          <div>
            {" "}
            <label className="label">E-mail:</label>
            <input className="input" type="email" name="user_email" />
          </div>
          <div>
            {" "}
            <label className="label">Meddelande</label>
            <textarea className="textarea" name="message" />
          </div>
          <div className="button_text">
            <input className="button" type="submit" value="Skicka" />
            <div>{result? <Result/> : null}</div>
          </div>
          
          <div className="modalRight">
            <p className="closeBtn" onClick={onClose}>
              X
            </p>
          </div>
        </form>
      </div>
      </div>
   
  );
};

export default contactForm;
