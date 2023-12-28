import React from "react";
import "./newClient.scss";
import { useNavigate } from "react-router-dom";

const NewClient = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/company/admin");
  };

  return (
    <div className="client-form-container">
      <div className="form-container">
        <div className="login-heading">
          <h2>Welcome</h2>
          <p>Don't have an account?</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>
              Full Name <sup>*</sup>
            </label>
            <input type="text" required placeholder="Full Name" />
          </div>

          <div className="input-container">
            <label>
              Email <sup>*</sup>
            </label>
            <input type="email" required placeholder="Email" />
          </div>

          <div className="input-container">
            <label>
              Upload Image<sup>*</sup>
            </label>
            <input type="url" placeholder="Url" required />
          </div>

          <div className="category">
            <label>
              Category <sup>*</sup>
            </label>
            <select>
              <option>Property</option>
              <option>Hotel</option>
              <option>Ecommerce</option>
            </select>
          </div>

          <div className="button-container">
            <button type="submit">Create New Client</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewClient;
