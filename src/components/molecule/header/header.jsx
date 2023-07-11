import React from "react";
import { text } from "../../../text/text";
import { StyledAnimatedTitle } from "../../atoms/title/title.styles";
import { StyledDecoration, StyledHeader } from "./header.styles";
import { useRef } from "react";
import { useMemo } from "react";
import { useEffect } from "react";

export const Header = ({ language, setIsIntersecting }) => {
  const headerRef = useRef(null);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    [setIsIntersecting]
  );
  useEffect(() => {
    observer.observe(headerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [headerRef, observer]);

  return (
    <React.Fragment>
      <StyledHeader ref={headerRef}>
        <StyledAnimatedTitle type="primary">
          Emiliano Juarez
        </StyledAnimatedTitle>
        <StyledDecoration />
        <StyledAnimatedTitle type="secondary">
          {text.title[language]}
        </StyledAnimatedTitle>
      </StyledHeader>
    </React.Fragment>
  );
};
