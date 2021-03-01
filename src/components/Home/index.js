import rainbows from "../../assets/rainbows.png";

import {
  BlueText,
  YellowText,
  Title,
  NavItem,
  RainbowImage,
  NavItemContainer,
  HomeContainer,
} from "./Home.styles";

// import Lander from "../../lander";

export default function Home() {
  return (
    <HomeContainer>
      <Title>
        <BlueText>Nightstand</BlueText> <YellowText>Stuff</YellowText>
      </Title>
      <NavItemContainer>
        <NavItem to="/create">Create Game</NavItem>
        <NavItem to="/join">Join Game</NavItem>
      </NavItemContainer>
      <RainbowImage src={rainbows} alt="" />
    </HomeContainer>
  );
}
