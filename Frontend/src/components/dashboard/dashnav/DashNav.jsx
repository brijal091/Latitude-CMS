import React, { useState } from "react";
import "./dashnav.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const DashNav = () => {
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
            <h3>Super Admin</h3>
          </div>{" "}
        </Link>

        <button className="book-now-btn">
          <CiUser />
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {/* <div className="nav-links">
            <Link to="/" className="remove-link-decor">
              {" "}
              <p>Home</p>{" "}
            </Link>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default DashNav;
