import styled from "styled-components";
import Deck from "../Deck";
import Hand from "../Hand";

export default function ActivePlayerCardArea({ playerInfo }) {
  return (
    <Container>
      <Deck remainingCardCount={playerInfo.deck.length} />
      <Hand cards={playerInfo.hand} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid black;
  margin-top: 10px;
`;
