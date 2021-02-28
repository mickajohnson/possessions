import { Link } from "react-router-dom";
import styled from "styled-components";

import rainbows from "../../assets/rainbows.png";

// import Lander from "../../lander";

export default function Home() {
  return (
    <Container>
      <Title>
        <BlueText>Nightstand</BlueText> <YellowText>Stuff</YellowText>
      </Title>
      <NavItemContainer>
        <NavItem to="/create">Create Game</NavItem>
        <NavItem to="/join">Join Game</NavItem>
      </NavItemContainer>
      <RainbowImage src={rainbows} alt="" />
    </Container>
  );
}

const Container = styled.div`
  padding: 2em;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  font-size: 4.5em;
`;

const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

const YellowText = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 0 0 2em;
`;

const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.redOrange};
  font-size: 3em;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const RainbowImage = styled.img`
  position: absolute;
  right: 0;
  bottom: -20px;
  height: 95%;
  width: 95%;
  pointer-events: none;
`;
