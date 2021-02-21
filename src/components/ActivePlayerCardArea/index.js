import styled from "styled-components";
import Deck from "../Deck";
import Hand from "../Hand";
import ProgrammingLine from "../ProgrammingLine";

export default function ActivePlayerCardArea({ playerInfo, moves, playerKey }) {
  const handleProgramCard = (cardId) => {
    moves.programCard(playerKey, cardId);
  };
  const handleDrawCard = () => {
    moves.drawCard(playerKey);
  };
  return (
    <Container>
      <TopContent>
        <Deck
          onDrawCard={handleDrawCard}
          remainingCardCount={playerInfo.deck.length}
        />
        <ProgrammingLine commands={playerInfo.commands} />
      </TopContent>

      <Hand onPlayCard={handleProgramCard} cards={playerInfo.hand} />
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
