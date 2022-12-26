import { Button } from "../components/atoms/button/button";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/globals";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { NavBar } from "../components/molecule/navBar/navBar";
import { Header } from "../components/molecule/header/header";
import { Projects } from "../components/molecule/projects/projects";
import spainFlag from "../utils/spainFlag.png";
import usaFlag from "../utils/usaFlag.png";
import { Image } from "../components/atoms/image/image";
import { Light } from "../components/icons/light/light";
import { Footer } from "../components/molecule/footer/footer";

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
      <NavBar>
        <Button
          onClick={themeToggler}
          active={themeState === "dark" ? false : true}
          margin={"0 0.5rem"}
        >
          <Light />
        </Button>
        <Button
          onClick={languageToggler}
          active={language === "es" ? true : false}
        >
          <Image src={spainFlag} alt="Spanish Flag" size={"1.5rem"} />
        </Button>
        <Button
          onClick={languageToggler}
          active={language === "en" ? true : false}
        >
          <Image src={usaFlag} alt="American Flag" size={"1.5rem"} />
        </Button>
      </NavBar>
      <Header language={language} />

      <Projects language={language} />
      <Footer/>
    </ThemeProvider>
  );
};
