import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./RoutePages/Home";
import About from "./RoutePages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" exact element={<About />} />
    </Routes>
  );
};

export default App;