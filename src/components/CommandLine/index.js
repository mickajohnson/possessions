import styled from "styled-components";
import map from "lodash/map";

import { EXECUTION } from "../../constants";

import FaceUpCard from "../FaceUpCard";
import FaceDownCard from "../FaceDownCard";

function Command({ command, isHappening, isFaceUp }) {
  const borderColor = isHappening ? "blue" : "black";
  const Card = isFaceUp ? FaceUpCard : FaceDownCard;

  return (
    <CommandContainer borderColor={borderColor}>
      {command ? <Card card={command} /> : null}
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
  display: flex;
  justify-content: space-around;
  width: 400px;
`;

const CommandContainer = styled.div`
  padding: 5px;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  width: 5em;
  height: 7em;
`;
