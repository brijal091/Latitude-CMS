import React, { useState } from "react";
import "./client.scss";

import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import ClientDashboard from "./clientDashboard/ClientDashboard";


const Client = () => {

    const [showForm, setShowForm] = useState(false);

    console.log("showform", showForm);
    
    
    
return (<div className="dashboard-container">
      {/* <DashNav /> */}
      <div className="dashboard-content">
        <div className="sidebar">
          <Sidebar showForm={showForm} setShowForm={setShowForm} />
        </div>
        {showForm ? (
          <div className="new-user-form">
            {/* <NewClient /> */}
          </div>
        ) : (
          <div className="user-details">
             <ClientDashboard />
          </div>
        )}
      </div>
    </div>
)}

export default Client;
