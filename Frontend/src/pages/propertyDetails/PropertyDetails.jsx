import React, { useEffect, useState } from "react";
import "../propertyDetails/propertyDetails.scss";
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import api from "../../apis/api";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const [properties, setProperties] = useState({});
  const params = useParams();
  api();

  const fetchData = async () => {
    try {
      const response = await api.get(`/properties/${params.propertyId}`);
      setProperties(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="top-section">
        <div className="top-section-left">
          <h1>{properties.name}</h1>
          <p>{properties.address?.street}</p>
        </div>

        <div className="top-section-right">
          <div>
            Share <FaShareAlt />
          </div>
          <div>
            Favourite <FaRegHeart />
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="bottom-section-images">
          <div className="bottom-section-img-left">
            <img
              src={properties.image?.img1}
              alt="property-img"
              loading="lazy"
            />
          </div>

          <div className="bottom-section-img-right">
            <div>
              <img
                src={properties.image?.img2}
                alt="property-img"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={properties.image?.img3}
                alt="property-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="bottom-section-details">
          <div className="property-details">
            <div className="about-property">
              <h3>About Property</h3>
              <p>
                {properties.description}
              </p>
            </div>

            <div className="ameneties">
              <h3>Ameneties</h3>

              <div className="ameneties-box">
                {properties.amenities?.map((item) => (
                  <div key={item.id}>{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-details">
            <div className="price">
              <p>Price</p>
              <h3>₹ {properties.price}</h3>
            </div>

            <div className="contact">
              <button>Contact Owner</button>

              <p>Mobile Number</p>
              <h4>+91 9067230854</h4>

              <p>Email Address</p>
              <h4>rammohan234@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
