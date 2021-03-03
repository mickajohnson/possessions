import rainbows from "../../assets/rainbows.png";

import {
  NavItem,
  RainbowImage,
  NavItemContainer,
  HomeContainer,
} from "./Home.styles";

import Title from "../Title";

export default function Home() {
  return (
    <HomeContainer>
      <Title />
      <NavItemContainer>
        <NavItem to="/create">Create Game</NavItem>
        <NavItem to="/join">Join Game</NavItem>
      </NavItemContainer>
      <RainbowImage src={rainbows} alt="" />
    </HomeContainer>
  );
}
