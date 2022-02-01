import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const RequireAuth = ({ children }) => {
  const userData = useContext(UserContext);
  const location = useLocation();

  if (userData.user === null) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
