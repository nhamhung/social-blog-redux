import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = (props) => {
  const { isAuthenticated, loading } = useSelector((state) => state.login);
  if (isAuthenticated) return <Route {...props} />;
  return <Redirect to="/login" />;
};

export default PrivateRoute;
