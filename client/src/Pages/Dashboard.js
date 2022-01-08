import React, { useContext } from "react";
import { userContext } from "../UserContext";

function Dashboard(props) {
  const { userData, SetUserData } = useContext(userContext);
  // handle click event of logout button
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  return (
    <div>
      <pre>Welcome {JSON.stringify(userData, null, 2)}!</pre>
      <br />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
