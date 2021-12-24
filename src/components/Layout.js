import React from "react";
import { ThemeProvider } from "styled-components";
import TopBar from "./TopBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
