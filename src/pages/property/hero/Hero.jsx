import React from "react";
import "../hero/hero.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="tags">
          <div>#rent</div>
          <div>#sell</div>
          <div>#explore</div>
        </div>
        
        <h1>Explore, Rent or list Your Property easialy</h1>
        <p>
          Greate platform to explore, list or even rent your properties without any
          commisions.
        </p>

        <button>Explore Properties</button>
      </div>

      <div className="hero-img">
        <img src="" alt="hero-img" loading="lazy" />
      </div>
    </div>
  );
};

export default Hero;
