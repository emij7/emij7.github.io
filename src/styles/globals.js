import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  color: {
    background: "#061606",
    oposite: "#f0f5f0",
    text: "#f0f5f0",
    primary: "#f0f5f0",
    secondary: "#4A4A4A",
    tertiary: "#3C8841",
    link: "#D5EFFC",
    unactiveButton: "#5B5B5B",
    activeButton: "#4A4A4A",
    gray: "#9B9B9B",
    black: "#303030",
    appBackground: "#000000",
  },
  filter: "grayscale(100%)",
  device: {
    mobileS: `(max-width: 375px)`,
    mobileL: `(max-width: 450px)`,
    tablet: `(max-width: 768px)`,
    desktop: `(max-width: 1024px)`,
  },
};
export const lightTheme = {
  color: {
    background: "#f0f5f0",
    oposite: "#303030",
    text: "#303030",
    primary: "#303030",
    secondary: "#429743",
    tertiary: "#3C8841",
    link: "#D5EFFC",
    unactiveButton: "#3C8841",
    activeButton: "#429743",
    gray: "#4A4A4A",
    black: "#303030",
    appBackground: "#f0f5f0",
  },
  filter: "none",
  device: {
    mobile: `(max-width: 375px)`,
    tablet: `(max-width: 768px)`,
    desktop: `(max-width: 1024px)`,
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overscroll-behavior: none;
    background: ${({ theme }) => theme.color.appBackground};
    color: ${({ theme }) => theme.color.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    padding-bottom: 100px;
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
