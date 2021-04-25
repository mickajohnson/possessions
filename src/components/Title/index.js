import * as Styled from "./Title.styles";

export default function Title({ fontSize = "4.5em", padding }) {
  return (
    <Styled.Header padding={padding} fontSize={fontSize}>
      <Styled.BlueText>Possessions</Styled.BlueText>
    </Styled.Header>
  );
}
