import * as React from "react";
import styled from "styled-components";
import map from "lodash/map";

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
import { reducer, initialState } from "../../state/board/reducer";
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
import House from "../House";

export default function NightStandStuffBoard({ G, moves }) {
  const { relationships } = G;
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const {
    stagedAction,
    selectedRoom,
    selectedCharacter,
    message,
    chatCharacterOne,
    chatCharacterTwo,
    dropperCharacter,
  } = state;

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
    <Container>
      <House G={G} dispatch={dispatch} state={state} />
      <Relationships>
        {map(relationships, (relationshipData, relationshipKey) => (
          <RelationshipWrapper key={relationshipKey}>
            <span>{relationshipData.name}</span>
            <span>{relationshipData.score}</span>
          </RelationshipWrapper>
        ))}
      </Relationships>
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
    </Container>
  );
}

const Container = styled.div``;

const Relationships = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  column-gap: 10px;
  row-gap: 5px;
`;

const RelationshipWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
