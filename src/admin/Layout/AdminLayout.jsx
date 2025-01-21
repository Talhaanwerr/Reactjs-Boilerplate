import React from "react";
import { Outlet } from "react-router-dom"; // Used to render child routes

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <header>
        {/* Admin-specific navigation and other header elements */}
        <h1>Admin Dashboard</h1>
      </header>
      <main>
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>
      <footer>
        {/* Admin-specific footer */}
        <p>Admin Footer</p>
      </footer>
    </div>
  );
};

export default AdminLayout;
