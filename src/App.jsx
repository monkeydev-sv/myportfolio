import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Service from "./pages/service/index";
import About from "./pages/about/index";
import Case from "./pages/case/index";
import Footer from "./components/footer";
import Notification from "./components/notification";
import Popup from "./components/modal/cookie/cookiePopUp";
import "./App.css";

function App() {

  return (

    <>
      <div className="container">
        <Router>
          <Notification />
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/service" element={<Service />} />
            <Route path="/case" element={<Case />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />

        </Router>

      </div>
    <Popup /></>
  );
}

export default App;
