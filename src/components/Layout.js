import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../assets/themes/theme";
import Theme2 from "../assets/themes/theme2";
import GlobalStyles from "../assets/themes/globalStyles";
import TopBar from "./TopBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [baseTheme, setBaseTheme] = useState(true);

  return (
    <ThemeProvider theme={baseTheme === true ? Theme : Theme2}>
      <button
        className="btn"
        style={{ position: "fixed", zIndex: "300", left: "10px" }}
        onClick={() => setBaseTheme(!baseTheme)}
      >
        Toggle me
      </button>
      <GlobalStyles />

      <TopBar baseTheme={baseTheme} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
