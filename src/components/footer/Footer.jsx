import React from "react";
import "../footer/footer.scss";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-top-section">
          <div className="footer-stack">
            <p className="footer-title">Product</p>
            <div className="footer-link">
              <p>Overview</p>
              <p>Features</p>
              <p>Tutorials</p>
              <p>Pricing</p>
              <p>Releases</p>
            </div>
          </div>

          <div className="footer-stack">
            <p className="footer-title">Company</p>
            <div className="footer-link">
              <p>About</p>
              <p>Press</p>
              <p>Careers</p>
              <p>Contact</p>
              <p>Partners</p>
            </div>
          </div>

          <div className="footer-stack">
            <p className="footer-title">Support</p>
            <div className="footer-link">
              <p>Help Center</p>
              <p>Terms of Service</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
              <p>Status</p>
            </div>
          </div>

          <div className="footer-stack">
            <p className="footer-title">Follow Us</p>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="footer-bottom-section">
          <p>© 2023, Propify.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
