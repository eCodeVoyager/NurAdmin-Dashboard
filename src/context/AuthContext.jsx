// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; // You can use any cookie library
import UserServices from "../services/UserServices";
import { string } from "yup";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    const token = JSON.parse(Cookies.get("token") || null) || null;
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    UserServices.getLoggedInUser().then((response) => {
      console.log(response.data.mess);
      if (!response.data.mess) {
        setShouldNavigate(true);
      
      } else {
        setShouldNavigate(false);
       
      }
    });
  }, []);

  const login = () => {
    // Handle login
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);

    // Handle logout

    // Redirect to login page

    return <Navigate to="/sign-in" />;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        shouldNavigate,
        setShouldNavigate,
        setIsAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
