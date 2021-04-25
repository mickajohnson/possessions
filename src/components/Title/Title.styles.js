import styled from "styled-components";

export const Header = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  grid-area: logo;
  padding: ${({ padding }) => padding || "0"};
`;

export const BlueText = styled.span`
  color: var(--color-blue);
`;
