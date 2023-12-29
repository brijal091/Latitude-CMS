import React from "react";
import "./sidebar.scss";
import { MdDashboardCustomize } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";

const Sidebar = ({ showform, setShowForm, menuName }) => {
  return (
    <div className="sidebar-container">
      <div className="menu-name">MAIN MENU</div>

      <div className="sidebar-menu">
        <div onClick={() => setShowForm(false)}>
          <MdDashboardCustomize /> {menuName[0]}
        </div>
        <div onClick={() => setShowForm(true)}>
          <IoIosPersonAdd /> {menuName[1]}
        </div>
        <div>
          <FaHandsHelping /> {menuName[2]}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
