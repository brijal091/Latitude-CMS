import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./clientLogin.scss";
import loginImage from "../../../assets/images/loginImage.jpg";

export const ClientLogin = () => {
  const navigate = useNavigate();

  const { clientId } = useParams();

  console.log("clientId", clientId);

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate(`/client/${clientId}`);
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="login-img" loading="lazy" />
      </div>

      <div className="form-container">
        <div className="login-heading">
          <h2>Log in to your account</h2>
          <p>
            Don't have an account? <Link>Sign up</Link>
          </p>
        </div>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="input-container">
            <label>
              Email <sup>*</sup>{" "}
            </label>
            <input type="email" required placeholder="Email" />
          </div>
          <div className="input-container">
            <label>
              Password <sup>*</sup>{" "}
            </label>
            <input type="password" required placeholder="Password" />
          </div>

          <p>Forgot Password</p>

          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
