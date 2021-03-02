import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "../../styles";

export const HomeContainer = styled(Container)`
  display: block;
`;

export const Title = styled.h1`
  font-size: 4.5em;
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export const YellowText = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 0 0 2em;
`;

export const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.redOrange};
  font-size: 3em;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const RainbowImage = styled.img`
  position: absolute;
  right: 0;
  bottom: -20px;
  height: 95%;
  width: 95%;
  pointer-events: none;
`;