import React from "react";
import "../home/home.scss";
import heroImg from "../../../assets/images/home-img-hero.jpg";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div className="hero-section-container">
        <div className="hero-section-content">
          <div>
            <div className="hero-section-content-top">
              <h1>Find a dream homes, properties that suits you.</h1>
              <p>
                Explore, Rent or list Your Property easily, Greate platform to
                explore, list or even rent your properties without any
                commisions.
              </p>

              <button>Get Started</button>
            </div>

            <div className="hero-section-content-bottom">
              <div>
                <h3>200k</h3>
                <p>Google Review</p>
              </div>
              <div>
                <h3>10k</h3>
                <p>Active Users</p>
              </div>
              <div>
                <h3>13k</h3>
                <p>Property Listers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-section-img">
          <img src={heroImg} alt="heroImg" loading="lazy" />
        </div>
      </div>

      {/* popular  */}

      <div className="popular-residences">
        <h4>Best Choice</h4>
        <h1>Popular Residences</h1>

        <div className="popular-residences-div">
          <div className="popular-residences-card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="property-img"
                loading="lazy"
              />
              <div className="for-sale">For Sale</div>
            </div>
            <div className="card-details">
              <h3>
                <span>₹ 25,0000</span> ₹ 20,0000
              </h3>
              <h4>Spring Field</h4>

              <p>
                <FaLocationDot /> Sardar Patel Road, Andheri, Mumbai
              </p>
            </div>
          </div>

          <div className="popular-residences-card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="property-img"
                loading="lazy"
              />
              <div className="for-sale">For Sale</div>
            </div>
            <div className="card-details">
              <h3>
                <span>₹ 25,0000</span> ₹ 20,0000
              </h3>
              <h4>Spring Field</h4>

              <p>
                <FaLocationDot /> Sardar Patel Road, Andheri, Mumbai
              </p>
            </div>
          </div>

          <div className="popular-residences-card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="property-img"
                loading="lazy"
              />
              <div className="for-sale">For Sale</div>
            </div>
            <div className="card-details">
              <h3>
                <span>₹ 25,0000</span> ₹ 20,0000
              </h3>
              <h4>Spring Field</h4>

              <p>
                <FaLocationDot /> Sardar Patel Road, Andheri, Mumbai
              </p>
            </div>
          </div>

          <div className="popular-residences-card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="property-img"
                loading="lazy"
              />
              <div className="for-sale">For Sale</div>
            </div>
            <div className="card-details">
              <h3>
                <span>₹ 25,0000</span> ₹ 20,0000
              </h3>
              <h4>Spring Field</h4>

              <p>
                <FaLocationDot /> Sardar Patel Road, Andheri, Mumbai
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}

      <div className="testimonials">
        <h4>Testimonials</h4>
        <h1>What Our Customers Say's</h1>

        <div className="testimonials-div">
          <div className="testimonial-card">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user-img"
                loading="lazy"
              />
              <div>
                <h4>Kristen Jansen</h4>
                <p>Pune, India</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user-img"
                loading="lazy"
              />
              <div>
                <h4>Dean Elger</h4>
                <p>Mumbai, India</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user-img"
                loading="lazy"
              />
              <div>
                <h4>Jessica Johanson</h4>
                <p>Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="email-box">
        <div className="email-heading">
          <h2>Subscribed to our Newsletter</h2>
          <p>Get our special prices and latest units info from us.</p>
        </div>
        <div className="email-box-input">
          <input placeholder="Enter your email address" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
