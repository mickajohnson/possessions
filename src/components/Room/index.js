import * as React from "react";
import reduce from "lodash/reduce";

import { isValidMoveOne, isValidMoveTwo } from "../../game/validations";
import { MOVE_ONE, MOVE_TWO, FIGHT } from "../../constants";
import { roomClickAction } from "../../state/board/actions";
import { useDispatch, useBoardState } from "../../state/board/reducer";
import Drops from "../Drops";
import Character from "../Character";

import { RoomName, RoomContainer, CharactersContainer } from "./Room.styles";

export default function Room({ roomKey, G, isActive }) {
  const dispatch = useDispatch();

  const {
    stagedAction,
    selectedRoom,
    selectedCharacter,
    chatCharacterOne,
    chatCharacterTwo,
  } = useBoardState();

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

  const isMoveTwoOption =
    stagedAction === MOVE_TWO &&
    selectedCharacter &&
    selectedRoom === null &&
    isValidMoveTwo({ roomOrder, characters }, selectedCharacter, roomKey);

  const isOption =
    isActive && (isMoveOneOption || isMoveTwoOption || isFightAfterOption);

  let borderColor = null;

  if (selectedRoom === roomKey) {
    borderColor = "green";
  } else if (isOption) {
    borderColor = "blue";
  }

  const handleRoomClick = () => {
    if (isOption) {
      dispatch(roomClickAction(roomKey));
    }
  };

  return (
    <RoomContainer
      isOption={isOption}
      borderColor={borderColor}
      onClick={handleRoomClick}
      roomKey={roomKey}
    >
      <RoomName roomKey={roomKey}>{rooms[roomKey].name}</RoomName>
      <CharactersContainer>
        {roomsWithCharacters[roomKey]
          ? roomsWithCharacters[roomKey].map((characterKey) => (
              <Character
                key={characterKey}
                characterKey={characterKey}
                dispatch={dispatch}
                G={G}
                isActive={isActive}
              />
            ))
          : null}
      </CharactersContainer>
      <Drops
        dispatch={dispatch}
        drops={rooms[roomKey].drops}
        G={G}
        roomKey={roomKey}
        isActive={isActive}
      />
    </RoomContainer>
  );
}
