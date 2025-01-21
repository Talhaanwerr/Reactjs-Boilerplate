import React, { createContext, useContext, useReducer, useState } from "react";

// Create the context
const AdminContext = createContext();

// Context Provider component
export const AdminProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Value to be passed to context consumers
  const value = { token, setToken };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

// Custom hook to use admin context
export const useAdminContext = () => useContext(AdminContext);
