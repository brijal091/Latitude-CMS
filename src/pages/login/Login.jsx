import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <div className="login-heading">
          <h2>Log in to your account</h2>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
        <form>
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

          {/* <p>Forgot Password</p> */}

          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
