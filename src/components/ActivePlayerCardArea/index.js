import get from "lodash/get";
import PropTypes from "prop-types";

import { PLANNING, EXECUTION } from "../../constants";
import BoardButtons from "../BoardButtons";
import FaceUpCard from "../FaceUpCard";
import * as Styled from "./ActivePlayerArea.styles";
import * as Types from "../../types";

export default function ActivePlayerCardArea({
  G,
  moves,
  playerID,
  ctx,
  isActive,
}) {
  const player = G.players[playerID];
  const isPlayable = isActive && ctx.phase === PLANNING;

  const handleProgramCard = (cardId) => {
    moves.programCard(playerID, cardId);
  };

  return (
    <Styled.Container>
      <Styled.Deck>
        <Styled.DeckImage src="/card_back.png" />
        <Styled.Remaining>{player.deck.length}</Styled.Remaining>
      </Styled.Deck>

      <Styled.Hand>
        {player.hand.map((card) => (
          <Styled.CardContainer key={card.id}>
            <FaceUpCard
              isPlayable={isPlayable}
              onDoubleClick={handleProgramCard}
              card={card}
            />
          </Styled.CardContainer>
        ))}
      </Styled.Hand>
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
    </Styled.Container>
  );
}

ActivePlayerCardArea.propTypes = {
  G: Types.G.isRequired,
  ctx: Types.ctx.isRequired,
  isActive: PropTypes.bool.isRequired,
  playerID: PropTypes.number.isRequired,
  moves: Types.moves.isRequired,
};
