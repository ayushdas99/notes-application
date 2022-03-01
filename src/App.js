import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import About from "./Pages/About";

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