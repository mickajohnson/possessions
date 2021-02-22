import styled from "styled-components";
import map from "lodash/map";

import { EXECUTION } from "../../constants";

import FaceUpCard from "../FaceUpCard";

function Command({ command, isHappening }) {
  const borderColor = isHappening ? "blue" : "black";
  return (
    <CommandContainer borderColor={borderColor}>
      {command ? <FaceUpCard card={command} /> : null}
    </CommandContainer>
  );
}

export default function ProgrammingLine({
  commands,
  phase,
  isActive,
  currentCommandKey,
}) {
  return (
    <ProgrammingLineContainer>
      {map(commands, (command, commandKey) => (
        <Command
          isHappening={
            phase === EXECUTION &&
            isActive &&
            Number(currentCommandKey) === Number(commandKey)
          }
          key={`command${commandKey}`}
          command={command}
        />
      ))}
    </ProgrammingLineContainer>
  );
}

const ProgrammingLineContainer = styled.div`
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
