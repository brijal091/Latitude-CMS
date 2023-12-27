import React, { useState } from "react";
import "./dashboard.scss";
import DashNav from "../../components/dashboard/dashnav/DashNav";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import UserDetails from "../../components/dashboard/users/UserDetails";
import NewClient from "../../components/dashboard/newClient/NewClient";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);

  console.log("showform", showForm);

  return (
    <div className="dashboard-container">
      <DashNav />
      <div className="dashboard-content">
        <div className="sidebar">
          <Sidebar showForm={showForm} setShowForm={setShowForm} />
        </div>
        {showForm ? (
          <div className="new-user-form">
            <NewClient />
          </div>
        ) : (
          <div className="user-details">
            <UserDetails />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
