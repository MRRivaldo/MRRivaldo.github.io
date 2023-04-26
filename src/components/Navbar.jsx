import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import "./Navbar.css";

function Navigationbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-logo">
            <a href="/" className="navbar-item">
              <img src="/images/Rivaldo-logo.png" alt="Rivaldo Logo" />
            </a>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i class={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#" to="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" to="/" className="nav-links">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects" to="/" className="nav-links">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
}

export default Navigationbar;
