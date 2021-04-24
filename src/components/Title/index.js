import { Header, BlueText } from "./Title.styles";

export default function Title({ fontSize = "4.5em", padding }) {
  return (
    <Header padding={padding} fontSize={fontSize}>
      <BlueText>Possessions</BlueText>
    </Header>
  );
}
