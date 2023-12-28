import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import Admin from "../pages/superAdmin/Admin";
import Dashboard from "../pages/dashboard/Dashboard";
import Client from "../pages/client/Client";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/company/admin" element={<Client />} />
    </Routes>
  );
};

export default MainRoutes;
