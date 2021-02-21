import styled from "styled-components";
import Deck from "../Deck";
import Hand from "../Hand";
import ProgrammingLine from "../ProgrammingLine";

export default function ActivePlayerCardArea({ playerInfo }) {
  return (
    <Container>
      <TopContent>
        <Deck remainingCardCount={playerInfo.deck.length} />
        <ProgrammingLine commands={{ 0: null, 1: null, 2: null, 3: null }} />
      </TopContent>

      <Hand cards={playerInfo.hand} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  margin-top: 10px;
  width: 60%;
  align-items: center;
  justify-content: center;
`;

const TopContent = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
`;
