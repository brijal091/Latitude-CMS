import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Admin from "../pages/superAdmin/Admin";
import Dashboard from "../pages/dashboard/Dashboard";
import Client from "../pages/client/Client";
import AddProperty from "../pages/addProperty/AddProperty";
import LandingPage from "../pages/property/LandingPage";
import { ClientLogin } from "../pages/client/clientLogin/ClientLogin";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/company/:clientId" element={<ClientLogin />} />
      <Route path="/client/:clientId" element={<Client />} />
      <Route path="/property" element={<LandingPage />} />
      <Route path="/add_property" element={<AddProperty />} />
    </Routes>
  );
};

export default MainRoutes;
