import styled from "styled-components";
import map from "lodash/map";

import FaceUpCard from "../FaceUpCard";

function Command({ command }) {
  return (
    <CommandContainer>
      {command ? <FaceUpCard card={command} /> : null}
    </CommandContainer>
  );
}

export default function ProgrammingLine({ commands }) {
  return (
    <ProgrammingLineContainer>
      {map(commands, (command, commandKey) => (
        <Command key={`command${commandKey}`} command={command} />
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
  border: 1px solid black;
  width: 5em;
  height: 7em;
`;
