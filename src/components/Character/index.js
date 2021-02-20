import styled from "styled-components";

import {
  characterClickAction,
  CHAT_ACTIONS,
  NON_CHAT_ACTIONS,
  FIGHT,
} from "../Board/reducer";
import { isValidChat } from "../../game/validations";

export default function Character({ dispatch, characterKey, state, G }) {
  const {
    stagedAction,
    selectedCharacter,
    chatCharacterOne,
    chatCharacterTwo,
  } = state;
  const { characters } = G;

  const handleCharacterClick = (e, character) => {
    e.stopPropagation();
    dispatch(characterClickAction(character));
  };

  const characterSelected = selectedCharacter === characterKey;
  const inCharacterSelectionPhase =
    NON_CHAT_ACTIONS.includes(stagedAction) && selectedCharacter === null;
  const inFirstChatSelectionPhase =
    CHAT_ACTIONS.includes(stagedAction) && chatCharacterOne === null;
  const inSecondChatSelectionPhase =
    CHAT_ACTIONS.includes(stagedAction) &&
    chatCharacterOne &&
    isValidChat(G, chatCharacterOne, characterKey);

  const showBorder =
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
  return (
    <CharacterContainer
      key={characterKey}
      onClick={(e) => handleCharacterClick(e, characterKey)}
      showBorder={showBorder || isSelected}
      borderColor={borderColor}
    >
      {characters[characterKey].name}
    </CharacterContainer>
  );
}

const CharacterContainer = styled.div`
  border-style: solid;
  border-width: ${({ showBorder }) => (showBorder ? "1px" : "0px")};
  border-color: ${({ borderColor }) => borderColor};
`;
