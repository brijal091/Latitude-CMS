import React from "react";
import "./sidebar.scss";
import { MdDashboardCustomize } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";

const Sidebar = ({ showform, setShowForm }) => {
  return (
    <div className="sidebar-container">
      <div className="menu-name">MAIN MENU</div>
      <div className="sidebar-menu">
        <div onClick={() => setShowForm(false)}>
          <MdDashboardCustomize /> Dashboard
        </div>
        <div onClick={() => setShowForm(true)}>
          <IoIosPersonAdd /> Add New Client
        </div>
        <div>
          <FaHandsHelping /> Help & Support
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
