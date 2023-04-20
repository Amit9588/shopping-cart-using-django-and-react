import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import PrivateRoute from "./auth/helper/PrivateRoute";
import Signup from "./user/signup";
import UserDashboard from "./user/userdashboard";
import Signin  from "./user/signin";
import Cart from "./core/Cart";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/user/dashboard" element={
        <PrivateRoute>
          <UserDashboard/>
        </PrivateRoute>} />
    </Routes>
  );
};

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};



export default AllRoutes;


