import React from "react";
import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { authUser } = useAppContext();
  return !authUser ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;
