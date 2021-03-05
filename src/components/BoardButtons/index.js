import { resetAction, selectAction } from "../../state/board/actions";

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
} from "../../constants";
import { useDispatch, useBoardState } from "../../state/board/reducer";

import {
  Container,
  CancelButton,
  ConfirmButton,
  FightButton,
  BondButton,
} from "./BoardButton.styles";

export default function BoardButtons({ moves, currentCardAction }) {
  const dispatch = useDispatch();
  const {
    selectedCharacter,
    selectedRoom,
    chatCharacterOne,
    chatCharacterTwo,
    dropperCharacter,
    stagedAction,
    canConfirm,
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

  return (
    <Container>
      {stagedAction !== null && stagedAction !== CHAT ? (
        <>
          {canConfirm ? (
            <ConfirmButton onClick={handleConfirmClick}>Confirm</ConfirmButton>
          ) : null}
          <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
        </>
      ) : null}

      {stagedAction === CHAT ? (
        <>
          <FightButton onClick={handleFightClick}>Fight</FightButton>
          <BondButton onClick={handleBondClick}>Bond</BondButton>
        </>
      ) : null}
    </Container>
  );
}
