// src/admin/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout";
import AdminLogin from "./views/AdminLogin";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "../shared/ProtectedRoute";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="/login" element={<AdminLogin />} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        {/* other admin routes */}
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
