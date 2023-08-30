import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="home-link" title="Home">
        <FontAwesomeIcon icon={faHome} className="home-icon" />
      </Link>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
      </div>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/capturecreditcard">Capture Credit Card</Link>
        </li>
        <li>
          <Link to="/bannedcountries">Banned Countries</Link>
        </li>
        <li>
          <Link to="/creditcards">Credit Cards</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
