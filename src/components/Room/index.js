import * as React from "react";
import styled from "styled-components";
import reduce from "lodash/reduce";

import { isValidMoveOne, isValidMoveTwo } from "../../game/validations";

import { MOVE_ONE, MOVE_TWO, roomClickAction } from "../Board/reducer";
import Drops from "../Drops";
import Character from "../Character";

export default function Room({ state, roomKey, G, dispatch }) {
  const { stagedAction, selectedRoom, selectedCharacter } = state;
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
    (selectedRoom === null || selectedRoom === roomKey) &&
    isValidMoveOne({ roomOrder, characters }, selectedCharacter, roomKey);

  const isMoveTwoOption =
    stagedAction === MOVE_TWO &&
    selectedCharacter &&
    (selectedRoom === null || selectedRoom === roomKey) &&
    isValidMoveTwo({ roomOrder, characters }, selectedCharacter, roomKey);

  return (
    <RoomContainer
      option={isMoveOneOption || isMoveTwoOption}
      selected={selectedRoom === roomKey}
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
  border: 1px solid;
  border-color: ${({ selected, option }) =>
    selected ? "green" : option ? "blue" : "black"};
`;
