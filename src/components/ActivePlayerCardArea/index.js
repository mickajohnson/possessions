import styled from "styled-components";
import Deck from "../Deck";
import Hand from "../Hand";
import CommandLine from "../CommandLine";

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
      <Deck
        onDrawCard={handleDrawCard}
        remainingCardCount={player.deck.length}
        isDrawable={isDrawable}
      />
      <Hand
        isPlayable={isPlayable}
        onPlayCard={handleProgramCard}
        cards={player.hand}
      />
    </Container>
  );
}

const Container = styled.div`
  grid-area: hand;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
