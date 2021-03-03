import styled from "styled-components";

import { PLANNING } from "../../constants";
import FaceUpCard from "../FaceUpCard";

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
    if (isDrawable) {
      moves.drawCard(playerID);
    }
  };
  return (
    <Container>
      <Deck isDrawable={isDrawable} onDoubleClick={handleDrawCard}>
        <p>Deck</p>
        Remaining: {player.deck.length}
      </Deck>

      <Hand>
        {player.hand.map((card) => (
          <CardContainer key={card.id}>
            <FaceUpCard
              isPlayable={isPlayable}
              onDoubleClick={handleProgramCard}
              card={card}
            />
          </CardContainer>
        ))}
      </Hand>
    </Container>
  );
}

const CardContainer = styled.div`
  height: 120px;
  width: 80px;
  background-color: white;
  border-radius: 6px;
  margin-right: 10px;
`;

const Deck = styled.div`
  height: 120px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.salmon};
  margin-right: 10px;
  border-radius: 6px;
`;

const Hand = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  grid-area: hand;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;
