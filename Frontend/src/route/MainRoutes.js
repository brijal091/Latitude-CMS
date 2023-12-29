import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Admin from "../pages/superAdmin/Admin";
import Client from "../pages/client/Client";
import LandingPage from "../pages/property/LandingPage";
import AddProperty from "../pages/addProperty/AddProperty";
import Dashboard from "../pages/dashboard/Dashboard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin/dashboard" element={ <Dashboard/>} />
      <Route path="/company/admin" element={<Client />} />
      <Route path="/property" element={<LandingPage />} />
      <Route path="/add_property" element={<AddProperty />} />
    </Routes>
  );
};

export default MainRoutes;
