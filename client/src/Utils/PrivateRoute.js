import React from "react";
import { Route, Navigate } from "react-router-dom";

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => (getToken() ? <Component {...props} /> : <Navigate to={{ pathname: "/login", state: { from: props.location } }} />)} />;
}

export default PrivateRoute;
