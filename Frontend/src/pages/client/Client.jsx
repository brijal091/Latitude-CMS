import React, { useState } from "react";
import "./client.scss";

import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import ClientDashboard from "./clientDashboard/ClientDashboard";
import AddProperty from "../addProperty/AddProperty";
import Demo from "./clientDashboard/Demo";
import DashNav from "../../components/dashboard/dashnav/DashNav";

const Client = () => {
  const [showForm, setShowForm] = useState(false);
  console.log("showform", showForm);

  const menuName = ["Dashboard", "Add New Product", "Help & Support"];

  return (
    <div className="dashboard-container">
      {/* <DashNav /> */}
      {/* <ClientProfile /> */}
      <div className="dashboard-content">
        <div className="sidebar">
          <Sidebar
            showForm={showForm}
            setShowForm={setShowForm}
            menuName={menuName}
          />
        </div>
        {showForm ? (
          <div className="new-product-form">
            <AddProperty />
          </div>
        ) : (
          <div className="product-details">
            {/* <ClientDashboard /> */}
            <Demo />
          </div>
        )}
      </div>
    </div>
  );
};

export default Client;
