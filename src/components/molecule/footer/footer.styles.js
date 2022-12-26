import styled from "styled-components";

export const StyledFooter = styled.div`
  border-top: 1px ${({ theme, type }) =>
    type === "primary" ? theme.color.text : theme.color.secondary} solid;
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
`;