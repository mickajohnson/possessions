import { useBoardState } from "../../state/board/reducer";
import { EXECUTION, PLANNING } from "../../constants";

import { Message } from "./Directions.styles.js";

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
      directions = canDraw ? "Draw a card to finish turn" : "Select a card";
    }
  } else if (currentPlayerName) {
    directions = `Waiting on ${currentPlayerName}...`;
  }

  return <Message>{directions}</Message>;
}
