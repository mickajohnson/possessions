import { resetAction, selectAction } from "../../state/board/actions";
import PropTypes from "prop-types";

import {
  DROP_POS_ONE,
  DROP_POS_TWO,
  DROP_NEG_ONE,
  DROP_NEG_TWO,
  FIGHT,
  BOND,
  REACT,
  MOVE_ONE,
  MOVE_TWO,
  CHAT,
  CONFIRMATION,
  SELECT_CHARACTER,
  CHAT_ACTIONS,
  SELECT_FIGHT_OR_BOND,
} from "../../constants";
import { useDispatch, useBoardState } from "../../state/board/reducer";
import * as Types from "../../types";

import * as Styled from "./BoardButton.styles";

export default function BoardButtons({ moves, currentCardAction }) {
  const dispatch = useDispatch();
  const {
    selectedCharacter,
    selectedRoom,
    chatCharacterOne,
    chatCharacterTwo,
    dropperCharacter,
    stagedAction,
    phase,
  } = useBoardState();

  const handleConfirmClick = () => {
    switch (stagedAction) {
      case MOVE_ONE:
        moves.moveOne(selectedCharacter, selectedRoom);
        break;
      case MOVE_TWO:
        moves.moveTwo(selectedCharacter, selectedRoom);
        break;
      case DROP_POS_ONE:
        moves.dropPositiveOne(selectedCharacter);
        break;
      case DROP_POS_TWO:
        moves.dropPositiveTwo(selectedCharacter);
        break;
      case DROP_NEG_ONE:
        moves.dropNegativeOne(selectedCharacter);
        break;
      case DROP_NEG_TWO:
        moves.dropNegativeTwo(selectedCharacter);
        break;
      case BOND:
        moves.bond(chatCharacterOne, chatCharacterTwo);
        break;
      case REACT:
        moves.react(selectedCharacter, dropperCharacter);
        break;
      case FIGHT:
        moves.fight(
          chatCharacterOne,
          chatCharacterTwo,
          selectedCharacter,
          selectedRoom
        );
        break;
      default:
        break;
    }

    dispatch(resetAction);
  };

  const handleCancelClick = () => {
    dispatch(selectAction(currentCardAction));
  };

  const handleFightClick = () => {
    dispatch(selectAction(FIGHT));
  };

  const handleBondClick = () => {
    dispatch(selectAction(BOND));
  };

  const initialPhase = CHAT_ACTIONS.includes(stagedAction)
    ? SELECT_FIGHT_OR_BOND
    : SELECT_CHARACTER;

  return (
    <Styled.Container>
      {stagedAction !== null && stagedAction !== CHAT ? (
        <>
          {phase === CONFIRMATION ? (
            <Styled.ConfirmButton onClick={handleConfirmClick}>
              Confirm
            </Styled.ConfirmButton>
          ) : null}
          {phase !== initialPhase && (
            <Styled.CancelButton onClick={handleCancelClick}>
              Cancel
            </Styled.CancelButton>
          )}
        </>
      ) : null}

      {stagedAction === CHAT ? (
        <>
          <Styled.FightButton onClick={handleFightClick}>
            Fight
          </Styled.FightButton>
          <Styled.BondButton onClick={handleBondClick}>Bond</Styled.BondButton>
        </>
      ) : null}
    </Styled.Container>
  );
}

BoardButtons.propTypes = {
  moves: Types.moves.isRequired,
  currentCardAction: PropTypes.string.isRequired,
};
