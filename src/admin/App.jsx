// src/admin/App.jsx
import React from "react";
import AdminRoutes from "./AdminRoutes";
import { AdminProvider } from "./context/AdminContext";

function AdminApp() {
  return (
    <AdminProvider>
      <AdminRoutes />
    </AdminProvider>
  );
}

export default AdminApp;
