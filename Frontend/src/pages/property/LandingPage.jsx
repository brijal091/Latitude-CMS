import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import NewsLetter from "./newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <NewsLetter />
      <Footer/>
    </div>
  );
};

export default LandingPage;
