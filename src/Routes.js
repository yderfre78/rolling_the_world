import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import ListFligths from "./components/ListFligths";

const Routes2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights" element={<ListFligths />} />
    </Routes>
  );
};
export default Routes2;
