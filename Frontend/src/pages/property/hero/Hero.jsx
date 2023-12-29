import React from "react";
import "../hero/hero.scss";
import heroImg from "../../../assets/images/for-sale.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-content-text">
          <div className="tags">
            <div>#rent</div>
            <div>#sale</div>
            <div>#explore</div>
          </div>

          <h1>Explore, Rent or list Your Property easily</h1>
          <p>
            Greate platform to explore, list or even rent your properties
            without any commisions.
          </p>

          <button>Explore Properties</button>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="hero-img" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
