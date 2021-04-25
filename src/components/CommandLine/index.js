import map from "lodash/map";
import PropTypes from "prop-types";
import * as Types from "../../types";
import * as Styled from "./CommandLine.styles";

import FaceUpCard from "../FaceUpCard";

function Command({ command, isHappening, isFaceUp }) {
  if (!isFaceUp && command) {
    return (
      <Styled.FaceDownCard src="/card_back.png" isHappening={isHappening} />
    );
  }
  return (
    <Styled.CommandContainer
      isFaceDown={!isFaceUp && command}
      isHappening={isHappening}
    >
      {command && isFaceUp ? <FaceUpCard card={command} /> : null}
    </Styled.CommandContainer>
  );
}

Command.propTypes = {
  isFaceUp: PropTypes.bool.isRequired,
  isHappening: PropTypes.bool.isRequired,
  command: Types.card,
};

export default function CommandLine({
  commands,
  isActivePlayer,
  currentCommandKey,
  isFaceUp,
}) {
  return (
    <Styled.CommandLineContainer>
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
    </Styled.CommandLineContainer>
  );
}

CommandLine.propTypes = {
  commands: PropTypes.objectOf(Types.card).isRequired,
  isActivePlayer: PropTypes.bool.isRequired,
  currentCommandKey: PropTypes.number.isRequired,
  isFaceUp: PropTypes.bool.isRequired,
};
