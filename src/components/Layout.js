import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../assets/themes/theme";
import Theme2 from "../assets/themes/theme2";
import GlobalStyles from "../assets/themes/globalStyles";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useState } from "react";
import Switch from "react-switch";

const Layout = ({ children }) => {
  const [baseTheme, setBaseTheme] = useState(true);
  const toggleTheme = () => {
    setBaseTheme(!baseTheme);
  };

  return (
    <ThemeProvider theme={baseTheme === true ? Theme : Theme2}>
      <div className="able-topbar">
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          onChange={toggleTheme}
          checked={!baseTheme}
          className="react-switch"
        />
        <p>Launching on April 2nd, 2022</p>
      </div>
      <GlobalStyles />

      <TopBar baseTheme={baseTheme} />

      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
