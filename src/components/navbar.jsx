import React from "react";
import logostor from "../assets/logostor.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isActive, setisActive] = React.useState(false);
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <a href="/">
        <img src={logostor} height="48px" width="250px" />
      </a>

      <a
        onClick={() => {
          setisActive(!isActive);
        }}
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <div
          class="menu"
          onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
          aria-label="Main Menu"
        >
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48 "
              fill="currentColor"
              class="bi bi-justify"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />{" "}
            </svg>
          )}
        </div>
      </a>

      <div
        id="navbarBar"
        class="navbar-menu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div class="navbar-end  ">
          <Link class="navbar-item" to="/service">
            Tjänster
          </Link>

          <a class="navbar-item">Kundcase</a>

          <a class="navbar-item">Om Oss</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
