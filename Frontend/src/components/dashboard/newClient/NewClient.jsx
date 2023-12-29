import React, { useState } from "react";
import "./newClient.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewClient = () => {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    password: "",
    projectCategory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://sore-gray-wildebeest-belt.cyclic.app/api/auth/createuser",
        formState,
      );

      console.log("Response data:", response.data);
      if (response.data.jwtData) {
        alert("Login Sucessful");
        navigate("/admin/dashboard");
      } else {
        alert("Please try again");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
              Password <sup>*</sup>
            </label>
            <input type="password" required placeholder="Password" />
          </div>

          <div className="input-container">
            <label>
              Upload Image<sup></sup>
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
