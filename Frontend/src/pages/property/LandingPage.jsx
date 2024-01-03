import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import NewsLetter from "./newsLetter/NewsLetter";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <NewsLetter />
    </div>
  );
};

export default LandingPage;
