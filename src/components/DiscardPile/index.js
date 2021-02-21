import styled from "styled-components";
import FaceDownCard from "../FaceDownCard";

export default function DiscardPile({ discardPile }) {
  return (
    <Container>
      <span>Discard Pile</span>
      <Discards>{discardPile.length ? <FaceDownCard /> : null}</Discards>
      <span>{discardPile.length} Cards</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Discards = styled.div`
  height: 7em;
`;
