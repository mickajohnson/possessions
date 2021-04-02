import get from "lodash/get";

import { PLANNING, EXECUTION } from "../../constants";
import BoardButtons from "../BoardButtons";
import FaceUpCard from "../FaceUpCard";
import {
  CardContainer,
  Deck,
  Hand,
  Container,
  Remaining,
  DeckImage,
} from "./ActivePlayerArea.styles";

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
      <Deck isDrawable={isDrawable} onClick={handleDrawCard}>
        <DeckImage src="/card_back.png" />
        <Remaining>{player.deck.length}</Remaining>
      </Deck>

      <Hand>
        {player.hand.map((card) => (
          <CardContainer key={card.id}>
            <FaceUpCard
              isPlayable={isPlayable}
              isOptionalPlay={isDrawable}
              onDoubleClick={handleProgramCard}
              card={card}
            />
          </CardContainer>
        ))}
      </Hand>
      {isActive && ctx.phase === EXECUTION ? (
        <BoardButtons
          currentCardAction={get(
            G.players[playerID].commands[G.currentCommandKey],
            "action",
            null
          )}
          moves={moves}
          G={G}
        />
      ) : null}
    </Container>
  );
}
