import * as React from "react";
import styled from "styled-components";
import reduce from "lodash/reduce";
import map from "lodash/map";

import { isValidMoveOne, isValidMoveTwo } from "../../game/validations";
import {
  reducer,
  moveOneClickAction,
  moveTwoClickAction,
  MOVE_ONE,
  MOVE_TWO,
  characterClickAction,
  roomClickAction,
  resetAction,
  initialState,
} from "./reducer";

export default function NightStandStuffBoard({
  G: { rooms, characters, roomOrder, relationships },
  moves,
}) {
  const [
    { message, stagedAction, selectedCharacter, selectedRoom },
    dispatch,
  ] = React.useReducer(reducer, initialState);

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

  const handleCharacterClick = (e, character) => {
    e.stopPropagation();
    dispatch(characterClickAction(character));
  };

  const roomsWithCharacters = React.useMemo(
    () =>
      reduce(
        characters,
        (roomData, characterData, character) => {
          (
            roomData[characterData.location] ||
            (roomData[characterData.location] = [])
          ).push(character);

          return roomData;
        },
        {}
      ),
    [characters]
  );

  return (
    <Container>
      <House>
        {roomOrder.map((room) => (
          <Room
            key={room}
            option={
              (stagedAction === MOVE_ONE &&
                selectedCharacter &&
                (selectedRoom === null || selectedRoom === room) &&
                isValidMoveOne(
                  { roomOrder, characters },
                  selectedCharacter,
                  room
                )) ||
              (stagedAction === MOVE_TWO &&
                selectedCharacter &&
                (selectedRoom === null || selectedRoom === room) &&
                isValidMoveTwo(
                  { roomOrder, characters },
                  selectedCharacter,
                  room
                ))
            }
            selected={selectedRoom === room}
            onClick={() => dispatch(roomClickAction(room))}
          >
            {rooms[room].drops.length ? (
              <Drops>
                {rooms[room].drops.map((drop) => (
                  <Drop key={drop.id}>
                    <span>{drop.value}</span>
                    <span>{characters[drop.character].name}</span>
                  </Drop>
                ))}
              </Drops>
            ) : null}
            <span>{rooms[room].name}</span>
            {roomsWithCharacters[room]
              ? roomsWithCharacters[room].map((character) => (
                  <Character
                    key={character}
                    onClick={(e) => handleCharacterClick(e, character)}
                    showBorder={
                      (stagedAction === MOVE_ONE ||
                        stagedAction === MOVE_TWO) &&
                      (selectedCharacter === null ||
                        selectedCharacter === character)
                    }
                    selected={selectedCharacter === character}
                  >
                    {characters[character].name}
                  </Character>
                ))
              : null}
          </Room>
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

const Room = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 200px;
  border: 1px solid;
  border-color: ${({ selected, option }) =>
    selected ? "green" : option ? "blue" : "black"};
`;

const Drops = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Drop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const Character = styled.div`
  border-style: solid;
  border-width: ${({ showBorder }) => (showBorder ? "1px" : "0px")};
  border-color: ${({ selected }) => (selected ? "green" : "blue")};
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
