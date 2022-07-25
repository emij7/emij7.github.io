import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  color: {
    background: "#202020",
    blue: "#42A5F5",
    link: "#2962FF",
    primary: {
      dark: "#B62395",
      light: "#F8EAF5",
      normal: "#E52FBD",
    },
    secondary: {
      dark: "#f9a825",
      light: "#fffde7",
      normal: "#ffee58",
    },
    text: "#ffffff",
  },
};
export const lightTheme = {
  color: {
    background: "#FFFFFF",
    blue: "#42A5F5",
    link: "#2962FF",
    primary: {
      dark: "#B62395",
      light: "#F8EAF5",
      normal: "#ffee58",
    },
    secondary: {
      dark: "#f9a825",
      light: "#fffde7",
      normal: "#ffee58",
    },
    text: "#202020",
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
