import styled from "styled-components";

import { CHAT_ACTIONS, NON_CHAT_ACTIONS, FIGHT } from "../../constants";
import { characterClickAction } from "../../state/board/actions";
import { isValidChat } from "../../game/validations";

export default function Character({ dispatch, characterKey, state, G }) {
  const {
    stagedAction,
    selectedCharacter,
    chatCharacterOne,
    chatCharacterTwo,
  } = state;
  const { characters } = G;

  const characterSelected = selectedCharacter === characterKey;
  const inCharacterSelectionPhase =
    NON_CHAT_ACTIONS.includes(stagedAction) && selectedCharacter === null;
  const inFirstChatSelectionPhase =
    CHAT_ACTIONS.includes(stagedAction) && chatCharacterOne === null;
  const inSecondChatSelectionPhase =
    CHAT_ACTIONS.includes(stagedAction) &&
    chatCharacterOne &&
    isValidChat(G, chatCharacterOne, characterKey);

  const isOption =
    characterSelected ||
    inCharacterSelectionPhase ||
    inFirstChatSelectionPhase ||
    inSecondChatSelectionPhase;

  const isSelected =
    selectedCharacter === characterKey ||
    chatCharacterOne === characterKey ||
    chatCharacterTwo === characterKey;

  let borderColor = "blue";

  if (selectedCharacter === characterKey && stagedAction === FIGHT) {
    borderColor = "red";
  } else if (isSelected) {
    borderColor = "green";
  }

  const handleCharacterClick = (e, character) => {
    if (isOption) {
      e.stopPropagation();
      dispatch(characterClickAction(character));
    }
  };

  return (
    <CharacterContainer
      key={characterKey}
      onClick={(e) => handleCharacterClick(e, characterKey)}
      isOption={isOption || isSelected}
      borderColor={borderColor}
    >
      {characters[characterKey].name}
    </CharacterContainer>
  );
}

const CharacterContainer = styled.div`
  border-style: solid;
  cursor: ${({ isOption }) => (isOption ? "pointer" : "default")};

  border-width: ${({ isOption }) => (isOption ? "1px" : "0px")};
  border-color: ${({ borderColor }) => borderColor};
`;
