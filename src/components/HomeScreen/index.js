import * as Styled from "./HomeScreen.styles";

import Title from "../Title";

export default function HomeScreen() {
  return (
    <Styled.HomeContainer>
      <Title />
      <Styled.NavItemContainer>
        <Styled.NavItem to="/create">Create Game</Styled.NavItem>
        <Styled.NavItem to="/join">Join Game</Styled.NavItem>
        <Styled.NavItem to="/rules">How to Play</Styled.NavItem>
      </Styled.NavItemContainer>
      <Styled.RainbowImage src={"/rainbows.png"} alt="" />
    </Styled.HomeContainer>
  );
}
