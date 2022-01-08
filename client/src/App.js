import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { userContext } from "./UserContext";

import { getToken } from "./Utils/Common.js";

function App() {
  const [userData, setUserData] = useState(null);

  const providerUserData = useMemo(
    () => ({ userData, setUserData }),
    [userData, setUserData]
  );

  useEffect(() => {
    const token = getToken();
    if (token) {
      axios
        .get(`http://localhost:3001/api/verify/?token=${token}`)
        .then((response) => {
          setUserData(response.data.user);
        });
    }
  }, [userData]);

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/about">
              WinterTake
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    exact="true"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            {userData ? userData.login : ""}
          </div>
        </nav>
        <userContext.Provider value={providerUserData}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </userContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
