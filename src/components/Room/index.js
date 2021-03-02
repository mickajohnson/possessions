import * as React from "react";
import styled from "styled-components";
import reduce from "lodash/reduce";

import { isValidMoveOne, isValidMoveTwo } from "../../game/validations";
import { MOVE_ONE, MOVE_TWO, FIGHT } from "../../constants";
import { roomClickAction } from "../../state/board/actions";
import { useDispatch, useBoardState } from "../../state/board/reducer";
import Drops from "../Drops";
import Character from "../Character";

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
    >
      <Drops
        dispatch={dispatch}
        drops={rooms[roomKey].drops}
        G={G}
        roomKey={roomKey}
        isActive={isActive}
      />

      <RoomName>{rooms[roomKey].name}</RoomName>
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
    </RoomContainer>
  );
}

const RoomName = styled.p`
  color: ${({ theme }) => theme.colors.redOrange};
`;

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 150px;
  cursor: ${({ isOption }) => (isOption ? "pointer" : "default")};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : null};
  background-color: ${({ theme }) => theme.colors.grey};
`;
