import React, { useState } from "react";
import "./client.scss";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import AddProperty from "../addProperty/AddProperty";
import DashNav from "../../components/dashboard/dashnav/DashNav";
import ClientDashboard from "../../components/clientDashboard/ClientDashboard";

const Client = () => {
  const [showForm, setShowForm] = useState(false);
  console.log("showform", showForm);

  const menuName = ["Dashboard", "Add New Product", "Help & Support"];

  return (
    <div className="dashboard-container">
      <DashNav />
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
            <ClientDashboard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Client;
