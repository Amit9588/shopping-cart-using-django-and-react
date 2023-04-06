import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./core/Home";


// const Route = () => {

// };

function AllRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>
    );
}

export default AllRoutes;


