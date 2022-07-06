import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

import ListFligths from "./components/ListFligths";

const Routes2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/results" element={<Home />} />
      <Route path="/flights/:id" element={<ListFligths />} />
    </Routes>
  );
};
export default Routes2;
