import map from "lodash/map";
import styled from "styled-components";
import { EXECUTION } from "../../constants";

import CommandLine from "../CommandLine";

export default function OtherPlayerCommands({
  G,
  playerID,
  ctx,
  playerMetaData,
}) {
  return (
    <div>
      {map(G.players, (player, playerKey) =>
        playerKey === playerID ? null : (
          <CommandLineContainer key={playerKey}>
            <h3>{playerMetaData[playerKey].name}</h3>
            <CommandLine
              commands={player.commands}
              isActive={Number(ctx.currentPlayer) === Number(playerKey)}
              currentCommandKey={G.currentCommandKey}
              phase={ctx.phase}
              isFaceUp={ctx.phase === EXECUTION}
            />
          </CommandLineContainer>
        )
      )}
    </div>
  );
}

const CommandLineContainer = styled.div`
  border: 1px solid black;
  width: 60%;
  margin-bottom: 10px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
