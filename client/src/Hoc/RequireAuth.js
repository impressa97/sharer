import { useLocation, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

const RequireAuth = ({ children }) => {
  const [userData, setUserData] = useContext(UserContext);
  const [auth, setAuth] = useState(null);
  const location = useLocation();

  const isUserAuth = (token) => {
    axios
      .post("http://localhost:3001/api/verify", {
        token,
      })
      .then((result) => {
        if (result.data?.token === token) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch((error) => {
        setAuth(false);
      });
  };

  useEffect(() => {
    isUserAuth(userData.token);
  }, []);

  if (auth === null) {
    return <div>Верификация токена...</div>;
  }

  if (auth === true) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export { RequireAuth };
