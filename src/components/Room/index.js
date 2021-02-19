import * as React from "react";
import styled from "styled-components";
import reduce from "lodash/reduce";

import { isValidMoveOne, isValidMoveTwo } from "../../game/validations";

import { MOVE_ONE, MOVE_TWO, FIGHT, roomClickAction } from "../Board/reducer";
import Drops from "../Drops";
import Character from "../Character";

export default function Room({ state, roomKey, G, dispatch }) {
  const {
    stagedAction,
    selectedRoom,
    selectedCharacter,
    chatCharacterOne,
    chatCharacterTwo,
  } = state;
  const { roomOrder, characters, rooms } = G;

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

  const isMoveOneOption =
    stagedAction === MOVE_ONE &&
    selectedCharacter &&
    selectedRoom === null &&
    isValidMoveOne({ roomOrder, characters }, selectedCharacter, roomKey);

  const isFightAfterOption =
    stagedAction === FIGHT &&
    selectedCharacter &&
    chatCharacterOne &&
    chatCharacterTwo &&
    selectedRoom === null &&
    isValidMoveOne({ roomOrder, characters }, selectedCharacter, roomKey);

  if (isFightAfterOption) {
    console.log(
      isValidMoveOne({ roomOrder, characters }, selectedCharacter, roomKey),
      roomKey
    );
  }

  const isMoveTwoOption =
    stagedAction === MOVE_TWO &&
    selectedCharacter &&
    selectedRoom === null &&
    isValidMoveTwo({ roomOrder, characters }, selectedCharacter, roomKey);

  let borderColor = "black";

  if (selectedRoom === roomKey) {
    borderColor = "green";
  } else if (isMoveOneOption || isMoveTwoOption || isFightAfterOption) {
    borderColor = "blue";
  }
  return (
    <RoomContainer
      borderColor={borderColor}
      onClick={() => dispatch(roomClickAction(roomKey))}
    >
      {rooms[roomKey].drops.length ? (
        <Drops drops={rooms[roomKey].drops} characters={characters} />
      ) : null}
      <span>{rooms[roomKey].name}</span>
      {roomsWithCharacters[roomKey]
        ? roomsWithCharacters[roomKey].map((characterKey) => (
            <Character
              key={characterKey}
              characterKey={characterKey}
              dispatch={dispatch}
              state={state}
              characters={characters}
              G={G}
            />
          ))
        : null}
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 200px;
  border-style: solid;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
`;
