import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "../../styles";

export const HomeContainer = styled(Container)`
  display: block;
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 0 0 2em;
`;

export const NavItem = styled(Link)`
  color: var(--color-redOrange);
  font-size: 3em;

  &:hover {
    color: var(--color-yellow);
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
