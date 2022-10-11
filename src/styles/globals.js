import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  color: {
    background: "#202020",
    text: "#ffffff",
    primary: "#ffffff",
    secondary: "#4A4A4A",
    tertiary: "#202020",
    link: "#D5EFFC",
    activeButton: "#2962FF",
    gray: "#9B9B9B",
    black: "#202020",
  },
};
export const lightTheme = {
  color: {
    background: "#FFFFFF",
    text: "#202020",
    primary: "#202020",
    secondary: "#429743",
    tertiary: "#3C8841",
    link: "#D5EFFC",
    activeButton: "#2962FF",
    gray: "#4A4A4A",
    black: "#202020",
  },
};
export const GlobalStyles = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overscroll-behavior: none;
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  *,
  *:before,
  *:after {
	  box-sizing: border-box;
    font-family: 'Sofia Pro', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    display: block;
    text-decoration: none;
    text-align: center;
  }

  a,
  button {
    cursor: pointer;
  }

  pre,
  ul,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  button {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
`;
