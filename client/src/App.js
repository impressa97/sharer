import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Home from "./Pages/Home";
import AddGoods from "./Pages/AddGoods";

import { RequireAuth } from "./Hoc/RequireAuth";
import { Layout } from "./Pages/Layout";
import { UserDataProvider } from "./UserContext";

function App() {
  return (
    <UserDataProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="about" element={<About />} />
              <Route
                path="AddGoods"
                element={
                  <RequireAuth>
                    <AddGoods />
                  </RequireAuth>
                }
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserDataProvider>
  );
}

export default App;
