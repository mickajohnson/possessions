import map from "lodash/map";
import styled from "styled-components";
import { EXECUTION } from "../../constants";

import CommandLine from "../CommandLine";

export default function OtherPlayerCommands({ G, playerID, ctx }) {
  return (
    <Container>
      {map(G.players, (player, playerKey) => (
        <CommandLineContainer key={playerKey}>
          <PlayerName
            isActive={Number(ctx.currentPlayer) === Number(playerKey)}
          >
            {player.name}
            {playerKey === playerID ? " (You)" : ""}
          </PlayerName>
          <CommandLine
            commands={player.commands}
            isActivePlayer={Number(ctx.currentPlayer) === Number(playerKey)}
            currentCommandKey={G.currentCommandKey}
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
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  height: 100%;
  padding-bottom: 2em;
`;

const PlayerName = styled.p`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.redOrange : theme.colors.blue};
`;

const CommandLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
