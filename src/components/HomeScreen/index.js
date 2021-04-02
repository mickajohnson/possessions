import {
  NavItem,
  RainbowImage,
  NavItemContainer,
  HomeContainer,
} from "./HomeScreen.styles";

import Title from "../Title";

export default function HomeScreen() {
  return (
    <HomeContainer>
      <Title />
      <NavItemContainer>
        <NavItem to="/create">Create Game</NavItem>
        <NavItem to="/join">Join Game</NavItem>
      </NavItemContainer>
      <RainbowImage src={"/rainbows.png"} alt="" />
    </HomeContainer>
  );
}
