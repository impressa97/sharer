import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Layout } from "./Pages/Layout";
import { UserDataProvider } from "./UserContext";

function App() {
  return (
    <UserDataProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserDataProvider>
  );
}

export default App;
