import * as React from "react";
import styled from "styled-components";
import reduce from "lodash/reduce";

import { isValidMoveOne, isValidMoveTwo } from "../../game/validations";

import {
  MOVE_ONE,
  MOVE_TWO,
  roomClickAction,
  characterClickAction,
} from "../Board/reducer";

export default function Room({ state, roomKey, G, dispatch }) {
  const { stagedAction, selectedRoom, selectedCharacter } = state;
  const { roomOrder, characters, rooms } = G;

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
        <Drops>
          {rooms[roomKey].drops.map((drop) => (
            <Drop key={drop.id}>
              <span>{drop.value}</span>
              <span>{characters[drop.character].name}</span>
            </Drop>
          ))}
        </Drops>
      ) : null}
      <span>{rooms[roomKey].name}</span>
      {roomsWithCharacters[roomKey]
        ? roomsWithCharacters[roomKey].map((character) => (
            <Character
              key={character}
              onClick={(e) => handleCharacterClick(e, character)}
              showBorder={
                (stagedAction === MOVE_ONE || stagedAction === MOVE_TWO) &&
                (selectedCharacter === null || selectedCharacter === character)
              }
              selected={selectedCharacter === character}
            >
              {characters[character].name}
            </Character>
          ))
        : null}
    </RoomContainer>
  );
}

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
