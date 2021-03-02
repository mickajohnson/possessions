import styled from "styled-components";
import map from "lodash/map";

import { EXECUTION } from "../../constants";

import FaceUpCard from "../FaceUpCard";

function Command({ command, isHappening, isFaceUp }) {
  return (
    <CommandContainer
      isFaceDown={command && !isHappening}
      isHappening={isHappening}
    >
      {command && isFaceUp ? <FaceUpCard card={command} /> : null}
    </CommandContainer>
  );
}

export default function CommandLine({
  commands,
  phase,
  isActive,
  currentCommandKey,
  isFaceUp,
}) {
  return (
    <CommandLineContainer>
      {map(commands, (command, commandKey) => (
        <Command
          isHappening={
            phase === EXECUTION &&
            isActive &&
            Number(currentCommandKey) === Number(commandKey)
          }
          isFaceUp={isFaceUp}
          key={`command${commandKey}`}
          command={command}
        />
      ))}
    </CommandLineContainer>
  );
}

const CommandLineContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.brown};
`;

const CommandContainer = styled.div`
  border: ${({ isHappening }) => (isHappening ? "1px solid blue" : "none")};
  border-radius: 6px;

  height: 120px;
  background-color: ${({ theme, isFaceDown }) =>
    isFaceDown ? theme.colors.salmon : "white"};
`;
