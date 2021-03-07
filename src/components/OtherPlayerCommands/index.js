import map from "lodash/map";
import styled from "styled-components";
import { EXECUTION, PLANNING } from "../../constants";

import CommandLine from "../CommandLine";
import { useBoardState } from "../../state/board/reducer";

export default function OtherPlayerCommands({
  G,
  playerID,
  ctx,
  currentPlayerName,
  isActive,
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

  return (
    <Container>
      <CommandsContainer>
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
              isActive={Number(ctx.currentPlayer) === Number(playerKey)}
              currentCommandKey={G.currentCommandKey}
              phase={ctx.phase}
              isFaceUp={ctx.phase === EXECUTION || playerID === playerKey}
            />
          </CommandLineContainer>
        ))}
      </CommandsContainer>
      <Message>{directions}</Message>
    </Container>
  );
}

const CommandsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  height: 100%;
`;

const Container = styled.div`
  grid-area: commandLines;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Message = styled.p``;

const PlayerName = styled.p`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.redOrange : theme.colors.blue};
`;

const CommandLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
