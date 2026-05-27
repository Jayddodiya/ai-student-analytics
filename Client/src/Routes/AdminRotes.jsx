import React from "react";

import {
  Navigate,
} from "react-router-dom";

const AdminRoute = ({
  children,
}) => {

  const token =
    localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // No login
  if (!token) {

    return <Navigate to="/" />;

  }

  // Not admin
  if (user?.role !== "admin") {

    return <Navigate to="/dashboard" />;

  }

  return children;
};

export default AdminRoute;