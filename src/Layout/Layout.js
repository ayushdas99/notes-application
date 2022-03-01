import React from "react";
import { MainBackground } from "./MainBackground";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <MainBackground>
        <Header />
        {children}
      </MainBackground>
      <Footer />
    </>
  );
};

export  default Layout;
