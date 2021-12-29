import React, { useState, createContext } from "react";

export const GlobalContext = createContext({
  baseTheme: true,
  //   toggleTheme: () => {},
});

export const GlobalProvider = ({ children }) => {
  //   const [baseTheme, setBaseTheme] = useState(false);
  //   const toggleTheme = () => {
  //     setBaseTheme(!baseTheme);
  //   };
  const baseTheme = true;
  return;
  <GlobalContext.Provider value={{ baseTheme }}>
    {children}
  </GlobalContext.Provider>;
};
