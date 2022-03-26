import React from "react";
import { Routes, Route } from "react-router";
import Addcar from "../views/Addcar";
import Cars from "../views/Cars";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/addcar" element={<Addcar />} />
    </Routes>
  );
}
