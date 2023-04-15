import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import PrivateRoute from "./auth/helper/PrivateRoute";
import Signup from "./user/signup";
import UserDashboard from "./user/userdashboard";
import  Signin  from "./user/signin";

// const Route = () => {

// };

// function AllRoutes() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" exact element={<Home/>} />
//                 <Route path="/signup" exact element={<Signup/>} />
//                 {/* <PrivateRoutes path ="/user/dashboard" exact element={<userdashboard/>}/>  */}
//                 <Route path="/user/dashboard" element={
//                     <PrivateRoutes>
//                         <userdashboard />
//                     </PrivateRoutes>
//                 } />
//             </Routes>
//         </Router>
//     );
// }

function AllRoutes() {
    return (
      <Router>
        <Routes>
          
          <Route path="/" exact element={<Home/>} />
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/signin" exact element={<Signin/>} />
           <Route
            path="/user/dashboard"
            element={
              <PrivateRoute>
                <UserDashboard />
             </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    );
  }

export default AllRoutes;


