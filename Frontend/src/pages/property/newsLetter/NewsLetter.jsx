import React from "react";
import "../newsLetter/newsLetter.scss";

const NewsLetter = () => {
  return (
    <div className="email-box">
      <div className="email-heading">
        <h2>Subscribed to our Newsletter</h2>
        <p>Discover ways to increase your property value and get listed.</p>
      </div>
      <div className="email-box-input">
        <input placeholder="Enter your email address" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default NewsLetter;
