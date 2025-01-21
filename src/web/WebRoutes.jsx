// src/web/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import WebLayout from "./webLayout";
import ProtectedRoute from "../shared/ProtectedRoute";

function WebRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route path="/login" element={<Login />} />
        <ProtectedRoute path="/dashboard" component={Home} />
      </Route>
      {/* other web routes */}
    </Routes>
  );
}

export default WebRoutes;
