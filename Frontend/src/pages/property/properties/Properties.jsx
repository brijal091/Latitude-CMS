import React, { useEffect } from "react";
import "../properties/properties.scss";
import { useState } from "react";
import api from "../../../apis/api";
import { Link } from "react-router-dom";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  api();

  const fetchData = async () => {
    try {
      const res = await api.get("/properties");
      setProperties(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="properties">
      <div className="properties-heading">
        <h1>Search Properties</h1>
      </div>

      <div className="properties-grid">
        {properties.map((item) => (
          <div className="property-card" key={item.id}>
            <Link to={`/property/${item.id}`}>
              <div className="property-img">
                <img
                  src={item.image.img1}
                  alt="property-img"
                  loading="loading"
                />
              </div>
            </Link>

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
