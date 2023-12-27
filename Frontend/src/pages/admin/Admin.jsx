import React from "react";
import "./admin.scss";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";

const Admin = () => {
  return (
    <div className="admin-container">
      <h1>Admin Login</h1>
      <p>Control Panel Login</p>
      <form>
        <div className="admin-creds">
          <p>
            <CiUser />
          </p>
          <input type="email" required placeholder="Enter Your Email" />
        </div>
        <div className="admin-creds">
          <p>
            <IoKeyOutline />
          </p>
          <input type="password" required placeholder="Enter Your Password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Admin;
