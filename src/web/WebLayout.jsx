import React from 'react';
import { Outlet } from 'react-router-dom';  // Used to render child routes

const WebLayout = () => {
  return (
    <div className="web-layout">
      <header>
        {/* Web app-specific navigation and other header elements */}
        <h1>Web Application</h1>
      </header>
      <main>
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>
      <footer>
        {/* Web-specific footer */}
        <p>Web Footer</p>
      </footer>
    </div>
  );
};

export default WebLayout;
