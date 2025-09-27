import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
const MainRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default MainRouts;
