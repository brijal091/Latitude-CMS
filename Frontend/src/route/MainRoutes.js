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
import Properties from "../pages/property/properties/Properties";
import PropertyDetails from "../pages/propertyDetails/PropertyDetails";
import EditProperty from "../pages/client/editProperty/EditProperty";

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
      <Route path="/properties" element={<Properties />} />
      <Route path="/property_details" element={<PropertyDetails />} />
      <Route path="/client/edit" element={<EditProperty />} />
    </Routes>
  );
};

export default MainRoutes;
