import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./src/assets/themes/theme";
import GlobalStyles from "./src/assets/themes/globalStyles";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
