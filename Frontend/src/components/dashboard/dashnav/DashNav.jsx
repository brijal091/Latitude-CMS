import React, { useState } from "react";
import "./dashnav.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const DashNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        {/* <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div> */}
        <Link to="/" className="remove-link-decor">
          <div className="logo">
            <h3>Admin</h3>
          </div>{" "}
        </Link>

        <div className="profile">
          <button className="book-now-btn" onClick={() => setShow(!show)}>
            <CiUser />
          </button>
          {show && (
            <div className="profile-name">
              <p>
                <CiUser /> Shailesh
              </p>
              <p>
                <CiLogout /> Logout
              </p>
            </div>
          )}
        </div>
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
