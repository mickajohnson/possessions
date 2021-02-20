import {
  moveOneClickAction,
  moveTwoClickAction,
  dropPosOneClickAction,
  dropPosTwoClickAction,
  dropNegOneClickAction,
  dropNegTwoClickAction,
  reactClickAction,
  fightClickAction,
  bondClickAction,
  resetAction,
} from "../../state/board/actions";

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
} from "../../constants";
import { useDispatch, useBoardState } from "../../state/board/reducer";

export default function BoardButtons({ moves, G }) {
  const dispatch = useDispatch();
  const {
    selectedCharacter,
    selectedRoom,
    chatCharacterOne,
    chatCharacterTwo,
    dropperCharacter,
    stagedAction,
    message,
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

  return (
    <>
      <button onClick={() => dispatch(moveOneClickAction)}>Move 1</button>
      <button onClick={() => dispatch(moveTwoClickAction)}>Move 2</button>
      <button onClick={() => dispatch(dropPosOneClickAction)}>Drop 1</button>
      <button onClick={() => dispatch(dropPosTwoClickAction)}>Drop 2</button>
      <button onClick={() => dispatch(dropNegOneClickAction)}>Drop -1</button>
      <button onClick={() => dispatch(dropNegTwoClickAction)}>Drop -2</button>
      <button onClick={() => dispatch(bondClickAction)}>Bond</button>
      <button onClick={() => dispatch(fightClickAction)}>Fight</button>
      <button onClick={() => dispatch(reactClickAction)}>React</button>
      {stagedAction !== null ? (
        <button onClick={() => dispatch(resetAction)}>Cancel</button>
      ) : null}
      {stagedAction !== null ? (
        <button onClick={handleConfirmClick}>Confirm</button>
      ) : null}
      <p>{message}</p>
    </>
  );
}
