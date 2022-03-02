import React, { useState } from "react";
import { MainBackground } from "./MainBackground";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProvider } from "../context/Layout";
const Layout = ({ children }) => {
  const [counter,setCounter] = useState(0);
  return (
    <>
      <LayoutProvider value={{setCounter}} >
        <MainBackground>
          <Header counter={counter} />
          {children}
        </MainBackground>
        <Footer />
      </LayoutProvider>
    </>
  );
};

export default Layout;
