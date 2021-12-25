import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../assets/themes/theme";
import Theme2 from "../assets/themes/theme2";
import GlobalStyles from "../assets/themes/globalStyles";
import TopBar from "./TopBar";
import Footer from "./Footer";

import { useState } from "react";

const Layout = ({ children }) => {
  const [baseTheme, setTheme] = useState(true);
  const toggleThme = () => {
    setTheme(!baseTheme);
  };
  return (
    <ThemeProvider theme={baseTheme === true ? Theme : Theme2}>
      <GlobalStyles />
      <button
        className="btn"
        style={{ position: "absolute", zIndex: "300" }}
        onClick={toggleThme}
      >
        Toggle me
      </button>
      <TopBar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
