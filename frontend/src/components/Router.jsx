import React from "react";
import { Route, Routes } from "react-router-dom";

//import component Register
import Register from "../pages/Register";

//import component Login
import Login from "../pages/Login";

//import component Register
import Dashboard from "../pages/Dashboard";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    );
}
