import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext({
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "",
});

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : "",
  });

  useEffect(
    (e) => {
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData.user));
      console.log("localStorage updated!");
    },
    [userData]
  );

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {children}
    </UserContext.Provider>
  );
};
