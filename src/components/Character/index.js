import styled from "styled-components";

import { MOVE_ONE, MOVE_TWO, characterClickAction } from "../Board/reducer";

export default function Character({
  dispatch,
  characterKey,
  characters,
  state,
}) {
  const { stagedAction, selectedCharacter } = state;

  const handleCharacterClick = (e, character) => {
    e.stopPropagation();
    dispatch(characterClickAction(character));
  };

  const showBorder =
    (stagedAction === MOVE_ONE || stagedAction === MOVE_TWO) &&
    (selectedCharacter === null || selectedCharacter === characterKey);

  return (
    <CharacterContainer
      key={characterKey}
      onClick={(e) => handleCharacterClick(e, characterKey)}
      showBorder={showBorder}
      selected={selectedCharacter === characterKey}
    >
      {characters[characterKey].name}
    </CharacterContainer>
  );
}

const CharacterContainer = styled.div`
  border-style: solid;
  border-width: ${({ showBorder }) => (showBorder ? "1px" : "0px")};
  border-color: ${({ selected }) => (selected ? "green" : "blue")};
`;
