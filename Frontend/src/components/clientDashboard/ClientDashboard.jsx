import React from "react";
import "./clientDashboard.scss";

import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";

const ClientDashboard = () => {
  const arr = [
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 20000,
      title: "Palm Harbour",
      address: "Green valley, Highland lake",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 20000,
      title: "Palm Harbour",
      address: "Green valley, Highland lake",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 20000,
      title: "Palm Harbour",
      address: "Green valley, Highland lake",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 20000,
      title: "Palm Harbour",
      address: "Green valley, Highland lake",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 30000,
      title: "Palm Harbour",
      address: "Green valley, Highland lake",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 40000,
      title: "Palm Harbour",
      address: "Green valley, Highland lake",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 50000,
      title: "Palm Harbour",
      address: "Green valley, Highland lake",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 20000,
      title: "Palm Harbour",
      address: "Green valley, Highland lake",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="demo">
      <div className="properties-heading">
        <h1>My Properties</h1>
      </div>

      <div className="properties-grid">
        {arr.map((item) => (
          <div className="property-card">
            <div className="property-img">
              <img src={item.image} alt="property-img" loading="loading" />
            </div>
            <div className="property-detail">
              <h3>₹ {item.price}/month</h3>
              <h2>{item.title}</h2>
              <p>{item.address}</p>
            </div>
            <div className="btns">
              <button onClick={() => navigate("/client/edit")}>Edit</button>
              <button>
                <DeleteModal />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;
