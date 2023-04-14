// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import {PrivateRoutes} from "./auth/helper/PrivateRoutes";
import Signup from "./user/signup";

// const Route = () => {

// };

function AllRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/signup" exact element={<Signup />} />
                {/* <PrivateRoutes path ="/user/dashboard" exact element={}/> */}
            </Routes>
        </Router>
    );
}

export default AllRoutes;


