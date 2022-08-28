import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Test from "../pages/Test";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="test" element={<Test />} />
        </Routes>
    );
}
