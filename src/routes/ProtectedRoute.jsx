// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, shouldNavigate } = useAuth();

  if (isAuthenticated === false) {
    return <Navigate to="/sign-in" />;
  }
  console.log(shouldNavigate);
  if (shouldNavigate === true) {
    return <Navigate to="/mess-form" />;
  }

  return children;
};

export default ProtectedRoute;
