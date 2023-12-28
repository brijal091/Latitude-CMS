import React, { useState } from "react";
import "../navbar/navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <Link to="/" className="remove-link-decor">
          <div className="logo">
            <h1>propify.</h1>
          </div>{" "}
        </Link>

        <div className="nav-links">
          <Link to="/" className="remove-link-decor">
            <p>Home</p>{" "}
          </Link>
          <Link to="/properties" className="remove-link-decor">
            {" "}
            <p>Properties</p>{" "}
          </Link>
          <Link to="/offers" className="remove-link-decor">
            {" "}
            <p>Offers</p>{" "}
          </Link>
        </div>

        <div>
          <Link to="/book-now" className="remove-link-decor">
            <button className="book-now-btn">Login</button>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <div className="nav-links">
            <Link to="/" className="remove-link-decor">
              {" "}
              <p>Home</p>{" "}
            </Link>
            <Link to="/" className="remove-link-decor">
              {" "}
              <p>Rooms</p>
            </Link>
            <Link to="/" className="remove-link-decor">
              <p>Facilities</p>
            </Link>
            <Link to="/login" className="remove-link-decor">
              <p>Login</p>
            </Link>

            <Link to="/signup" className="remove-link-decor">
              <p>Signup</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
