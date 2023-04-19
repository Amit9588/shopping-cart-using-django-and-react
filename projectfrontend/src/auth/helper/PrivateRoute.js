import React from "react";
import { Route, Navigate } from "react-router-dom";

import { isAuthenticated } from "./index";

// const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
//   return isAuthenticated ? children : <Navigate to="/signin" />;
// };


const PrivateRoute = ({ children, ...rest }) => {

  // let auth = isAuthenticated()
  return isAuthenticated() ? children : <Navigate to= "/signin" />


}
export default PrivateRoute;