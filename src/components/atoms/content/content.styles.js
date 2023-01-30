import styled from "styled-components";

export const StyledContent = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  min-height: ${(props) => props.minHeight};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
`;
