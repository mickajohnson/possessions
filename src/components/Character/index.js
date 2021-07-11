import {
  CHAT_ACTIONS,
  FIGHT,
  REACT,
  characterImages,
  SELECT_CHARACTER,
  NON_RESTRICTED_ACTIONS,
} from "../../constants";
import { characterClickAction } from "../../state/board/actions";
import { useDispatch, useBoardState } from "../../state/board/reducer";
import theme from "../../theme";
import PropTypes from "prop-types";
import * as Types from "../../types";

import {
  isChatEligible,
  isValidChat,
  isReactEligible,
} from "../../game/helpers";

import * as Styled from "./Character.styles";

export default function Character({ characterKey, G, isActive }) {
  const dispatch = useDispatch();
  const {
    stagedAction,
    selectedCharacter,
    chatCharacterOne,
    chatCharacterTwo,
    phase,
  } = useBoardState();

  console.log(phase);

  const characterSelected = selectedCharacter === characterKey;
  const inCharacterSelectionPhase =
    NON_RESTRICTED_ACTIONS.includes(stagedAction) && phase === SELECT_CHARACTER;
  const reactEligible =
    stagedAction === REACT &&
    isReactEligible(G, characterKey) &&
    phase === SELECT_CHARACTER;

  const inFirstChatSelectionPhase =
    CHAT_ACTIONS.includes(stagedAction) &&
    chatCharacterOne === null &&
    isChatEligible(G.characters, characterKey);

  const inSecondChatSelectionPhase =
    CHAT_ACTIONS.includes(stagedAction) &&
    chatCharacterOne &&
    isValidChat(G, chatCharacterOne, characterKey);

  const inFightMoverSelectionPhase =
    stagedAction === FIGHT &&
    chatCharacterOne &&
    chatCharacterTwo &&
    [chatCharacterTwo, chatCharacterOne].includes(characterKey);

  const isOption =
    isActive &&
    (characterSelected ||
      inCharacterSelectionPhase ||
      inFirstChatSelectionPhase ||
      inSecondChatSelectionPhase ||
      inFightMoverSelectionPhase ||
      reactEligible);

  const isSelected =
    selectedCharacter === characterKey ||
    chatCharacterOne === characterKey ||
    chatCharacterTwo === characterKey;

  let backgroundColor = theme.colors.redOrange;

  if (selectedCharacter === characterKey && stagedAction === FIGHT) {
    backgroundColor = theme.colors.purple;
  } else if (isSelected) {
    backgroundColor = theme.colors.green;
  } else if (isOption) {
    backgroundColor = theme.colors.white;
  }

  const handleCharacterClick = (e, character) => {
    if (isOption) {
      e.stopPropagation();
      dispatch(characterClickAction(character));
    }
  };

  return (
    <Styled.CharacterContainer
      key={characterKey}
      onClick={(e) => handleCharacterClick(e, characterKey)}
      isOption={isOption || isSelected}
      backgroundColor={backgroundColor}
    >
      <Styled.CharacterImage src={characterImages[characterKey]} />
    </Styled.CharacterContainer>
  );
}
Character.propTypes = {
  isActive: PropTypes.bool.isRequired,
  characterKey: PropTypes.string.isRequired,
  G: Types.G.isRequired,
};
