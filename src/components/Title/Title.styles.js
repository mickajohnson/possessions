import styled from "styled-components";

export const Header = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const YellowText = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;
