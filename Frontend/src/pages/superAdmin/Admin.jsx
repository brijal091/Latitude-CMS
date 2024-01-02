import React, { useState } from "react";
import "./admin.scss";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
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
        "https://sore-gray-wildebeest-belt.cyclic.app/api/auth/login",
        formState,
      );

      console.log("Response data:", response.data);
      if (response.data.jwtData) {
        alert("Login Sucessful");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);

      alert("Something went wrong please try again later");
    }
  };

  console.log("formState", formState);

  return (
    <div className="admin-container">
      <h1>Admin Login</h1>
      <p>Control Panel Login</p>
      <form onSubmit={handleSubmit}>
        <div className="admin-creds">
          <p>
            <CiUser />
          </p>
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="admin-creds">
          <p>
            <IoKeyOutline />
          </p>
          <input
            type="password"
            required
            placeholder="Enter Your Password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Admin;
