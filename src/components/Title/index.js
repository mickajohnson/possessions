import { Header, BlueText, YellowText } from "./Title.styles";

export default function Title({ fontSize = "4.5em" }) {
  return (
    <Header fontSize={fontSize}>
      <BlueText>Nightstand</BlueText> <YellowText>Stuff</YellowText>
    </Header>
  );
}
