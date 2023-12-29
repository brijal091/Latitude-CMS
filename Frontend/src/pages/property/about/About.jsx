import React from "react";
import "../about/about.scss";
import aboutImg from "../../../assets/images/r-architecture-2gDwlIim3Uw-unsplash.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImg} alt="about-img" loading="lazy" />
      </div>
      <div className="about-description">
        <div className="about-content">
          <h1>We make it easy for tenants and landlords.</h1>
          <p>
            Whether its a listing your current home. searching a new home or
            property. we make it easy and effiecient to find a property.
          </p>

          <button>See More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
