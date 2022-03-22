import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/main" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;
