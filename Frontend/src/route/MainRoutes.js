import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;
