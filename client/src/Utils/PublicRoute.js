import React from "react";
import { Route, Navigate } from "react-router-dom";

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => (!getToken() ? <Component {...props} /> : <Navigate to={{ pathname: "/dashboard" }} />)} />;
}

export default PublicRoute;
