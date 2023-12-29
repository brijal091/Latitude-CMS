import React from "react";
import "../propertyDetails/propertyDetails.scss";

const PropertyDetails = () => {
  return (
    <div className="container">
      <div className="top-section">
        <div className="top-section-left">
          <h1>Beverly Springfield</h1>
          <p>2821 Lake Sevilla, Palm harbor, TX</p>
        </div>

        <div className="top-section-right">
          <div>Share </div>
          <div>Favourite</div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="bottom-section-images">
          <div className="bottom-section-img-left">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="property-img"
              loading="lazy"
            />
          </div>

          <div className="bottom-section-img-right">
            <div>
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="property-img"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>

          <div className="contact-details">
            <div className="price">
              <p>Price</p>
              <h3>₹ 2,0000</h3>
            </div>

            <div className="contact">
              <button>Contact Owner</button>

              <p>Mobile Number</p>
              <h4>+91 9067230854</h4>

              <p>Email Address</p>
              <h4>rammohan234@gmail.com</h4>
            </div>

            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
