import styled from "styled-components";
import Deck from "../Deck";
import Hand from "../Hand";
import ProgrammingLine from "../ProgrammingLine";

import { PLANNING } from "../../constants";
import DiscardPile from "../DiscardPile";

export default function ActivePlayerCardArea({
  G,
  moves,
  playerID,
  ctx,
  isActive,
}) {
  const player = G.players[playerID];
  const isPlayable = isActive && ctx.phase === PLANNING;
  const isDrawable =
    isPlayable && player.commands[G.currentCommandKey] !== null;

  const handleProgramCard = (cardId) => {
    moves.programCard(playerID, cardId);
  };
  const handleDrawCard = () => {
    moves.drawCard(playerID);
  };
  return (
    <Container>
      <TopContent>
        <Deck
          onDrawCard={handleDrawCard}
          remainingCardCount={player.deck.length}
          isDrawable={isDrawable}
        />
        <ProgrammingLine
          phase={ctx.phase}
          isActive={isActive}
          currentCommandKey={G.currentCommandKey}
          commands={player.commands}
        />
        <DiscardPile discardPile={player.discardPile} />
      </TopContent>

      <Hand
        isPlayable={isPlayable}
        onPlayCard={handleProgramCard}
        cards={player.hand}
      />
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
