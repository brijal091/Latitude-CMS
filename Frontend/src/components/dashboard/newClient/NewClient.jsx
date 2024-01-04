import React, { useState } from "react";
import "./newClient.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewClient = () => {
  const [formState, setFormState] = useState({
    userName: "",
    password: "",
    isClient: true,
    email: "",
    projectCategory: "Property",
    profile: "",
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
        "https://testyourapp.online:4203/cms-backend/api/auth/createuser",
        formState,
      );

      console.log("Response data:", response.data);
      // if (response.data.jwtData) {
      //   alert("Login Sucessful");
      //   navigate("/admin/dashboard");
      // } else {
      //   alert("Please try again");
      // }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log("formState", formState);

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
            <input
              type="text"
              required
              placeholder="Full Name"
              name="userName"
              value={formState.userName}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label>
              Email <sup>*</sup>
            </label>
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              required
              placeholder="Password"
              minLength="8"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label>
              Upload Image<sup></sup>
            </label>
            <input type="url" placeholder="Url" />
          </div>

          <div className="category">
            <label>
              Category <sup>*</sup>
            </label>
            <select
              name="projectCategory"
              value={formState.projectCategory}
              onChange={handleChange}
            >
              <option>PROPERTY</option>
              <option>HOTEL</option>
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
