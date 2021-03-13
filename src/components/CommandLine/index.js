import map from "lodash/map";

import {
  CommandContainer,
  CommandLineContainer,
  FaceDownCard,
} from "./CommandLine.styles";

import FaceUpCard from "../FaceUpCard";

function Command({ command, isHappening, isFaceUp }) {
  if (!isFaceUp && command) {
    return <FaceDownCard src="/card_back.png" isHappening={isHappening} />;
  }
  return (
    <CommandContainer
      isFaceDown={!isFaceUp && command}
      isHappening={isHappening}
    >
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
