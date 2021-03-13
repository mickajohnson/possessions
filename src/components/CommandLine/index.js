import map from "lodash/map";

import { CommandContainer, CommandLineContainer } from "./CommandLine.styles";

import FaceUpCard from "../FaceUpCard";

function Command({ command, isHappening, isFaceUp }) {
  return (
    <CommandContainer isFaceDown={!isFaceUp} isHappening={isHappening}>
      {command && isFaceUp ? <FaceUpCard card={command} /> : null}
    </CommandContainer>
  );
}

export default function CommandLine({
  commands,
  isActivePlayer,
  currentCommandKey,
  isFaceUp,
}) {
  return (
    <CommandLineContainer>
      {map(commands, (command, commandKey) => (
        <Command
          isHappening={
            isActivePlayer && Number(currentCommandKey) === Number(commandKey)
          }
          isFaceUp={isFaceUp}
          key={`command${commandKey}`}
          command={command}
        />
      ))}
    </CommandLineContainer>
  );
}
