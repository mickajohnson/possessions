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
    <Container>
      {map(G.players, (player, playerKey) => (
        <CommandLineContainer key={playerKey}>
          <h3>{playerMetaData[playerKey].name}</h3>
          <CommandLine
            commands={player.commands}
            isActive={Number(ctx.currentPlayer) === Number(playerKey)}
            currentCommandKey={G.currentCommandKey}
            phase={ctx.phase}
            isFaceUp={ctx.phase === EXECUTION || playerID === playerKey}
          />
        </CommandLineContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  grid-area: commandLines;
  padding-right: 10px;
`;

const CommandLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
