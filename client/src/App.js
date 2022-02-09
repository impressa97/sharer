import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Home from "./Pages/Home";
import UserRoles from "./Pages/UserRoles";
import AddGoods from "./Pages/AddGoods";
import Rent from "./Pages/Rent";

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
              <Route
                path="user-roles"
                element={
                  <RequireAuth>
                    <UserRoles />
                  </RequireAuth>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="rent/samokati" element={<Rent type_id={1} />} />
              <Route path="rent/velosipedi" element={<Rent type_id={2} />} />
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
