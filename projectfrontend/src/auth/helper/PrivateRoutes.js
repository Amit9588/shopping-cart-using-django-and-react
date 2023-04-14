import React, { Component } from "react" ;  
import { Route ,Navigate} from "react-router-dom";
import {isAuthenticated} from "./index";

const PrivateRoutes = ({ children, ...rest}) =>{
   
  return (
    <Route
      {...rest}
      render={({ props }) =>
        isAuthenticated ? (
          <element {...props} />
          
        ) : (
          <Navigate
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
    

export default PrivateRoutes;