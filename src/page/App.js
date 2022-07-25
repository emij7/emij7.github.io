import { Button } from "../components/atoms/button/button";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/globals";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
// import { text } from "../text/text";

export const App = () => {
  const [themeState, setThemeState] = useState("dark");
  const themeToggler = () => {
    themeState === "light" ? setThemeState("dark") : setThemeState("light");
  };
  const [language, setLanguage] = useState("en");
  const languageToggler = () => {
    language === "es" ? setLanguage("en") : setLanguage("es");
  };
  return (
    <ThemeProvider theme={themeState === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      {/* <p>{text.title[language]}</p> */}
      <Button onClick={themeToggler}>X</Button>
      <Button onClick={languageToggler}>Lan</Button>
    </ThemeProvider>
  );
};
