import map from "lodash/map";
import { EXECUTION } from "../../constants";

import * as Styled from "./Commands.styles";
import * as Types from "../../types";
import CommandLine from "../CommandLine";
import PropTypes from "prop-types";

export default function Commands({ G, playerID, ctx }) {
  return (
    <Styled.Container>
      {map(G.players, (player, playerKey) => (
        <Styled.CommandLineContainer key={playerKey}>
          <Styled.PlayerName
            isActive={Number(ctx.currentPlayer) === Number(playerKey)}
          >
            {player.name}
            {playerKey === playerID ? " (You!)" : ""}
          </Styled.PlayerName>
          <CommandLine
            commands={player.commands}
            isActivePlayer={Number(ctx.currentPlayer) === Number(playerKey)}
            currentCommandKey={G.currentCommandKey}
            isFaceUp={ctx.phase === EXECUTION || playerID === playerKey}
          />
        </Styled.CommandLineContainer>
      ))}
    </Styled.Container>
  );
}

Commands.propTypes = {
  playerID: PropTypes.string.isRequired,
  ctx: Types.ctx.isRequired,
  G: Types.G.isRequired,
};
