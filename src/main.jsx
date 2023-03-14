import App from "./App";
import "./index.css";
import "bulma/css/bulma.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
