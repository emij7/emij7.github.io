import React from "react";
import { Logo } from "../../icons/logo/logo";
import { AsideButtons, StyledNavBar } from "./navBar.styles";

export const NavBar = ({ children }) => {
  return (
    <StyledNavBar>
      <Logo />
      <AsideButtons>{children}</AsideButtons>
    </StyledNavBar>
  );
};
