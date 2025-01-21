import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminApp from "./admin/App";
import WebApp from "./web/App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      {console.log("Hello World", import.meta.env.VITE_MODE)}
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/*" element={<WebApp />} />
      </Routes>
    </Router>
  </StrictMode>
);
