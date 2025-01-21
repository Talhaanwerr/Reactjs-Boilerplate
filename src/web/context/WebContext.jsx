import React, { createContext, useContext, useReducer, useState } from "react";

// Create the context
const WebContext = createContext();

// Context Provider component
export const WebProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Value to be passed to context consumers
  const value = { token, setToken };

  return <WebContext.Provider value={value}>{children}</WebContext.Provider>;
};

// Custom hook to use web context
export const useWebContext = () => useContext(WebContext);
