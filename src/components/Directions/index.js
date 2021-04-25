import { useBoardState } from "../../state/board/reducer";
import { EXECUTION, PLANNING } from "../../constants";
import PropTypes from "prop-types";
import * as Types from "../../types";
import * as Styled from "./Directions.styles";

export default function Directions({
  playerID,
  isActive,
  ctx,
  currentPlayerName,
  G,
}) {
  const { message } = useBoardState();

  const player = G.players[playerID];
  const canDraw = player.commands[G.currentCommandKey] !== null;

  let directions = "Waiting...";
  if (isActive) {
    if (ctx.phase === EXECUTION) {
      directions = message;
    } else if (ctx.phase === PLANNING) {
      directions = canDraw ? "Draw a card to finish turn." : "Select a card.";
    }
    return (
      <Styled.Message>
        <Styled.Your>Your</Styled.Your> turn! {directions}
      </Styled.Message>
    );
  } else if (currentPlayerName) {
    return (
      <Styled.Message>
        {"Waiting on "}
        <Styled.PlayerName>{currentPlayerName}</Styled.PlayerName>...
      </Styled.Message>
    );
  }
}

Directions.propTypes = {
  playerID: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  ctx: Types.ctx.isRequired,
  G: Types.G.isRequired,
  currentPlayerName: PropTypes.string.isRequired,
};
