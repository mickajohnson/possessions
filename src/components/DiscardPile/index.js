import * as Styled from "./DiscardPile.styles";

export default function DiscardPile({ discardPile }) {
  return (
    <Styled.Container>
      <span>Discard Pile</span>
      <Styled.Discards>{discardPile.length ? <div /> : null}</Styled.Discards>
      <span>{discardPile.length} Cards</span>
    </Styled.Container>
  );
}
