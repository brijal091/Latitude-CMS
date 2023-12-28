import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Admin from "../pages/admin/Admin";
import Dashboard from "../pages/Dashboard/Dashboard";
import Property from "../pages/property/Property";
import AddProperty from "../pages/addProperty/AddProperty";
import LandingPage from "../pages/property/LandingPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/property" element={<LandingPage />} />
      <Route path="/add_property" element={<AddProperty />} />
    </Routes>
  );
};

export default MainRoutes;