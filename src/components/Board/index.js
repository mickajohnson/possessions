import * as React from "react";
import styled from "styled-components";
import map from "lodash/map";

import {
  reducer,
  moveOneClickAction,
  moveTwoClickAction,
  MOVE_ONE,
  MOVE_TWO,
  resetAction,
  initialState,
} from "./reducer";
import Room from "../Room";

export default function NightStandStuffBoard({ G, moves }) {
  const { roomOrder, relationships } = G;
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { stagedAction, selectedRoom, selectedCharacter, message } = state;

  const handleConfirmClick = () => {
    // if (canConfirm(state)) {
    // stagedAction === MOVE_ONE && selectedRoom && selectedCharacter
    if (stagedAction === MOVE_ONE) {
      moves.moveOne(selectedCharacter, selectedRoom);
    } else if (stagedAction === MOVE_TWO) {
      moves.moveTwo(selectedCharacter, selectedRoom);
    }
    dispatch(resetAction);
    // }
  };

  return (
    <Container>
      <House>
        {roomOrder.map((roomKey) => (
          <Room
            key={roomKey}
            state={state}
            roomKey={roomKey}
            G={G}
            dispatch={dispatch}
          />
        ))}
      </House>
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

const House = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
`;

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
