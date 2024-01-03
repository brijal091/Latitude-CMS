import React from "react";
import "../properties/properties.scss";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: {
        img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 120000,
      city: "Mumbai",
      address: {
        city: "Mumbai",
        street: "Mahatma Gandhi, Marg",
        state: "Maharashtra",
        pinCode: 34234,
      },
    },

    {
      id: 2,
      image: {
        img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 120000,
      city: "Mumbai",
      address: {
        city: "Mumbai",
        street: "Mahatma Gandhi, Marg",
        state: "Maharashtra",
        pinCode: 34234,
      },
    },

    {
      id: 3,
      image: {
        img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 120000,
      city: "Mumbai",
      address: {
        city: "Mumbai",
        street: "Mahatma Gandhi, Marg",
        state: "Maharashtra",
        pinCode: 34234,
      },
    },

    {
      id: 4,
      image: {
        img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 120000,
      city: "Mumbai",
      address: {
        city: "Mumbai",
        street: "Mahatma Gandhi, Marg",
        state: "Maharashtra",
        pinCode: 34234,
      },
    },
    {
      id: 4,
      image: {
        img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 120000,
      city: "Mumbai",
      address: {
        city: "Mumbai",
        street: "Mahatma Gandhi, Marg",
        state: "Maharashtra",
        pinCode: 34234,
      },
    },

    {
      id: 3,
      image: {
        img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 120000,
      city: "Mumbai",
      address: {
        city: "Mumbai",
        street: "Mahatma Gandhi, Marg",
        state: "Maharashtra",
        pinCode: 34234,
      },
    },

    {
      id: 7,
      image: {
        img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 120000,
      city: "Mumbai",
      address: {
        city: "Mumbai",
        street: "Mahatma Gandhi, Marg",
        state: "Maharashtra",
        pinCode: 34234,
      },
    },

    {
      id: 8,
      image: {
        img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img2: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img3: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 120000,
      city: "Mumbai",
      address: {
        city: "Mumbai",
        street: "Mahatma Gandhi, Marg",
        state: "Maharashtra",
        pinCode: 34234,
      },
    },
  ];

  return (
    <div className="properties">
      <div className="properties-heading">
        <h1>Search Properties</h1>
      </div>

      <div className="properties-grid">
        {properties.map((item) => (
          <div className="property-card" key={item.id}>
            <div className="property-img">
              <img src={item.image.img1} alt="property-img" loading="loading" />
            </div>

            <div className="property-detail">
              <h3>₹ {item.price}</h3>
              <h2>{item.city}</h2>
              <p>{item.address.street}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
